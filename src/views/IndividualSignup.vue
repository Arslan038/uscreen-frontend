<template>
    <div class="individual-signup">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4 class="text-center text-head mt-5">Individual Sign Up</h4>
                <div class="row my-5">
                    <div class="col-md-8 offset-md-2 col-12">
                        <div class="card shadow">
                            <div class="card-head">
                                <h4 class="text-head pt-5 pb-4 px-5">User Information</h4>
                                <hr>
                            </div>
                            <form v-on:submit.prevent="signup()">
                            <div class="card-body">
                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Contact Information</strong></p>
                                    <label for="">This information will used to contact you about your background check.</label>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="text" v-model="new_user.FirstName" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="text" v-model="new_user.LastName" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="email" v-model="new_user.Email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                            <div class="col-md-2 col-12 mt-3 country">
                                                    <input required  v-model="new_user.MobileCode"  class="form-control" placeholder="+852*" >
                                            </div>
                                            <div class="col-md-4 mobile col-12 mt-3">
                                                <input  required type="tel" class="form-control" v-model="new_user.MobileNumber" placeholder="Mobile*" >
                                            </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Password</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="password" v-model="new_user.Password" placeholder="Password*" class="form-control">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="password" placeholder="Retype password*" v-model="retype_pass" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Currency</strong></p>
                                    <p>Select the currency you wish to display in this website.</p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_user.CurrencyId" class="form-control">
                                                <option v-for="(item,i) in currency" :key="i" :value="item.CurrencyId">{{item.CurrencyName}}</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">User Address</strong></p>
                                    <textarea class="form-control" required v-model="new_user.UserAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control"  required v-model="new_user.UserAddress.CountryId" @change="handleBusinessCountry">
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" required @change="handleBusinessProvince" v-model="new_user.UserAddress.ProvinceId">
                                                <option v-for="(item,i) in province" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" required v-model="new_user.UserAddress.CityId">
                                                <option v-for="(item,i) in city" :key="i" :value="item.CityId">{{item.CityName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input v-model="new_user.UserAddress.PostalCode" type="text" class="form-control" placeholder="Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <hr>
                                <div class="row mt-3">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6LeRufEUAAAAAH3YkifekIVSHW44inX-Ud9K57h5" @verify="verified" :loadRecaptchaScript="true">
            
                                        </vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <div class="d-flex" style=" align-items: center; justify-content: center;">
                                    <b-form-checkbox class="text-primary" required v-model="terms" ></b-form-checkbox> <span @click="showmodals" style="cursor:pointer;color:blue"> Terms and Conditions</span>
                                    </div>
                                    <button class="btn btn-primary mb-5 mt-3" type="submit" >Signup</button>
                                      <b-modal ok-only size="lg" :scrollable="true" id="general" title="Terms and Conditions">
                                          <div>
                                                                             User Agreement for UScreen  

 

Countries Covered: 

Australia  

China  

Hong Kong  

Japan  

Malaysia  

New Zealand  

Philippines  

Singapore  

South Korea  

 

Terms to be incorporated for all regions:  

SCOPE OF SERVICES.  First Advantage Limited (“First Advantage”) agrees to provide, pre-employment and employment screening services to Customer/Client (“You”) as detailed in accordance with the terms and conditions herein. By clicking the "ACCEPT" Button, You are consenting to be bound by this User Agreement.  

Fees and Payment.  All amounts due by You, inclusive of service charges and applicable taxes, hereunder shall be paid in the currency selected via credit card or wire transfer to an account designated by First Advantage. The amounts due by You when settled are non-refundable. Wallet credits will be provided, which will be available for usage for succeeding transactions. Order cancellations post payments will be subject to wallet credits.  

 

First Advantage has an automated order assessment methodology that supports intelligent comparison of check orders paid versus actual checks required to be conducted based on candidate declared details. This methodology determines final amounts to be charged to You. As additional checks are detected, request for secondary payment will be secured from You to complete the transaction. 

DISCLAIMER OF WARRANTIES.  First Advantage makes no and disclaim all warranties, conditions and representations with respect to the Services provided pursuant to this User Agreement, whether such warranties, conditions and representations are express or implied in fact or by operation of law, contained in or derived from this User Agreement, any other documents referenced in this User Agreement, or any other materials or communications whether oral or written, including without limitation, implied warranties or conditions of satisfactory quality, merchantability and fitness for a particular purpose and implied warranties arising from the course of dealing or a course of performance with respect to the accuracy, validity, or completeness of any Service.  You acknowledge and agree that First Advantage exercises no control over, and accepts no responsibility for your compliance with any law or regulation.  

 

 

 

Applicable Privacy Laws.  You will comply with all "Applicable Privacy Laws", made available online at <br> <a style="color:blue !important;cursor:pointer" @click="scrollMeTo('legal')" >“Legal Compliance”</a>. Any changes when any made to this section, will be posted at the above link. It is your responsibility to ensure that you understand and comply with all Applicable Privacy Laws, so you should periodically check this section for any changes.  

 

INDEMNIFICATION.  You shall indemnify, defend and hold harmless First Advantage from and against any claim, suit, proceeding, damages, costs, expenses (including, without limitation, reasonable attorneys’ fees and court costs) brought by a third party against or suffered First Advantage arising from your violation of law, negligence or failure to comply with the terms and conditions of this User Agreement.  

LIMITATION OF LIABILITY. First Advantage shall not be liable for any indirect, incidental, contingent, consequential, punitive, exemplary, special or similar damages, including but not limited to, loss of profits or loss of data, whether incurred as a result of negligence or otherwise.  First Advantage’s aggregate liability damages arising out of or in connection with this User Agreement, including as a result of any negligence on the part of First Advantage, shall not exceed three times the amount paid by You to First Advantage for the particular service giving rise to such damages. The limitations of the liability pursuant to this section applies only to the extent permitted by law. 

Your Obligations.  You agree, and must ensure any organisation to which You provide any information provided to You by First Advantage agree that: 

You will only use the reports and information First Advantage provides for the purposes of pre-employment and employment screening or otherwise in accordance with the consent given to You by the relevant individual; 

 

You will take proper and reasonable steps to keep the information First Advantage supplies to You confidential and secure, and will not disclose it without the relevant individual’s consent except as otherwise permitted or required by law;  

 

First Advantage may modify the scope of Service at any time upon reasonable notice to You unless prior notice cannot be provided due to First Advantage’s obligations to comply with law, regulation and/or data provider requirements.  Notwithstanding anything to the contrary in this User Agreement, if First Advantage modifies the scope of the Service, You agree to comply with all such additional requirements and any additional fees or costs for such compliance which may be passed through to You.   

 

You warrant that the fax, email or mailing address You provide to First Advantage for correspondence is suitable for maintaining the confidentiality of the information First Advantage sends to You and You will notify First Advantage promptly if any need arises for You to change it; and 

 

  First Advantage does not transfer any right, title or interest in any intellectual property rights in its business processes or in the Service that it is providing to You under this User Agreement. 

 

 

 

Confidentiality 

The term “Confidential Information” means this User Agreement and all data, trade secrets, business and personal information and other information of any kind whatsoever that First Advantage discloses to You. You must not disclose Confidential Information provided by First Advantage to any third party other than on a “need to know” basis and then only to: (i) Your employees subject to a written confidentiality agreement and (iii) as required by law or as otherwise expressly permitted by this User Agreement.  You must not use or disclose Confidential Information of Discloser for any purpose other than to carry out this User Agreement. The obligations of confidentiality in this Section shall not apply to any information that: (i) You rightfully have in your possession when disclosed to it, free of obligation to First Advantage to maintain its confidentiality; (ii) You independently develop without access to First Advantage’s Confidential Information; (iii) is or becomes known to the public other than by breach of this Section by You; or (iv) is rightfully received by You from a third party without the obligation of confidentiality. 

 

Termination: First Advantage will immediately terminate your right to receive any Service under this User Agreement if You fail to comply with the terms and conditions of this User Agreement, or You fail to comply with any law applicable to the Service provided to You pursuant to this User Agreement.  

Miscellaneous: This User Agreement, constitute the final and entire agreement between the parties with respect to the Service. There are no representations, warranties, or agreements among the parties with respect to the Services contained herein, which are not fully expressed in this Agreement.  This User Agreement is governed by the laws of the Country where the Service is being provided and each party submits to the exclusive jurisdiction in and of the courts of  such countries and the courts which may hear appeals from those. If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall be unaffected. A waiver by either party of any term or condition of this User Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. First Advantage may assign its rights under this User Agreement without condition. This User Agreement will be binding upon and inure to the benefit of the parties, their successors and permitted assigns. A listing of First Advantage’s Affiliates is set forth at: <a href="https://www.fadv.com/Portals/0/Downloads/legal/First_Advantage-Affiliate_Listing_10142016.pdf" target="_blank" >https://www.fadv.com/Portals/0/Downloads/legal/First_Advantage-Affiliate_Listing_10142016.pdf</a> .  

<div id="legals"> <b>“Legal Compliance”</b> </div>  

A.    Australia 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Privacy Act 1988 (Cth), the Australian Privacy Principles, and State and Territory privacy laws, as amended from time to time; and the term "personal information" has the meaning designated by the Privacy Act 1988 (Cth). 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledges and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertakes to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You has done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

B.   China 

       In this User Agreement, “Applicable Laws” shall refer to country laws, directives, rules, regulations, executive orders, regulatory guidance, regulatory requirements and any form of secondary legislation, resolution, policy guideline, concession or case law from time to time that apply to either party and its affiliates or the services, including (i) data protection, privacy or similar laws and regulations anywhere in the world applicable to persons in possession of personal data or to the processing of personal data, and (ii) employment laws.  You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its Affiliates globally in connection with providing the Services (the "Approved Purpose").  You warrant and undertake to comply with all Applicable Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You has done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

C.   Hong Kong 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486), as amended from time to time; and the term "personal data" has the meaning designated by the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486). 

