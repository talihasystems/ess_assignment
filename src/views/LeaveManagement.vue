<template>
    <div>
        <SideBar />
        <div class="text-center">
        <v-avatar
            tile
            color="blue"
        >
            <v-icon dark>
                mdi-alarm
            </v-icon>
        </v-avatar>
  </div>
    </div>
</template>

<script>
  import SideBar from '../components/SideBar.vue'

  export default {
    components: {
      SideBar,
    },
  }
</script>
