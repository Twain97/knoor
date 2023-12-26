<template>
    <div v-if="userName != null" class="w-full py-4 px-2 bg-slate-100 flex">
        <div  class="w-full md:w-2/4 py-4 px-2 lg:px-6 bg-white flex flex-col col md:m-auto text-xs md:text-base rounded-lg shadow-md">
            <font-awesome-icon icon="fa-solid fa-user" id="icon"   class="mt-4 mx-auto w-10 h-10 md:w-20 md:h-20 text-slate-800  " />
            <div class="mt-4 flex flex-col w-full lg:mx-auto lg:w-5/6 space-y-3">
                <div><b class="mr-2">Name:</b> {{ userName }}</div>
                <div><b class="mr-2">Email:</b> {{ userEmail }}</div>
                <div class="flex justify-between my-auto "><b class="mr-2 md:mr-2 my-auto">Verified Email:</b> <span class="my-auto">{{ verified }}</span> 
                <Button v-if="Button" id="button"  label="Verify" size="small" @click="sendEmail()"
                class=" py-2 px-3  text-sm md:text-base font-semibold text-slate-800 m-auto shadow-sm shadow-black " /></div>
                <div><b>Joined on:</b> {{ createdTime }} o'clock</div>
                <div class="flex flex-row justify-between text-blue-700 pt-10">
                    <router-link to="/ResetPassword"> Reset Password</router-link>
                    <router-link to="#" @click="logout()" class="flex justify-between my-auto">Log out</router-link>
                </div>
            </div>
        </div>
    </div>
   

    <LoadVue v-else />

</template>

<script>
import LoadVue from '../views/Load.vue'
import {auth} from '../firebase/firebase.js'
import { ref } from 'vue'

export default {
    components:{
        LoadVue
    },
    mounted(){
        auth.onAuthStateChanged((user)=>{
          if(user){
            this.userName = user.displayName
            this.userEmail = user.email

            const  created= auth.currentUser.metadata.creationTime.split(':', String(1))
            this.createdTime = String(created)
            
            if(user.emailVerified){
                console.log('verified')
                this.verified = "Verified"
                this.Button = false
            }else{
                console.log("not verified")
                this.verified= "Not verified"
            }
          }
        })
    },
    methods: {
        logout(){
         this.$store.dispatch('logOut')
        },
        sendEmail(){
            this.$toast.add({ severity: 'success', summary: 'Email Sent', detail: 'Please check your Email', life: 3000 });

            const auth = getAuth();
            sendEmailVerification(auth.currentUser)
            .then(() => {
                // router.push('/Home')
            });
  
        },
    },
// async setup(){
//     var user = ref(null)
//     var userName = ref(null)
//     var verified = ref(null)
//     var Button = true
//     var createdTime = ref(null)

//     console.log(auth.currentUser)
//     const details = async() =>{ 
//         await new Promise ((resolve)=>setTimeout(resolve, 5000))
//         user =  auth.currentUser.email
//         userName = auth.currentUser.displayName
       
       
//         const  created= auth.currentUser.metadata.creationTime.split(':', String(1))
//         createdTime = String(created)
        
//          if(auth.currentUser.emailVerified ==false){
//             return verified = "Not verified"
//         }else{
//             Button = false
//             return verified = "Verified"
            
//         }
//          // if(auth.currentUser.displayName == null){
//         //     return userName = 'Not updated yet'
//         // }
//     }

//     await details();
//     return{
//      Button,
//      user,
//      userName,
//     verified,
//     createdTime
//     }
    
// },
data(){
    return{
        userName:null,
        userEmail:null,
        createdTime:null,
        verified:'',
        Button:true
    }
}
}
</script>

<style scoped >
#button{
  background: rgba(96, 109, 129, 0.3);
  border: none;
  color:rgb(46, 43, 43);
}
#button:hover{
  background: rgba(96, 109, 129, 1);
  color: #e2dfdf;
 
}
</style>