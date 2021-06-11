import { createStore } from 'vuex'

export default createStore({
    state: {
        gifs:[],
        curtidos:[]
    },
    mutations: {
        SET_GIFS(state, gifs){
            state.gifs = gifs
        }
    },
    actions: {
        async getGifs(context){
            let url =  `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=g`
            const req = await fetch(url)
            const res = await req.json()

            context.commit('SET_GIFS', res)

        }
    },
    getters: {
        $allGifs(state){
            return state.gifs
        }
    }
})