<template>
    <div class="individual-packages">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row my-5 mx-5 px-5">
            <div class="col-12 text-center text-gray">
                <h4 class="text-head"><strong>Background Checks for Employers</strong></h4>
                <p class="mt-4">To avoid spending time and effort on misrepresented and fraudulent resumes, most employers today are increasingly seeking <br> out pre-screened candidates.</p>
                <p class="mt-4">Stand out from the crowd in today's crowded job market and stay up to date with your individual records by ordering a personal <br> background check.</p>
            </div>
        </div>
        <div class="row no-gutters why align-items-center">
            <div class="col-md-6 col-12 image"></div>
            <div class="col-md-6 col-12 px-5 py-5">
                <h3 class="my-3"><strong>Why UScreen</strong></h3>
                <ul>
                    <li>No set-up fees</li>
                    <li>No contracts</li>
                    <li>Pay as you go</li>
                    <li>Quick and easy ordering process</li>
                    <li>Friendly user experience</li>
                    <li>Reporting Dashboard</li>
                </ul>
            </div>
        </div>
        <div class="container">

        </div>
        
        <div class="container mb-5">
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h3 class="text-head"><strong>Packages</strong></h3>
                <p class="text-gray my-3">Lorem ipsum, or lorem ipsum Lorem ipsum, or lorem ipsum Lorem ipsum, or lorem ipsum Lorem ipsum, or lorem ipsum Lorem ipsum, or lorem ipsum Lorem ipsum, or lorem ipsum.</p>
            </div>
        </div>

        <!-- Mobile Carousal -->
        
        <div class="row mobile-view">
            <div class="col-12">
                <carousel :perPage="1">
                    <slide>
                        <div class="criminal-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="criminal-head package"><h4><strong>Criminal</strong></h4></div>
                                            <!-- <div class="offer text-center py-3">
                                            
                                            </div> -->
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Criminal Only')}}:{path:'/login'}">
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Education Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Employment Check
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="bronze-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="bronze-head package"><h4><strong>Bronze</strong></h4></div>
                                            <!-- <div class="offer text-center py-3">
                                            </div> -->
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Bronze')}}:{path:'/login'}">                                   
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Education Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Employment Check
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="silver-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="silver-head package"><h4><strong>Silver</strong></h4></div>
                                            <!-- <div class="offer text-center py-3">
                                                <p class="text-gray"><sup>$</sup> <strong class="text-blue mobile-price">1200</strong></p>
                                                <p><strong>Flat Rate</strong></p>
                                            </div> -->
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Silver')}}:{path:'/login'}">
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Education Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Employment Check
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="gold-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="gold-head package"><h4><strong>Gold</strong></h4></div>
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Gold')}}:{path:'/login'}">
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Employment Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Education Check
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="platinum-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="platinum-head package"><h4><strong>Platinum</strong></h4></div>
                                            <!-- <div class="offer text-center py-3">
                                                <p class="text-gray"><sup>$</sup> <strong class="text-blue mobile-price">1200</strong></p>
                                                <p><strong>Flat Rate</strong></p>
                                            </div> -->
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Platinum')}}:{path:'/login'}">
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-times-circle text-danger mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Education Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Employment Check
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="diamond-package">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="card package-item">
                                        <div class="card-body">
                                            <div class="diamond-head package"><h4><strong>Diamond</strong></h4></div>
                                            <!-- <div class="offer text-center py-3">
                                                <p class="text-gray"><sup>$</sup> <strong class="text-blue mobile-price">1200</strong></p>
                                                <p><strong>Flat Rate</strong></p>
                                            </div> -->
                                            <div class="offer text-center py-3 px-3">
                                                <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Diamond')}}:{path:'/login'}">
                                                <button class="btn btn-primary mt-3">Order Now</button>
                                                </router-link>
                                            </div>
                                            <div class="offer text-left px-3 py-3">
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Bankruptcy Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Civi Litigation Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Credit Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Criminal Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Directorship Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Expanded Global Sanctions
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Global Reputational Media
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Passport Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Education Check
                                                </div>
                                                <div class="mt-3">
                                                    <i class="fa fa-check-circle text-blue mark"></i> Employment Check
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <!-- Web  -->
        <div class="web-view">
                <div class="row no-gutters mt-3">
            <div class="offset-md-2 package-size">
                <!-- offset-md-2 offset-col-2 -->
                <div class="crimianl package text-center">
                    <p> <strong>Criminal Only</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <!-- <span>Lorem ipsum, or lorem ipsum as it is.</span> -->
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Criminal Only')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
            <div class="package-size">
                <div class="bronze package text-center">
                    <p> <strong>Bronze</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <!-- <span>Lorem ipsum, or lorem ipsum as it is.</span> -->
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Bronze')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
            <div class="package-size">
                <div class="silver package text-center">
                    <p> <strong>Sliver</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <!-- <span>Lorem ipsum, or lorem ipsum as it is.</span> -->
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Silver')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
            <div class="package-size">
                <div class="gold package text-center">
                    <p><strong>Gold</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <!-- <span>Lorem ipsum, or lorem ipsum as it is.</span> -->
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Gold')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
            <div class="package-size">
                <div class="platinum package text-center">
                    <p> <strong>Platinum</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Platinum')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
            <div class="package-size">
                <div class="diamond package text-center">
                    <p> <strong>Diamond</strong></p>
                </div>
                <div class="offer text-center py-3 px-3">
                    <!-- <span>Lorem ipsum, or lorem ipsum as it is.</span> -->
                    <router-link :to="loggedUser!=null ? {name:'EmployerOrder',params:{selected_package:getPackage('Diamond')}}:{path:'/login'}">
                    <button class="btn btn-primary mt-3">Order Now</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 gray text-center package-text text-gray">Package</div>
            <div class="package-size gray border"></div>
            <div class="package-size gray border"></div>
            <div class="package-size gray border"></div>
            <div class="package-size gray border"></div>
            <div class="package-size gray border"></div>
            <div class="package-size gray border"></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Bankruptcy Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Civil Litigation Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Credit Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Criminal Check</div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Directorship Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Expanded Global Sanctions</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Global Reputational Media</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Passport Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Education Check</div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2 col-2 text-center package-text py-3">Employment Check</div>
            <div class="package-size border text-center bottom py-3"></div>
            <div class="package-size border text-center bottom py-3"></div>
            <div class="package-size border text-center bottom py-3"></div>
            <div class="package-size border text-center bottom py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border text-center bottom py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
            <div class="package-size border bottom text-center py-3"><img src="../assets/Group 11 Copy 24@2x.png" width="20" alt=""></div>
        </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Breadcrumb from '@/components/Breadcrumb.vue';
