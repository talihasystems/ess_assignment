<template>
    <v-container>
        <div class="vue-tempalte">
            <form @submit.prevent="userLogin">
                <h3>Sign In</h3>
                <div>
                    <label>Email address</label>
                    <input type="email"  v-model="user.email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"  v-model="user.password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </v-container>
    
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>