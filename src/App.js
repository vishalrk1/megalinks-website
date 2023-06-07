import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ExplorePage from './pages/explore/explore.component';
import { firestore, convertCollectionsSnapshotToMap } from './firebase/firebase.utils';
import { updateCategories } from './redux/category-items/category-items.actions';
import Footer from './components/footer/footer.component';

class App extends React.Component {


  componentDidMount(){
    const { updateCategories } = this.props;
    const collectionRef = firestore.collection('categoryId');

    collectionRef.onSnapshot(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCategories(collectionMap);
      this.setState({ loading: false})
    });

  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <HomePageImage /> */}
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route path='/explore' component={ExplorePage}/>          
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  updateCategories: collectionMap => dispatch(updateCategories(collectionMap))
});

export default connect(null, mapDispatchToProps)(App);
