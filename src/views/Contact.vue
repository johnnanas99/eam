<template>
    <section>
        <div class="container">
            <div class="contactinfo">
                <div>
                    <h3>Πληροφορίες επικοινωνίας</h3>
                    <ul class="info">
                        <li><span>Σταδίου 29<br>Αθήνα<br>105 59<br><br>212 21 12 212<br>info@ypakp.gr</span></li>
                        <li><span>
                            <strong>Ώρες λειτουργίας:</strong> 8:00-17:00<br><br>
                            Λόγω της πανδημίας του κορωνοϊού, <strong>απαγορεύεται η προσέλευση κοινού στο υπουργείο</strong>.<br>
                            Το κοινό εξυπηρετείται μόνο κατόπιν <router-link to="/rendezvous">ραντεβού</router-link>.<br>
                        </span></li>
                        <li><span>
                            <strong>Γραμματεία εργασίας</strong><br>211 11 11 111<br>ergasia@ypakp.gr<br>
                        </span></li>
                        <li><span>
                            <strong>Γραμματεία Κοινωνικών Υποθέσεων</strong><br>211 12 12 123<br>pronoia@ypakp.gr<br>
                        </span></li>
                        
                    </ul>
                </div>
            </div>
            <div class="contactForm">
                <h3>Επικοινωνήστε μαζί μας</h3>
                Αν επιθυμείτε να παραμείνετε ανώνυμος,<br> συμπληρώστε τα πρώτα πεδία με μη έγκυρες τιμές.
                <div class="formBox">
                    <div class="inputBox w50">
                        <input type="text" name="" required>
                        <span>Ονοματεπώνυμο</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="text" name="" required>
                        <span>Email</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="text" name="" required>
                        <span>Τηλέφωνο</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="text" name="" required>
                        <span>Θέμα</span>
                    </div>
                    <div class="inputBox w100">
                        <textarea name="" required></textarea>
                        <span>Μήνυμα</span>
                    </div>
                    <div class="inputBox w100">
                        <input type="submit" value="Αποστολή">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: inherit;
}
section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120vh;
    background: #c5d8da;
}
section::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:50%;
    height: 100%;
    background: #e5e5e5;
}
section .container{
    position: relative;
    min-width: 1100px;
    min-height: 780px;
    display: flex;
    z-index: 1000;

}

section .container .contactinfo{
    position: absolute;
    top: 40px;
    width: 40%;
    height: calc(100% - 90px);
    background:#c5d8da;
    z-index: 1;
    padding:40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px gray;
}

section .container .contactinfo h3{
    font-size: 24px;
    font-weight: 600;
    margin-bottom:10%;
    color: rgb(68, 67, 67);
}

section .container .contactinfo .info{
    position: relative;
    margin: 20px 0;
    text-align: left;
    width: 100%;
}

section .container .contactinfo .info li{
    position: relative;
    list-style: none;
    display:flex;
    margin: 20px 0;
    padding-left: 35px;
    color: rgb(68, 67, 67);
}

section .container .contactForm h3{
    font-size: 24px;
    font-weight: 600;
    margin-bottom:5%;
    color: rgb(68, 67, 67);
}
section .container .contactForm{
    position:absolute;
    padding: 70px 50px;
    background: #e6d3d3;
    margin-left: 150px;
    padding-left: 30%;
    width: calc(100% - 150px);
    height:100%;
    box-shadow: 0 20px 20px gray;
}

section .container .contactForm .formBox{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap ;
    padding-top: 30px;
}

section .container .contactForm .formBox .inputBox{
    position: relative;
    margin: 0 0 35px 0;
}
section .container .contactForm .formBox .inputBox.w50{
    width:47%;
}
section .container .contactForm .formBox .inputBox.w100{
    width:100%;
}

section .container .contactForm .formBox .inputBox input,
section .container .contactForm .formBox .inputBox textarea{
    width: 100% !important;
    padding: 5px 0;
    resize:none;
    font-size: 16px;
    font-weight: 300;
    color:rgb(68, 67, 67);
    border:none;
    border-bottom: 1px solid rgba(169, 169, 169, 0.466);
    outline:none;
}

section .container .contactForm .formBox .inputBox textarea{
    min-height: 120px;
}

section .container .contactForm .formBox .inputBox span{
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    font-weight: 300;
    color:rgb(68, 67, 67);
    transition: 0.3s;
    pointer-events: none;
}

section .container .contactForm .formBox .inputBox input:focus ~span,
section .container .contactForm .formBox .inputBox textarea:focus ~span,
section .container .contactForm .formBox .inputBox input:valid ~span,
section .container .contactForm .formBox .inputBox textarea:valid ~span{
    transform: translateY(-30px);
    font-size:12px;
    font-weight:700;
    letter-spacing: 1px;
    color:#e29292;
}

section .container .contactForm .formBox .inputBox input[type="submit"]{
    position:relative;
    cursor: pointer;
    background: #018f99;
    color: #e5e5e5;
    border:none;
    max-width: 250px;
    padding: 12px;
}

section .container .contactForm .formBox .inputBox input[type="submit"]:hover{
    background:#e29292;
}
</style>