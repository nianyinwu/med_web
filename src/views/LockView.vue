<template>
  <v-data-table
    :headers="headers"
    :items="carts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>急救車鎖定</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">鎖定</span>
            </v-card-title>
            <v-card-text>
              <h3>急救車編號 : {{editedItem.number}}</h3>
              <v-spacer></v-spacer>
              <h3>急救用品數量查核 : </h3>
              <v-layout align-center justify-center>
                <v-switch
                  v-model="editedItem.switch1"
                  inset
                  class="ma-0"
                  :label="switch1_state()">
                </v-switch>
              </v-layout>
              <v-spacer></v-spacer>
              <h3>急救有效用品大於兩個月 : </h3>
              <v-layout align-center justify-center>
                <v-switch
                  v-model="editedItem.switch2"
                  inset
                  class="ma-0"
                  :label="switch2_state()">
                </v-switch>
              </v-layout>
              <v-text-field
                label="請輸入鎖定號碼"
                v-model="editedItem.LockNum"
                required>
              </v-text-field>
              <v-spacer></v-spacer>
              <h3>確認人員姓名 : {{uid}}</h3>
              <v-spacer></v-spacer>
              <h3>鎖定人員姓名 : {{uid}}</h3>
              <v-spacer></v-spacer>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                取消
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                儲存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </v-toolbar>
    </template>
    <template v-slot:[`item.state`]="{ item }">
      <v-btn
        tile
        small
        color="success"
        v-if="item.state==0"
        @click="editItem(item)">
        <v-icon left>
          mdi-lock
        </v-icon>
        尚未上鎖
      </v-btn>
      <v-btn
        tile
        small
        color="error"
        v-if="item.state==1"
        @click="editItem(item)">
        <v-icon left>
          mdi-lock
        </v-icon>
        已上鎖
      </v-btn>
    </template>
    
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      //switch1: false,
      //switch2: false,
      dialog: false,
      dialogDelete: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      headers: [
        {
          text: '急救車編號',
          align: 'start',
          sortable: false,
          value: 'number',
        },
        { text: '急救車狀態', value: 'state' },
        { text: '鎖定號碼', value: 'LockNum' },
        { text: '更改時間', value: 'ChangeTime' },
      ],
      carts: [],
      editedIndex: -1,
      editedItem: {
        number: '',
        state: 0,
        LockNum: 0,
        ChangeTime: '',
        switch1: false,
        switch2: false
      },
      defaultItem: {
        number: '',
        state: 0,
        LockNum: null,
        ChangeTime: '',
        switch1: false,
        switch2: false
      },
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize(),
      this.uid = this.$route.query.uid
    },

    methods: {
      initialize () {
        this.carts = [
          {
            number: '7D',
            state: 0,
            ChangeTime: '2022-06-11',
            switch1: false,
            switch2: false
          },
          {
            number: 'PI',
            state: 0,
            ChangeTime: '2022-06-05',
            switch1: false,
            switch2: false
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.carts.indexOf(item)
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
          this.editedItem.ChangeTime = this.date
          this.editedItem.state = 1
          Object.assign(this.carts[this.editedIndex], this.editedItem)
          this.switch1=false
          this.switch2=false
        } else {
          this.carts.push(this.editedItem)
        }
        this.close()
      },

      switch1_state () {
        if(this.editItem.switch1==false){
          var temp = "請確認數量";
          return temp
        }
        else if(this.editItem.switch1==true){
          temp = "數量正確";
          return temp
        }
      },

      switch2_state () {
        if(this.editItem.switch2==false){
          var temp = "請確認效期";
          return temp
        }
        else if(this.editItem.switch2==true){
          temp = "效期正確";
          return temp
        }
      },
    },
  }
</script>