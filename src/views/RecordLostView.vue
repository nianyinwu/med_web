<template>
  <div>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <h3>藥品/醫材缺項表</h3>
            <h5>急救車編號 : {{pNo}}</h5>
            <h5>點班時間 : {{date}} {{systime}}</h5>
            <h5>班次 : {{time}}</h5>
            <h5>點班人員 : {{uname}}</h5>
          </v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:default >
        <thead>
          <br><br>
          <tr>
            <th style="text-align: center; vertical-align: middle;">層數</th>
            <th style="text-align: center; vertical-align: middle;">藥品/醫材</th>
            <th style="text-align: center; vertical-align: middle;">點班數量</th>
            <th style="text-align: center; vertical-align: middle;">預設數量</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.date" >
                <td style="text-align: center; vertical-align: middle;">{{ item.layer }}</td>
                <td style="text-align: center; vertical-align: middle;">{{ item.itemName }}</td>
                <td style="text-align: center; vertical-align: middle;">{{ item.quantity }}</td>
                <td style="text-align: center; vertical-align: middle;">{{ item.exact_quantity }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        block
        color="secondary"
        class="ma-3"
        onclick="history.go(-1)">
        返回
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  
  export default {
    data () {
      return {
        records: [],
        exact: [],
        uname: this.$route.query.uname,
        systime: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        editedItem: {
          itemName: '',
          quantity: 0,
          exact_quantity: 0,
          remark: '',
          layer: 0,
        },
        defaultItem: {
          itemName: '',
          quantity: 0,
          exact_quantity: 0,
          remark: '',
          layer: 0,
        },
      }
    },

    created () {
      this.pNo=this.$route.query.pNo;
      this.date=this.$route.query.date;
      this.systime=this.$route.query.systime;
      this.time=this.$route.query.time;
      this.uname=this.$route.query.uname;
      this.rNo=this.$route.query.rNo;
    },

    mounted () {
      axios.get('/getAllExactNum', {params:{pNo : this.pNo}})
      .then((resp) => {
        this.exact = resp.data
      }).catch((error) => {
        alert('Database Error ' +error)
      })

      axios.get('/getRecordMed', {params:{pNo : this.pNo, rNo: this.$route.query.rNo}})
      .then((resp) => {
        var length = resp.data.length
        
        for(var i=0; i<length; i++){
          for(var j=0; j<length; j++){
            if((resp.data[i].itemName == this.exact[j].itemName) && (resp.data[i].quantity != this.exact[j].quantity) ){

              var temp_rec={
                itemName: resp.data[i].itemName,
                quantity: resp.data[i].quantity,
                exact_quantity: this.exact[j].quantity,
                remark: resp.data[i].remark,
                layer: resp.data[i].layer,
              }
              this.records.push(temp_rec)
              break
            }
          }
        }
      }).catch((error) => {
        window.location.reload()
      })
    },

    methods: {
      editItem (item) {
        this.editedIndex = this.records.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      
    }

  }
</script>e>