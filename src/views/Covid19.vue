<template>
    <div id="covid">
    <h4>Γενικές οδηγίες ασφαλείας κατά του covid-19</h4>
    <div class="block"  id="covid_instructions">
        <img id="covid_mask" src="https://www.uoi.gr/wp-content/uploads/2020/09/mask-ti-den_post.png">
        
        <img id="diagram-1" src="@/images/diagram-1.jpg">
        <img src="https://www.civilprotection.gr/sites/default/gscp_uploads/resize/covid/1135-800x800.jpeg">
    </div>
    <div class="covidfaq block">
        <div class="faqcolumn"> <h4>Για τους εργαζόμενους :</h4>
            <div class="accordion">
                <b-button type="button" class="accordion__button" v-b-toggle.collapse-1>Τι επιλογές έχω για <strong>ασφαλές περιβάλλον εργασίας</strong>; </b-button>
                    <b-collapse id="collapse-1" class="mt-2">
                        <p>
                            Για τους ενεργούς εργαζομένους (δεν έχουν δηλωθεί σε αναστολή ή άδεια ειδικού σκοπού), υπάρχει η επιλογή της <strong>τηλεργασίας</strong>, της <strong>εκ περιτροπής</strong> εργασίας και της <strong>εργασίας με βάρδιες</strong>.
                            <br>
                            Ο εργαζόμενος έχει προσωπική ευθύνη να τηρεί τις οδηγίες ασφαλείας και να υποδεικνύει τις καταπατήσεις στον και από τον χώρο εργασίας του (άτυπα ή τυπικά).
                            <br><br>
                            Κάθε επιλογή πρέπει να γίνεται <strong>σε συνεννοήση με τον χώρο εργασίας</strong> του.
                        </p>
                    </b-collapse>
                    <b-button type="button" class="accordion__button" v-b-toggle.collapse-2>Question</b-button>
                    <b-collapse id="collapse-2" class="mt-2">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                        </p>
                    </b-collapse>
            </div>
        </div>
        <div class="faqcolumn"> <h4>Για τους εργοδότες : </h4>
            <div class="accordion">
                <b-button type="button" class="accordion__button" v-b-toggle.collapse-3>Θέλω να δηλώσω <strong>άδεια ειδικού σκοπού</strong> εργαζομένου.</b-button>
                    <b-collapse id="collapse-3" class="mt-2">
                        <router-link to='/day_off'><button>
                            Δήλωση άδειας ειδικού σκοπού
                        </button></router-link>
                    </b-collapse>
            </div>

            <div class="accordion">
                <b-button type="button" class="accordion__button" v-b-toggle.remote>Θέλω να δηλώσω εργαζόμενο για <strong>εξ αποστάσεως εργασία</strong>.</b-button>
                    <b-collapse id="remote" class="mt-2">
                        <router-link to='/remote'><button>
                            Δήλωση τηλεργασίας
                        </button></router-link>
                    </b-collapse>
            </div>
        </div>
    </div>


    <div class="block" id="covid_generalinfo">
        <div class="accordion" id="bottom"> <h4>Γενικές πληροφορίες: </h4>
                <b-button type="button" class="accordion__button"  v-b-toggle.collapse-4>Τι είναι ο κορωνοϊός SARS-Cov-19 ;</b-button>
                <b-collapse id="collapse-4" class="mt-2">
                    <p>
                        Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                    </p>
                </b-collapse>
                <b-button type="button" class="accordion__button"  v-b-toggle.collapse-5>Question</b-button>
                <b-collapse id="collapse-5" class="mt-2">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                    </p>
                </b-collapse>
                <b-button type="button" class="accordion__button" v-b-toggle.collapse-6>Question</b-button>
                <b-collapse id="collapse-6" class="mt-2">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima, autem blanditiis quaerat culpa porro eligendi optio earum? Error, minima. Maiores quo minima aliquam corrupti dolorum ea nulla quos modi!
                    </p>
                </b-collapse>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
      }
    }
}
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

    .block{
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