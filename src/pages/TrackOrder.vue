<template>
    <div class="flex flex-col pb-4 px-2 bg-slate-100">

      <div v-if="Orders != null" class="w-full px-2  m-auto md:w-2/3 lg:w-9/12 xl:w-2/4 ">
        <div v-if="Orders.length > 0">
          <div class="flex flex-col bg-white text-center py-1 mb-3 md:py-4 md:mb-10 mx-4 rounded-lg shadow-md mt-2">
              <h2 class="text-sm md:text-lg font-bold">Track Order</h2>

          </div>
          <div class="flex flex-col  md:flex-row-reverse justify-between pr-2 mt-5 md:w-full md:m-auto">
              <p class=" my-auto text-right text-xs md:text-base pb-1 pr-2">Copy/paste ID here</p>
  
              <div class="p-float-label p-input-icon-right mx-auto md:mx-0 w-11/12 h-fit md:w-3/5 md:text-base ">
                  <i v-if="searchIcon" class="pi pi-search -mt-2 -mr-1  md:mr-2 cursor-pointer" @click="fetchOrderId()"/>
                  <i v-else class="pi pi-spin pi-spinner -mt-2 -mr-1 md:mr-2"/>
  
                  <InputText id="username" v-model.lazy.trim="value" class="h-8 w-full text-xs indent-2 shadow-md md:text-base md:h-12 " />
                  <label for="username" class="-mt-2 text-xs md:text-base h-6">Order ID</label>
              </div>
          </div>

          <div class="mt-3">
            <h2 class="text-sm text-center md:text-lg font-bold">{{ orderTitle }}</h2>
            <div class="flex flex-col pt-6 pb-24 bg-orange-300  rounded-lg text-slate-800 md:px-10">
                <div class="text-sm md:text-base font-semibold m-auto">Order ID:</div>
    
                <h2 class="text-lg font-bold text-center">{{ OrderId }}</h2>
                    <p class="w-full py-10 px-4 flex flex-row justify-between ">
                        <span class="text-xs font-semibold text-center md:text-base">Items: <br class="md:hidden"> {{ totalItemsOrders }}</span>
                        <span class="text-xs font-semibold text-center md:text-base">Date:<br class="md:hidden">{{ OrderDate }}</span>
                        <span class="text-xs font-semibold text-center md:text-base">Status:<br class="md:hidden"> {{ OrderStatus }}</span>

                    </p>
                <el-steps align-center class="text-slate-100" :active="active" finish-status="success">
                <el-step  title="Pending" />
                <el-step title="sent" />
                <el-step title="Delivered"  />
            </el-steps>
            </div>
        </div>
          
          <div class="flex flex-col h-fit w-full rounded-xl  bg-white px-2 py-2  -mt-20 shadow-md">
            <h2 class="m-auto text-base text-center font-semibold ">All Orders</h2>  
            <div class="mx-auto flex h-72 overflow-y-scroll w-full">
            
            <ul class=" font-normal text-xs mt-2 md:text-base flex flex-wrap  w-full">
                  <li v-for="(orderId, index) in Orders" :key="index+=1" class="py-1 my-2  flex flex-row w-3/6 px-1 md:w-2/4 ">
                      <span class="text-small font-bold my-auto mx-1" >{{index}}</span> 
                      <span class="w-full bg-slate-100 my-auto overflow-x-scroll p-1 rounded-md shadow-sm md:text-center">{{ orderId}}</span>
                  </li>
              </ul>
          </div>

          
          </div>
        </div>
        <div v-else class="w-full h-96 flex text-slate-800">
          <div class="m-auto text-lg font-bold">
            <h2>{{ itemExist }}</h2>
          </div>
        </div>    
          
      </div>
      
      
  
  
      <LoadVue v-else />
      
      
    </div>
  </template>
  
  <script>
    import { ElButton } from 'element-plus'
    // import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
  import router from "../router/index.js"
   import LoadVue from '../views/Load.vue'
   import {auth} from '../firebase/firebase.js'
  import { db } from '../firebase/firebase';
  import { getDoc, doc } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  
  export default {
    computed: {
        itemExist(){
          if(this.Orders.length==0){
            return "Oops! Order is currently Empty!"
          }
        }
    },
      components: {
          LoadVue,
          ElButton, 
      },
      mounted() {
        auth.onAuthStateChanged((user)=>{
          if(user){
            // return doc in 3.5s
            
              this.fetchDoc()
              setTimeout(()=>{
                if(this.Orders == null){
                  this.$toast.add({ severity: 'error', summary: 'Timeout!', detail: 'Network Timeout, You will be redirected Home now', life: 3000 });

                }
              }, 10000)
            setTimeout(()=>{
                if(this.Orders == null){
                  router.push('/Home')
                }
            }, 13000)

          }
        })

          
      },
      methods: {
    
          async fetchDoc(){
              const auth = getAuth()
              const user = auth.currentUser.displayName 

            //   fetch all ID user's orders
              const docSnap = await getDoc(doc(db, "users", user))
            
              if (docSnap.exists) {
                  const initOrder = docSnap.data().Order
                  this.Orders = initOrder.reverse()
                this.OrderId = this.Orders[0]  //get the ID of the last order

                // fetch the details of the last order by using its id
                const OrderSnap = await getDoc(doc(db, "Orders", this.OrderId))
                if (OrderSnap.exists){
                    this.totalItemsOrders = OrderSnap.data().product.length
                    this.OrderStatus = OrderSnap.data().status
                    console.log(this.OrderStatus)
                    this.OrderDate = `
                        ${OrderSnap.data().orderDate.toDate().getDate()}/
                        ${OrderSnap.data().orderDate.toDate().getMonth()+1}/
                        ${OrderSnap.data().orderDate.toDate().getFullYear()}`

                    if(this.OrderStatus == "Pending"){
                        this.active = 1
                    }
                    else if(this.OrderStatus == "Sent"){
                        this.active = 2
                    }
                    else if(this.OrderStatus == "Delivered"){
                        this.active = 3
                    }else{
                        this.active = 0

                    }
                }
              }
              else{
                  console.log("unable to get Document Snap")
              }
          },
  
          async fetchOrderId(){
              this.searchIcon = !this.searchIcon
  
              if(this.value != ''){
                this.orderTitle = "Searched Order"

                  const orderSnap = await getDoc(doc(db, "Orders", this.value))
                  if (orderSnap.exists) {
                    this.OrderId = this.value
                    this.totalItemsOrders = orderSnap.data().product.length
                    this.OrderStatus = orderSnap.data().status
                    this.OrderDate = `
                        ${orderSnap.data().orderDate.toDate().getDate()}/
                        ${orderSnap.data().orderDate.toDate().getMonth()+1}/
                        ${orderSnap.data().orderDate.toDate().getFullYear()}`

                      console.log(orderSnap.data().status)
                      
                            if(this.OrderStatus == "Pending"){
                                this.active = 1
                                this.searchIcon = !this.searchIcon
                            }
                            else if(this.OrderStatus == "Sent"){
                                this.active = 2
                                this.searchIcon = !this.searchIcon
                            }
                            else if(this.OrderStatus == "Delivered"){
                                this.active = 3
                                this.searchIcon = !this.searchIcon
                            }else{
                                this.active = 0
                                this.searchIcon = !this.searchIcon
                            }
                        
                      
                  }
                  else{
                    this.searchIcon = !this.searchIcon
                      console.log("Snap! Unable to fetch order id")
                      this.$toast.add({ severity: 'error', summary: 'Erroe', detail: 'Snap! Unable to fetch Order ID', life: 3000 });

                  }
              }
              else{
                  this.searchIcon = !this.searchIcon
                  this.$toast.add({ severity: 'error', summary: 'Empty Value!', detail: 'Please enter an Order ID', life: 3000 });
              }
          }
      },


  
      data () {
          return {
            OrderId:"",
            OrderStatus:"",
            OrderDate:"",
            totalItemsOrders:"",
            
            orderTitle:"Last Order",
            active:0,
            Orders:null,
            value:"",
            timer:0,
            searchIcon:true,
          }
      }
  
  }
  </script>
  
  <style>
  </style>