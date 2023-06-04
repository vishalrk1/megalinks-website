import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import './packs-preview-page.styles.scss';
import { selectAllcatData } from "../../redux/explore-page-data/explore.selector";
import PreviewCard from "../../components/preview-card/preview-card";

const CategoryPage = ({ categories }) => {
    const packdata = useSelector(selectAllcatData)
    console.log(categories);
    return (
        <div className="category-page">
            {
                categories.filter(element => (element !== 'presetPacks')).map((title) => (
                    <div className="collection-preview">
                        <a class="nav-link" >
                            <h1>
                                <Link className='title' to={`/explore/${title}`}>{title.toUpperCase()}</Link>
                            </h1>
                        </a>
                        <div className="preview">
                            {
                                packdata[`${title}Data`].slice(0, 3).map((pack) => (
                                    <PreviewCard catTitle={title} pack={pack}/>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


export default CategoryPage;
