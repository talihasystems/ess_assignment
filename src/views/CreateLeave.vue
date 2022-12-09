<template>
    <div>
        <SideBar />
        <v-container>
            <h1>Leave Request</h1>
        </v-container>
        <ApplyLeave/>
    </div>
</template>

<script>
  import SideBar from '../components/SideBar.vue'
  import ApplyLeave from '../components/ApplyLeave.vue'

  export default {
    components: {
      SideBar,
      ApplyLeave
    },
  }
</script>
