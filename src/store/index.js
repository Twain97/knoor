import { createStore } from "vuex";
import dish1 from "../images/dishes/dish1.jpg"
import dish2 from "../images/dishes/dish2.jpg"
import dish3 from "../images/dishes/dish3.jpg"
import dish4 from "../images/dishes/dish4.jpg"
import dish5 from "../images/dishes/dish5.jpg"

const store = createStore({
    state: {
        items:[
            {pic:dish1, title:"Dish 1 picture", inFav:0, inCart:0,
                // the first value[0] stands for the original price 
                // the second value[1] stnads for the discounted price
                small:["#4,000","#3,000"],
                big:["#8,000", "#6,000"],
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {pic:dish2, title:"Dish 2 picture", inFav:0, inCart:0, 
                small:["#4,000","#3,000"],
                big:["#8,000", "#6,000"],
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {pic:dish3, title:"Dish 3 picture", inFav:0, inCart:0, 
                small:["#4,000","#3,000"],
                big:["#8,000", "#6,000"],
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {pic:dish4, title:"Dish 4 picture", inFav:0, inCart:0, 
                small:["#4,000","#3,000"],
                big:["#8,000", "#6,000"],
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {pic:dish5, title:"Dish 5 picture", inFav:0, inCart:0, 
                small:["#4,000","#3,000"],
                big:["#8,000", "#6,000"],
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
        ],
        
        products:{pic:dish2, title:"Dish 2 picture", inFav:0, inCart:0, 
        small:["#4,000","#3,000"],
        big:["#8,000", "#6,000"],
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"},

        cart:[],
        fav:[],
        showProductPage:true

    },
    mutations: {
        pushCart(state,payload){
            state.cart.unshift(payload)
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