<template>
  <div>
    <v-card-text class="pa-6 pt-0">
      <v-row no-gutters class="info-widget pb-6">
        <v-data-table
          :headers="headers"
          :items="records"
          item-key="date"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
        >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>雙月稽核</v-toolbar-title>
          </v-toolbar>
            <v-col cols="12" class="card-dark-grey">
              <p class="text-body-1"> 護理師員邊: </p>
              <p class="text-body-1"> 稽核日期: {{date}} </p>
              <p class="text-body-1"> 已設定稽核數量: </p>
            </v-col>
          <v-text-field
            v-model="search"
            label="請輸入急救車編號搜尋"
            class="mx-4"
          ></v-text-field>
        </template>
        </v-data-table>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
    // data () {
      return: {
        search: '',
        calories: '',
        records:[
          {
          number: '7D',
          // onoff:
          // check:
          },
        ]
      },
    }),
    computed: {
      headers () {
        return [
          { text: '急救車編號', value: 'number' },
          { text: '急救車狀態', value: 'onoff' },
          { text: '新增稽核', value: 'check' },
        ]
      },
    },
    methods: {allowedMonths: (val) => parseInt(val.split("-")[1], 10) % 2 === 0,
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>