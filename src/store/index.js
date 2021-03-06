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
        ADD_GIFS(state, gifs) {
            gifs.forEach(element => {
                state.gifs.push(element)
            });
        },
        ADD_GIFS_RANDOM(state, gifs) {
            state.gifs.push(gifs)
        },
        ADD_GIFS_SEARCH(state, gifs) {
            state.gifs.unshift(gifs)
        },
        ADD_GIF_LIKE(state, gif) {
            
            if(!state.curtidos.find(el => el.id === gif.id)){
                state.curtidos.unshift(gif)
            }
        },
        UPDATE_GIF(state, gif) {
            const x = state.curtidos.find(ele => ele.id == gif.id)
            const indice = state.curtidos.indexOf(x)
            state.curtidos[indice] = gif
        },
        REMOVE_GIF_LIKED(state, gif) {
            state.curtidos.splice(state.curtidos.indexOf(gif), 1)
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
        async moreGifsRandom(context) {
            try {
                let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.VUE_APP_API_KEY}&tag=&rating=g`

                for (let i = 0; i < 6; i++) {

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
        async addGifSearch({ commit }, gifs) {
            commit("ADD_GIFS_SEARCH", await gifs)
        },
        async addGifLike({ commit }, gif) {
            commit("ADD_GIF_LIKE", await gif)
        },
        updateGif({ commit }, gif) {
            commit("UPDATE_GIF", gif)
        },
        deleteGifLiked({ commit }, gif) {
            commit("REMOVE_GIF_LIKED", gif)
        }
    },
    getters: {
        $allGifs(state) {
            return state.gifs
        },
        $likedGifs(state) {
            return state.curtidos
        }
    }
})
