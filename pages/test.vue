<template>
    <section>
      <div class="input-control" v-if="!userLoan">
        <h1 class="">Request Loan</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="amount" prop="amount">
              <el-input v-model="ruleForm.amount" type="number"></el-input>
            </el-form-item>
            <el-form-item label="term" prop="term" >
              <el-input v-model="ruleForm.term" type="number"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Request</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
            </el-form-item>
        </el-form>
        
      </div>
      <div class="input-control" v-else>
        <h1 class="">Pay Loan</h1>
        <div class="loan-payments" v-if="userLoan.approved">
          <div class="loan-head">
            <p>Total Amount : {{userLoan.amount}}</p>
            <p>Total Term : {{userLoan.term}}</p>
          </div>
          <div class="term-loans">
            <div v-for="(item, index) in userLoan.payments" :key="index">
              <p class="amount">Amount : {{item.loanAmount}}</p>
              <p class="date"><i class="el-icon-date"></i> {{getDate(item.loanPayDate)}}</p>
              <button v-if="!item.paid" :class="{'disable':checkDate(item.loanPayDate)}" @click.stop="payAmount(index,userLoan);">Pay Amount</button>
              <h4 v-else>Paid</h4>
            </div>
          </div>
        </div>
        <h4 v-else>Your loan is not approved yet, please wait for admin confirmation <nuxt-link to="/">home</nuxt-link> </h4>
      </div>
    </section>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import moment from 'moment';
export default {
    data() {
        return {
            ruleForm:{
              amount: 0,
              term: 0,
            },
            // error: null,
            rules: {
              amount: [
                { required: true, message: 'Please provide amount', trigger: 'blur' },
                
              ],
              term:[
                { required: true, message: 'Please provide term', trigger: 'blur' },
                
              ]
            }
        }
    },
    computed: {
        ...mapState({
            user: state => state.user,
            userLoan:state => state.userLoan
        })
    },
    async mounted() {
      this.getLoanDataFromFireBase(this.user.email);
      
    },
    methods: {
      ...mapActions({
        getLoanDataFromFireBase:'getLoanDataFromFireBase',
        addDataToFireBaseCollection:'addDataToFireBaseCollection'
      }),
      ...mapMutations({
        changePaymentValue:'changePaymentValue'
      }),
      submitRequest(){
          // let user = this.$auth.user;
          // user.loanAmount = this.amount;
          // user.loanTerm = this.term;
          // this.$auth.setUser(user)
          // window.localStorage.setItem("user",JSON.stringify(user))
          // this.$router.push("/pay")
          let term = parseInt(this.ruleForm.term);
          let amount = parseInt(this.ruleForm.amount);
          let payments = [];
          var date = new Date();
          for (var x=0;x<term;x++) {
            payments.push({
              loanAmount:amount/term,
              loanPayDate: date.setDate(date.getDate()+ (x*7)),
              paid:false
            })
          }
          let payload = {
            collectionName:'loan',
            data:{
              amount: amount,
              term: term,
              userEmail:this.user.email,
              payments:payments,
              approved:false
            }
          }
          this.addDataToFireBaseCollection(payload).then(res => {
            this.$notify({
              title: 'Loan Request',
              message: 'Loan request success',
              type: 'success'
            });  
            this.getLoanDataFromFireBase(this.user.email);
          })

      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submitRequest();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getDate(date){
        return moment(date).format("DD/MM/YYYY");
      },
      checkDate(date){
        let diff = moment().diff(date)
        if(diff<0)
          return true
        else
          return false
      },
      payAmount(index){
        this.changePaymentValue({index:index,value:true});
        console.log(this.userLoan)
        const ref = this.$fire.firestore.collection("loan").doc(this.userLoan._id);
        ref.update({
           'payments':this.userLoan.payments
        })
        .then(() => {
            this.$notify({
              title: 'Payment',
              message: 'Payment success',
              type: 'success'
            });  
        })
        .catch(error => {
          console.error(error)
        })
      }
    },
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
    .loan-payments{
      .loan-head{
        display: grid;
        grid-template-columns: max-content max-content;
        grid-column-gap: 3rem;
      }
      .term-loans{
        display: grid;
        grid-row-gap: 1rem;
        margin-top: 1rem;
        div{
          display: grid;
          grid-template-columns: max-content max-content;
          justify-content: space-between;
          align-items: center;
          button{
            grid-column: 2/3;
            grid-row: 1/3;
            color: white;
            background: #0089ff;
            padding: 5px 10px;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            &:hover{
              box-shadow: 0px 0px 5px 0px #0b0b0b6b;
            }
          }
          .disable{
            background: #c4c4c4;
            cursor: no-drop;
            &:hover{
              box-shadow: none;
            }
          }
          .amount{
            font-size: 1.2rem;

          }
          .date{
            font-size: 0.75rem;
          }
          h4{
            grid-column: 2/3;
            grid-row: 1/3;
          }
        }
      }
    }
}
</style>