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
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0C8.86528 0 5.9082 2.95708 5.9082 6.5918C5.9082 10.2265 8.86528 13.1836 12.5 13.1836C16.1347 13.1836 19.0918 10.2265 19.0918 6.5918C19.0918 2.95708 16.1347 0 12.5 0ZM12.5 11.7188C9.673 11.7188 7.37305 9.4188 7.37305 6.5918C7.37305 3.7648 9.673 1.46484 12.5 1.46484C15.327 1.46484 17.627 3.7648 17.627 6.5918C17.627 9.4188 15.327 11.7188 12.5 11.7188Z" fill="#68677F"/>
                                        <path d="M14.5426 14.6973H10.4573C7.07832 14.6973 3.7436 16.2574 1.51367 19.6024V25H23.4863V19.6024C21.2596 16.2622 17.9258 14.6973 14.5426 14.6973ZM22.0215 23.5352H22.0215H2.97852V20.0506C4.68901 17.6115 7.46836 16.1621 10.4574 16.1621H14.5427C17.5317 16.1621 20.311 17.6115 22.0215 20.0506V23.5352Z" fill="#68677F"/>
                                        </svg>                                        
                                    <h2 style="margin-left:5px;margin-top:8px;font-size:30px!important;font-weight: bold;color:#454562;" class="mr-5 text-lg font-medium truncate">Praticiens</h2>
                                   
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
                                    <div class="bg-white p-4 shadow-lg rounded-lg" style="border-radius:20px!important;">
                                        <h1 style="float: inline-start;color:#454562;font-size: 18px;">Tous les Praticiens</h1>
                                        <div style="float: right!important; margin-top: 0px;" class="flex text-green-500">
                                           
                                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0)">
                                                <path d="M14.9068 0.489823H1.38495C1.14646 0.489388 0.927823 0.618097 0.818804 0.823074C0.708281 1.03081 0.727679 1.28097 0.868877 1.47069L5.82271 8.21239C5.82436 8.21472 5.82617 8.2169 5.82782 8.21922C6.00782 8.45398 6.10511 8.73827 6.10571 9.03056V14.527C6.10466 14.6899 6.17082 14.8462 6.28961 14.9617C6.40841 15.0771 6.5699 15.1419 6.73832 15.1419C6.82403 15.1419 6.90869 15.1254 6.98779 15.0937L9.77146 14.0682C10.0209 13.9947 10.1865 13.7674 10.1865 13.4936V9.03056C10.1869 8.73842 10.2844 8.45398 10.4642 8.21922C10.4659 8.2169 10.4677 8.21472 10.4693 8.21239L15.423 1.4704C15.5642 1.28082 15.5836 1.03081 15.4731 0.823074C15.3641 0.618097 15.1454 0.489388 14.9068 0.489823ZM9.84349 7.77862C9.5668 8.14136 9.41718 8.57993 9.41628 9.03056V13.4032L6.87561 14.339V9.03056C6.87471 8.57993 6.72509 8.14136 6.44825 7.77862L1.63893 1.23361H14.653L9.84349 7.77862Z" fill="#717187"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0">
                                                <rect width="15.1667" height="14.6522" fill="white" transform="translate(0.555542 0.489853)"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                        </div>
                                        <div style="!important;float: right!important;margin-top: 0px;" class="flex text-green-500">
                                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0705 9.95254C11.6476 9.54519 10.9717 9.52031 10.518 9.89529L9.76195 9.16503C10.6172 8.21699 11.0878 7.00185 11.0866 5.74442C11.0866 2.86551 8.66226 0.523254 5.68226 0.523254C2.70227 0.523254 0.277771 2.86537 0.277771 5.74442C0.277771 8.62334 2.70212 10.9654 5.68226 10.9654C6.98384 10.9666 8.24195 10.5121 9.22312 9.68572L9.97918 10.4161C9.59088 10.8545 9.61678 11.5076 10.0384 11.9161L13.3004 15.0674C13.4493 15.2113 13.6907 15.2113 13.8395 15.0674L15.3327 13.6247C15.4816 13.481 15.4816 13.2479 15.3327 13.104L12.0705 9.95254ZM5.68241 10.229C3.11856 10.2291 1.04008 8.22131 1.04008 5.74442C1.03993 3.26754 3.11826 1.2597 5.68211 1.2597C8.24597 1.2597 10.3243 3.26754 10.3243 5.74442C10.3215 8.22001 8.24478 10.2263 5.68226 10.229H5.68241ZM13.5698 14.2862L10.5773 11.3952C10.4287 11.2514 10.4287 11.0184 10.5773 10.8745L10.9925 10.4734C11.1414 10.3298 11.3826 10.3298 11.5315 10.4734L14.524 13.3644L13.5698 14.2862Z" fill="#717187"/>
                                                </svg>
                                        </div>
                                        <div class="mt-4">
                                            <div class="flex flex-col">
                                                <div class="-my-2 overflow-x-auto">
                                                    <div class="py-2 align-middle inline-block min-w-full">
                                                        <div
                                                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                                  
                                                                            <div class="flex mt-3">
                                                                                <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" class="h-10 w-10 rounded-full mr-2 object-cover" />
                                                                                <div>
                                                                                <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left!important;color:#454562;font-size: 16px;"> Eric Dampierre </p>
                                                                                <p class="text-gray-600 text-xs"> e.dampierre@ep-ccimp.com </p>
                                                                                </div>
                                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!--- Section two half-->
                            <div class="col-span-8 mt-5">
                                <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div class="bg-white p-4 shadow-lg rounded-lg" style="border-radius:20px!important;">
                                        
                                        <h1 style="float: inline-start;color:#454562;font-size: 18px;">Eric Dampierre</h1><br/>
                                        <p style="float: inline-start;color:#454562;font-size: 14px;" class="text-gray-600 text-xs"> e.dampierre@ep-ccimp.com </p>
                                        <div style="color:black!important; padding:5px;border-radius:30px;background:#C4C4C4; float: right!important;margin-right: 25px !important; margin-top: -20px;" class="flex text-green-500">
                                          <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.0135" cy="12.8605" rx="12.2426" ry="12.2093" fill="#C4C4C4" fill-opacity="0.3"/>
                                            <g clip-path="url(#clip0)">
                                            <path d="M16.2051 9.32828C15.9518 9.32828 15.7464 9.52284 15.7464 9.76289V17.9772C15.7464 18.217 15.9518 18.4118 16.2051 18.4118C16.4585 18.4118 16.6639 18.217 16.6639 17.9772V9.76289C16.6639 9.52284 16.4585 9.32828 16.2051 9.32828Z" fill="black"/>
                                            <path d="M10.7921 9.32828C10.5387 9.32828 10.3333 9.52284 10.3333 9.76289V17.9772C10.3333 18.217 10.5387 18.4118 10.7921 18.4118C11.0454 18.4118 11.2508 18.217 11.2508 17.9772V9.76289C11.2508 9.52284 11.0454 9.32828 10.7921 9.32828Z" fill="black"/>
                                            <path d="M6.8469 8.12948V18.8375C6.8469 19.4704 7.09185 20.0648 7.51977 20.4912C7.94572 20.9189 8.53849 21.1617 9.15886 21.1627H17.8383C18.4589 21.1617 19.0516 20.9189 19.4774 20.4912C19.9053 20.0648 20.1503 19.4704 20.1503 18.8375V8.12948C21.0009 7.91556 21.5521 7.13699 21.4383 6.31003C21.3244 5.48324 20.5809 4.86477 19.7007 4.8646H17.352V4.32133C17.3547 3.86447 17.164 3.42578 16.8226 3.10304C16.4813 2.78048 16.0175 2.60086 15.5353 2.6046H11.4619C10.9797 2.60086 10.5159 2.78048 10.1745 3.10304C9.83317 3.42578 9.64251 3.86447 9.6452 4.32133V4.8646H7.29649C6.41629 4.86477 5.67281 5.48324 5.55885 6.31003C5.44506 7.13699 5.99626 7.91556 6.8469 8.12948ZM17.8383 20.2934H9.15886C8.37453 20.2934 7.76437 19.6551 7.76437 18.8375V8.16767H19.2328V18.8375C19.2328 19.6551 18.6227 20.2934 17.8383 20.2934ZM10.5627 4.32133C10.5596 4.09502 10.6535 3.8772 10.823 3.71745C10.9924 3.55769 11.2228 3.46992 11.4619 3.47383H15.5353C15.7744 3.46992 16.0048 3.55769 16.1741 3.71745C16.3437 3.87703 16.4376 4.09502 16.4345 4.32133V4.8646H10.5627V4.32133ZM7.29649 5.73383H19.7007C20.1567 5.73383 20.5264 6.08407 20.5264 6.51613C20.5264 6.9482 20.1567 7.29844 19.7007 7.29844H7.29649C6.84044 7.29844 6.47077 6.9482 6.47077 6.51613C6.47077 6.08407 6.84044 5.73383 7.29649 5.73383Z" fill="black"/>
                                            <path d="M13.4986 9.32828C13.2452 9.32828 13.0399 9.52284 13.0399 9.76289V17.9772C13.0399 18.217 13.2452 18.4118 13.4986 18.4118C13.752 18.4118 13.9573 18.217 13.9573 17.9772V9.76289C13.9573 9.52284 13.752 9.32828 13.4986 9.32828Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect width="19.5882" height="18.5581" fill="white" transform="translate(3.70917 2.60464)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>


                                        </div>
                                        <div style="color:black!important; padding:5px;border-radius:30px;background:#C4C4C4; float: right!important;margin-right: 25px !important; margin-top: -20px;" class="flex text-green-500">
                                          <svg width="16" height="16" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="15.5489" cy="12.8605" rx="12.2426" ry="12.2093" fill="#C4C4C4" fill-opacity="0.3"/>
                                            <g clip-path="url(#clip0)">
                                            <path d="M18.5743 7.52642H16.3802V3.95388C16.3802 3.62762 16.1151 3.36325 15.788 3.36325H4.53625C4.20917 3.36325 3.94401 3.62762 3.94401 3.95388V7.52642H1.74994C0.988002 7.52642 0.368042 8.14462 0.368042 8.90456V16.4824C0.368042 17.2422 0.988002 17.8605 1.74994 17.8605H3.94401V20.7903C3.94401 21.1166 4.20917 21.3809 4.53625 21.3809H15.7879C16.115 21.3809 16.3802 21.1166 16.3802 20.7903V17.8605H18.5742C19.3362 17.8605 19.9561 17.2422 19.9561 16.4824V8.90456C19.9562 8.14469 19.3362 7.52642 18.5743 7.52642ZM5.12849 4.54452H15.1957V7.52642H5.12849V4.54452ZM15.1957 20.1997H5.12849V14.3403H15.1957V20.1997ZM18.7717 16.4824C18.7717 16.5891 18.6813 16.6793 18.5743 16.6793H16.3802V13.7496C16.3802 13.4234 16.1151 13.159 15.788 13.159H4.53625C4.20917 13.159 3.94401 13.4234 3.94401 13.7496V16.6793H1.74994C1.64294 16.6793 1.55253 16.5891 1.55253 16.4824V8.90456C1.55253 8.79778 1.64294 8.70768 1.74994 8.70768H4.53625H15.7879H18.5742C18.6812 8.70768 18.7716 8.79778 18.7716 8.90456V16.4824H18.7717Z" fill="black"/>
                                            <path d="M15.7879 11.7735C16.2532 11.7735 16.6303 11.3973 16.6303 10.9333C16.6303 10.4694 16.2532 10.0932 15.7879 10.0932C15.3227 10.0932 14.9455 10.4694 14.9455 10.9333C14.9455 11.3973 15.3227 11.7735 15.7879 11.7735Z" fill="black"/>
                                            <path d="M12.8566 15.5058H7.46761C7.14053 15.5058 6.87537 15.7702 6.87537 16.0964C6.87537 16.4227 7.14053 16.687 7.46761 16.687H12.8566C13.1836 16.687 13.4488 16.4227 13.4488 16.0964C13.4488 15.7702 13.1837 15.5058 12.8566 15.5058Z" fill="black"/>
                                            <path d="M12.8566 17.8526H7.46761C7.14053 17.8526 6.87537 18.117 6.87537 18.4433C6.87537 18.7695 7.14053 19.0339 7.46761 19.0339H12.8566C13.1836 19.0339 13.4488 18.7695 13.4488 18.4433C13.4488 18.117 13.1837 17.8526 12.8566 17.8526Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect width="19.5882" height="19.5349" fill="white" transform="translate(0.368042 2.60464)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>

                                        </div>
                                        <div style="color:black!important; padding:5px;border-radius:30px;background:#C4C4C4; float: right!important;margin-right: 25px !important; margin-top: -20px;" class="flex text-green-500">
                                          <svg width="16" height="16" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="12.3314" cy="12.8605" rx="12.2426" ry="12.2093" fill="#C4C4C4" fill-opacity="0.3"/>
                                            <g clip-path="url(#clip0)">
                                            <path d="M18.8201 5.93318H4.82851C3.62133 5.93359 2.64288 6.90952 2.64233 8.11341V16.2543C2.64288 17.4582 3.62133 18.4342 4.82851 18.4345H18.8201C20.0272 18.4342 21.0057 17.4582 21.0062 16.2543V8.11341C21.0057 6.90952 20.0272 5.93359 18.8201 5.93318ZM4.82851 6.80527H18.8201C19.4498 6.80691 19.9902 7.25263 20.1099 7.86909L11.8243 12.4739L3.53867 7.86909C3.65836 7.25263 4.19876 6.80691 4.82851 6.80527ZM18.8201 17.5582H4.82851C4.10502 17.556 3.51885 16.9716 3.51681 16.25V8.85469L11.61 13.3546C11.6756 13.3905 11.7493 13.4102 11.8243 13.4114C11.8996 13.4122 11.9735 13.3926 12.0385 13.3546L20.1318 8.85469V16.25C20.1312 16.9722 19.5442 17.5575 18.8201 17.5582Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect width="19.5882" height="19.5349" fill="white" transform="translate(2.04767 2.60464)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>

                                        </div>
                                        <div style="color:black!important; padding:5px;border-radius:30px;background:#C4C4C4; float: right!important;margin-right: 25px !important; margin-top: -20px;" class="flex text-green-500">
                                            <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.0315" cy="12.8605" rx="12.2426" ry="12.2093" fill="#C4C4C4" fill-opacity="0.3"/>
                                            <path d="M20.5895 3.94604C19.6022 2.96318 18.0034 2.96318 17.0161 3.94604L16.1217 4.84297L6.59997 14.3337L6.57974 14.3541C6.57484 14.3589 6.57484 14.3641 6.56962 14.3641C6.5595 14.3793 6.54433 14.3943 6.53437 14.4094C6.53437 14.4144 6.52915 14.4144 6.52915 14.4195C6.51903 14.4346 6.51413 14.4447 6.50385 14.4599C6.49895 14.4649 6.49895 14.4698 6.49389 14.475C6.48884 14.4901 6.48378 14.5002 6.47856 14.5153C6.47856 14.5202 6.47366 14.5202 6.47366 14.5254L4.36108 20.8609C4.29911 21.0413 4.34622 21.241 4.48234 21.3749C4.57798 21.469 4.70699 21.5217 4.84121 21.5212C4.89606 21.5202 4.95045 21.5117 5.00293 21.496L11.3508 19.3841C11.3557 19.3841 11.3557 19.3841 11.3609 19.3792C11.3769 19.3745 11.3922 19.3677 11.4063 19.3589C11.4102 19.3584 11.4137 19.3567 11.4165 19.354C11.4316 19.3439 11.4518 19.3336 11.467 19.3235C11.482 19.3136 11.4973 19.2985 11.5125 19.2884C11.5176 19.2832 11.5225 19.2832 11.5225 19.2783C11.5277 19.2733 11.5378 19.2684 11.5429 19.2581L21.959 8.87028C22.9446 7.88568 22.9446 6.29125 21.959 5.30681L20.5895 3.94604ZM11.1891 18.1996L7.67152 14.6918L16.4755 5.91176L19.993 9.41957L11.1891 18.1996ZM7.17606 15.6242L10.249 18.6886L5.63467 20.2208L7.17606 15.6242ZM21.2465 8.16459L20.7107 8.70395L17.193 5.19582L17.734 4.65662C18.3258 4.06697 19.2849 4.06697 19.8768 4.65662L21.2514 6.02749C21.8387 6.62029 21.8365 7.57462 21.2465 8.16459Z" fill="black"/>
                                            </svg>

                                        </div>
                                        <div class="mt-4">
                                            <div class="flex flex-col">
                                                <div class="-my-2 overflow-x-auto">
                                                     <div class="py-2 align-middle inline-block min-w-full">
                                                        <div
                                                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                                  
                                                                            <div class="flex mt-3">
                                                                                <div class="active-tab">
                                                                                <p class="font-semibold text-gray-700 text-sm capitalize" style="color:#454562;font-size: 14px;"> Profil </p>
                                                                                </div>
                                                                               
                                                                          </div>
                                                                                            <div class="grid grid-cols-12 gap-6">
                                                                                                 <div class="col-span-4 mt-5">
                                                                                                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                                                                                        <div class="p-4" style="border-right:2px solid #B3B3BF!important;">
                                                                                                         <div class="flex mt-3">
                                                                                                                    <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" class="h-10 w-10 rounded-full mr-2 object-cover" />
                                                                                                                    <div>
                                                                                                                    </div>
                                                                                                                    
                                                                                                                   
                                                                                                            </div>
                                                                                                            <br/>
                                                                                                            <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;line-height: 25px;"> <span style="border-bottom:2px solid #9293A3;">Pro</span>fil<br/> personnel</p><br/>
                                                                                                             <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> Nom </p>
                                                                                                             <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> Eric Dampierre </p>
                                                                                                             <br/>
                                                                                                             <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> E-mail </p>
                                                                                                             <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> e.dampierre@ep-ccimp.com </p>
                                                                                                             <br/>
                                                                                                             <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> Téléphone </p>
                                                                                                             <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> +33 6 09 88 77 66</p>
                                                                                                             <br/>
                                                                                                             <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> Entreprise </p>
                                                                                                             <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> Pôle médical du doubs </p>
                                                                                                             <br/>
                                                                                                             <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> Site Web </p>
                                                                                                             <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> www.drnour.fr </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div class="col-span-8 mt-5">
                                                                                                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                                                                                        <div class="p-4"  >
                                                                                                       <p class="font-semibold text-gray-700 text-sm capitalize" style="text-align:left; color:#9293A3!important;font-size: 16px;"> <span style="border-bottom:2px solid #9293A3;">Dé</span>tails </p>

                                                                                                                <div class="grid grid-cols-12 gap-6">
                                                                                                                     <div class="col-span-12 mt-5">
                                                                                                                            <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                                                                                                                    <div class="p-4" style="background:rgb(196, 196, 196, 0.1);">
                                                                                                                                        <p style="color:#64637C!important;text-align:left!important;" class="text-gray-700 text-xs"> <span style="color:black; font-weigh:900!important;">Adresse :</span> 4 rue de Besançon </p><br/>
                                                                                                                                         <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> <span style="color:black; font-weigh:900!important;">Ville :</span> 25300, Doubs </p><br/>
                                                                                                                                          <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> <span style="color:black; font-weigh:900!important;">Spécialité :</span> Médecine du sport </p><br/>
                                                                                                                                           <p style="color:#64637C!important;text-align:left!important;" class="text-gray-600 text-xs"> <span style="color:black; font-weigh:900!important;">Notes :</span> Ce praticien a reçu sa première visite il y a peu de temps, celui-ci cherche à se faire connaitre dans son quartier. </p><br/>
                                                                                                                                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.8599143826227!2d6.3493283505878!3d46.90547334403812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dbcc61ff857cb%3A0xc6483776d5e9db8a!2s4%20Rue%20de%20Besan%C3%A7on%2C%2025300%20Pontarlier%2C%20France!5e0!3m2!1sfr!2scm!4v1622163924469!5m2!1sfr!2scm" width="450" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                                                                                                                    </div>
                                                                                                                            </div>
                                                                                                                     </div>

                                                                                                                </div>             

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                 </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
</style>