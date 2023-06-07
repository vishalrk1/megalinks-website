import React from "react";

const ProjectFileCard = ({pack}) => {
    return (
        <div className="pack-card">
            <div class="card text-start">
                <div class="card-body mr-2">
                    <h5 class="card-title">{pack.title}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a type="button" class="btn btn-dark mr-2" href={pack.editlink} target="_blank" rel="noreferrer">EDIT</a>
                        <a type="button" class="btn btn-dark ml-2" href={pack.pflink} target="_blank" rel="noreferrer">GET PROJECT FILE</a>
                    </div>
                </div>
                <div class="card-header">
                    {`Credit: ${pack.credit}`}
                </div>
            </div>
        </div>
    );
};

export default ProjectFileCard;

