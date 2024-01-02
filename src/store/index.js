import { createStore } from "vuex";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut,
        getAuth, updateProfile
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import router from "../router/index"

import Dish1 from "../images/dishes/Dish1.jpg"
import Dish2 from "../images/dishes/Dish2.jpg"

import Basmati from "../images/dishes/Basmatti jollof.jpg"
import Egusi from "../images/dishes/Egusi.jpg"
import Fish from "../images/dishes/Fish.jpg"
import FriedRice from "../images/dishes/Fried Rice.jpg"
import Moinmoin from "../images/dishes/Moinmoin.jpg"
import Noodles from "../images/dishes/Noodles.jpg"
import NormalJollof from "../images/dishes/Normal jollof.jpg"
import NormalStew from "../images/dishes/Normal Stew.jpg"
import NormalWhiteRice from "../images/dishes/Normal White rice.jpg"
import OfadaRice from "../images/dishes/Ofada rice.jpg"
import OfadaStew from "../images/dishes/Ofada stew.jpg"
import Ogbono from "../images/dishes/Ogbono2.jpg"
import Porridge from "../images/dishes/Porridge.webp"
import Salad from "../images/dishes/Salad.jpg"
import Spag from "../images/dishes/Spag.jpg"
import Vegetable from "../images/dishes/Vegetable.jpg"



const store = createStore({
    state: {
        user:null, //the user
        paid:false,
        username:'',
        complaint:'',
        items:[
            {
                pic:Basmati, title:"BASMATI JOLLOF RICE", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3500",
                foodType:"rice",
                bigOldPrice:"8000", bigNewPrice:"7000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {
                pic:NormalJollof, title:"NORMAL JOLLOF RICE", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                foodType:"rice",
                bigOldPrice:"8000", bigNewPrice:"6000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {
                pic:NormalWhiteRice, title:"NORMAL WHITE RICE", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2000",
                foodType:"rice",
                bigOldPrice:"6000", bigNewPrice:"4000",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
             {   
                pic:Spag, title:"SPECIAL SPAG WITH VEG", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"spag",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:Noodles, title:"SPECIAL NOODLES WITH VEG", inCart:0, 
                smallOldPrice:"3500",smallNewPrice:"3200",
                bigOldPrice:"7000", bigNewPrice:"6400",
                foodType:"noodles",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            { 
                pic:Moinmoin, title:"MOIN MOIN: FISH & EGG 300", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2200",
                bigOldPrice:"5000", bigNewPrice:"4400",
                foodType:"beans",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {
                pic:Moinmoin, title:"MOIN MOIN: PLAIN 200", inCart:0,
                smallOldPrice:"2000",smallNewPrice:"1500",
                bigOldPrice:"4000", bigNewPrice:"3000",
                foodType:"beans",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
            {   
                pic:FriedRice, title:"Fried Rice", inCart:0, 
                smallOldPrice:"4500",smallNewPrice:"4000",
                bigOldPrice:"9000", bigNewPrice:"8000",
                foodType:"rice",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
           
            
            
            {   
                pic:Dish1, title:"CHICKEN", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:3,
            },
            {   
                pic:Dish2, title:"BEEF", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {   
                pic:NormalStew, title:"NORMAL STEW", inCart:0, 
                smallOldPrice:"2700",smallNewPrice:"2500",
                bigOldPrice:"5400", bigNewPrice:"5000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {   
                pic:Vegetable, title:"VEGETABLE SOUP", inCart:0, 
                smallOldPrice:"2700",smallNewPrice:"2500",
                bigOldPrice:"5400", bigNewPrice:"5000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {   
                pic:Fish, title:"FISH", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2000",
                bigOldPrice:"5000", bigNewPrice:"4000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
           
           
            { 
                pic:Porridge, title:"PORRIDGE", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"6000", bigNewPrice:"5500",
                foodType:"porridge",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:4,
            },
            {   
                pic:Salad, title:"SALAD", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2500",
                bigOldPrice:"6000", bigNewPrice:"5000",
                foodType:"salad",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
            {   
                pic:Ogbono, title:"OGBONO", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3500",
                bigOldPrice:"8000", bigNewPrice:"7000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {   
                pic:Egusi, title:"EGUSI", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2500",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
            {
                pic:Vegetable, title:"EDIKAIKONG", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3200",
                bigOldPrice:"8000", bigNewPrice:"6400",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:2,
            },
           
            {   
                pic:OfadaRice, title:"OFADA RICE", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2000",
                bigOldPrice:"5000", bigNewPrice:"4000",
                foodType:"rice",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
             {   
                pic:OfadaStew, title:"OFADA STEW", inCart:0, 
                smallOldPrice:"2200",smallNewPrice:"2000",
                bigOldPrice:"4400", bigNewPrice:"4000",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:1,
            },
           
            {   
                pic:Vegetable, title:"EFO RIRO", inCart:0, 
                smallOldPrice:"25000",smallNewPrice:"1800",
                bigOldPrice:"5000", bigNewPrice:"3600",
                foodType:"soup",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores",
                rating:5,
            },
        ],

        cart:[],
        searchWord:"",
        searchResult:[],
        wishList:[],
        product:{},
        orderId:[],
        smallInCart:[],
        bigInCart:[],
        totalSmallPrice:0,
        totalBigPrice:0,
        overAllTotal:0,
        showProductPage:false, //  0n/off of product page toggle
    },
    mutations: {
        setSearch(state, payload){

            const filtered = state.items.filter(function(obj){
                if(obj.foodType==payload){
                    state.searchResult.push(obj)
                }
                
            })
            state.searchWord = payload
            console.log( state.searchResult)
        },
        setComplaint(state, payload){
            state.complaint = payload
        },
        setPaid(state, payload){
            state.paid = payload
        },
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
        addSearch({commit}, payload){
            commit('setSearch', payload)
        },
        addPaid({commit}, payload){
            commit('setPaid', payload)
        },
        addComplaint({commit}){
            commit('setComplaint')
        },
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
        const {email,password } = details // destructure to retriev email and password
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
        const {email,name,phone, password} = details
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

        const curntUser = getAuth().currentUser
        updateProfile(curntUser, {
            displayName: name,
            phoneNumber:phone
          })
          .then(() => {
            console.log("User profile updated successfully")
          })
          .catch((error) => {
            console.log(" Handle error updating user profile")
          });

        //   create fireStore database
       
            var orderId = [] 
            setDoc(doc(db, 'users', name ), {email : email, Order:orderId}, { merge:true})


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