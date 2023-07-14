<template>
  <div>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title><h3>急救車點班情況</h3></v-toolbar-title>
        </v-toolbar>
      </template>
      
      <template v-slot:default>
        <thead>
          <tr>
            <th style="text-align: center; vertical-align: middle;">點班日期</th>
			<th style="text-align: center; vertical-align: middle;">系統時間</th>
            <th style="text-align: center; vertical-align: middle;">班次</th>
            <th style="text-align: center; vertical-align: middle;">急救車編號</th>
			<th style="text-align: center; vertical-align: middle;">點班人員</th>
			<th style="text-align: center; vertical-align: middle;">藥品/醫材缺項表</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.date">
              <td style="text-align: center; vertical-align: middle;">{{ item.date }}</td>
              <td style="text-align: center; vertical-align: middle;">{{ item.systime }}</td>
              <td style="text-align: center; vertical-align: middle;">{{ item.shift }}</td>
              <td style="text-align: center; vertical-align: middle;">{{ item.number }}</td>
              <td style="text-align: center; vertical-align: middle;">{{ item.user }}</td>
              <td style="text-align: center; vertical-align: middle;">
                <v-btn
                  x-small
                  depressed="true"
                  @click="showlost(item.date,item.systime, item.shift,item.user, item.number, item.rNo )">
                  <v-icon small>
                    mdi-file-table-outline
                  </v-icon>
                </v-btn>
              </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  export default {
    data () {
      return {
      user: {
        uid: '',
        uname: '',
        pNo: '',
      },
        record_Date:'',
        record_Time:'',
        records: []
    };
    },
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
      this.begin_Date=this.$route.query.begin_Date;
      this.fin_Date=this.$route.query.fin_Date;
    },
    mounted () {
      axios.get('/getShift', {
        params:{
          begin_Date: this.begin_Date,
          fin_Date: this.fin_Date
          }
        })
      .then((resp) => {

        var length = resp.data.length
        for(var i=0; i<length; i++){
          var record_num = resp.data[i].rNo
          var fin = record_num.length

          if(record_num[fin-1] == '1'){
            var temp={
              date: moment(resp.data[i].record_Date).format('YYYY-MM-DD'),
              shift: resp.data[i].record_Time + ' (補)', 
              number: resp.data[i].pNo,
              user: resp.data[i].uname,
              systime: resp.data[i].systime,
              rNo: resp.data[i].rNo}
          }
          else{
            temp={
              date: moment(resp.data[i].record_Date).format('YYYY-MM-DD'),
              shift: resp.data[i].record_Time, 
              number: resp.data[i].pNo,
              user: resp.data[i].uname,
              systime: resp.data[i].systime,
              rNo: resp.data[i].rNo}
          }
          this.records.push(temp)
      }
      }).catch((error) => {
        alert('Database Error ' +error)
      })
    },
    methods: {
      showlost(date,systime,shift,user,cart,rNo) {
        this.$router.push({
          path: "/recordlost",
          query:{
            date: date,
            systime : systime,
			time: shift,
            uname : user,
            pNo : cart,
			rNo: rNo,
          }
        })
      }
	}
  }
</script>