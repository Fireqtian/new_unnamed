// 城市坐标
var geoCoordMap = {
  上海: [121.4648, 31.2891],
  东莞: [113.8953, 22.901],
  东营: [118.7073, 37.5513],
  中山: [113.4229, 22.478],
  临汾: [111.4783, 36.1615],
  临沂: [118.3118, 35.2936],
  丹东: [124.541, 40.4242],
  丽水: [119.5642, 28.1854],
  乌鲁木齐: [87.9236, 43.5883],
  佛山: [112.8955, 23.1097],
  保定: [115.0488, 39.0948],
  兰州: [103.5901, 36.3043],
  包头: [110.3467, 41.4899],
  北京: [116.4551, 40.2539],
  北海: [109.314, 21.6211],
  南京: [118.8062, 31.9208],
  南宁: [108.479, 23.1152],
  南昌: [116.0046, 28.6633],
  南通: [121.1023, 32.1625],
  厦门: [118.1689, 24.6478],
  台州: [121.1353, 28.6688],
  合肥: [117.29, 32.0581],
  呼和浩特: [111.4124, 40.4901],
  咸阳: [108.4131, 34.8706],
  哈尔滨: [127.9688, 45.368],
  唐山: [118.4766, 39.6826],
  嘉兴: [120.9155, 30.6354],
  大同: [113.7854, 39.8035],
  大连: [122.2229, 39.4409],
  天津: [117.4219, 39.4189],
  太原: [112.3352, 37.9413],
  威海: [121.9482, 37.1393],
  宁波: [121.5967, 29.6466],
  宝鸡: [107.1826, 34.3433],
  宿迁: [118.5535, 33.7775],
  常州: [119.4543, 31.5582],
  广州: [113.5107, 23.2196],
  廊坊: [116.521, 39.0509],
  延安: [109.1052, 36.4252],
  张家口: [115.1477, 40.8527],
  徐州: [117.5208, 34.3268],
  德州: [116.6858, 37.2107],
  惠州: [114.6204, 23.1647],
  成都: [103.9526, 30.7617],
  扬州: [119.4653, 32.8162],
  承德: [117.5757, 41.4075],
  拉萨: [91.1865, 30.1465],
  无锡: [120.3442, 31.5527],
  日照: [119.2786, 35.5023],
  昆明: [102.9199, 25.4663],
  杭州: [119.5313, 29.8773],
  枣庄: [117.323, 34.8926],
  柳州: [109.3799, 24.9774],
  株洲: [113.5327, 27.0319],
  武汉: [114.3896, 30.6628],
  汕头: [117.1692, 23.3405],
  江门: [112.6318, 22.1484],
  沈阳: [123.1238, 42.1216],
  沧州: [116.8286, 38.2104],
  河源: [114.917, 23.9722],
  泉州: [118.3228, 25.1147],
  泰安: [117.0264, 36.0516],
  泰州: [120.0586, 32.5525],
  济南: [117.1582, 36.8701],
  济宁: [116.8286, 35.3375],
  海口: [110.3893, 19.8516],
  淄博: [118.0371, 36.6064],
  淮安: [118.927, 33.4039],
  深圳: [114.5435, 22.5439],
  清远: [112.9175, 24.3292],
  温州: [120.498, 27.8119],
  渭南: [109.7864, 35.0299],
  湖州: [119.8608, 30.7782],
  湘潭: [112.5439, 27.7075],
  滨州: [117.8174, 37.4963],
  潍坊: [119.0918, 36.524],
  烟台: [120.7397, 37.5128],
  玉溪: [101.9312, 23.8898],
  珠海: [113.7305, 22.1155],
  盐城: [120.2234, 33.5577],
  盘锦: [121.9482, 41.0449],
  石家庄: [114.4995, 38.1006],
  福州: [119.4543, 25.9222],
  秦皇岛: [119.2126, 40.0232],
  绍兴: [120.564, 29.7565],
  聊城: [115.9167, 36.4032],
  肇庆: [112.1265, 23.5822],
  舟山: [122.2559, 30.2234],
  苏州: [120.6519, 31.3989],
  莱芜: [117.6526, 36.2714],
  菏泽: [115.6201, 35.2057],
  营口: [122.4316, 40.4297],
  葫芦岛: [120.1575, 40.578],
  衡水: [115.8838, 37.7161],
  衢州: [118.6853, 28.8666],
  西宁: [101.4038, 36.8207],
  西安: [109.1162, 34.2004],
  贵阳: [106.6992, 26.7682],
  连云港: [119.1248, 34.552],
  邢台: [114.8071, 37.2821],
  邯郸: [114.4775, 36.535],
  郑州: [113.4668, 34.6234],
  鄂尔多斯: [108.9734, 39.2487],
  重庆: [107.7539, 30.1904],
  金华: [120.0037, 29.1028],
  铜川: [109.0393, 35.1947],
  银川: [106.3586, 38.1775],
  镇江: [119.4763, 31.9702],
  长春: [125.8154, 44.2584],
  长沙: [113.0823, 28.2568],
  长治: [112.8625, 36.4746],
  阳泉: [113.4778, 38.0951],
  青岛: [120.4651, 36.3373],
  韶关: [113.7964, 24.7028]
};
var myChart = echarts.init(document.querySelector(".map .chart"));
var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
var planePath =
  "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//var planePath = 'arrow';
