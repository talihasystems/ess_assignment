<template>
<div>
    <v-app-bar class="blue" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>SYSTEMS</v-toolbar-title>
      <v-btn  icon @click="signOut">
       <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>


    <div id="nav">
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text 
          --accent-4"
        >
         <router-link to="/">
              <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>
            
          </router-link>   
          

          <router-link to="/timesheet">
              <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Timesheet Management</v-list-item-title>
              </v-list-item>
            
          </router-link>   

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Approvals</v-list-item-title>
          </v-list-item>


          <router-link to="/leaves">
              <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Leave Management</v-list-item-title>
              </v-list-item>
            
          </router-link>   

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Expense Management</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
    </div>

    
</div>
   
</template>

<script>
  import firebase from "firebase";
  export default {
    name: 'SideBar',
    data: () => ({
      drawer: false,
      group: null,
    }),

    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({ name: "login" });
          });
      }
    },
  }



  
</script>

<style scoped>
.v-toolbar__title{
  margin: auto;
  font-weight: 600
}
.v-list-item-title{
  font-size: large;
}
#nav a{
    text-decoration: none;
    color: none;
 }
</style>