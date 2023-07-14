<template>
  <v-container fluid class="info-page">
    <v-row>
      <v-col lg=12 cols=12>
        <v-card class="mx-1 mb-1" color="rgb(224, 224, 224, 0.2)">
          <v-card-title class="pa-6 pb-3">
            <p>每日點班</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="info-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <p class="text-body-1">負責區域: {{pNo}} </p>
                <p class="text-body-1">點班日期: {{date}}</p>
                <p class="text-body-1">系統時間: {{time}}</p>
                <v-card-text class="pa-0 mb-3">
                  <v-chip-group
                    v-model="selection"
                    active-class="secondary white--text"
                    column
                    @change="isAddButtonDisabled"
                  >
                    <v-chip v-if="t1==1" class="green lighten-1 white--text">白班</v-chip>
                    <v-chip v-else-if="t1==0" class="red lighten-1 white--text">白班</v-chip>

                    <v-chip v-if="t2==1" class="green lighten-1 white--text">小夜班</v-chip>
                    <v-chip v-else-if="t2==0" class="red lighten-1 white--text">小夜班</v-chip>

                    <v-chip v-if="t3==1" class="green lighten-1 white--text">大夜班</v-chip>
                    <v-chip v-else-if="t3==0" class="red lighten-1 white--text">大夜班</v-chip>

                  </v-chip-group>
                </v-card-text>
    
              </v-col>
              <v-btn 
              elevation="2"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              :disabled="disabled"
              @click.native="toDetect">
                開始點班
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => ({
      uid: null,
      uname: null,
      pNo: null,
      selection: -1,
      t1: 0,
      t2: 0,
      t3: 0,
      disabled: true,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
    }),
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
    },
    mounted() {
      axios.get('/getPsn', {params:{pNo : this.pNo, begin_Date : this.date, fin_Date : this.date}})
      .then((resp) => {
        let data_num = resp.data.length;
        alert(resp.data[0].record_Time)

        for(var i = 0; i < data_num; i++){
          if(resp.data[i].record_Time == "白班")
            this.t1 = 1;
          else if(resp.data[i].record_Time == "小夜班")
            this.t2 = 1;
          else if(resp.data[i].record_Time == "大夜班")
            this.t3 = 1;
        }
      }).catch((error) => {
        alert('Database Error ' +error)
      })
      
    },
    methods: {
      toDetect() {
        this.$router.push({
          path: "/detect",
          name: 'detect',
          query:{
            uid : this.uid,
            uname : this.uname,
            pNo : this.pNo,
            time : this.selection
          }
        })
      },
      isAddButtonDisabled() {
        if(this.selection==-1)
          this.disabled=true
        else
          this.disabled=false
      },
    },

  }

</script>
