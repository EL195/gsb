<template> 
<link href="https://unpkg.com/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet">
<div class="flex h-screen bg-gray-800 " >
        <!-- Desktop sidebar -->
        <aside class="z-20 flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-gray-800 md:block">
            <div>
                <div style="padding-left:30px;padding-top: 50px;" class="text-white">
                    <div class="flex p-2  bg-gray-800">
                        <div class="flex py-3 px-2 items-center">
                            <p class="text-2xl text-white-400 font-semibold">GSB</p>
                        </div>
                    </div>
                    <div>
                        <ul class="mt-6 leading-10">
                            <li class="relative px-2 py-1 ">
                                <a v-on:click="rapportv()" class="inline-flex  w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                                    href=" #">
                                    <img   svg-inline class="icon" src='../assets/img/svg/menu.svg' width="20" height="20"  alt="Praticiens" />  
                                    <span class="ml-1">Accueil</span>
                                </a>
                            </li>
                            <li class="relative px-2 py-1 ">
                                <a v-on:click="praticiens()" class="inline-flex  w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                                    href=" #">
                                     <img   svg-inline class="icon" src='../assets/img/svg/user-1.svg' width="20" height="20"  alt="Praticiens" />  
                                    <span  class="ml-1">Praticiens</span>
                                    
                                </a>
                            </li>
                            <li class="relative px-2 py-1 ">
                                <a v-on:click="rapportv()" class="inline-flex  w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                                    href=" #">
                                    <img   svg-inline class="icon" src='../assets/img/svg/contract.svg' width="20" height="20"  alt="Praticiens" />                                         
                                    <span class="ml-1">Rapports</span>
                                </a>
                            </li>
                             <li class="relative px-2 py-1 ">
                                <a v-on:click="account()" class="inline-flex  w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                                    href=" #">
                                    <img   svg-inline class="icon" src='../assets/img/svg/user_ico.svg' width="20" height="20"  alt="Praticiens" />                                        
                                    <span class="ml-1">Mon compte</span>
                                </a>
                            </li>
                             <li class="relative px-2 py-1 ">
                                <a v-on:click="login()" class="inline-flex  w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                                    href=" #">
                                    <img   svg-inline class="icon" src='../assets/img/svg/padlock.svg' width="20" height="20"  alt="Praticiens" />                                              
                                    <span class="ml-1">Déconnexion</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
        <div class="flex flex-col flex-1 w-full overflow-y-auto">
            <header class="z-30 py-4  bg-gray-800  ">
            </header>
            <main class="">
                <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                            <div class="col-span-10 mt-8">
                                <div class="flex items-center h-10 intro-y">
                                  <img   svg-inline class="icon" src='../assets/img/svg/user_ico.svg' width="20" height="20"  alt="Praticiens" />                                         
                                    <h2 style="margin-left:5px;margin-top:8px;font-size:30px!important;font-weight: bold;color:#454562;" class="mr-5 text-lg font-medium truncate">Nouveau rapport</h2>
                                   
                                </div>
                            </div>
                             <div class="col-span-2 mt-4">
                                <div class="flex items-right h-10 intro-y" style="margin-top:-30px;">
                                    <span  class="ml-1" >
                                                                        <div style="background:white!important;padding:10px;border-radius:20px;"  class="flex mt-3">
                                                                                <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" class="h-10 w-10 rounded-full mr-2 " />
                                                                                <div >
                                                                                <p style="text-align:left!important;font-size:10px!important;" class="font-semibold text-gray-700 text-sm capitalize" > Eric Dampierre </p>
                                                                                <p style="font-size:8px!important;"  class="text-gray-600 text-xs"> e.dampierre@ep-ccimp.com </p>
                                                                                </div>
                                                                          </div>
                                    </span>
                                </div>
                            </div>
        
                            <div class="col-span-4 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1" >
                                    <div class="" style="border-radius:20px!important;">
                                        <h1 style="float: inline-start;color:#454562;font-size: 18px;">Rédaction</h1>
                                        <p style="text-align:left;float: inline-start;color:#454562;font-size: 18px;">Veuillez saisir le titrre et le conntenu de votre rapport</p>
                                  
                                  
                                        
                                    </div>
                                </div>
                            </div>
                            <!--- Section two half-->
                            <div class="col-span-8 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div class="bg-white p-4 shadow-lg rounded-lg" style="border-radius:20px!important;">
                                  
                                     


                                               <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Titre</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password"  />
                                           
                                            </div>
                                               <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Bilan</label>
                                              <textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Votre bilan" spellcheck="false"></textarea>
                                            </div>
<div>
                                                                <button v-on:click="add()"  class="button">Ajouter un rapport</button>
                                                            </div>

                                 

                                    </div>
                                </div>
                            </div>






                         </div>
                    </div>
                </div>
            </main>
        </div>
</div>


</template>

<script>
export default {
  name: 'Praticiens',
  props: {
  //  msg: String
  },
   methods: {
    //redirect to dashboard
        login(){
            this.$router.push('login');
        },
        //redirect to forgot page
        rapportv(){
            this.$router.push('rapportv');
        },
         //redirect to account page if guest login ok
        account(){
            this.$router.push('account');
        },
         //redirect to accounts page if rh login ok
        listaccount(){
            this.$router.push('listaccount');
        },
         //redirect to accounts page if rh login ok
        add(){
            this.$router.push('rapportv');
        },
        //redirect to praticiens page if  login ok
        praticiens(){
            this.$router.push('praticiens');
        },
        //redirect to praticiens page if guest login ok
        accountedit(){
            this.$router.push('accountedit');
        },
        //redirect to new account page if rh login ok
         newaccount(){
            this.$router.push('newaccount');
        },
        //redirect to edit rapport page if guest login ok
         editrapport(){
            this.$router.push('editrapport');
        },
        //redirect to rapport page if rh login ok
         rapportitemrh(){
            this.$router.push('editrapport');
        },
        //redirect to rapport page if guest login ok
         rapportitemv(){
            this.$router.push('editrapport');
        },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,800;1,300&display=swap');
.bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: #1B173C!important;
}
.active-tab{
    border-bottom: 3px solid rgb(69, 69, 98, 0.61);
}

.active-tab p{
 padding: 10px;
}
.ml-1 {
    margin-left: 4rem!important;
}
.tab p{
 padding: 10px;
}
.shadow {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}
.border-purple-300 {
    --tw-border-opacity: 1;
    border-color: fgray !important;
}
.text-2xl {
    font-size: 4.5rem;
    font-weight: 400!important;
    line-height: 2rem;
    color: white;
}
.border-gray-200 {
    --tw-border-opacity: 1;
    border-color: white;
}
.border-b {
    border-bottom-width: 0px!important;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
    text-align: left;
}
.border-purple-300 {
    --tw-border-opacity: 1;
    border-color: #E5E7EB!important;
}
.text-gray-500 {
    --tw-text-opacity: 1;
    color: rgba(107,114,128,var(--tw-text-opacity));
    color: #374151 !important;
    text-transform: inherit !important;
}
.bg-green-400 {
    --tw-bg-opacity: 1;
    background-color: #1B173C!important;
    border: 2px solid #1B173C!important;
}
.button {
    background-color: #2D2A4C;
    border: none;
    color: white;
    padding: 10px;
    text-align: right;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin-left: auto;
    cursor: pointer;
    border-radius: 50px;
}
</style>