import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'home',
    initialState: {
        toggleSidebar: false,
        searchTerm: '',
        loading: false,
        categories: [
            {name: 'Animals'},
            {name: 'Plants'},
            {name: 'Food'},
            {name: 'Sports'},
            {name: 'Studies'},
            {name: 'Celebrity'},
            {name: 'other'}
        ],
        feeds: [
            {
                id: 1,
                url: 'http://wallup.net/wp-content/uploads/2016/10/12/388978-animals-mammals-forest-bears.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Animals' 
            },
            {
                id: 2,
                url: 'https://wallup.net/wp-content/uploads/2018/10/09/238756-jungle-animals-feline-jaguars.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Animals' 
            },
            {
                id: 3,
                url: 'https://www.digitalphotopix.com/wp-content/uploads/2014/04/red-fox-England-1024x788.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Animals' 
            },
            {
                id: 4,
                url: 'http://wallup.net/wp-content/uploads/2016/01/177009-animals-lemurs-wildlife-mammals.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Animals' 
            },
            {
                id: 5,
                url: 'https://www.wallpapers13.com/wp-content/uploads/2020/02/Wild-Animals-from-Africa-Giraffe-Family-Giraffidae-the-tallest-living-land-animal-and-largest-survivor-4K-Ultra-HD-Wallpaper-for-Desktop-1280x1024.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Animals' 
            },
            {
                id: 6,
                url: 'http://asergeev.com/p/xl-2004-387-08/new_bedford_boston-marsh_plants_wilbour_woods_little.jpg',
                postedBy: {
                    id: 1,
                    name: 'Elon Musk',
                    email: 'elon.musk@tesla.com',
                    picture: 'https://i1.wp.com/www.englishspeecheschannel.com/wp-content/uploads/2018/10/Elon-Musk-Site.jpg?fit=1920%2C1080&ssl=1'
                },
                categoryName: 'Plants' 
            }
        ]
    },
    reducers: {
        setToggleSidebar: (state, { payload }) => {
            return {...state, toggleSidebar: payload}
        },
        setSearchTerm: (state, { payload }) => {
            return {...state, searchTerm: payload}
        },
        setLoading: (state, { payload }) => {
            return {...state, loading: payload}
        }
    }
});
export const { setToggleSidebar, setSearchTerm, setLoading } = slice.actions;
export default slice.reducer;