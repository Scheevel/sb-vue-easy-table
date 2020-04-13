const API_RESPONSE = {
  name: "Mika Whippet",
  email: "mika@mikathewhippet.com",
  role: "Software Engineer",
  insta: "@mika_whippet",
  profile_img:
    "https://pbs.twimg.com/profile_images/982394336456396801/KRv7pJaI_400x400.jpg"
};

const API_COLUMNS = [
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
    field: "project",
    title: "Project",
    width: 150,
    titleAlign: "center",
    columnAlign: "center",
    isEdit: true,
    isResize: true
  },
  {
    field: "address",
    title: "Address",
    width: 280,
    titleAlign: "center",
    columnAlign: "left",
    isEdit: true,
    isResize: true
  }
  ];

const API_ITEMS = [
  {
    title: "one",
    tel: "1561987",
    project: "钢琴、书法、唱歌",
    address: "上海市黄浦区金陵东路569号17楼"
  },
  {
    title: "two",
    tel: "1821538",
    project: "钢琴、书法、唱歌",
    address: "上海市奉贤区南桥镇立新路12号2楼"
  },
  {
    title: "three",
    tel: "1610097",
    project: "钢琴、书法、唱歌",
    address: "上海市崇明县城桥镇八一路739号"
  },
  {
    title: "four",
    tel: "1971123",
    project: "钢琴、书法、唱歌",
    address: "上海市青浦区青浦镇章浜路24号"
  },
  {
    title: "five",
    tel: "1836678",
    project: "钢琴、书法、唱歌",
    address: "上海市松江区乐都西路867-871号"
  }
];

export default {
  /*
  getUser() {
    return new Promise((resolve, reject) => {
      return resolve(API_RESPONSE);
    });
  },
  updateUser(data) {
    return new Promise((resolve, reject) => {
      let user = API_RESPONSE;
      Object.assign(user, data);
      return resolve(user);
    });
  },
  */
  z_getItems: ()=> {
    return {
      "columns": API_COLUMNS,
      "items": API_ITEMS
    }
  },
  getItems() { /*$axios.get('https://my-json-server.typicode.com/scheevel/fakedata/demo')*/},
  //z_getItems: params => axios.get('https://my-json-server.typicode.com/scheevel/fakedata', { params }),
  /*
  createItem: item => axios.post('/api/items', item),
  test: () => {
    var url = "https://my-json-server.typicode.com/scheevel/fakedata/items"
    axios.get(url)
      .then(response => {
        console.log(response.data)
      });
  },*/
    /*
    const response = await setTimeout(() => {
      return 
      },2000);
    return response;
  },
  columns: async () => {
    const response  = setTimeout(() => {
      return 
      }, 1000);
    return response;
  }*/
}