You agree that First Advantage is a data processor (which shall have the meaning designated by the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486)) and will process personal data about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agrees that personal data may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal data may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractors has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause. First Advantage will take all reasonable steps and maintain appropriate technical and organizational security controls to protect personal data against unauthorised or accidental access, processing, erasure, loss or misuse. In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal data equivalent to the Applicable Privacy Laws. First Advantage agrees not to store the personal data for a period longer than required for the Approved Purpose. Upon expiration or termination of this Agreement, First Advantage will return to You all personal data received from You in connection with the Services and shall refrain from any further processing and use of such data. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agrees that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal data obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

D.    Japan	 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Act on the Protection of Personal Information, as amended from time to time; and the term "personal information" has the meaning designated by the Act on the Protection of Personal Information. 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

          

 E.   Malaysia 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Data Protection Act (PDPA) 2010, its regulations, codes of practices, guidelines and statutory orders, as amended from time to time; and the term "personal information" has the meaning of "personal data" designated and defined by the Personal Data Protection Act (PDPA) 2010. 

You agrees that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take practical steps to keep the data secure. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

F.    New Zealand 

a.  You shall comply with the requirements of any New Zealand laws, regulations and standards applicable to the Services and to its industry ("Applicable Law"), including with the requirements of the Privacy Act of 1993, as amended from time to time, to the extent that You collects and provides to First Advantage, or First Advantage otherwise obtains in connection with providing the Services, any personal information about the relevant job applicant or other individuals (“Personal Information”). 

