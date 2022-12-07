<template>
    <v-container>
     <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>
            <div>
                <label>Name</label>
                <input type="text" v-model="user.name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" v-model="user.email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" v-model="user.password" />
            </div>
            <button type="submit">
               Sign Up
            </button>
            <p>
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
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
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>

