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
                console.log(state.gifs.length,'ADD_GIFS')
            });
            console.log(state.gifs.length)
        },
        ADD_GIFS_RANDOM(state, gifs){
                state.gifs.push(gifs)
        },
        ADD_GIFS_SEARCH(state, gifs){
            state.gifs.unshift(gifs)
        },
        ADD_GIF_LIKE(state, gifs){
            state.curtidos.push(gifs)
            console.log(state.curtidos.length)
        }
    },
    actions: {
        async getGifs(context) {
            try {
                let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=g`

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
        async moreGifsRandom(context){
            try {
                let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.VUE_APP_API_KEY}&tag=&rating=g`

                for(let i =0; i<5; i++){

                    const req = await fetch(url)
                    const res = await req.json()
       
                    if (res.meta.status == 200) {
                        context.commit('ADD_GIFS_RANDOM', res.data)
                        return res.data
                    
                    } else {
                        context.commit('SET_GIFS', [])
                        return []
                    }
                }
            } catch (error) {
                console.error(error)
                throw error;
            }
        },
        async addGifSearch({commit}, gifs){
            commit("ADD_GIFS_SEARCH", await gifs)
        },
        addGifLike(context){
            console.log(context)
            this.commit("ADD_GIF_LIKE", context)
        }
    },
    getters: {
        $allGifs(state) {
            return state.gifs
        }
    }
})