You agree that First Advantage will process Personal Information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You shall obtain a relevant individual’s written consent that meets the Applicable Laws prior to ordering Services from First Advantage.  You acknowledge that a relevant individual may also be asked to sign consent forms required by government agencies or other sources to enable these sources to disclose information to First Advantage. You further agree that First Advantage reserves the right not to commence any work in respect of Your request until First Advantage has received all the necessary signed consents required from the relevant individual who is the subject of the request. 

For the purposes of this User Agreement, You act as the collector and holder of the Personal Information of the job applicants and First Advantage as your third party agent. Accordingly, You will continue to be responsible for ensuring the requirements of the Privacy Act 1993 are complied with in respect of all Personal Information collected by You and disclosed to First Advantage. First Advantage shall nevertheless implement and maintain technical and organizational security measures in accordance with the security principles applicable to the Services. You acknowledge and accept that First Advantage will use the services of other affiliated and unaffiliated third parties (the "Subcontractors") to provide limited services on its behalf, such as providing hosting services for the servers used to provide the Services or research and report services.  These Subcontractors may be located in the United States, India, and other jurisdictions. Any Subcontractors to whom First Advantage transfers Personal Information will have entered into written agreements with First Advantage requiring that the Subcontractor abide by privacy terms no less protective than this Agreement.   

 

G.   Philippines 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to Republic Act No. 10173 or the Philippine Data Privacy Act of 2012 and State and Territory privacy laws, as amended from time to time; and the terms "personal information" and “sensitive personal information” have the meaning designated by the Philippine Data Privacy Act of 2012. 

