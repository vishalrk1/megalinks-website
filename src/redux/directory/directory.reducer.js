const INITIAL_STATE = {
    sections: [
        {
          title: 'Project Files',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FProjectFile-Directory.jpg?alt=media&token=587b2328-84ca-4b35-80db-b4554d6bcc6f',
          id: 1,
          linkUrl: 'explore/projectfile'
        },
        {
          title: 'Preset Packs',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FPresetPack-Directory.jpg?alt=media&token=0691e47b-76e1-448d-88ff-274fc0190b9e',
          id: 2,
          linkUrl: 'explore/presetPacks'
        },
        {
          title: 'Editing Tutorials',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FEditingTutorial-Directory.jpg?alt=media&token=f052ae09-91e1-45e9-a5ed-5229ec2b8eb8',
          id: 3,
          linkUrl: 'explore/tutorial'
        },
        {
          title: 'Anime Raws',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FAnimeRaw-Directory.jpg?alt=media&token=b46bebbc-01af-4757-8586-f844df2b2725',
          size: 'large',
          id: 4,
          linkUrl: 'explore/animedata'
        },
        {
          title: 'Scene Packs',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FScenePack-Directory-1.jpg?alt=media&token=0a940aad-23d3-45a4-85a7-0b3e57cb496e',
          size: 'large',
          id: 5,
          linkUrl: 'explore/scenepack'
        }
    ],
};

const directoryReducer = ( state=INITIAL_STATE, action ) => {
    switch(action.type){
        default:
            return state
    }
};

export default directoryReducer;