

<template>
  <div class="ContainerStyle">
    <v-card class="signin">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="userRegistration"
        class="formStyle"
      >
      
      <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        type="password"
        label="Password"
        required
      ></v-text-field>

      
      <v-btn
        type="submit"
        x-large
        dark
        style="margin-left: 30px"
      >
        Sign Up
      </v-btn>

      <p>
          Already registered 
          <router-link :to="{name: 'login'}">sign in?</router-link>
      </p>

    </v-form>
    </v-card>
  </div>
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


<style scoped>
.signin{
  height: 400px;
  /* margin: auto; */
  position: absolute;
  /* right: 4%; */
  right: 4%;
  top:25%;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ContainerStyle{
  background: url('https://syshcm.systemsltd.com/EssPlus/login-bg.e69a8f472a164296cfd3.jpg') no-repeat center center fixed !important;
  background-size: cover;
  overflow: hidden;
  height: 100vh
}
/* .formStyle{
  padding: 200px 30px;
} */
</style>