You agree that First Advantage will process personal information about job applicants and other individuals for You according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause and of the Applicable Privacy Laws.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures with a comparable level of protection as provided under the Applicable Privacy Laws and to take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) obtaining and receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

       You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

  H.   Singapore  

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Data Protection Act 2012, as amended from time to time; and the term "personal data" has the meaning designated by the Personal Data Protection Act 2012. 

You agree that First Advantage is a Data Intermediary (as defined under the Applicable Privacy Laws) and will process personal data about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under your sole instructions  and for the sole purpose of pre-employment and employment screening.  First Advantage shall comply with its obligations under the Applicable Privacy Laws, which are to: (i) make reasonable security arrangements to protect personal data in its possession or under its control in order to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks; and (ii) cease to retain documents containing personal data, or remove the means by which the personal data can be associated with particular individuals, as soon as it is reasonable to assume that the purpose for which that personal data was collected is no longer being served by retention of the personal data, and the retention is no longer necessary for legal or business purposes. You acknowledge and agree that personal data may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal data may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal data for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agrees that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal data obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

 South Korea 

 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Information Protection Act (“PIPA”) as amended from time to time; and the term "personal information" has the meaning designated by PIPA.  

 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under your sole instructions and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws.  

 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action.  

 

 First Advantage shall implement the technical and managerial safeguards necessary to ensure the security of the personal data as required under the PIPA. 

 

You may request that: (i) First Advantage inspect the conditions of maintenance of the personal data that You provided to First Advantage; and (ii) First Advantage report to You on the results of the inspection.  You may also directly request the inspection of the maintenance status and the correction of any issues if it determines that doing so is necessary.  

 

First Advantage shall be liable for any damages incurred by You, the data subject, or a third party stemming from a violation of this User Agreement by First Advantage, First Advantage’s employee or officer, or other outsourced provider hired by First Advantage in the course of processing the outsourced or re-outsourced personal data.  

 

 
                                          </div>
  </b-modal>
                                      <b-modal ok-only size="lg" :scrollable="true" id="aud" title="Terms and Conditions">
                                        <div>
                                                                                                             User Agreement for UScreen  

 

Countries Covered: 

Australia  

China  

Hong Kong  

Japan  

Malaysia  

New Zealand  

Philippines  

Singapore  

South Korea  

 

Terms to be incorporated for all regions:  

SCOPE OF SERVICES.  First Advantage Limited (“First Advantage”) agrees to provide, pre-employment and employment screening services to Customer/Client (“You”) as detailed in accordance with the terms and conditions herein. By clicking the "ACCEPT" Button, You are consenting to be bound by this User Agreement.  

Fees and Payment.  All amounts due by You, inclusive of service charges and applicable taxes, hereunder shall be paid in the currency selected via credit card or wire transfer to an account designated by First Advantage. The amounts due by You when settled are non-refundable. Wallet credits will be provided, which will be available for usage for succeeding transactions. Order cancellations post payments will be subject to wallet credits.  

 

First Advantage has an automated order assessment methodology that supports intelligent comparison of check orders paid versus actual checks required to be conducted based on candidate declared details. This methodology determines final amounts to be charged to You. As additional checks are detected, request for secondary payment will be secured from You to complete the transaction. 

DISCLAIMER OF WARRANTIES.  To the extent permitted by law and except as otherwise expressly provided, First Advantage and its Affiliates make no and disclaim all warranties and representations with respect to the Services provided pursuant to this User Agreement, whether such warranties and representations are express or implied in fact or by operation of law (other than those in the Competition and Consumer Act 2010 (Cth) which cannot be lawfully excluded), contained in or derived from this User Agreement, any other documents referenced in this User Agreement, or any other materials or communications whether oral or written, including without limitation, implied warranties of merchantability and fitness for a particular purpose and implied warranties arising from the course of dealing or a course of performance with respect to the accuracy, validity, or completeness of any Service.  To the extent permitted by law (including the Competition and Consumer act 2010 (Cth)), First Advantage's liability will be limited, at First Advantage's option, to any one or more of the following, in accordance with section 64a of the Australian Consumer Law: (i) the supplying of the services again; or (ii) the payment of the cost of having the services supplied again. 

 

 

 

 