import {mapGetters} from 'vuex'
export default {
    name: "IndividualPackages",
    components: {
        Carousel,
        Slide,
        Breadcrumb
    },
    computed:{
        ...mapGetters(['employer_packages','loggedUser'])
    },
    methods:{
        getPackage(name){
            // console.log(this.employer_packages.find(item=>item.PackageServiceName==name))
            return this.employer_packages.find(item=>item.PackageServiceName==name)
        }
    },
    created() {
        window.scrollTo(0,0)
    },
    data() {
    return {
     
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'For Employer',
            active: true,
            to: '/individual-packages'
        }
      ],
    }
  }
}
</script>
<style scoped>
.package-size {
    width: 140px;
}
.table-responsive {
    overflow: hidden !important;
}
.why {
    background: #f1f1f1;   
}
.image {
    background: url('../assets/15876@2x.png');
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
li {
    padding-top: 15px;
    font-weight: bold;
}
.package {
    padding: 30px 0;
    color: #fff;
}
.crimianl, .criminal-head {
    background: url('../assets/Rectangle165t@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
}
.bronze, .bronze-head {
    background: url('../assets/Rectangle123543@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
}
.silver, .silver-head {
    background: url('../assets/Rectangle145r@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
}
.gold, .gold-head {
    background: url('../assets/Rectangle1223q453@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
    margin-left: -2px;
}
.platinum, .platinum-head {
    background: url('../assets/Rectangle@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
}
.diamond, .diamond-head {
    background: url('../assets/Rectangle Cop876y@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 80px;
    
}
.offer {
    border: 1px solid #ddd;
}
.border {
    border-left: 1px solid #ddd;
    border-radius: 1px solid #ddd;
    border-top: none !important;
    border-bottom: none !important;
}
.bottom {
    
    border-bottom: 1px solid #ddd !important;
}
.price {
    font-size: 35px;
    font-weight: bold;
}
.dollar {
    position: absolute;
    top: 105px;
    left: 25px;
    font-weight: bold;
    color: #ddd;
}
.role .dollar-role {
    position: absolute;
    top: 105px;
    left: 95px;
    font-weight: bold;
    color: #ddd;
}

.offer p {
    padding: 0;
    margin: 0;
    color: #ddd;
}
.gray {
    background: #f1f1f1;
    height: 50px;
}
.package-text {
    padding: 12px 0;
}
.roles {
    border: 2px solid rgba(#fafafa, .6);
    box-shadow: 10px 10px 50px 10px #f1f1f1;
    background: #F5F5F5 !important;
    
    
}
.role {
    background: #fff;
    border-radius: 10px;
    margin: 20px 10px;
    padding: 20px 0px;
    box-shadow: 10px 10px 50px 10px #f1f1f1;
    text-align: center;
}
th {
    margin: 0 !important;
    padding: 0 !important;
    min-width: 150px !important;
}
.mobile-price {
    font-size: 36px;
}
.mark {
    font-size: 20px;
    background: transparent;
}
.mobile-view {
    display: none;
}
.btn-primary {
    min-width: 100% !important;
    max-width: 100% !important;
}
@media screen and (max-width: 600px) {
  .image {
    height: 300px;
  }
    .table-responsive {
        overflow: auto !important;
    }
}
@media screen and (max-width: 1200px) {
  .mobile-view {
      display: inline !important;
  }
  .web-view {
      display: none !important;
  }
}
</style>