// 航线类别的颜色
var classColorMap = {
  "普通航线": "#ffffff", 
  "断路航线": "#FF0000", 
  "绿色通道": "#c0ff60"  
};

//页面上面的数字
(function () {
  // 页面加载完成后发送 POST 请求
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://run.mocky.io/v3/e1e16f90-f1c2-442c-9929-e174022277ed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.data) {
        // 使用获取到的数据更新页面
        document.getElementById('plotCount').textContent = data.data.plots;
        document.getElementById('routeCount').textContent = data.data.routes;
      } else {
        console.error('Failed to fetch plot and route counts:', data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
})();


// 点击城市查看城市详情
myChart.on('click', function (params) {
  if (params.seriesType === 'effectScatter') {
    const city = params.name;
    // 打开一个新的页面或弹出窗口，传递城市名称
    const detailPageURL = `detail.html#${encodeURIComponent(city)}`;
    const detailPageWindow = window.open(detailPageURL, '_blank');
    console.log(city);
    // 可选：如果需要在当前页面加载详情，可以移除上面的 open 行，并使用下面的行
    // window.location.href = detailPageURL;
  }
});


// 获取全图
(function () {
  // 页面加载完成后发送 GET 请求
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://run.mocky.io/v3/c9304522-8e77-43ff-97bb-32844bab1bf3', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('网络响应错误');
      }
      return response.json();
    })
    .then(json => {
      var routes = json.data;
      var cityColorValue = "#ffa060";
      var lineColorValue = "#ffa060";
      // 更新地图
      updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
})();


// 特快专递
(function () {
  var fromInput = document.getElementById('fromInput');
  var toInput = document.getElementById('toInput');
  var sendButton = document.getElementById('sendButton');
  var totalDistanceDisplay = document.getElementById('totalDistance');

  sendButton.addEventListener('click', function () {
    var fromCity = fromInput.value;
    var toCity = toInput.value;

    var data = {
      from: fromCity,
      to: toCity
    };

    fetch('https://run.mocky.io/v3/c9304522-8e77-43ff-97bb-32844bab1bf3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // 确保发送的是JSON字符串
    })
      .then(response => {
        // 检查响应状态
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        return response.json();
      })
      .then(json => {
        var routes = json.data;
        var totalDistance = routes.reduce((total, route) => {
          return total + route.distance;
        }, 0); // 计算总距离
        var cityColorValue = "#ffa060";
        var lineColorValue = "#ffffff";
        // 更新地图
        updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue);
        displayTotalDistance(totalDistance); // 显示总距离
      })
      .catch((error) => {
        console.error('Error:', error); // 打印错误信息
      });
  });

  function displayTotalDistance(distance) {
    totalDistanceDisplay.textContent = '总开销: ' + distance + ' km'; // 显示总距离
  }
})();