Applicable Privacy Laws.  You will comply with all "Applicable Privacy Laws", made available online at <br> <a style="color:blue !important;cursor:pointer" @click="scrollMeTo('legal')" >Legal Compliance</a> . Any changes when any made to this section, will be posted at the above link. It is your responsibility to ensure that you understand and comply with all Applicable Privacy Laws, so you should periodically check this section for any changes.  

 

INDEMNIFICATION.  You shall indemnify, defend and hold harmless First Advantage from and against any claim, suit, proceeding, damages, costs, expenses (including, without limitation, reasonable attorneys’ fees and court costs) brought by a third party against or suffered First Advantage arising from your violation of law, negligence or failure to comply with the terms and conditions of this User Agreement.  

LIMITATION OF LIABILITY. First Advantage shall not be liable for any indirect, incidental, contingent, consequential, punitive, exemplary, special or similar damages, including but not limited to, loss of profits or loss of data, whether incurred as a result of negligence or otherwise.  First Advantage’s aggregate liability damages arising out of or in connection with this User Agreement, including as a result of any negligence on the part of First Advantage, shall not exceed three times the amount paid by You to First Advantage for the particular service giving rise to such damages. The limitations of the liability pursuant to this section applies only to the extent permitted by law. 

Your Obligations.  You agree, and must ensure any organisation to which You provide any information provided to You by First Advantage agree that: 

You will only use the reports and information First Advantage provides for the purposes of pre-employment and employment screening or otherwise in accordance with the consent given to You by the relevant individual; 

 

You will take proper and reasonable steps to keep the information First Advantage supplies to You confidential and secure, and will not disclose it without the relevant individual’s consent except as otherwise permitted or required by law;  

 

First Advantage may modify the scope of Service at any time upon reasonable notice to You unless prior notice cannot be provided due to First Advantage’s obligations to comply with law, regulation and/or data provider requirements.  Notwithstanding anything to the contrary in this User Agreement, if First Advantage modifies the scope of the Service, You agree to comply with all such additional requirements and any additional fees or costs for such compliance which may be passed through to You.   

 

You warrant that the fax, email or mailing address You provide to First Advantage for correspondence is suitable for maintaining the confidentiality of the information First Advantage sends to You and You will notify First Advantage promptly if any need arises for You to change it; and 

 

  First Advantage does not transfer any right, title or interest in any intellectual property rights in its business processes or in the Service that it is providing to You under this User Agreement. 

 

 

 

Confidentiality 

The term “Confidential Information” means this User Agreement and all data, trade secrets, business and personal information and other information of any kind whatsoever that First Advantage discloses to You. You must not disclose Confidential Information provided by First Advantage to any third party other than on a “need to know” basis and then only to: (i) Your employees subject to a written confidentiality agreement and (iii) as required by law or as otherwise expressly permitted by this User Agreement.  You must not use or disclose Confidential Information of Discloser for any purpose other than to carry out this User Agreement. The obligations of confidentiality in this Section shall not apply to any information that: (i) You rightfully have in your possession when disclosed to it, free of obligation to First Advantage to maintain its confidentiality; (ii) You independently develop without access to First Advantage’s Confidential Information; (iii) is or becomes known to the public other than by breach of this Section by You; or (iv) is rightfully received by You from a third party without the obligation of confidentiality. 

 

Termination: First Advantage will immediately terminate your right to receive any Service under this User Agreement if You fail to comply with the terms and conditions of this User Agreement, or You fail to comply with any law applicable to the Service provided to You pursuant to this User Agreement.  

Miscellaneous: This User Agreement, constitute the final and entire agreement between the parties with respect to the Service. There are no representations, warranties, or agreements among the parties with respect to the Services contained herein, which are not fully expressed in this Agreement.  This User Agreement is governed by the laws of the Country where the Service is being provided and each party submits to the exclusive jurisdiction in and of the courts of  such countries and the courts which may hear appeals from those. If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall be unaffected. A waiver by either party of any term or condition of this User Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. First Advantage may assign its rights under this User Agreement without condition. This User Agreement will be binding upon and inure to the benefit of the parties, their successors and permitted assigns. A listing of First Advantage’s Affiliates is set forth at: <a target="_blank" href="https://www.fadv.com/Portals/0/Downloads/legal/First_Advantage-Affiliate_Listing_10142016.pdf">https://www.fadv.com/Portals/0/Downloads/legal/First_Advantage-Affiliate_Listing_10142016.pdf.  </a> 

