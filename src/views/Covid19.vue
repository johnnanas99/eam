<template>
    <div id="covid">
    <h4>Γενικές οδηγίες ασφαλείας κατά του covid-19</h4>
    <block  id="covid_instructions">
        <img id="covid_mask" src="https://www.uoi.gr/wp-content/uploads/2020/09/mask-ti-den_post.png">
        
        <ol>
            <li> Φοράμε πάντα <strong>μάσκα</strong>.</li>
            <li> <strong>Πλένουμε συχνά</strong> τα χέρια μας.</li>
            <li> Lorem ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit. </li>
            <li> Beatae necessitatibus dicta assumenda <strong>consectetur</strong> aperiam aliquid repellat tempora quibusdam eius.</li>
            <li>  Impedit, earum laboriosam? Rerum iste accusantium quasi quod sed vitae neque.</li>
        </ol>
        <img src="https://www.civilprotection.gr/sites/default/gscp_uploads/resize/covid/1135-800x800.jpeg">
    </block>
    <block class="covidfaq">
        <div class="faqcolumn"> <h4>Για τους εργαζόμενους :</h4>
            <div class="accordion">
                <button type="button" class="accordion__button" v-on:click="expandcontent">Question</button>
                    <div class="accordion__content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
                    <button type="button" class="accordion__button" v-on:click="expandcontent">Question</button>
                    <div class="accordion__content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
            </div>
        </div>
        <div class="faqcolumn"> <h4>Για τους εργοδότες : </h4>
            <div class="accordion">
                <button type="button" class="accordion__button" v-on:click="expandcontent">Question</button>
                    <div class="accordion__content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
            </div>
        </div>
    </block>


    <block id="covid_generalinfo">
        <div class="accordion" id="bottom"> <h4>Γενικές πληροφορίες: </h4>
                <button type="button" class="accordion__button" v-on:click="expandcontent">Τι είναι ο κορωνοϊός SARS-Cov-19 ;</button>
                    <div class="accordion__content">
                        <p>
                            Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
                    <button type="button" class="accordion__button" v-on:click="expandcontent">Question</button>
                    <div class="accordion__content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
                    <button type="button" class="accordion__button" v-on:click="expandcontent">Question</button>
                    <div class="accordion__content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </div>
            </div>
    </block>
    </div>
</template>

<script>
    
export default {
	methods: {
		expandcontent() {
            document.querySelectorAll('.accordion__button').forEach(button=>{
            button.addEventListener('click',()=>{
                const accordionContent = button.nextElementSibling;

                button.classList.toggle('accordion__button--active');

                if (button.classList.contains('accordion__button--active')){
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                } else {
                    accordionContent.style.maxHeight = 0;
                }
            });
           });
           
	    }
    }
}
/*export default {
    methods: {
        expandcontent() {
            const accordionContent = button.nextElementSibling;
            button.classList.toggle('accordion__button--active');
            if (button.classList.contains('accordion__button--active')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        }
    }
}*/

/*export default {
    data () {
        return {
            clicked : false
        }
    },
    methods: {
        expandcontent() {

            if (this.clicked == false){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                clicked = true;
            } else {
                accordionContent.style.maxHeight = 0;
                clicked = false;
            }
        }
    }
}*/
</script>

<style scoped>
   .accordion__button {
       display:block;
       width:100%;
       padding: 15px;
       outline:none;
       cursor:pointer;
       background: whitesmoke;
       color:#17a2b8;
       text-align:center;
       transition: background 0.2s;
   }

   .accordion__button::after{
       content: '\25be';
       float:right;
       transform:scale(1.5);
   }
   .accordion__button--active + .accordion__content {display:block}
    .accordion__button--active{
        background: #5555 
    }
   .accordion__button--active::after{
       content: '\25b4'
   }

   .accordion__content {
       /*overflow: hidden;
       max-height: 0;
       transition: max-height 0.2s;*/

       padding:0 15px;
       background: #E5E5E5;
       display:none;
       overflow:auto;
       
   }

    block{
        padding: 50px 20px 30px;
        justify-content:space-around;
        display: flex;
        
    }

    .faqcolumn{
        width: 50%;
        float:left; /* add this */
    }

    img{
        width:400px;
        height:auto;
        float:left;
    }

    h4{
        font-weight: bolder;
        padding-top:35px;
    }

    ol{
        font-size: 18px;
        text-align: left;
    }
    li{
        padding:15px
    }
    #bottom{
        width:100%
    }
</style>