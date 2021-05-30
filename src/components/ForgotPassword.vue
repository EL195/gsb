<template>
    <div class="d-lg-flex half">    
    <div class="bg order-1 order-md-2" style="background-image: url('images/right-image.svg');">
   <!-- <h1 class="welcome_text">Bienvenue sur GSB</h1> -->
    </div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <div class="mb-4">
              <h3 class="title" >Réinitialisation</h3>
            </div>
            <br/>
            <form action="#" method="post">
              <div class="form-group last mb-3">
                <label class="labeling" for="password">Email</label>
                <input type="email" class="form-control" id="password">   
              </div>
              <input type="submit" value="Réinitialisation" v-on:click="login()" class="btn btn-block btn-primary">
            </form>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'FortgotPassword',
  props: {
    msg: String
  },
  methods: {
    //redirect to login
        login(){
            this.$router.push('login');
        },
       
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .welcome_text{
        float: left;
        background: #F2F3F9;
        padding: 10px;
        font-size: 75px;
        margin-left: -200px;
        font-weight: 900;
        font-family: "Nunito", Extra-bold!important;
    }
    .form-group{
        border-radius: 50px!important;
        margin:40px;
        border: 1px solid #C4C4C4!important;
        z-index: 3!important;
        overflow: inherit!important;
    }
    .labeling{
        margin-top:-40px;
        margin-left:15px;
        background: white!important;
        padding:5px;
        font-family: "Nunito"!important;
        font-size: 16px;
        color: #100F0F!important;
        z-index: 1!important;
        position: absolute!important;
        border-top: white!important;
    }
    .btn-primary{
        width:  50%!important;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        border:none!important;
        border-radius: 48px!important;
        background: #6C63FF!important;
        font-family: "Nunito"!important;
        font-weight: 900;
    }
    .title{
        text-transform: uppercase!important;
        margin-bottom: -40px;
        font-family: "Nunito", Extra-bold!important;
        text-align: center;
        font-size: 40px;
        font-weight: 900!important;
        color:#6C63FF!important;
        margin-left: 25px;
    }

</style>