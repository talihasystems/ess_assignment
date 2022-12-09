<template>
    <v-container>
      <v-card>
      

      <v-row  v-if="leaveValue" class="selectLeaveDetails">
        <div>
          <strong>{{leaveValue?.leave_Name}}</strong> | Total {{leaveValue?.total}} | Requested {{leaveValue?.requestedLeaves}} | Remaining {{leaveValue?.availLeaves}}
        </div>
        <v-button @click="leaveValue = ''">
          <v-icon>
            mdi-close-circle
          </v-icon>
        </v-button>
      </v-row>


      <v-row v-else>
        <v-col
          v-for="(leave, n) in $store.state.leaves"
          :key="n"
        >
            <v-card
                class="mx-auto"
                max-width="500px"
                outlined
                @click="leaveValue = leave"
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

     

      <v-form>
  
      <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-menu
          ref="menu"
          v-model="startMenu"
          :close-on-content-click="false"
          
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="startDate"
              label="Start Date"
              append-icon="mdi-calendar"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startDate"
            no-title
            scrollable
          >
          </v-date-picker>
        </v-menu>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-menu
          ref="menu"
          v-model="endMenue"
          :close-on-content-click="false"
          
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="endDate"
              label="End Date"
              append-icon="mdi-calendar"
              outlined
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="endDate"
            no-title
            scrollable
          >
          </v-date-picker>
        </v-menu>
      </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
            label="Reason"
            outlined
            required
          ></v-textarea>
        </v-col>
      </v-row>


      <v-row class="buttonStyle">
        <v-btn
          type="submit"
          x-large
          color="primary"
          style="margin: 0px 10px 20px 0px"
        >
          Submit for Approval
        </v-btn>
      </v-row>
      
      </v-form>
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
  watch: {
    leaveValue(newleaveValue, oldleaveValue) {
      console.log('old and new Grade', oldleaveValue,  newleaveValue)
    }
  },
  data: () => ({
      startDate: '',
      endDate: '',
      startMenu: false,
      endMenue: false,
      leaveValue : ''
  }),
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
.buttonStyle{
  justify-content: flex-end;
}
.selectLeaveDetails{
    background: #f9fbff;
    justify-content: space-between;
    padding: 15px;
}
</style>

