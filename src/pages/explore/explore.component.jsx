import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import './explore.styles.scss';

import CategoryPage from "../packs-preview-page/packs-preview-page.component";
import CategoryOverviewPage from "../category-overview/category-overview.component";
import { selectAllCatogries } from "../../redux/category-items/category-items.selector";
import { getAllCategoryData } from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateAllRespectiveCategoryData } from "../../redux/explore-page-data/explore.actions";

const CategoryPageWithSpinner = WithSpinner(CategoryPage);
const CategoryOverviewPageWithSpinner = WithSpinner(CategoryOverviewPage);

class ExplorePage extends React.Component {
    state = {
        loading: true,
    }

    async componentDidMount(){
        const {categories, updateAllRespectiveCategoryData} = this.props;
        const collectionIds = categories.map(({routName}) => routName);

        const allPacksData = await getAllCategoryData(collectionIds);
        updateAllRespectiveCategoryData(allPacksData);

        this.setState({ loading: false });
    }

    render (){
        const { categories, match } = this.props;
        const { loading } = this.state;

        return (
            <div className="explore">
                <Route exact path={`${match.path}`} render={(props) => <CategoryPageWithSpinner categories={categories.map(({routName}) => routName)} isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CategoryOverviewPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        );
    };
};

const mapStateToProp = state => ({
    categories: selectAllCatogries(state)
});

const mapDispatchToProps = (dispatch) =>({
    updateAllRespectiveCategoryData: allPacksData => dispatch(updateAllRespectiveCategoryData(allPacksData))
});

export default connect(mapStateToProp, mapDispatchToProps)(ExplorePage);



