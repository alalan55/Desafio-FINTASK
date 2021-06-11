import { createStore } from 'vuex'

export default createStore({
    state: {
        gifs:[],
        curtidos:[]
    },
    mutations: {
        SET_GIFS(state, gifs){
            state.gifs = gifs
          //  console.log('estado',state.gifs)
        }
    },
    actions: {
        async getGifs(context){
            let url =  `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=g`
            const req = await fetch(url)
            const res = await req.json()
            console.log
            context.commit('SET_GIFS', res)

        }
    },
    getters: {
       async $allGifs(state){
         //  console.log(state.gifs)
          // let x = await state.gifs
            return state.gifs
        }
    }
})