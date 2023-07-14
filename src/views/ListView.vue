<template>
  <v-container fluid class="search-list-page">
    <v-row>
      <v-col align="center" justify="center">
        <v-card class="mx-1 mb-1" color="rgb(224, 224, 224, 0.2)">
          <v-card-title class="pa-6 pb-0">
            <h3>
              急救車點班情況
            </h3>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
              <br>
              <v-date-picker
                v-model="dates"
                range
                locale="zh-tw"
                color="#444444"
                header-color="#888888"
              ></v-date-picker>
              <br>
              <br>
              <v-btn 
                type="primary"
                color="secondary"
                @click="search">
                  搜尋
              </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      user: {
        uid: '',
        uname: '',
        pNo: '',
      },
      dates: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      computed: {
        dateRangeText () {
          return this.dates.join(' ~ ')
        },
      },
    };
    },
    created(){
      this.user.uid=this.$route.query.uid;
      this.user.uname=this.$route.query.uname;
      this.user.pNo=this.$route.query.pNo;
    },
    methods: {
      search() {
        var that = this;
        var a=0, b=1;
          if(that.dates[0]>that.dates[1]){
            a=1;
            b=0;
          }
          that.axios.get('/shift', {
            params:{
              begin_Date: that.dates[a],
              fin_Date: that.dates[b],
            }
          }).then(function(res){
            //alert(res.data.status)
            if(res.data.status==200){
                that.$router.push({
                  path: '/search',
                  query:{
                    uid: that.user.uid,
                    uname: that.user.uname,
                    pNo: that.user.pNo,
                    begin_Date: that.dates[a],
                    fin_Date: that.dates[b],
                  }
                })
            }
            else{
              alert('查無資料',{
              confirmButtonText: '確定',
            });
            }
          }).catch(err=>{
            alert(err);
          })
      },
    },
  }
</script>