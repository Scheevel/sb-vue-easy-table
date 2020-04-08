<template>
<div>
    <v-table
      :width="1000"
      :columns="listColumns"
      :table-data="listItems"
      :show-vertical-border="false"
      :cell-edit-done="cellEditDone"
    ></v-table>
    <span> {{deep}} </span>
    </div
></template> 

<script>
import Vue from "vue";
import "vue-easytable/libs/themes-base/index.css";
import { VTable, VPagination } from "vue-easytable";
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
export default {
  name: "DataGrid",
  props: ["deep", "msg", "listItems", "listColumns"],
  methods: {
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      console.log(newValue);
    }
  }
};
</script>
