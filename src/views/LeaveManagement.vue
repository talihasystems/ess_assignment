<template>
    <div>
        <SideBar />
        <ShowLeaves/>
        <div class="text-center">
            <v-button @click="callCreateLeave">
                <v-avatar
                    color="blue"
                >
                    <v-icon  dark>
                        mdi-plus-thick
                    </v-icon>
                </v-avatar>
            </v-button>
        </div>
    </div>
</template>




<script>
  import SideBar from '../components/SideBar.vue'
  import ShowLeaves from '../components/ShowLeaves.vue'
  export default {
    components: {
      SideBar,
      ShowLeaves
    },
    methods: {
        callCreateLeave() {
            this.$router.push('/create-leave')
        }
    }
  }
</script>

<style scoped>
.v-avatar{
    position: fixed;
    background: linear-gradient(45deg,#2b76e2,#466ed6);
    right: 30px;
    bottom: 65px;
    z-index: 999999;
    animation: 2s infinite fade;
    box-shadow: 0 3px 5px -1px
}
</style>