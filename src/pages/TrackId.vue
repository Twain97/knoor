<template>
    <div class="flex flex-col mx-1">

      <div v-if="Orders != null">
          <div class="flex flex-col bg-white text-center py-1 mb-3 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md">
              <h2 class="text-sm md:text-lg font-bold">Track Order</h2>

          </div>
          <div class="flex flex-col md:flex-row justify-between pr-2  mt-5">
              <p class=" my-auto text-right text-xs md:text sm pb-1 pr-2">Copy/paste ID here</p>
  
              <div class="p-float-label p-input-icon-right  w-11/12 h-fit m-auto">
                  <i v-if="searchIcon" class="pi pi-search -mt-2 -mr-2 cursor-pointer" @click="fetchOrderId()"/>
                  <i v-else class="pi pi-spin pi-spinner -mt-2 -mr-2"/>
  
                  <InputText id="username" v-model.lazy.trim="value" class="h-8 w-full text-xs indent-2 md:text-sm " />
                  <label for="username" class="-mt-2 text-xs md:text-sm h-6">Order ID</label>
              </div>
          </div>

          <div class="mt-3">
            <h2 class="text-sm text-center md:text-lg font-bold">{{ orderTitle }}</h2>
            <div class="flex flex-col pt-6 pb-24 bg-orange-400  rounded-lg text-slate-800 ">
                <div class="text-sm font-semibold m-auto">Order ID:</div>
    
                <h2 class="text-lg font-bold text-center">{{ OrderId }}</h2>
                    <p class="w-full py-10 px-4 flex flex-row justify-between">
                        <span class="text-xs font-semibold text-center">Items: <br class="md:hidden"> {{ totalItemsOrders }}</span>
                    
                        <span class="text-xs font-semibold text-center">Date:<br class="md:hidden">{{ OrderDate }}</span>
                        <span class="text-xs font-semibold text-center">Status:<br class="md:hidden"> {{ OrderStatus }}</span>

                    </p>
                <el-steps align-center class="text-slate-100" :active="active" finish-status="success">
                <el-step title="Pending" />
                <el-step title="sent" />
                <el-step title="Delivered"  />
            </el-steps>
            </div>
            

          </div>
          <div class="h-fit w-full rounded-xl  bg-white px-2 py-2  -mt-20 shadow-md">
            <h2 class="m-auto text-base text-center font-semibold ">List of Orders</h2>  
            <div class="h-72 overflow-y-scroll ">
            
            <ul class="font-normal text-xs mt-2 md:text-sm flex flex-wrap  w-full ">
                  <li v-for="(orderId, index) in Orders" :key="index+=1" class="py-1 my-2 flex flex-row  w-2/4">
                      <span class="text-small font-bold mx-1" >{{index}}</span> 
                      <span class="bg-slate-100  overflow-x-scroll ">{{ orderId}}</span>
                  </li>
              </ul>
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
  import { db } from '../firebase/firebase';
  import { getDoc, doc } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  
  export default {
      components: {
          LoadVue,
          ElButton, 
        //   UploadFilled
      },
      mounted() {
        // return doc in 3.5s
        setTimeout(()=>{
          this.fetchDoc()
          }, 5000)
        //   timer to keep track how long the doc takes to fetch
          const interval = setInterval(() => {
             this.timer =  this.timer +1
              console.log(this.timer)
            //   if the doc takes more than 7this.searchIcon, 
            // alert then direct home
              if(this.timer >= 9 && this.Orders == null){
                  this.$toast.add({ severity: 'error', summary: 'Error Refreshing', detail: "Unable to refresh data, You'll be redirect home then retry", life: 3000 });
                //   router.push('/Home')
                }
          }, 1000);

        //   either the doc is fetch in 7s or not 
        //   clear the interval from continuing reading in 7.5s
        setTimeout(()=>{
            clearInterval(interval)
              

        }, 10000)
          
      },
      methods: {
        // next() {
        //     if (this.active < 3) {
        //         this.active++;
        //     } else {
        //         this.active = 0;
        //     }
        // },
          async fetchDoc(){
              const auth = getAuth()
              const user = auth.currentUser.displayName 

            //   fetch all ID user's orders
              const docSnap = await getDoc(doc(db, "users", user))
            
              if (docSnap.exists) {
                  this.Orders = docSnap.data().Order
                this.OrderId = docSnap.data().Order[0]  //get the ID of the last order

                // fetch the details of the last order by using its id
                const OrderSnap = await getDoc(doc(db, "Orders", docSnap.data().Order[0]))
                if (OrderSnap.exists){
                    this.totalItemsOrders = OrderSnap.data().product.length
                    this.OrderStatus = OrderSnap.data().status
                    console.log(this.OrderStatus)
                    this.OrderDate = `
                        ${OrderSnap.data().orderDate.toDate().getDate()+1}/
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
                        ${orderSnap.data().orderDate.toDate().getDate()+1}/
                        ${orderSnap.data().orderDate.toDate().getMonth()+1}/
                        ${orderSnap.data().orderDate.toDate().getFullYear()}`

                      console.log(orderSnap.data().status)
                        if (orderSnap.data().status == "Pending") {
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
                      this.searchIcon = !this.searchIcon
                  }
                  else{
                      console.log("Snap! Unable to fetch order id")
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