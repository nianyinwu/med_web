<template>
  <div>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>個人點班紀錄</v-toolbar-title>
        </v-toolbar>
        
      </template>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">點班日期</th>
            <th class="text-left">班次</th>
            <th class="text-left">急救車編號</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.date">
              <td>{{ item.date }}</td>
              <td>{{ item.shift }}</td>
              <td>{{ item.number }}</td>
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
        records:[]
      }
    },
    created () {
      this.uid = this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
      this.begin_Date=this.$route.query.begin_Date;
      this.fin_Date=this.$route.query.fin_Date;
    },
    mounted () {
      axios.get('/getPsn', {
        params:{
          uid: this.uid,
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
              number: resp.data[i].pNo}
          }
          else{
            temp={
              date: moment(resp.data[i].record_Date).format('YYYY-MM-DD'),
              shift: resp.data[i].record_Time, 
              number: resp.data[i].pNo}
          }


          this.records.push(temp)
        }
      }).catch((error) => {
        alert('Database Error ' +error)
      })
    }

  }
</script>