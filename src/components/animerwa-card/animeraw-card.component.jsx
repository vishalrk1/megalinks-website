import React from "react";

const AnimeRawCard = ({ pack }) => {
    return (
        <div className="pack-card">
            <div class="card">
                <div class="card-header">
                    {pack.title}
                </div>
                <div class="card-body">
                    <p class="card-text">{pack.description}</p>
                    <a type="button" class="btn btn-dark" href={pack.link} target="_blank" rel="noreferrer">GET RAW CLIPS</a>
                </div>
            </div>
        </div>
    );
};

export default AnimeRawCard; 
