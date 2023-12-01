import { createStore } from "vuex";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut,
        getAuth
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import router from "../router/index"


import dish1 from "../images/dishes/dish1.jpg"
import dish2 from "../images/dishes/dish2.jpg"
import dish3 from "../images/dishes/dish3.jpg"
import dish4 from "../images/dishes/dish4.jpg"
import dish5 from "../images/dishes/dish5.jpg"



const store = createStore({
    state: {
        user:null, //the user
        username:'',
        items:[
            {
                pic:dish1, title:"Dish 1 picture", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {
                pic:dish2, title:"Dish 2 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {   
                pic:dish3, title:"Dish 3 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:dish4, title:"Dish 4 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            {   
                pic:dish5, title:"Dish 5 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {
                pic:dish1, title:"Dish 1 picture", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {
                pic:dish2, title:"Dish 2 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {   
                pic:dish3, title:"Dish 3 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:dish4, title:"Dish 4 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            {   
                pic:dish5, title:"Dish 5 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {
                pic:dish1, title:"Dish 1 picture", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {
                pic:dish2, title:"Dish 2 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {   
                pic:dish3, title:"Dish 3 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:dish4, title:"Dish 4 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            {   
                pic:dish5, title:"Dish 5 picture", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
        ],

        cart:[],
        wishList:[],
        product:{},
        smallInCart:[],
        bigInCart:[],
        totalSmallPrice:0,
        totalBigPrice:0,
        overAllTotal:0,
        smallReductionCounter:1,
        smallIncrementCounter:1,
        bigReductionCounter:1,
        bigIncrementCounter:1,

        showProductPage:false, //  0n/off of product page toggle
    },
    mutations: {
        
        setcart(state){
            const storeCart =  JSON.parse(localStorage.getItem("cart")) // fetch and set the cart in localStorage as object
            const storeCartTotalSmall =  JSON.parse(localStorage.getItem("cartTotalSmall")) // fetch and set the cart in localStorage as object
            const storeCartTotalBig =  JSON.parse(localStorage.getItem("cartTotalBig")) // fetch and set the cart in localStorage as object
            const storeCartTotalPrice =  JSON.parse(localStorage.getItem("cartTotalPrice")) // fetch and set the cart in localStorage as object
            const storeWishList =  JSON.parse(localStorage.getItem("wishList")) // fetch and set the cart in localStorage as object

            // check if cart exist in localStorage
            if (!storeCart) {
            //   alert("no cart")
              localStorage.setItem("cart", JSON.stringify(state.cart)) // create the cart in localStorage if it doesnt exist
            }
            else{
            //   alert("storeCart Exist")
              state.cart=storeCart
            }

            // check if storeCartTotalBig exist in localStorage
            if (!storeCartTotalSmall) {
                // alert("False")
                localStorage.setItem("cartTotalSmall", JSON.stringify(state.totalSmallPrice)) // create the totalBigPrice in localStorage if it doesnt exist
              }
              else{
                // alert("true")
                state.totalSmallPrice=storeCartTotalSmall
              }

            // check if storeCartTotalBig exist in localStorage
              if (!storeCartTotalBig) {
                // alert("false")
                localStorage.setItem("cartTotalBig", JSON.stringify(state.totalBigPrice)) // create the totalBigPrice in localStorage if it doesnt exist
              }
              else{
                // alert("true")
                state.totalBigPrice=storeCartTotalBig
              }

            //   check if storeCartTotalPrice exist in localStorage
              if (!storeCartTotalPrice) {
                // alert("False")
                localStorage.setItem("cartTotalPrice", JSON.stringify(state.overAllTotal)) // create the totalBigPrice in localStorage if it doesnt exist
              }
              else{
                // alert("true")
                state.overAllTotal=storeCartTotalPrice
              }


              // check if wishList exist in localStorage
            if (!storeWishList) {
                //   alert("no cart")
                  localStorage.setItem("wishList", JSON.stringify(state.wishList)) // create the cart in localStorage if it doesnt exist
                }
                else{
                //   alert("storeCart Exist")
                  state.wishList=storeWishList
                }


                console.log(state.totalSmallPrice)
                console.log(state.totalBigPrice)
        },
        pushCart(state){

            if(state.cart.includes(state.product)){
                state.product.inCart++
            }
            else{
                // // add item in the product to cart
                state.cart.unshift(state.product)
                localStorage.setItem("cart", JSON.stringify(state.cart)) // update cart in localStorage
              
              
            
            }
            
        },
        pushFav(state, payload){
           

            state.wishList.unshift(payload)
            localStorage.setItem("wishList", JSON.stringify(state.wishList)) // create the wishList in localStorage if it doesnt exist
            
        },
        pushProduct(state,payload){
            state.product=payload
        },
        computeTotalPrice(state){
            
            // store the quantity in array and at the sam time multiply it by price 
            // this is for individual item
            state.smallInCart.unshift(state.product.totalSmallInOrder * state.product.smallNewPrice)
            console.log(state.smallInCart)
            state.bigInCart.unshift(state.product.totalBigInOrder * state.product.bigNewPrice)

            // Add all small price
            // add the initial price in vuex with the new
            state.totalSmallPrice =  state.smallInCart.reduce((accumulator, currentValue)=>
                accumulator + currentValue, 0
            )
            // Add all the big price
            state.totalBigPrice =  state.bigInCart.reduce((accumulator, currentValue)=>
                accumulator + currentValue, 0
            )

            state.overAllTotal = state.totalBigPrice + state.totalSmallPrice
                // update each price with clicks
                localStorage.setItem("cartTotalBig", JSON.stringify(state.totalBigPrice)) // update totalBigPrice in localStorage
                localStorage.setItem("cartTotalSmall", JSON.stringify(state.totalSmallPrice)) // update totalSmallPrice in localStorage
                localStorage.setItem("cartTotalPrice", JSON.stringify(state.overAllTotal)) // create the totalBigPrice in localStorage if it doesnt exist
            },
        


             // user mutations
        setUser(state, user){
            state.user = user
        },
        
        clearUser(state){
            state.user = null
        }
    },
    actions: {
        createCart({commit}){
            commit("setcart")
        },
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
        },

        // user actions

    // async user login
    async login({commit}, details){
        const {email, password} = details // destructure to retriev email and password
        //verify the with firebase auth
        try{
            await signInWithEmailAndPassword(auth, email, password)
        }catch(error){
         

            switch(error.code){
                case 'auth/user-not-found':
                    alert('User does not exist, please create an account')
                    break;
                case 'auth/wrong-password':
                    alert('wrong password')
                    break;
                case 'auth/missing-password':
                    alert('please enter your password')
                    break;
                case 'auth/network-request-failed':
                    alert('No network detected')
                break;
                default:
                    alert(error.code)
                    console.log(error.code)
                    break;
            }
            return //return the result if user is verified
        }
        commit('setUser', auth.currentUser) //set the currentUser
        // direct to home
        router.push('/Home')
    },
    async register({commit}, details){
        // destructure or retrieve the email and password from details
        const {email, password} = details
        try{

             // verify them with firebase signin authentication 
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(error){
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('User already exist, please login')
                    break;
                case 'auth/invalid-email':
                    alert('Email incorrect')
                    break;
                case 'auth/operation-not-allowed':
                    alert('Operation not allowed')
                    break;

                case 'auth/weak-password':
                    alert('Weak password')
                    break;
                case 'auth/missing-password':
                    alert('please enter your password')
                    break;
                case 'auth/network-request-failed':
                    alert('No network detected')
                break;
                    
                default:
                    alert('something went wrong')
                    console.log(error.code)
                    break;
            }
            return // return the result if user is verified or not
        }
        commit('setUser', auth.currentUser) //set the current user in the state
        // direct to the required route
        router.push('/Home')
    },
    async logOut({commit}){
                
        await signOut(auth)

        commit('clearUser')
        
        router.push('/')
        
    },
     // fetch the current user
     fetchUser({commit}){
        // this is check to see if the user is logged in everytime theres a refresh
        // and prevent the user from being directed to log in page on every reload
        auth.onAuthStateChanged(
            async user => {
            // check if user is online or not
            if (user === null) {
                // if user is empty
                commit('clearUser')
               
            }else{
                // if user is not empty
                commit('setUser', user)

                    if(router.isReady() && router.currentRoute.value.path === '/'){
                        router.push('/Home')
                }
            }
        })
    }
},
})

export default store;