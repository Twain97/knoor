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
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {
                pic:dish2, title:"Dish 2 picture", inFav:0, inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {   
                pic:dish3, title:"Dish 3 picture", inFav:0, inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:dish4, title:"Dish 4 picture", inFav:0, inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            {   
                pic:dish5, title:"Dish 5 picture", inFav:0, inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
        ],

        cart:[],
        fav:[],
        product:{},
        smallInCart:[],
        bigInCart:[],
        totalSmallPrice:0,
        totalBigPrice:0,
        overAllTotal:0,

        showProductPage:false, //value of product page toggle
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
        pushFav(state){
            if(state.fav.includes(state.product)){
                state.product.inCart++

            }
            else{
            state.fav.unshift(state.product)
            }
        },
        pushProduct(state,payload){
            state.product=payload
        },
        computeTotalPrice(state){
            
            // store the quantity in array and at the sam time multiply it by price 
            // this is for individual item
            state.smallInCart.unshift(state.product.totalSmallInOrder * state.product.smallNewPrice)
            state.bigInCart.unshift(state.product.totalBigInOrder * state.product.bigNewPrice)

            // Add all small price
            
            state.totalSmallPrice = state.smallInCart.reduce((accumulator, currentValue)=>
                accumulator + currentValue, 0
            )
            // Add all the big price
            state.totalBigPrice = state.bigInCart.reduce((accumulator, currentValue)=>
                accumulator + currentValue, 0
            )

            state.overAllTotal = state.totalBigPrice + state.totalSmallPrice
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
        },
        addTotalPrice({commit}){
            commit('computeTotalPrice')
        }
    }
})

export default store;