<div id="legals"> <b>Legal Compliance</b> </div> 

A.    Australia 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Privacy Act 1988 (Cth), the Australian Privacy Principles, and State and Territory privacy laws, as amended from time to time; and the term "personal information" has the meaning designated by the Privacy Act 1988 (Cth). 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledges and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertakes to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You has done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

B.   China 

       In this User Agreement, “Applicable Laws” shall refer to country laws, directives, rules, regulations, executive orders, regulatory guidance, regulatory requirements and any form of secondary legislation, resolution, policy guideline, concession or case law from time to time that apply to either party and its affiliates or the services, including (i) data protection, privacy or similar laws and regulations anywhere in the world applicable to persons in possession of personal data or to the processing of personal data, and (ii) employment laws.  You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its Affiliates globally in connection with providing the Services (the "Approved Purpose").  You warrant and undertake to comply with all Applicable Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You has done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

C.   Hong Kong 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486), as amended from time to time; and the term "personal data" has the meaning designated by the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486). 

You agree that First Advantage is a data processor (which shall have the meaning designated by the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486)) and will process personal data about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agrees that personal data may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal data may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractors has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause. First Advantage will take all reasonable steps and maintain appropriate technical and organizational security controls to protect personal data against unauthorised or accidental access, processing, erasure, loss or misuse. In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal data equivalent to the Applicable Privacy Laws. First Advantage agrees not to store the personal data for a period longer than required for the Approved Purpose. Upon expiration or termination of this Agreement, First Advantage will return to You all personal data received from You in connection with the Services and shall refrain from any further processing and use of such data. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agrees that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal data obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

D.    Japan	 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Act on the Protection of Personal Information, as amended from time to time; and the term "personal information" has the meaning designated by the Act on the Protection of Personal Information. 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

          

 E.   Malaysia 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Data Protection Act (PDPA) 2010, its regulations, codes of practices, guidelines and statutory orders, as amended from time to time; and the term "personal information" has the meaning of "personal data" designated and defined by the Personal Data Protection Act (PDPA) 2010. 

You agrees that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take practical steps to keep the data secure. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

F.    New Zealand 

a.  You shall comply with the requirements of any New Zealand laws, regulations and standards applicable to the Services and to its industry ("Applicable Law"), including with the requirements of the Privacy Act of 1993, as amended from time to time, to the extent that You collects and provides to First Advantage, or First Advantage otherwise obtains in connection with providing the Services, any personal information about the relevant job applicant or other individuals (“Personal Information”). 

You agree that First Advantage will process Personal Information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You shall obtain a relevant individual’s written consent that meets the Applicable Laws prior to ordering Services from First Advantage.  You acknowledge that a relevant individual may also be asked to sign consent forms required by government agencies or other sources to enable these sources to disclose information to First Advantage. You further agree that First Advantage reserves the right not to commence any work in respect of Your request until First Advantage has received all the necessary signed consents required from the relevant individual who is the subject of the request. 

For the purposes of this User Agreement, You act as the collector and holder of the Personal Information of the job applicants and First Advantage as your third party agent. Accordingly, You will continue to be responsible for ensuring the requirements of the Privacy Act 1993 are complied with in respect of all Personal Information collected by You and disclosed to First Advantage. First Advantage shall nevertheless implement and maintain technical and organizational security measures in accordance with the security principles applicable to the Services. You acknowledge and accept that First Advantage will use the services of other affiliated and unaffiliated third parties (the "Subcontractors") to provide limited services on its behalf, such as providing hosting services for the servers used to provide the Services or research and report services.  These Subcontractors may be located in the United States, India, and other jurisdictions. Any Subcontractors to whom First Advantage transfers Personal Information will have entered into written agreements with First Advantage requiring that the Subcontractor abide by privacy terms no less protective than this Agreement.   

 

G.   Philippines 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to Republic Act No. 10173 or the Philippine Data Privacy Act of 2012 and State and Territory privacy laws, as amended from time to time; and the terms "personal information" and “sensitive personal information” have the meaning designated by the Philippine Data Privacy Act of 2012. 

