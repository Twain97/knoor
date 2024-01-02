<template>
  <div v-if="this.$store.state.cart.length !=0" class="w-full  text-slate-800 bg-slate-200 pb-5" >
    <div class="pt-2 text-slate-800 lg:w-2/4 m-auto md:py-5" >
      <div class="flex flex-col bg-white text-center py-1 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md">
        <h2 class="text-sm md:text-lg font-bold">Cart</h2>
      </div>
      <ul class=" bg-slate-200 py-2 px-1">
        <li v-for="(items, index) in cart" :key="index" 
        class="my-1px-2 py-1 bg-white rounded-lg shadow-md relative">

         <div class=" flex flex-row  h-fit">
          <div class="absolute right-1 -top-2" @click="remove(items, index)">
            <font-awesome-icon icon="fa-regular fa-trash-can"  style="color: #333366;" class="md:hidden m-auto rounded-full cursor-pointer" />
            <font-awesome-icon icon="fa-regular fa-trash-can"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full cursor-pointer" />
          </div>

          <div class=" flex flex-row justify-between py-1 w-full h-fit" @click="(toggleShowProductPage(), insertProduct(items))">
            <div class="pl-3 m-auto md:my-auto md:w-80 md:h-44">
              <img :src="items.pic" alt="item pic" class=" w-44 h-22 md:w-full md:h-full rounded-md">
            </div>

            <div class="flex flex-col text-xs p-2 md:justify-center md:space-y-1 md:text-base w-4/5 -ml-1 ">
              <h2 class="font-bold text-sm text-center mx-auto">{{ items.title }}</h2>

              <div class="flex flex-col md:mx-auto">
                <h4 class="font-semibold mx-auto">Order Quantity:</h4>
                <div class="flex flex-col text-center ml-2 space-y-1 text-xs md:text-sm">
                  <p>2.5: {{ items.totalSmallInOrder }} x</p>
                  <p>4.6: {{ items.totalBigInOrder}} x</p>
                </div>
              </div>
              
              
              <div class=" text-xs md:text-sm">
                <p class="text-center">2.5: 
                  <span id="smallNewPrice" class=" text-green-700 text-sm font-semibold">{{items.smallNewPrice }}</span> X {{ items.totalSmallInOrder }} 
                  = #{{ items.totalSmallInOrder * items.smallNewPrice}} 
                </p>
                <p class="text-center">4.6: 
                  <span id="bigNewPrice" class="text-green-700 font-semibold text-sm">{{ items.bigNewPrice }}</span> X {{ items.totalBigInOrder }} 
                  = #{{ items.totalBigInOrder *  items.bigNewPrice }}</p>
              </div>
            </div>
          </div>
          
         </div>

        </li>
      </ul>

      
      <div class="flex flex-col bg-white mx-1 pt-2 rounded-lg shadow-md ">
        <div class="flex flex-row mb-1 rounded-lg py-2 px-4 text-xs justify-evenly">
        <div class="flex flex-col">
          <h3 class="font-semibold mb-1 mx-auto">Total Price of 2.5</h3>
          <span class="m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100 "> #{{ totalSmallPrice }}</span>
          
        </div>
        <div class="flex flex-col">
          <h3 class="font-semibold mb-1 mx-auto">Total Price of 4.5 </h3>
          <span class="m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100">#{{ totalBigPrice }}</span>
           
        </div>
      </div>


      <div class="flex flex-col ">
        <hr class="m-auto w-5/6 border-slate-400">


        <div class="flex flex-row py-2" >
          <Button id="button"  label="Place order" size="small" @click="placeOrder()"
          class="w-wd4 md:w-2/5 md:py-5 h-5 text-sm md:text-lg font-semibold text-slate-800 m-auto shadow-sm shadow-black" />
          <h3 class="text-right m-auto  text-sm font-bold">
          Total = 
          <span id="smallNewPrice" class=" text-green-700 text-sm font-semibold bg-slate-100 px-2 rounded-md">
          #{{ overAllTotal }}
          </span>
        </h3>
        </div>

      </div>
      </div>
    </div>

    
  </div>
  <div v-else class="w-full h-96 flex text-slate-800">
    <div class="m-auto text-lg font-bold">
      <h2>{{ itemExist }}</h2>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import router from '../router/index.js'
