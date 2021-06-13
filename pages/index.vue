<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        aspire
      </h1>
      <h2 v-if="user">Hello {{user.username}}</h2>
      <div class="links" v-if="user">
        <nuxt-link to="/test" class="button--green">Test Loan</nuxt-link>
        <nuxt-link to="/user" class="button--green">Test UI</nuxt-link>
        <button @click="logout"  class="button--grey">Logout</button>
        
        <!-- <button @click="check">Check</button> -->
      </div>
      <div class="links" v-else>
        <nuxt-link to="/login" class="button--green">Login</nuxt-link>
        <nuxt-link to="/register" class="button--green">Register</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from 'vuex';
export default {
  computed: {
    ...mapState({
      user:state => state.user
    })
  },
  mounted() {
    
  },
  data() {
    return {
     
    }
  },
  watch: {
    // user:{
    //   handler:  function(value){
    //     if(value){
    //       this.getUserDataFromFireBase(value);
    //     }
    //   },
    //   immediate: true
    // }
  },
  methods: {
    ...mapMutations({
      
    }),
    ...mapActions({
      getUserDataFromFireBase:'getUserDataFromFireBase'
    }),
    logout(){
      this.$fire.auth.signOut();
      this.$notify({
          title: 'Logout',
          message: 'Logout success',
          type: 'success'
        });
    },
    // check(){
    //   console.log("check",this.$fire);
    //   this.$fire.auth.signOut();
    // }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
