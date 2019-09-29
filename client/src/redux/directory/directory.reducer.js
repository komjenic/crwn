const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://komjenic-gcs.imgix.net/hats.webp',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://komjenic-gcs.imgix.net/jackets.webp',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://komjenic-gcs.imgix.net/sneakers.webp',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://komjenic-gcs.imgix.net/womens.webp',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://komjenic-gcs.imgix.net/men.webp',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
