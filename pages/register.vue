<template>
  <section class="section">
    <div class="input-control">
      <h1 class="">Register</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="username" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
          </el-form-item>
      </el-form>
      <div class="has-text-centered" style="text-align:right;">
        Already got an account? <nuxt-link to="/login">Login</nuxt-link>
      </div>
    </div>
    
    
  </section>
</template>

<script>

import {mapActions} from 'vuex';
export default {

    auth:false,
  data() {
    return {
       ruleForm:{
        email: '',
        password: '',
        username:''
      },
      // error: null,
      rules: {
        email: [
          { required: true, message: 'Please provide email', trigger: 'blur' },
          { type:'email', message: 'Please provide correct email address', trigger: ['blur', 'change'] }
        ],
        password:[
          { required: true, message: 'Please provide password', trigger: 'blur' },
          { min: 3, message: 'Please provide correct password', trigger: ['blur', 'change'] }
        ],
        username:[
          { required: true, message: 'Please provide username', trigger: 'blur' },
          { min: 3, message: 'Please provide correct username', trigger: ['blur', 'change'] }
        ],
      }
    }
  },

  methods: {
    ...mapActions({
      addDataToFireBaseCollection:'addDataToFireBaseCollection'
    }),
    async register() {
      try {
        
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.ruleForm.email,this.ruleForm.password
        )
        this.$notify({
          title: 'Register',
          message: 'register success',
          type: 'success'
        });
        this.addUserData();
        this.$router.push('/');
        
      } catch (e) {
        console.log(e);
        this.$notify({
          title: 'Register',
          message:e.message,
          type: 'error'
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    addUserData(){
      let payload = {
        collectionName:'users',
        data:{
          username: this.ruleForm.username,
          email: this.ruleForm.email,
          type: "User"
        }
      }
      this.addDataToFireBaseCollection(payload);
    }
  }
}
</script>
<style lang="scss" scoped>
section{
    display: grid;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    align-items: center;
    .input-control{
      display: grid;
      /* width: 52%; */
      // grid-gap: 32px;
      padding: 32px;
      border-radius: 6px;
      background: #ffffffc2;
      box-shadow: 0px 0px 6px 1px #00000052;
      h1{
        text-align: center;  
        font-size: 3rem;
        margin-bottom: 2rem;
        font-weight: 400;
      }
    }
}
</style>