You agree that First Advantage will process personal information about job applicants and other individuals for You according to the criteria established by You, and provide reports to You, all under the sole instructions of You and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause and of the Applicable Privacy Laws.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures with a comparable level of protection as provided under the Applicable Privacy Laws and to take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) obtaining and receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

       You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

  H.   Singapore  

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Data Protection Act 2012, as amended from time to time; and the term "personal data" has the meaning designated by the Personal Data Protection Act 2012. 

You agree that First Advantage is a Data Intermediary (as defined under the Applicable Privacy Laws) and will process personal data about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under your sole instructions  and for the sole purpose of pre-employment and employment screening.  First Advantage shall comply with its obligations under the Applicable Privacy Laws, which are to: (i) make reasonable security arrangements to protect personal data in its possession or under its control in order to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks; and (ii) cease to retain documents containing personal data, or remove the means by which the personal data can be associated with particular individuals, as soon as it is reasonable to assume that the purpose for which that personal data was collected is no longer being served by retention of the personal data, and the retention is no longer necessary for legal or business purposes. You acknowledge and agree that personal data may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal data may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws. 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal data for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agrees that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal data obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action. 

 

 South Korea 

 

In this User Agreement, "Applicable Privacy Laws" include but are not limited to the Personal Information Protection Act (“PIPA”) as amended from time to time; and the term "personal information" has the meaning designated by PIPA.  

 

You agree that First Advantage will process personal information about job applicants and other individuals according to the criteria established by You, and provide reports to You, all under your sole instructions and for the sole purpose of pre-employment and employment screening.  You acknowledge and agree that personal information may be used or processed by First Advantage and its affiliates globally in connection with providing the Services (the "Approved Purpose").  You acknowledge and agree that personal information may be used or processed by third party contractors on behalf of First Advantage for the Approved Purpose, provided that any such third party contractor has entered into a written agreement with First Advantage requiring the third party contractor to comply with privacy terms no less protective than the provisions of this clause.  In the case of disclosures to overseas entities, First Advantage will instruct the recipient entity to apply data protection policies and procedures and take reasonable steps to keep the data secure, although the importing countries may not provide statutory protections for personal information equivalent to the Applicable Privacy Laws.  

 

You warrant and undertake to comply with all Applicable Privacy Laws in performing its obligations under this Agreement and in connection with First Advantage providing the Services, including obtaining all necessary consents and giving all notices required pursuant to the Applicable Privacy Laws in order to permit First Advantage to use and disclose personal information for the Approved Purpose.  You must keep adequate documents and records in sufficient detail to evidence Your compliance with this clause.  You further agree that First Advantage reserves the right not to commence any work in respect of Your request until You have done everything necessary to comply with the Applicable Privacy Laws, including (without limitation) receiving all the necessary signed consents required from the relevant individual who is the subject of the request.  You must immediately notify First Advantage if the relevant individual withdraws any necessary consents. 

 

You must cooperate reasonably with First Advantage in relation to any investigation or enforcement action by a regulatory authority in connection with personal information obtained, used or processed in connection with this Agreement, including (without limitation) providing all information and assistance reasonably requested by First Advantage.  You must consult with First Advantage and allow First Advantage the right to make representations in connection with any investigation or enforcement action before You respond to that investigation or action.  

 

 First Advantage shall implement the technical and managerial safeguards necessary to ensure the security of the personal data as required under the PIPA. 

 

You may request that: (i) First Advantage inspect the conditions of maintenance of the personal data that You provided to First Advantage; and (ii) First Advantage report to You on the results of the inspection.  You may also directly request the inspection of the maintenance status and the correction of any issues if it determines that doing so is necessary.  

 

First Advantage shall be liable for any damages incurred by You, the data subject, or a third party stemming from a violation of this User Agreement by First Advantage, First Advantage’s employee or officer, or other outsourced provider hired by First Advantage in the course of processing the outsourced or re-outsourced personal data.  

 

 
                                        </div>
                                    </b-modal>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import VueRecaptcha from 'vue-recaptcha';
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
import {mapGetters} from 'vuex'
import mainmixin from '../mixins/mainmixin'

