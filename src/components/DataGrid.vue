<template>
  <div>
    <v-table
      :is-loading="isLoading"
      :width="1000"
      :columns="listColumns"
      :table-data="listItems"
      :show-vertical-border="false"
      :cell-edit-done="cellEditDone"
    ></v-table>
  </div>
</template> 

<script>
import Vue from "vue";
import "vue-easytable/libs/themes-base/index.css";
import { VTable, VPagination } from "vue-easytable";
//import api from '../api';
/*remove*/


Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
export default {
  name: "DataGrid",
  /*props: ["listItems", "listColumns"],*/
  data() {
   //const response = await this.$lp.$api.getItems();

    return{
      isLoading: true,
      listItems: null,
      listColumns: null,
    }
  },
  watch: {
    //'$route': ''
  },
  methods: {
    async request() {
      this.isLoading = false;
      this.listColumns = await this.$lp.columns.get();
      this.listItems = await this.$lp.items.get();
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.listItems[rowIndex][field] = newValue;
      console.log(newValue);
    }
  },
  created() {
    this.request();
  }
};
</script>
