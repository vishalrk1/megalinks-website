import React from "react";
import { useSelector } from "react-redux";

import './category-overview.styles.scss';
import { selectAllcatData } from "../../redux/explore-page-data/explore.selector";
import CategoryTypePage from "../category-type-page/category-type-page.component";

const CategoryOverviewPage = ({ match }) =>{
    const packdata = useSelector(selectAllcatData)
    const urlItems = match.url.split('/');
    const catType = `${urlItems[urlItems.length-1]}Data`;

    return (
        <div className="category-overview">
            <div className="container-fluid">
                <div className="row">
                    {
                        packdata[catType].map((pack) => (
                            <div key={pack.id} className="col-sm">
                                <CategoryTypePage pack={pack} catType={catType}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

// const mapStateToProps = state => ({
//     packData: selectAllcatData(state)
// });

export default CategoryOverviewPage;
