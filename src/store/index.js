import { createStore } from "vuex";
import dish1 from "../images/dishes/dish1.jpg"
import dish2 from "../images/dishes/dish2.jpg"
import dish3 from "../images/dishes/dish3.jpg"
import dish4 from "../images/dishes/dish4.jpg"
import dish5 from "../images/dishes/dish5.jpg"

const store = createStore({
    state: {
        items:[
            {
                pic:dish1, title:"Dish 1 picture", inFav:0, inCart:0,
                smallOldPrice:"#4,000",smallNewPrice:"#3,000",
                bigOldPrice:"#8,000", bigNewPrice:"#6,000",
                totalSmallInOrder:1,
                totalBigInOrder:1,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {
                pic:dish2, title:"Dish 2 picture", inFav:0, inCart:0, 
                smallOldPrice:"#4,000",smallNewPrice:"#3,000",
                bigOldPrice:"#8,000", bigNewPrice:"#6,000",
                totalSmallInOrder:1,
                totalBigInOrder:1,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {   
                pic:dish3, title:"Dish 3 picture", inFav:0, inCart:0, 
                smallOldPrice:"#4,000",smallNewPrice:"#3,000",
                bigOldPrice:"#8,000", bigNewPrice:"#6,000",
                totalSmallInOrder:1,
                totalBigInOrder:1,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {   
                pic:dish4, title:"Dish 4 picture", inFav:0, inCart:0, 
                smallOldPrice:"#4,000",smallNewPrice:"#3,000",
                bigOldPrice:"#8,000", bigNewPrice:"#6,000",
                totalSmallInOrder:1,
                totalBigInOrder:1,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
            {   
                pic:dish5, title:"Dish 5 picture", inFav:0, inCart:0, 
                smallOldPrice:"#4,000",smallNewPrice:"#3,000",
                bigOldPrice:"#8,000", bigNewPrice:"#6,000",
                totalSmallInOrder:1,
                totalBigInOrder:1,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores"
            },
        ],

        cart:[],
        fav:[],
        product:{},
        showProductPage:false

    },
    mutations: {
        pushCart(state){
            if(state.cart.includes(state.product)){
                state.product.inCart++
            }
            else{
                state.cart.unshift(state.product)
            }
            
        },
        pushFav(state,payload){
            state.fav.unshift(payload)
        },
        pushProduct(state,payload){
            state.product=payload
        }
        
    },
    actions: {
        addCart({commit}){
            commit('pushCart')
        },
        addFav({commit}, payload){
            commit('pushFav', payload)
        },
        addProduct({commit}, payload){
            commit("pushProduct", payload)
        }
    }
})

export default store;