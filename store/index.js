
export const state ={
  user:undefined,
  userLoan:undefined,
  loans:undefined
}
export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
}
export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      console.log(authUser);
      state.user = undefined;
      window.localStorage.clear()
    } else {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  },
  setUser(state,data){
    state.user = data
  },
  setUserLoan(state, data){
    state.userLoan = data
  },
  changePaymentValue(state,data){
    state.userLoan.payments[data.index].paid = data.value
  },
  setLoans(state, data){
    state.loans = data;
  }
}
export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email, emailVerified } = authUser
      ctx.dispatch('getUserDataFromFireBase',{ uid, email, emailVerified })
    }
  },
  addDataToFireBaseCollection(ctx,{collectionName,data}){
    const ref = this.$fire.firestore.collection(collectionName);
    ref.add({
        // username: "",
        // email: "",
        // type: "User"
        ...data
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  },
  getUserDataFromFireBase(ctx,value){
    const ref = this.$fire.firestore.collection('users').where("email", "==", value.email);
    ref.get().then((doc) => {
      doc.forEach(element => {
        // console.log(element.data())
        value.username = element.data().username
        value._id = element.id
        value.type = element.data().type
        ctx.commit('setUser',value);
      });
    })
  },
  getLoanDataFromFireBase(ctx,value){
    const ref = this.$fire.firestore.collection('loan').where("userEmail", "==", value);
      ref.get().then((doc) => {
        doc.forEach(element => {

          ctx.commit('setUserLoan',{...element.data(),_id:element.id});
        });
      })
      .catch((error) => {
        console.error(error)
      })
  },
  getAllLoans(ctx,value){
    const ref = this.$fire.firestore.collection('loan');
      ref.get().then((querySnapshot) => {
        let loans = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            loans.push({...doc.data(),_id:doc.id})
        });
        ctx.commit('setLoans',loans)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}