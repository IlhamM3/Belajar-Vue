<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8" src="@/assets/logo.svg" alt="logo">
                ue Project
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div id="signform"></div>
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="SignIn">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" v-model="input.email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" v-model="input.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?<RouterLink class="mr-2"  to="/signup">Sign up</RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from "@/router";
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

export default{
    data:()=>({
        input:{
            email:'',
            password:''
        }
    }),
    methods:{
        SignIn(){
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            const alert = document.getElementById('signform');
            if(email && password){
                const decryptedBytes = CryptoJS.AES.decrypt(password, 'secret key');
                const decryptPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
                
                if (this.input.email === email && this.input.password === decryptPassword ) {
                    const token = uuidv4();
                    alert.innerHTML = '<h3 class="flex justify-center text-center text-green-600 text-m">Sign In Berhasil</h3>'
                    setTimeout(() => {
                        localStorage.setItem('token', token);
                        router.replace('/dashboard');
                        window.location.reload();
                    }, 2000);

                } else {
                    alert.innerHTML = '<h3 class="flex justify-center text-center text-red-500 text-m">Silakan masukan kembali, email atau password salah</h3>'
                }
            } else{
                alert.innerHTML = '<h3 class="flex justify-center text-center text-red-500 text-m">Silakan Daftar terlebih dahulu</h3>'
            }
            
        }
    }
}
const token = localStorage.getItem('token');
if (token) {
    router.push('/dashboard')
}
</script>