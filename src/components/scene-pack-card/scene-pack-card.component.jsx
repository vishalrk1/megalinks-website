import React from "react";
import './scene-pack-card.styles.scss'

const ScenePackCard = ({pack}) => {
    return (
        <div className="pack-card">
            <div key={pack.id} class="card">
                <img src={pack.image} class="card-img-top" alt="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" />
                <div class="card-body">
                    <h4 class="card-title">{pack.title}</h4>
                    <div className="row">
                        <div className="col">
                            <p class="card-text">Credits: {pack.credit}</p>
                        </div>
                        <div className="col">
                        <a type="button" class="btn btn-dark" href={pack.link} target="_blank" rel="noreferrer">GET SCENE PACK</a>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScenePackCard;