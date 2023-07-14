<template>
  <div class="pa-0">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        editable
        color="secondary"
        step="1"
      >
        第一層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        color = "secondary"
        editable
        step="2"
      >
        第二層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 3"
        color = "secondary"
        editable
        step="3"
      >
        第三層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 4"
        color = "secondary"
        editable
        step="4"
      >
        第四層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 5"
        color = "secondary"
        editable
        step="5"
      >
        第五層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 6"
        color = "secondary"
        editable
        step="6"
      >
        外側
      </v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step
        :complete="e1 > 7"
        color = "secondary"
        editable
        step="7"
      >
        確認
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <LayerOne 
          @layer_change="renew"
          @layer_insert="insert"
        ></LayerOne>
        <br>
        
        <v-row class="justify-end">
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 2">
            下一層
          </v-btn>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <LayerTwo
          @layer_change="renew"
          @layer_insert="insert">
        </LayerTwo>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 1">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 3">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="3">
        <LayerThree
          @layer_change="renew"
          @layer_insert="insert">
        </LayerThree>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 2">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 4">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="4">
        <LayerFour
          @layer_change="renew"
          @layer_insert="insert"
          >
        </LayerFour>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 3">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 5">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="5">
        <LayerFive
          @layer_change="renew"
          @layer_insert="insert">
        </LayerFive>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 4">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 6">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="6">
        <LayerOut
          @layer_change="renew"
          @layer_insert="insert">
        </LayerOut>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 5">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 7">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="7">
        <v-card
          class="mb-12"
          style="background-color: #EEEEEE"
          height="250px"
        >
        <v-col>
          <p class="text-body-1">護理師編號 : {{uid}}</p>
          <p class="text-body-1">護理師姓名 : {{uname}}</p>
          <p class="text-body-1">負責區域 : {{pNo}}</p>
          <p class="text-body-1">點班日期 : {{date}}</p>
          <p class="text-body-1">系統時間 : {{time}}</p>
          <p class="text-body-1" v-if="s_time==0">點班時間 : 白班</p>
          <p class="text-body-1" v-if="s_time==1">點班時間 : 小夜班</p>
          <p class="text-body-1" v-if="s_time==2">點班時間 : 大夜班</p>
        </v-col>
        </v-card>

        <v-simple-table dense class="pa-2 mb-6 grey lighten-3">
          <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">品項</th>
                    <th class="text-left">異動數量</th>
                    <th class="text-left">備註</th>
                    <th class="text-left">層數</th>
                </tr>
            </thead>
            <tbody>
                <tr
                  v-for="item in layer_change"
                  :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.remark }}</td>
                  <td>{{ item.layer_num}}</td>
                </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-spacer></v-spacer>

        <v-btn
          block
          color="secondary"
          @click="send"
        >
          確認送出
        </v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
import LayerOne from '../components/LayerOne.vue'
import LayerTwo from '../components/LayerTwo.vue'
import LayerThree from '../components/LayerThree.vue'
import LayerFour from '../components/LayerFour.vue'
import LayerFive from '../components/LayerFive.vue'
import LayerOut from '../components/LayerOut.vue'
import axios from 'axios';

export default{
  data () {
      return {
        num: '',
        page: 1,
        e1: 1,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
        layer_change: [],
        layerInsert: [],
        uid: this.$route.query.uid,
        uname: this.$route.query.uname,
        pNo: this.$route.query.pNo,
        s_time: this.$route.query.time,
        detect : this.$route.query.detect,
      }
    },
  create() {
    this.getRouterData()
  },
  components: {
    LayerOne,
    LayerTwo,
    LayerThree,
    LayerFour,
    LayerFive,
    LayerOut
  },
  methods: {
    next: function(pageIndex) {
			let _this = this;
			let _start = (pageIndex - 1) * _this.pageSize;
			let _end = pageIndex * _this.pageSize;
			_this.historyList = _this.list.slice(_start, _end);
			_this.page = pageIndex;
		},
    async send (){
      const that = this
      
      var time_temp = this.getTimeState()
      var rNo_temp = this.uid + this.date.substr(2,2) + this.date.substr(5,2) + this.date.substr(8,2) + time_temp + 'A0'

      var time_temp_C = this.getTimeState_C()

      //alert(rNo_temp)

      await axios.get('/updateLastRNO', {
        params:
          {
            rNo: rNo_temp,
            pNo: this.pNo
          }
        })
      .then(function(resp){
        alert('已送出')
      }).catch(function(error){
        alert('Database Error ' +error)
      })

      await axios.get('/insertRecord', {
        params:
          {
            rNo: rNo_temp,
            uid: this.uid,
            uname :this.uname,
            pNo: this.pNo,
            date: this.date,
            time: time_temp_C,
			systime: this.time,
          }
        })
      .then(function(resp){
        //alert('已送出')
      }).catch(function(error){
        alert('Database Error ' +error)
      })


      //alert(this.layerInsert.length)
      for(var i=0; i<this.layerInsert.length; i++){
        await axios.get('/updateMedNum', {
          params:
          {
            rNo: rNo_temp,
            pNo: this.pNo,
            itemName: this.layerInsert[i].name,
            quantity: this.layerInsert[i].quantity,
            layer: this.layerInsert[i].layerNum,
            remark: this.layerInsert[i].remark,
          }
        })
        .then(function(resp){
          //alert('已送出')
        }).catch(function(error){
          alert('Database Error ' +error)
        })
      }

      this.$router.push({
        path: "/home",
        query:{
          uid : this.uid,
          uname : this.uname,
          pNo : this.pNo,
        }
      })

    },

    renew(name, qua, in_qua, remark, layer){
      if(qua != 0){
        var index = this.layer_change.findIndex(function(item, index, array){
          return item.name === name
        })
        let temp={
          name: name, 
          quantity: qua, 
          remark: remark,
          layer_num: layer}
        if(index!=-1)
          this.layer_change.splice(index,1)
        this.layer_change.push(temp)
      }
      else if(qua == 0){
        index = this.layer_change.findIndex(function(item, index, array){
          return item.name === name
        })
        this.layer_change.splice(index,1)
      }
      
      var index_in = this.layerInsert.findIndex(function(item, index, array){
        return item.name === name
      })
      this.layerInsert[index_in].quantity = in_qua
      this.layerInsert[index_in].remark = String(remark)
    },

    insert(name, qua, lay, remark){
      let temp_in={
        name: String(name),
        quantity: qua,
        remark: remark,
        layerNum: lay,
      }
      this.layerInsert.push(temp_in)
      //alert(this.layerInsert[1].name)
    },

    getTimeState(){
      let timeNow = new Date();
      let hours = timeNow.getHours();
      
      let state= '';
      
      if (this.s_time==2) {
        state = 'N';
      } else if (this.s_time==0) {
        state= 'D';
      } else if (this.s_time==1) {
        state= 'E';
      }
      return state;
    },

    getTimeState_C(){
      let timeNow = new Date();
      let hours = timeNow.getHours();
      
      let state= '';
      
      if (this.s_time==2) {
        state = '大夜班';
      } else if (this.s_time==0) {
        state= '白班';
      } else if (this.s_time==1) {
        state= '小夜班';
      }
      return state;
    },
  }
}

</script>