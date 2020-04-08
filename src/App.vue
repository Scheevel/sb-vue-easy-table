<template>
<div>
{{deep}}
    <DataGrid :deep="deep" :msg="msg" :listItems="tableData" :listColumns="columns"></DataGrid>
</div>
</template>

<script>
import DataGrid from "./components/DataGrid";

export default {
  name: "App",
  components: {
    DataGrid
  },
  props:['deep'],
  data: () => {
    return {
      msg:'test',
      tableData: [
        {
          title: "one",
          tel: "1561987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          title: "two",
          tel: "1821538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          title: "three",
          tel: "1610097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          title: "four",
          tel: "1971123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          title: "five",
          tel: "1836678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        }
      ],
      columns: [
        {
          field: "title",
          title: "Title",
          width: 80,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          formatter: function(rowData, rowIndex, pagingIndex, field) {
            return `<span class='cell-edit-color'>${rowData[field]}</span>`;
          },
          isResize: true
        },
        {
          field: "tel",
          title: "Id",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "hobby",
          title: "Project",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true
        },
        {
          field: "address",
          title: "地址",
          width: 280,
          titleAlign: "center",
          columnAlign: "left",
          isEdit: true,
          isResize: true
        }
      ]
    };
  }
};
</script>

<style>
</style>
