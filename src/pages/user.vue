<template>
    <div class="w-full md:w-2/4 py-4 px-4 md:px-6 bg-white flex flex-col col md:m-auto text-xs md:text-base">
        <font-awesome-icon icon="fa-solid fa-user" id="icon"   class="mt-4 mx-auto w-10 h-10 md:w-20 md:h-20 text-slate-800  " />
        <div class="mt-4 flex flex-col space-y-3">
            <div><b class="mr-2">Name:</b> {{ userName }}</div>
            <div><b class="mr-2">Email:</b> {{ user }}</div>
            <div class="flex justify-between my-auto "><b class="mr-2 md:mr-2 my-auto">Verified Email:</b> <span class="my-auto">{{ verified }}</span> 
            <Button v-if="Button" id="button"  label="Verify" size="small" @click="sendEmail()"
            class=" px-2 h-2 text-sm md:text-base font-semibold text-slate-800 m-auto shadow-sm shadow-black " /></div>
            <div><b>Joined on:</b> {{ createdTime }}</div>
            <div class="flex flex-row justify-between text-blue-700 pt-10">
                <router-link to="/ResetPassword"> Reset Password</router-link>
                <router-link to="#" @click="logout()" class="flex justify-between my-auto">Log out</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {auth} from '../firebase/firebase.js'
import { ref } from 'vue'

export default {
    methods: {
        logout(){
         this.$store.dispatch('logOut')
        },
        sendEmail(){
            this.$toast.add({ severity: 'success', summary: 'Email Sent', detail: 'Please check your Email', life: 3000 });

//             const auth = getAuth();
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // router.push('/Home')
//   });
  
        },
    },
async setup(){
    var user = ref(null)
    var userName = ref(null)
    var verified = ref(null)
    var Button = true
    var createdTime = ref(null)

    console.log(auth.currentUser)
    const details = async() =>{ 
        await new Promise ((resolve)=>setTimeout(resolve, 5000))
        user =  auth.currentUser.email
        userName = auth.currentUser.displayName
        const  created= auth.currentUser.metadata.creationTime.split('05', String(1))
        createdTime = String(created)
        
         if(auth.currentUser.emailVerified ==false){
            return verified = "Not verified"
        }else{
            Button = false
            return verified = "Verified"
            
        }
    }

    await details();
    return{
     Button,
     user,
     userName,
    verified,
    createdTime
    }
    
},
data(){
    return{
        // user:'',
        verify:''
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