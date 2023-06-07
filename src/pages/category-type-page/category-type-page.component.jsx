import React from "react";
import './category-type-page.styles.scss';

import ScenePackCard from '../../components/scene-pack-card/scene-pack-card.component';
import TutorialCard from "../../components/tutorial-card/tutorial-card.component";
import AnimeRawCard from "../../components/animerwa-card/animeraw-card.component";
import ProjectFileCard from "../../components/projectfile-card/projectfile-card.component";

const CategoryTypePage = ({ catType, pack }) => {
    let componentToRender;

    if (catType === 'scenepackData'){
        componentToRender = <ScenePackCard pack={pack}/>;
    } else if (catType === 'tutorialData'){
        componentToRender = <TutorialCard pack={pack}/>;
    } else if (catType === 'animedataData'){
        componentToRender = <AnimeRawCard pack={pack}/>;
    } else if (catType === 'projectfileData'){
        componentToRender = <ProjectFileCard pack={pack}/>;
    }

    return (
        <div>
            {componentToRender}
        </div>
    );
};

export default CategoryTypePage;