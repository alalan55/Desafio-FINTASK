import { createStore } from 'vuex'

export default createStore({
    state: {
        gifs: [],
        curtidos: []
    },
    mutations: {
        SET_GIFS(state, gifs) {
            state.gifs = gifs
        },
        ADD_GIFS(state, gifs){
            gifs.forEach(element => {
                state.gifs.push(element)
            });
            console.log(state.gifs.length)
        },
        ADD_GIFS_SEARCH(state, gifs){
            state.gifs.unshift(gifs)
        }
    },
    actions: {
        async getGifs(context) {
            try {
                let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=g`
               // https://api.giphy.com/v1/gifs/random?api_key=DqdUffGbYPWlP236nYgbzOpuInk2CzUm&tag=&rating=g

                const req = await fetch(url)
                const res = await req.json()

                if (res.meta.status == 200) {
                    context.commit('SET_GIFS', res.data)
                    return res.data
                
                } else {
                    context.commit('SET_GIFS', [])
                    return []
                }

            } catch (error) {
                console.error(error)
                throw error;
            }

        },
        async addMoreGifs({commit}, gifs){
        //    console.log('addModeGifis no store', await gifs)
                commit("ADD_GIFS", await gifs)
        },
        async addGifSearch({commit}, gifs){
            commit("ADD_GIFS_SEARCH", await gifs)
        }
    },
    getters: {
        $allGifs(state) {
            return state.gifs
        }
    }
})
