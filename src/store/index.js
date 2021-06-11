import { createStore } from 'vuex'

export default createStore({
    state: {
        gifs: [],
        curtidos: []
    },
    mutations: {
        SET_GIFS(state, gifs) {
            state.gifs = gifs
        }
    },
    actions: {
async getGifs(context) {
    try {

        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=g`
        const req = await fetch(url)
        const res = await req.json()

        if(res.meta.status == 200){
            context.commit('SET_GIFS', res.data)
        }else{
            context.commit('SET_GIFS', [])
        }

    } catch (error) {
        console.error(error)
        throw error;
    }

}
    },
    getters: {
        $allGifs(state) {
            return state.gifs
        }
    }
})