export default {
  name: "IndividualSignup",
  mixins:[mainmixin],
  components: {
    Breadcrumb,
    VueRecaptcha
  },
    computed:{
      ...mapGetters(['currency','countries','industry'])
  },
  methods:{
      verified(response) {
        if(response) {
            this.isVerified = true
        }
    },
    handleBusinessCountry(val){
        this.fetchBusinessProvinceByCountry(val.target.value)
    },
    handleBusinessProvince(val){
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.CountryId,val.target.value)
    },
    async signup(){
        //  if(this.validationchecker(this.new_user,['FirstName','LastName','MobileCode','MobileNumber'])<1){
              if(this.new_user.Password==this.retype_pass){
                 if(!this.isVerified) {
                    this.$store.commit('setNotifications',{message:'Re-Captcha Required',type:'error'})
                    return
                }
                if(this.terms==false){
                    this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})
                    return
                }
                let {data} = await UserRepository.createaccount(this.new_user)
                .catch(error => {
                      if(error.response.data.Message.toLowerCase().includes('duplicate entry')){

                        this.$store.commit('setNotifications',{message:`The email ${this.new_user.Email} is already used. Please try another email or contact us for more details`,type:'error'}) 
                      }
                      else{

                        this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'}) 
                      }
                  });
                  if(data.status=='Success'){
                    this.$store.commit('setNotifications',{message:'User created successfully',type:'success'})
                    this.$router.push({path:'/login'})
                  }
                  this.isVerified = false
              }
              else{
                 this.$store.commit('setNotifications',{message:'Make sure your password and retyped password are same',type:'error'})

              }

        //   }
        //   else{
        //     this.$store.commit('setNotifications',{message:'Fill in all *required fields ',type:'error'})

        //   }


    },
      
    async fetchCountries(){
        //   this.new_user.UserAddress.CountryId=this.countries[0].CountryId
        //   this.fetchBusinessProvinceByCountry(this.new_user.UserAddress.CountryId)

    },
    async fetchBusinessProvinceByCountry(id){
        let {data}= await UserRepository.getProvince(id)
            this.province=data.data
            this.new_user.UserAddress.ProvinceId=data.data[0].ProvinceId

        
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.ProvinceId,this.new_user.UserAddress.ProvinceId)

    },
    async fetchBusinessCityByProvinec(CountryId,ProvinceId){
        let {data}= await UserRepository.getCity({CountryId:CountryId,ProvinceId:ProvinceId})
        this.city=data.data
        this.new_user.UserAddress.CityId=data.data[0].CityId

        
        
    },
    showmodals(){
        if(this.new_user.CurrencyId==2){

         this.$bvModal.show('aud')
        }
        else{
         this.$bvModal.show('general')

        }
    },
    scrollMeTo(refName) {
        var elemntss=document.getElementById("legals")
        elemntss.scrollIntoView()
    // var element = this.$refs[refName];
    // var top = element.offsetTop;

    // window.scrollTo(0, top);
    },
    async fetchCurrency(){
        this.new_user.CurrencyId=this.currency[0].CurrencyId
    },
    async fetchIndustry(){
        this.new_user.IndustryTypeId=this.industry[0].IndustryTypeId
    }

  },
  watch:{
      currency(){
        if(this.currency.length>0){
          this.fetchCurrency()

          }
      },
      countries(){
        if(this.countries.length>0){
        //   this.fetchCountries()

          }
      },
      industry(){
          if(this.industry.length>0){
            this.fetchIndustry()

          }
      }
  },
   mounted(){
    //   this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  created(){
  
  window.scrollTo(0, 0);

      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  data() {
    return {
    terms:false,
    retype_pass:'',
    isVerified: false,
    province:[],
    billingprovince:[],
    billingcity:[],
    city:[],

      isSame:false,
      new_user:{
        Email:'',
        FirstName:'',
        MiddleName:'',
        LastName:'',
        UserName:'',
        Password:'',
        MobileCode:'',
        MobileNumber:'',
        UserRoleId:'2',
        CurrencyId:'',
        UserAddress:{
			CountryId:'',
            CityId:'',
            ProvinceId:'',
            AddressName:'',
			PostalCode: ''
		},
        
        
      },

      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Sign Up',
            active: false,
            to: '/signup'
        },
        {
            text: 'Individual Sign Up',
            active: true,
            to: '/individual-signup'
        }
      ],
    }
  }
}
</script>
<style scoped>
h4 {
    font-weight: bold;
}
.btn-primary {
    border-radius: 25px;
    font-weight: bold;
    padding: 10px 70px;
}
.mobile {
    margin-left: 0 !important;
}
.country {
    margin-right: 0px !important;
}
.card-body {
    padding: 0 !important;
}
</style>