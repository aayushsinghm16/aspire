<template>
  <section class="section">
    <div class="input-control">
      <h1 class="">Login</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
          </el-form-item>
      </el-form>
      <div class="has-text-centered" style="text-align:right;">
        Dont have account ? <nuxt-link to="/register">Register</nuxt-link>
      </div>
    </div>
    
    
  </section>
</template>

<script>


export default {


  data() {
    return {
      ruleForm:{
        email: '',
        password: '',
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
        ]
      }
    }
  },

  methods: {
    async login() {
      try {
         await this.$fire.auth.signInWithEmailAndPassword(
          this.ruleForm.email,this.ruleForm.password
        )
        this.$notify({
          title: 'Logged In',
          message: 'login success',
          type: 'success'
        });
        this.$router.push('/');
      } catch (e) {
        console.log(e);
        this.$notify({
          title: 'Login',
          message:e.message,
          type: 'error'
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
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
      padding: 2rem;
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