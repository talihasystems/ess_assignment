<template>
    <v-container>
        <v-data-table
            :headers="$store.state.userLeaves.headers"
            :items="$store.state.userLeaves.leaves"
            class="elevation-1"
        >
            <template v-slot:body="{items}">
                <tbody>
                    <tr v-for="item in items" :key="item.name">
                    <td>{{item.leaveType}}</td>
                    <td>
                    <v-chip
                        :color="getColor(item.status)"
                        dark
                    >
                        {{ item.status }}
                    </v-chip>
                    </td>
                    <td>{{getDate(item.startDate)}}</td>
                    <td>{{getDate(item.endDate)}}</td>
                    </tr>
                </tbody>
            </template>
        </v-data-table>
    </v-container>

</template>



<script>
const moment = require('moment'); 
export default {
  mounted() {
    if (this.$store.state.userLeaves.length == 0) {
      this.$store.dispatch("fetchUserLeaves"); 
    }
  },
  data: () => ({

  }),
  methods: {
      getColor (status) {
        if (status == 'pending') return 'orange'
        else if (status == 'approved') return 'green'
        else return 'red'
      },
        getDate (date) {
            return moment(date).format('MM/DD/YYYY')
        },
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

