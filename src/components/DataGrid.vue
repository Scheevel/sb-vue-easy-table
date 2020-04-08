<template>
  <div>
    <div v-if="isLoading">
      <span>Loading...</span>
    </div>
    <div v-if="listItems">
      <v-table
        :width="1000"
        :columns="listColumns"
        :table-data="listItems"
        :show-vertical-border="false"
        :cell-edit-done="cellEditDone"
      ></v-table>
    </div>
  </div>
</template> 

<script>
import Vue from "vue";
import "vue-easytable/libs/themes-base/index.css";
import { VTable, VPagination } from "vue-easytable";
import api from '../api';
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
export default {
  name: "DataGrid",
  /*props: ["listItems", "listColumns"],*/
  data: () => {
    return{
      isLoading: false,
      listItems: null,
      listColumns: null,
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    //'$route': ''
  },
  methods: {
    fetchData() {
      this.isLoading =false;
      this.listItems = api.listData();
      this.listColumns = api.columns();
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.listItems[rowIndex][field] = newValue;
      console.log(newValue);
    }
  }
};
</script>
