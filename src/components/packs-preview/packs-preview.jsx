import React from "react";
import './preview-collection.styles.scss'

import PreviewCard from "../preview-card/preview-card";

const PacksPreview = ({pack}) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                <PreviewCard pack={pack}/>
            </div>
        </div>
    )
}

export default PacksPreview;