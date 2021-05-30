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
                                    <h2 style="margin-left:5px;margin-top:8px;font-size:30px!important;font-weight: bold;color:#454562;" class="mr-5 text-lg font-medium truncate">Nouveau compte utilisateur</h2>
                                   
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
                            <!--- Section fist half-->
                            <div class="col-span-4 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1" >
                                    <div class="" style="border-radius:20px!important;">
                                        <h1 style="float: inline-start;color:#454562;font-size: 18px;">Profil</h1>
                                        <p style="float: inline-start;color:#454562;font-size: 18px;">Veuillez renseigner les informations du compte utilisateur</p>
                                  
                                  
                                        
                                    </div>
                                </div>
                            </div>
                            <!--- Section two half-->
                            <div class="col-span-8 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div class="bg-white p-4 shadow-lg rounded-lg" style="border-radius:20px!important;">
                                        <div class="flex justify-left">
                                        <div class="flex">
                                            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Image de profil</h1>
                                        </div>
                                        </div>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="file" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
                                        

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                                            <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Prénom</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Prénom" />
                                            </div>
                                            <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Nom</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Nom" />
                                            </div>
                                        </div>
                                         <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                                            <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Adresse mail</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="contact@example.com" />
                                            </div>
                                            <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Téléphone</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="6 990 980 786" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

      <!--- Section fist half-->
                            <div class="col-span-4 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1" >
                                    <div class="" style="border-radius:20px!important;">
                                        <h1 style="float: inline-start;color:#454562;font-size: 18px;">Sécurité</h1>
                                        <p style="text-align:left;float: inline-start;color:#454562;font-size: 18px;">Veuillez saisir les informations d’authentification du compte utilisateur</p>
                                  
                                  
                                        
                                    </div>
                                </div>
                            </div>
                            <!--- Section two half-->
                            <div class="col-span-8 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div class="bg-white p-4 shadow-lg rounded-lg" style="border-radius:20px!important;">
                                  
                                           <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Type de compte utilisateur</label>
                                             
										<select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                                            <option value="">Visiteur</option>
                                            <option value="">Rédacteur</option>
                                       </select>


                                            </div>
                                               <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Mot de passe</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password"  />
                                             <label style="color:#6B7280!important;" class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Votre mot de passe doit comporter plus de 6 caractères et doit contenir au moins 1 majuscule, 1 minuscule et 1 chiffre.</label>
                                            </div>
                                               <div class="grid grid-cols-1">
                                                <label class="uppercase md:text-sm text-xs text-gray-500 text-dark font-semibold">Confirmation du mot de passe</label>
                                                <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" />
                                            </div>
<div>
                                                                <button v-on:click="newaccount()"  class="button">Ajouter un visiteur</button>
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
        rapportrh(){
            this.$router.push('rapportrh');
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
            this.$router.push('users');
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