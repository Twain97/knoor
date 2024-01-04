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
                smallOldPrice:"4000",smallNewPrice:"3700",
                foodType:"rice",
                bigOldPrice:"8000", bigNewPrice:"7400",
                discount:"8%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Jollof rice made with Basmatti rice, canned tomato, ginger, chicken, beef, and seasoning such as curry, thyme and so on.",
                rating:4,
            },
            {
                pic:NormalJollof, title:"NORMAL JOLLOF RICE", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                foodType:"rice",
                bigOldPrice:"8000", bigNewPrice:"6000",
                discount:"25%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Jolly Jollof rice made with normal rice, canned tomato, ginger, chicken, beef, and seasoning such as curry, thyme and so on.",
                rating:4,
            },
            {
                pic:NormalWhiteRice, title:"NORMAL WHITE RICE", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2000",
                bigOldPrice:"6000", bigNewPrice:"4000",
                foodType:"rice",
                discount:"33%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"White rice mixed with mashed eggs, with prawns and pepper/tomato sauce.",
                rating:4,
            },
             {   
                pic:Spag, title:"SPECIAL SPAG WITH VEG", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"spag",
                totalSmallInOrder:0,
                discount:"25%",
                totalBigInOrder:0,
                details:"White Spaghetti mixed with mashed sprinkled with small prawns, with fried chicken, pepper/tomato soup sauce . ",
                rating:2,
            },
            {   
                pic:Noodles, title:"SPECIAL NOODLES WITH VEG", inCart:0, 
                smallOldPrice:"3500",smallNewPrice:"3200",
                bigOldPrice:"7000", bigNewPrice:"6400",
                foodType:"noodles",
                discount:"9%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Stir fried noodles sprinkled with small prawns, with fried chicken, pepper/tomato soup sauce . ",
                rating:3,
            },
            { 
                pic:Moinmoin, title:"MOIN MOIN: FISH & EGG 300", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2200",
                bigOldPrice:"5000", bigNewPrice:"4400",
                foodType:"beans",
                discount:"12%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Made with beans, hard boiled eggs, crayfish, boiled fish, and so on.",
                rating:4,
            },
            {
                pic:Moinmoin, title:"MOIN MOIN: PLAIN 200", inCart:0,
                smallOldPrice:"2000",smallNewPrice:"1700",
                bigOldPrice:"4000", bigNewPrice:"3000",
                foodType:"beans",
                discount:"15%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Made with beans, hard boiled eggs, crayfish, boiled fish, and so on.",
                rating:4,
            },
            {   
                pic:FriedRice, title:"Fried Rice", inCart:0, 
                smallOldPrice:"4500",smallNewPrice:"4000",
                bigOldPrice:"9000", bigNewPrice:"8000",
                foodType:"rice",
                discount:"11%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Made wiith Basmatti rice, cabbage, carrot, green beans, peas, green pepper, liver,curry and so on.",
                rating:5,
            },
           
            
            
            {   
                pic:Dish1, title:"CHICKEN", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                totalSmallInOrder:0,
                discount:"25%",
                totalBigInOrder:0,
                details:"Chicken stew only, made with fried chicken and pepper/tomato sauce",
                rating:4,
            },
            {   
                pic:Dish2, title:"BEEF", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                discount:"25%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Beef stew only, made with fried beef and pepper/tomato sauce",
                rating:5,
            },
            {   
                pic:NormalStew, title:"NORMAL STEW", inCart:0, 
                smallOldPrice:"2700",smallNewPrice:"2500",
                bigOldPrice:"5400", bigNewPrice:"5000",
                foodType:"soup",
                discount:"7%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Normal pepper/tomato sauce, made with beef, stock fish, ponmo and so on",
                rating:5,
            },
            {   
                pic:Vegetable, title:"VEGETABLE SOUP", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"1800",
                bigOldPrice:"5000", bigNewPrice:"3600",
                foodType:"soup",
                discount:"28%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:" made with normal vegetable, laced with ponmo, diced meat liver crayfish and locust beans.",
                rating:5,
            },
            {   
                pic:Fish, title:"FISH", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2000",
                bigOldPrice:"5000", bigNewPrice:"4000",
                foodType:"fish",
                discount:"20%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Fried fish.",
                rating:5,
            },
           
           
            { 
                pic:Porridge, title:"PORRIDGE", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3000",
                bigOldPrice:"6000", bigNewPrice:"5500",
                foodType:"porridge",
                discount:"25%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Delicious porridge made with yam, palm oil with pepper/tomato sauce made fish to go with it.",
                rating:4,
            },
            {   
                pic:Salad, title:"SALAD", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2500",
                bigOldPrice:"6000", bigNewPrice:"5000",
                foodType:"salad",
                discount:"20%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Salad made with lettuce, cabbage, sweet corn, tomatoes, hard boiled eggs, carrots, spring onions, baked beans, corned beef. ",
                rating:5,
            },
            {   
                pic:Ogbono, title:"OGBONO", inCart:0, 
                smallOldPrice:"4000",smallNewPrice:"3500",
                bigOldPrice:"8000", bigNewPrice:"7000",
                foodType:"soup",
                discount:"13%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Ogbono soup made with meat, tripe, ponmo, smoke fish, crayfish and vegetables ",
                rating:5,
            },
            {   
                pic:Egusi, title:"EGUSI", inCart:0, 
                smallOldPrice:"3000",smallNewPrice:"2500",
                bigOldPrice:"8000", bigNewPrice:"6000",
                foodType:"soup",
                discount:"20%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Western Nigeria vegetable soup made with vegetable, Egusi(melon), laced with ponmo, stock fish, crayfish , locus beans and so on.",
                rating:4,
            },
            {
                pic:Vegetable, title:"EDIKAIKONG", inCart:0,
                smallOldPrice:"4000",smallNewPrice:"3200",
                bigOldPrice:"8000", bigNewPrice:"6400",
                foodType:"soup",
                discount:"22%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Eastern Nigeria vegetable soup, made with varieties of vegetable, laced with ponmo, stock fish, crayfish , locus beans and so on.",
                rating:2,
            },
           
            {   
                pic:OfadaRice, title:"OFADA RICE", inCart:0, 
                smallOldPrice:"2500",smallNewPrice:"2000",
                bigOldPrice:"5000", bigNewPrice:"4000",
                foodType:"rice",
                discount:"25%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Normal white boiled Ofada rice, boiled with mashed egg and little prawns.",
                rating:2,
            },
             {   
                pic:OfadaStew, title:"OFADA STEW", inCart:0, 
                smallOldPrice:"2200",smallNewPrice:"2000",
                bigOldPrice:"4400", bigNewPrice:"4000",
                foodType:"soup",
                discount:"10%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Popular Ofada stew with mashed pepper/tomato sauce, mashed boiled fish with chicken. ",
                rating:4,
            },
           
            {   
                pic:Vegetable, title:"EFO RIRO", inCart:0, 
                smallOldPrice:"25000",smallNewPrice:"1800",
                bigOldPrice:"5000", bigNewPrice:"3600",
                foodType:"soup",
                discount:"28%",
                totalSmallInOrder:0,
                totalBigInOrder:0,
                details:"Efo riro also known as vegetable soup, made with normal vegetable, laced with ponmo, diced meat liver crayfish and locust beans. ",
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
        smallIncrementCounter:1,
        smallReductionCounter:1,
        bigReductionCounter:1,
        bigIncrementCounter:1,
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