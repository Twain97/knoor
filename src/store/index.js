import { createStore } from "vuex";
import dish1 from "../images/dishes/dish1.jpg"
import dish2 from "../images/dishes/dish2.jpg"
import dish3 from "../images/dishes/dish3.jpg"
import dish4 from "../images/dishes/dish4.jpg"
import dish5 from "../images/dishes/dish5.jpg"

const store = createStore({
    state: {
        items:[
            {pic:dish1, title:"Dish 1 picture", inFav:0, inCart:0},
            {pic:dish2, title:"Dish 2 picture", inFav:0, inCart:0},
            {pic:dish3, title:"Dish 3 picture", inFav:0, inCart:0},
            {pic:dish4, title:"Dish 4 picture", inFav:0, inCart:0},
            {pic:dish5, title:"Dish 5 picture", inFav:0, inCart:0},
        ],
        cart:[],
        fav:[],
        products:{}
    },
    mutations: {
        pushCart(state,payload){
            state.fav.unshift(payload)
        },
        pushFav(state,payload){
            state.fav.unshift(payload)
        },
        pushProduct(state,payload){
            state.products=(payload)
        }
        
    },
    actions: {
        addCart({commit}, payload){
            commit('pushCart', payload)
        },
        addFav({commit}, payload){
            commit('pushFav', payload)
        },
        addProducts({commit}, payload){
            commit('pushProduct', payload)
        }
    }
})

export default store;