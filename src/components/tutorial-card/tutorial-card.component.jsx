import React from "react";
import './tutorial-card.styles.scss'

const TutorialCard = ({pack}) => {
    const linkComp = pack.link.split('/');
    const videoId = linkComp[linkComp.length-1];
    return (
        <div className="pack-card">
            <div key={pack.id} class="card">
                <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} class="card-img-top" alt="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" />
                <div class="card-body">
                    <h4 class="card-title">{pack.title}</h4>
                    <a type="button" class="btn btn-dark" rel="noreferrer"  href={pack.link} target="_blank">WATCH TUTORIAL</a>
                </div>
            </div>
        </div>
    );
};

export default TutorialCard;