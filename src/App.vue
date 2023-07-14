<template>
  <v-app id="App">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <br>
        <h3 id="app">
          {{ uname }}
        </h3>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="{path:to, query:{uid, uname, pNo}}"
          link
        >
        <!-- <v-list-item
          v-for="[icon, text] in links"
          @click="linkto(icon)"
          :key="icon"
          link
        > -->
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>點班系統</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
      </v-container>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      return: {
        uid: ' ',
        uname: [],
        pNo: []
      },
      drawer: null,
      links: [
        ['mdi-home', '主頁', '/home'],
        ['mdi-pill', '急救車點班', '/info'],
        ['mdi-plus-box-outline', '藥品/醫材補班', '/add'],
        ['mdi-account', '個人點班記錄', '/account'],
        ['mdi-list-status', '急救車點班情況', '/list'],
        
      ],
    }),
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
    },
  }
</script>