import { getAuth } from 'firebase/auth'
import {db} from '@/firebase/firebase.js'
import{setDoc, doc, serverTimestamp, addDoc, collection, updateDoc, arrayUnion} from 'firebase/firestore'
export default {
    computed: {
        ...mapState({
            cart:'cart',
            smallInCart:"smallInCart",
            bigInCart:"bigInCart",
            totalSmallPrice:"totalSmallPrice",
            totalBigPrice:"totalBigPrice",
            overAllTotal:"overAllTotal"
        }),
        itemExist(){
          if(this.cart.length==0){
            return "Oops! Cart is currently empty!"
          }
        }
    },

    methods: {
      placeOrder(){
            const auth = getAuth()
        // this code directs to monnify payment api
            const customerName = auth.currentUser.displayName
            const customerEmail = auth.currentUser.email
            var cart = this.$store.state.cart
            var amount = this.overAllTotal
            let titles = []
            var paid = false
            MonnifySDK.initialize({
                amount: amount,
                currency: "NGN",
                reference: "KNOOR_" + Math.floor((Math.random() * 1000000000)+1),
                customerFullName: customerName,
                customerEmail: customerEmail,
                apiKey: "MK_TEST_YCL28KNQQ9",
                contractCode: "4566722754",
                paymentDescription: "Knoor Payment",
                isTestMode:true,
                // metadata: {
                //     "name": "Damilare",
                //     "age": 45
                // },
                // incomeSplitConfig: [{
                //     "subAccountCode": "MFY_SUB_342113621921",
                //     "feePercentage": 50,
                //     "splitAmount": 1900,
                //     "feeBearer": true
                // }, {
                //     "subAccountCode": "MFY_SUB_342113621922",
                //     "feePercentage": 50,
                //     "splitAmount": 2100,
                //     "feeBearer": true
                // }],
                onLoadStart: () => {
                    console.log("loading has started");
                },
                onLoadComplete: () => {
                    console.log("SDK is UP");
                },
                onComplete: function(response) {
                    //Implement what happens when the transaction is completed.
                    console.log(response.status);
                   
                    if(response.status === "SUCCESS"){
                      paid = true
                      if(paid){
                        // send the order to the database
                        for (const item of cart){
                          titles.push(` food Name = ${item.title},  Big size = ${item.totalBigInOrder}, Small size = ${item.totalSmallInOrder}`)
                        }
                        const auth = getAuth()
                          const displayName = String(auth.currentUser.displayName)
                          
                          const colRef = collection(db, "Orders")

                          const dataObj= {
                            name:displayName, 
                            orderDate:serverTimestamp(),
                            status:"Pending",
                            product:titles,
                            totalPrice:amount
                          }

                        const docRef = addDoc(colRef, dataObj ).then((docRef)=>{
                          // get the order id
                          console.log('Document id = ', docRef.id)
                          
                          // store the id
                          updateDoc(doc(db, "users", displayName),{Order:arrayUnion(docRef.id)})
                          console.log('Id safed!')

                        }).catch((error)=>{
                          console.log(error)
                        })

                        
                        


                        // direct to ConfirmPayment page
                        router.push('/ConfirmPayment')


                        titles= []
                          setTimeout(()=>{
                          cart=[]
                          },3000)
                        
                      }
                     
                    }else{
                      // direct to error page
                      router.push('/ErrorPayment')
                    }
                    
                },
                onClose: function(data) {
                    //Implement what should happen when the modal is closed here
                    console.log(data);
                    
                }


            });

      },



      toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
      },

      insertProduct(items){
      this.$store.dispatch('addProduct', items)
      },
      remove(items, index){
        this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Item removed!', life: 3000 });
        if (this.$store.state.cart.length==0) {
            this.$store.state.totalBigPrice = 0
            this.$store.state.totalSmallPrice = 0
          }  
        // this code removes the item from the cart array

        this.$store.state.cart = this.$store.state.cart.filter((items, i) => i != index)
        
        // this removes the price from the over all total price of the item in the array
        this.$store.state.overAllTotal = this.$store.state.overAllTotal - (items.bigNewPrice * items.totalBigInOrder)
        this.$store.state.overAllTotal = this.$store.state.overAllTotal - (items.smallNewPrice * items.totalSmallInOrder) 
        
        // remove the item price from their respective size/*style*/`
          this.$store.state.totalSmallPrice = this.$store.state.totalSmallPrice - (items.smallNewPrice * items.totalSmallInOrder)
          this.$store.state.totalBigPrice = this.$store.state.totalBigPrice - (items.bigNewPrice * items.totalBigInOrder)
        
          // update the localStorage with the details in the vuex store
          localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // create the cart in localStorage if it doesnt exist

          if (this.$store.state.totalSmallPrice <=0) {
            this.$store.state.totalSmallPrice = 0

            localStorage.setItem("cartTotalSmall", JSON.stringify(this.$store.state.totalSmallPrice)) // update totalSmallPrice in localStorage

          }else{
            localStorage.setItem("cartTotalSmall", JSON.stringify(this.$store.state.totalSmallPrice)) // update totalSmallPrice in localStorage
          }

          if (this.$store.state.totalBigPrice <=0) {
            this.$store.state.totalBigPrice = 0

            localStorage.setItem("cartTotalBig", JSON.stringify(this.$store.state.totalBigPrice)) // update totalBigPrice in localStorage

          }else{
            localStorage.setItem("cartTotalBig", JSON.stringify(this.$store.state.totalBigPrice)) // update totalBigPrice in localStorage

          }


          if (this.$store.state.overAllTotal <=0) {
            this.$store.state.overAllTotal = 0

            localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // create the totalBigPrice in localStorage if it doesnt exist

          }else{
            localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // create the totalBigPrice in localStorage if it doesnt exist

          }
  
        
      
      }
    }
}
</script>

<style>
#button{
  background: rgba(96, 109, 129, 0.3);
  border: none;
  color:rgb(46, 43, 43);
  height: 50px;
}
#button:hover{
  background: rgba(96, 109, 129, 1);
  color: #e2dfdf;
 
}
</style>