// 物资补给
(function () {
  var goodsCityInput = document.getElementById('goodsCityInput');
  var goodsTypeInput = document.getElementById('goodsTypeInput');
  var supplyButton = document.getElementById('supplyButton');
  var supplySuccessMessage = document.getElementById('supplySuccessMessage'); // 新增的变量

  supplyButton.addEventListener('click', function () {
    var city = goodsCityInput.value;
    var goods = goodsTypeInput.value;

    var data = {
      city: city,
      goods: goods
    };

    fetch('https://run.mocky.io/v3/da278035-00be-4cfe-a488-2709351a2e62', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // 发送JSON字符串
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        return response.json();
      })
      .then(json => {
        var routes = json.data;
        var cityColorValue = "#c0ff60";
        var lineColorValue = "#ffffff";
        // 更新地图的函数，这里假设与特快专递相同
        updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue);
        supplySuccessMessage.textContent = city + ' ' + goods + '补给成功'; // 新增的代码
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
})();


// 灾害上报
(function () {
  var disasterFromInput = document.getElementById('fromInput');
  var disasterToInput = document.getElementById('toInput');
  var disasterReportButton = document.getElementById('disasterReportButton');

  disasterReportButton.addEventListener('click', function () {
    var fromCity = disasterFromInput.value;
    var toCity = disasterToInput.value;

    var data = {
      from: fromCity,
      to: toCity
    };

    fetch('https://run.mocky.io/v3/da278035-00be-4cfe-a488-2709351a2e62', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        return response.json();
      })
      .then(json => {
        var routes = json.data;
        var cityColorValue = "#ff0000"; // 红色标记点颜色
        var lineColorValue = "#ff0000"; // 红色航线颜色
        updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
})();


// 应急通道
(function () {
  var emergencyFromInput = document.getElementById('emergencyFromInput');
  var emergencyToInput = document.getElementById('emergencyToInput');
  var emergencyDispatchButton = document.getElementById('emergencyDispatchButton');

  emergencyDispatchButton.addEventListener('click', function () {
    var fromCity = emergencyFromInput.value;
    var toCity = emergencyToInput.value;

    var data = {
      from: fromCity,
      to: toCity
    };

    fetch('https://run.mocky.io/v3/da278035-00be-4cfe-a488-2709351a2e62', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        return response.json();
      })
      .then(json => {
        var routes = json.data;
        var cityColorValue = "#00ff00"; // 绿色标记点颜色
        var lineColorValue = "#00ff00"; // 绿色航线颜色
        updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue);
        emergencySuccessMessage.textContent = '应急通道建立成功';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
})();

// 模式切换
document.addEventListener('DOMContentLoaded', function () {
  var modeInputs = document.querySelectorAll('input[name="mode"]');
  var features = {
    user: document.querySelectorAll('.user-features'),
    admin: document.querySelectorAll('.admin-features'),
    leader: document.querySelectorAll('.leader-features')
  };
  var noFeatureHints = {
    user: document.querySelectorAll('.no-user-features'),
    admin: document.querySelectorAll('.no-admin-features'),
    leader: document.querySelectorAll('.no-leader-features')
  };

  // 从sessionStorage获取保存的模式，如果没有则默认为'user'
  var savedMode = sessionStorage.getItem('selectedMode') || 'user';

  // 默认选中'user'模式，并更新界面
  modeInputs.forEach(function (input) {
    if (input.value === savedMode) {
      input.checked = true;
    }
  });
  updateFeaturesDisplay();

  function updateFeaturesDisplay() {
    // 首先获取当前选中的模式
    var modeInputs = document.querySelectorAll('input[name="mode"]');
    var currentMode = 'user'; // 默认模式为 'user'
    modeInputs.forEach(function (input) {
      if (input.checked) {
        currentMode = input.value;
      }
    });

    // 隐藏所有功能和提示
    for (var key in features) {
      features[key].forEach(function (feature) {
        feature.style.display = 'none';
      });
    }
    for (var key in noFeatureHints) {
      noFeatureHints[key].forEach(function (hint) {
        hint.style.display = 'block';
      });
    }

    // 根据当前选中的模式显示相应的功能，并隐藏对应的noFeatureHint提示
    switch (currentMode) {
      case 'user':
        noFeatureHints.user.forEach(function (hint) { hint.style.display = 'none'; });
        features.user.forEach(function (userFeature) {
          userFeature.style.display = 'block';
        });
        break;
      case 'admin':
        noFeatureHints.user.forEach(function (hint) { hint.style.display = 'none'; });
        noFeatureHints.admin.forEach(function (hint) { hint.style.display = 'none'; });
        features.user.forEach(function (userFeature) {
          userFeature.style.display = 'block';
        });
        features.admin.forEach(function (adminFeature) {
          adminFeature.style.display = 'block';
        });
        break;
      case 'leader':
        noFeatureHints.user.forEach(function (hint) { hint.style.display = 'none'; });
        noFeatureHints.admin.forEach(function (hint) { hint.style.display = 'none'; });
        noFeatureHints.leader.forEach(function (hint) { hint.style.display = 'none'; });
        features.user.forEach(function (userFeature) {
          userFeature.style.display = 'block';
        });
        features.admin.forEach(function (adminFeature) {
          adminFeature.style.display = 'block';
        });
        features.leader.forEach(function (leaderFeature) {
          leaderFeature.style.display = 'block';
        });
        break;
    }
  }

  // 监听模式切换
  modeInputs.forEach(function (input) {
    input.addEventListener('change', function () {
      // 更新sessionStorage
      sessionStorage.setItem('selectedMode', this.value);
      // 更新界面
      updateFeaturesDisplay();
    });
  });
});

//刷新地图的函数
function updateMapWithCitiesAndRoutes(routes, cityColorValue, lineColorValue) {
  // 准备城市散点数据
  var citiesSet = new Set(); // 使用Set来存储唯一的城市
  routes.forEach(route => {
    citiesSet.add(route.from);
    citiesSet.add(route.to);
  });
  // 准备城市散点数据
  var scatterData = Array.from(citiesSet).map(city => {
    var geoCoord = geoCoordMap[city];
    if (geoCoord) {
      return {
        name: city,
        value: geoCoord.concat([1]) // ECharts 散点图需要的数值，用于控制散点大小
      };
    }
    return null;
  }).filter(item => item !== null);

  // 准备航线数据
  var linesData = routes.map(route => {
    var fromCoord = geoCoordMap[route.from];
    var toCoord = geoCoordMap[route.to];
    if (fromCoord && toCoord) {
      // 根据 routeClass 设置不同的颜色
      var lineColor = classColorMap[route.routeClass] || lineColorValue; // 如果没有对应的 routeClass，则使用默认颜色

      return {
        fromName: route.from,
        toName: route.to,
        coords: [fromCoord, toCoord],
        value: route.distance,
        lineStyle: {
          normal: {
            color: lineColor
          }
        }
      };
    }
    return null;
  }).filter(item => item !== null);

  // 准备拖尾的数据
  var tailsData = routes.map(route => {
    var fromCoord = geoCoordMap[route.from];
    var toCoord = geoCoordMap[route.to];
    if (fromCoord && toCoord) {
      return {
        fromName: route.from,
        toName: route.to,
        coords: [fromCoord, toCoord],
      };
    }
    return null;
  }).filter(item => item !== null);

  //清除旧图形用，不能删掉.
  //清除旧的航线小飞机的拖尾特效。清图后不知道为什么这个特效会有残留，缩放一下页面有消失了。可能是这个地图js内部的bug。
  myChart.setOption({
    series: [{
      name: "temp",
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [] // 清空旧的散点数据
    }
    ]
  });

  // 清除所有图形和动画
  myChart.clear();

  var series = [{
    name: 'Cities',
    type: 'effectScatter',
    zlevel: 2,
    coordinateSystem: 'geo', // 指定使用地理坐标系
    data: scatterData,
    // 添加 rippleEffect 来设置波纹特效
    rippleEffect: {
      brushType: 'stroke' // 波纹效果沿着描边进行
    },
    // 添加 itemStyle 来设置样式
    itemStyle: {
      normal: {
        color: cityColorValue,  // 标记点颜色
      },
      emphasis: {
        areaColor: cityColorValue,
        silent: false // 允许事件冒泡
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
    },
    label: {
      normal: {
        show: true,
        position: "right",
        formatter: "{b}"
      }
    },// 在这里添加点击事件的处理逻辑
  }, {
    name: 'Routes',
    type: 'lines',
    zlevel: 2,
    coordinateSystem: 'geo', // 指定使用地理坐标系
    data: linesData,
    lineStyle: {
      normal: {
        color: lineColorValue, // 航线颜色
        width: 1, // 航线宽度
        opacity: 0.5, // 航线透明度
        curveness: 0.2
      }
    },
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      symbol: planePath,
      symbolSize: 15
    },
    emphasis: {
      lineStyle: {
        width: 3 // 鼠标悬浮时航线的宽度
      }
    }
  }, {
    name: "tails",
    type: "lines",
    zlevel: 1,
    data:tailsData,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.7,
      color: lineColorValue, //arrow箭头的颜色
      symbolSize: 3
    },
    lineStyle: {
      normal: {
        color: lineColorValue,
        width: 0,
        curveness: 0.2
      }
    },
  }]

  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };

  // 更新图表选项
  myChart.setOption(option);

}

// // 模拟飞行路线模块地图模块
// (function () {
//   //var myChart = echarts.init(document.querySelector(".map .chart"));

//   var XAData = [
//     [{ name: "西安" }, { name: "拉萨", value: 100 }],
//     [{ name: "西安" }, { name: "上海", value: 100 }],
//     [{ name: "西安" }, { name: "广州", value: 100 }],
//     [{ name: "西安" }, { name: "西宁", value: 100 }],
//     [{ name: "西安" }, { name: "银川", value: 100 }]
//   ];

//   var XNData = [
//     [{ name: "西宁" }, { name: "北京", value: 100 }],
//     [{ name: "西宁" }, { name: "上海", value: 100 }],
//     [{ name: "西宁" }, { name: "广州", value: 100 }],
//     [{ name: "西宁" }, { name: "西安", value: 100 }],
//     [{ name: "西宁" }, { name: "银川", value: 100 }]
//   ];

//   var YCData = [
//     [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
//     [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
//     [{ name: "银川" }, { name: "上海", value: 100 }],
//     [{ name: "银川" }, { name: "西安", value: 100 }],
//     [{ name: "银川" }, { name: "西宁", value: 100 }],
//     [{ name: "银川" }, { name: "青岛", value: 100 }]
//   ];

//   var planePath =
//     "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//   //var planePath = 'arrow';
//   var convertData = function (data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//       var dataItem = data[i];

//       var fromCoord = geoCoordMap[dataItem[0].name];
//       var toCoord = geoCoordMap[dataItem[1].name];
//       if (fromCoord && toCoord) {
//         res.push({
//           fromName: dataItem[0].name,
//           toName: dataItem[1].name,
//           coords: [fromCoord, toCoord],
//           value: dataItem[1].value
//         });
//       }
//     }
//     return res;
//   };

//   var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
//   var series = [];
//   [
//     ["西安", XAData],
//     ["西宁", XNData],
//     ["银川", YCData]
//   ].forEach(function (item, i) {
//     series.push(
//       {
//         //name: item[0] + " Top3",
//         name: "temp",
//         type: "lines",
//         zlevel: 1,
//         effect: {
//           show: true,
//           period: 6,
//           trailLength: 0.7,
//           color: "red", //arrow箭头的颜色
//           symbolSize: 3
//         },
//         lineStyle: {
//           normal: {
//             color: color[i],
//             width: 0,
//             curveness: 0.2
//           }
//         },
//         data: convertData(item[1])
//       },
//       {
//         //name: item[0] + " Top3",
//         name: "temp",
//         type: "lines",
//         zlevel: 2,
//         symbol: ["none", "arrow"],
//         symbolSize: 10,
//         effect: {
//           show: true,
//           period: 6,
//           trailLength: 0,
//           symbol: planePath,
//           symbolSize: 15
//         },
//         lineStyle: {
//           normal: {
//             color: color[i],
//             width: 1,
//             opacity: 0.6,
//             curveness: 0.2
//           }
//         },
//         data: convertData(item[1])
//       },
//       {
//         name: "temp",
//         //name: "Cities",
//         type: "effectScatter",
//         coordinateSystem: "geo",
//         zlevel: 2,
//         rippleEffect: {
//           brushType: "stroke"
//         },
//         label: {
//           normal: {
//             show: true,
//             position: "right",
//             formatter: "{b}"
//           }
//         },
//         symbolSize: function (val) {
//           return val[2] / 8;
//         },
//         itemStyle: {
//           normal: {
//             color: color[i]
//           },
//           emphasis: {
//             areaColor: "#2B91B7"
//           }
//         },
//         data: item[1].map(function (dataItem) {
//           return {
//             name: dataItem[1].name,
//             value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//           };
//         })
//       }
//     );
//   });
//   var option = {
//     tooltip: {
//       trigger: "item",
//       formatter: function (params, ticket, callback) {
//         if (params.seriesType == "effectScatter") {
//           return "线路：" + params.data.name + "" + params.data.value[2];
//         } else if (params.seriesType == "lines") {
//           return (
//             params.data.fromName +
//             ">" +
//             params.data.toName +
//             "<br />" +
//             params.data.value
//           );
//         } else {
//           return params.name;
//         }
//       }
//     },
//     // legend: {
//     //   orient: "vertical",
//     //   top: "bottom",
//     //   left: "right",
//     //   data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
//     //   textStyle: {
//     //     color: "#fff"
//     //   },
//     //   selectedMode: "multiple"
//     // },
//     geo: {
//       map: "china",
//       label: {
//         emphasis: {
//           show: true,
//           color: "#fff"
//         }
//       },
//       // 把中国地图放大了1.2倍
//       zoom: 1.2,
//       roam: true,
//       itemStyle: {
//         normal: {
//           // 地图省份的背景颜色
//           areaColor: "rgba(20, 41, 87,0.6)",
//           borderColor: "#195BB9",
//           borderWidth: 1
//         },
//         emphasis: {
//           areaColor: "#2B91B7"
//         }
//       }
//     },
//     series: series
//   };
//   myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// })();
