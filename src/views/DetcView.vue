<template>
  <div id="detect">
    <v-img 
      :src="url"
      max-height = "554"
      max-width = "739"
      contain
    ></v-img>

    <v-file-input
      accept="image/jpg"
      placeholder="Please select a file"
      prepend-icon="mdi-file"
      @change="previewImage"
      v-model="image"
    ></v-file-input>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        color="secondary"
        block
        @click="upload">
          上傳
      </v-btn>
    </v-row>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        class="ma-3"
        color="secondary"
        block
        @click="manual">
          手動點班
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data () {
      return {
        url: null,
        image: null,
        num: null,
        uid: this.$route.query.uid,
        uname: this.$route.query.uname,
        pNo: this.$route.query.pNo,
        record_id: null,
      }
    },
    mounted() {
      axios.get('/getLastRNO', {params:{pNo : this.pNo}})
      .then((resp) => {
        this.record_id = resp.data[0].rNo
        //alert(this.record_id)
      }).catch((error) => {
        alert('Database Error ' +error)
      })
    },
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
      this.time=this.$route.query.time;
    },
    methods: {
      previewImage () {
        this.url = URL.createObjectURL(this.image)
      },
      upload () {
        var that = this;

        const formData = new FormData();
        formData.append('image', that.image)

        const path = 'http://192.168.1.16:5000/detectObject';
		

        axios.post(path,formData)
        .then(function(resp){
          var msg = resp.data.status;

          //alert('success'+msg)
          
          that.num = msg.toString();
          that.num = that.num.substring(1, (that.num.length-1));
          //alert(that.num)
          that.$router.push({
            path: "/layer",
            name: 'layer',
            query:{
              uid : that.uid,
              uname : that.uname,
              pNo : that.pNo,
              num : that.num,
              rNo : that.record_id,
              time : that.time,
              detect : 1,
            }
          })

        }).catch(function(error){
          alert('Error '+ error)
        })
      },
      manual () {
        var that = this;

        const path = 'http://192.168.1.16:5000/manual';

        axios.post(path)
        .then(function(resp){
          var msg = resp.data.status;

          //alert('success'+msg)
          
          that.num = msg.toString();
          that.num = that.num.substring(1, (that.num.length-1));
          //alert(that.num)

          that.$router.push({
            path: "/layer",
            name: 'layer',
            query:{
              uid : that.uid,
              uname : that.uname,
              pNo : that.pNo,
              num : that.num,
              rNo : that.record_id,
              time : that.time,
              detect : 0
            }
          })

        }).catch(function(error){
          alert('Error '+error)
        })
      },
    }
  }
</script>
