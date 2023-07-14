<template>
  <div>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="mr-3">
            <h3>藥品/醫材補班</h3>
          </v-toolbar-title>
          
          <v-toolbar-title>
            <subtitle-1 class="ml-2">急救車編號 : {{pNo}}</subtitle-1>
          </v-toolbar-title>
        </v-toolbar>

        <v-toolbar flat>
          <v-toolbar-title>
            <h5 class="mr-3">補班時間 : {{getTimeState_C()}}</h5>
            <h5 class="mr-3">系統時間 : {{systime}}</h5>
          </v-toolbar-title>
        </v-toolbar>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{editedItem.itemName}}</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="請輸入數量"
                v-model="editedItem.quantity"
                required>
              </v-text-field>
              <v-spacer></v-spacer>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close">
                  取消
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save">
                  儲存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">藥品/醫材</th>
            <th class="text-left">數量</th>
            <th class="text-left">備註</th>
            <th class="text-left">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.date">
              <td>{{ item.itemName }}</td>
              <td>{{ item.quantity }}/{{ item.exact_quantity }}</td>
              <td>{{ item.remark }}</td>
              <td>
                <v-btn
                  small
                  color="secondary"
                  @click="editItem(item)">
                <v-icon left small>
                  mdi-pencil
                </v-icon>
                  編輯
                </v-btn>
              </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        block
        color="secondary"
        class="ma-3"
        @click="send">
        送出
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
        dialog: false,
        search: '',
        calories: '',
        records: [],
        exact: [],
        update: [],
        uname: this.$route.query.uname,
        systime: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        editedItem: {
          itemName: '',
          quantity: 0,
          exact_quantity: 0,
          remark: '',
        },
        defaultItem: {
          itemName: '',
          quantity: 0,
          exact_quantity: 0,
          remark: '',
        },
      }
    },

    created () {
      this.uid = this.$route.query.uid
      this.pNo=this.$route.query.pNo;
    },

    mounted () {
      axios.get('/getAllExactNum', {params:{pNo : this.pNo}})
      .then((resp) => {
        this.exact = resp.data
      }).catch((error) => {
        alert('Database Error ' +error)
      })

      axios.get('/getAllNum', {params:{pNo : this.pNo}})
      .then((resp) => {
        this.update = resp.data
        var length = resp.data.length
        
        for(var i=0; i<length; i++){
          for(var j=0; j<length; j++){
            if((resp.data[i].itemName == this.exact[j].itemName) && (resp.data[i].quantity != this.exact[j].quantity)){
              
              if(resp.data[i].remark == 'null')
                resp.data[i].remark = null

              var temp_rec={
                itemName: resp.data[i].itemName,
                quantity: resp.data[i].quantity,
                exact_quantity: this.exact[j].quantity,
                remark: resp.data[i].remark
              }
              this.records.push(temp_rec)
              break
            }
          }
        }
      }).catch((error) => {
        alert('Database Error ' +error)
      })
    },

    methods: {
      editItem (item) {
        this.editedIndex = this.records.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.records[this.editedIndex], this.editedItem)

          var index = -1
          for(var i=0; i < this.update.length; i++){
            if(this.editedItem.itemName === this.update[i].itemName){
              index = i
              break
            }
          }
          //alert(index)
          this.update[index].quantity = this.editedItem.quantity
          this.update[index].remark = null

        } else {
          this.records.push(this.editedItem)
        }
        this.close()
      },

      async send () {
        const that = this
      
        var time_temp = this.getTimeState()
        var rNo_temp = this.uid + this.date.substr(2,2) + this.date.substr(5,2) + this.date.substr(8,2) + time_temp + 'A1'

        var time_temp_C = this.getTimeState_C()

        await axios.get('/updateLastRNO', {
          params:
          {
            rNo: rNo_temp,
            pNo: this.pNo
          }
        })
        .then(function(resp){
          //alert('已送出')
        }).catch(function(error){
          alert('Database Error ' +error)
        })
        
        await axios.get('/insertRecord', {
          params:
          {
            rNo: rNo_temp,
            uid: this.uid,
            uname: this.$route.query.uname,
            pNo: this.pNo,
            date: this.date,
            time: time_temp_C,
            systime: this.systime,
          }
        })
        .then(function(resp){
          //alert('已送出')
        }).catch(function(error){
          alert('Database Error ' +error)
        })

        for(var i=0; i<this.update.length; i++){
          await axios.get('/updateMedNum', {
            params:
            {
              rNo: rNo_temp,
              pNo: this.pNo,
              itemName: this.update[i].itemName,
              quantity: this.update[i].quantity,
              layer: this.update[i].layer,
              remark: this.update[i].remark,
            }
          })
          .then(function(resp){
            //alert('已送出')
          }).catch(function(error){
            alert('Database Error ' +error)
          })
        }
        alert('已送出')
        //window.location.reload();
        this.$router.push({
          path: "/home",
          query:{
            uid : this.uid,
            uname : this.uname,
            pNo : this.pNo,
          }
        })

      },

      getTimeState(){
        let timeNow = new Date();
        let hours = timeNow.getHours();
      
        let state= '';
      
        if (hours >= 0 && hours <= 7) {
          state = 'N';
        } else if (hours > 7 && hours <= 15) {
          state= 'D';
        } else if (hours > 15 && hours <= 24) {
          state= 'E';
        }
        return state;
      },

      getTimeState_C(){
        let timeNow = new Date();
        let hours = timeNow.getHours();
      
        let state= '';
      
        if (hours >= 0 && hours <= 7) {
          state = '大夜班';
        } else if (hours > 7 && hours <= 15) {
          state= '白班';
        } else if (hours > 15 && hours <= 24) {
          state= '小夜班';
        }
        return state;
      },
    }

  }
</script>e>