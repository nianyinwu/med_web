<template>
  <v-container fluid class="info-page" fill-height>
    <v-row align="center" justify="center">
      <div class="home">
        <h1>歡迎使用點班系統</h1>
        <h2>{{pNo}} 護理站</h2>
        <h2>您好，{{uname}} 護理師</h2>
      </div>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn 
        href=""
        color="secondary"
        @click.prevent="logout">
          登出
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        uid: ' ',
        uname: [],
        pNo: []
      }
    },
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
    },
    methods: {
      logout(){
          localStorage.removeItem('token');
          this.$router.push('/');
          window.location.reload();
      },
    },
  }
</script>