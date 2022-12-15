<template>
  <div>
    <SideBar />
    <v-container>
      <h1>This is an timesheet page</h1>
    </v-container>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "Home",

  components: {
    SideBar,
  },
};
</script>
