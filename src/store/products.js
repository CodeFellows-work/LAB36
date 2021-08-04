

const initialState = {

    categories: [
        {displayName: 'Metal', normalizedName: 'metal', description:'Metal Music', image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/05/3b/f4/053bf480-1a4a-990f-56e8-f80387d70c70/source/256x256bb.jpg'},
        {displayName: 'Classical', normalizedName: 'classical', descirption:'Classic Music', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eJpovKY6_n_rVHb_5N0mcrR3hhlJ06QDgw&usqp=CAU'},
        {displayName: 'Punk', normalizedName: 'punk', descirption:'Punk Music', image: 'https://cdn.dribbble.com/users/601842/screenshots/6985168/deslok_db_4x.png?compress=1&resize=400x300'},
        {displayName: 'Hip-Hop', normalizedName: 'hiphop', descirption:'Hip-Hop Music', image: 'https://assets.fxnetworks.com/cms/prod/2021/02/09/web_largecoverart_series_hip-hop-uncovered_540x796_(1).jpg'},
        
    ],
    songs: [
        {   category: 'Metal', 
            price: 0.99, 
            description: 'Metal Music', 
            name: 'Slaughter To Prevail - Hell', 
            image: 'https://img.discogs.com/ukUODRXoC1ddrhLBrLvEPqJWWnQ=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-8470566-1600786624-1392.jpeg.jpg',
            inventory: 10,
        },
        {
            category: 'Classical', 
            price: 0.99, 
            description: 'Clasical Music', 
            name: 'Mozart - Lacrimosa', 
            image: 'https://c-cl.cdn.smule.com/rs-s89/sing/performance/cover/19/d3/651af71a-2511-487b-bf4e-bf378fb5055f_512.jpg',
            inventory: 5,
        },
        {
            category: 'Punk', 
            price: 0.99, 
            description: 'Punk Music', 
            name: 'All Time Low Feat. Pale Waves - PMA', 
            image: 'https://pbs.twimg.com/media/E7qyZqiUYAEP2wH.jpg',
            inventory: 6,
        },
        {
            category: 'Hip-Hop', 
            price: 0.99, 
            description: 'Hip-Hop Music', 
            name: 'Chief Keef - Laughing To The Bank', 
            image: 'https://i1.sndcdn.com/artworks-000088417015-h5r4is-t500x500.jpg',
            inventory: 2,
        },
            

    ],
    activeCategory: '',
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case "ACTIVATE" :
            return { ...state, activeCategory: action.payload }
        default: 
            return state;
    }
}