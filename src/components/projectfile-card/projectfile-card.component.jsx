import React from "react";

const ProjectFileCard = ({pack}) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{pack.title}</h5>
                <a type="button" class="btn btn-dark" href={pack.editlink} target="_blank" rel="noreferrer">EDIT</a>
                <a type="button" class="btn btn-dark" href={pack.pdlink} target="_blank" rel="noreferrer">GET PROJECT FILE</a>
            </div>
        </div>
    );
};

export default ProjectFileCard;

