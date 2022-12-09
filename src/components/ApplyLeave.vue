<template>
    <v-container>
        <v-card>
        <v-row>
            <v-col
            v-for="(leave, n) in $store.state.leaves"
            :key="n"
            >

            <v-card
                class="mx-auto"
                max-width="500px"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                    {{leave.leave_Name}}
                    </div>
                    <!-- <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                    </v-list-item-title> -->
                    <v-list-item-subtitle>Remaining: {{leave.availableLeaves}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="40"
                    color="#424671"
                    class="totalCount"
                >
                     {{leave.total}}
                </v-list-item-avatar>
               
                </v-list-item>
            </v-card>
            </v-col>
        </v-row>
    </v-card>
    </v-container>
    
</template>

<script>
export default {
  name: "ApplyLeave",
  mounted() {
    if (this.$store.state.leaves.length == 0) {
      this.$store.dispatch("fetchLeaves"); 
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.totalCount {
  color: white
}
.row{
    margin: 0px;
}
</style>
