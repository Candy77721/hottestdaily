var Mock = require('mockjs')
var Random = Mock.Random

Random.email()
Random.natural() // 自然数
Random.string()
Random.datetime()
Random.image('100x100')
Random.cparagraph() // Random.paragraph( min?, max? )
Random.csentence()
Random.cword()
Random.ctitle()
Random.cname()

Mock.setup({
    timeout: '400-1000'
})

Mock
  // 今日热门的新闻
  .mock('api/getNewsPage', 'post', {
    'errorCode': 0,
    'errorMsg': 'success',
    'data|30': [{
        'type': 'news',
        'title':'@csentence(10,20)',
        'url': '@url()',
        'hot|+1': 26,
        'label': '@cword(2,4)',
        'keywords|3': ['@cword(2,4)'],
        'abstract': '@cparagraph()',
    	  'fromTopic': '@cword(2,6)',
      }]
  })
  // 用户登录
  .mock('accounts/login', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 用户注册
  .mock('accounts/register', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 发送验证码
  .mock('accounts/captcha', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 找回密码
  .mock('accounts/fgPasswd', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 查询新闻
  .mock('api/getSearchNews', 'post', {
    'errorCode': 0,
    'errorMsg': 'success',
    'data|30': [{
        'title':'@csentence(10,20)',
        'url': '@url()',
        'hot|+1': 26,
        'label': '@cword(2,4)',
        'keywords|3': ['@cword(2,4)'],
        'abstract': '@cparagraph()',
    	  'fromTopic': '@cword(2,6)',
      }]
  })
  // 排行榜数据
  .mock('api/getHotWords', 'get', {
    'errorCode': 0,
    'errorMsg': 'success',
    'data|50': [{
        'content': '@cword(2,4)',
        'hot|+1': 26,
        'label': '@cword(2,4)',
        "history|10":['@integer(26, 100)'],
      }]
  })
  // 首页关系图
  .mock('api/getGraph', 'get', {
      'errorCode': 0,
      'errorMsg': 'success',
      'data':{
        "nodes": [
          {
            "color": "#5D7EE3",
            "label": "留学生必读：美国高中留学如何评定美高好坏",
            "y": 487.6912706133443,
            "x": 1024.89424620536,
            "id": "587cb93370d3bf06a05a98b5",
            "size": 38.410715965074225
          },
          {
            "color": "#6CC5FF",
            "label": "纽约高中中文试卷流出中国网友自称学到假中文",
            "y": 482.1832705854845,
            "x": 1006.9045250188649,
            "id": "587cb9c770d3bf06a05a9c1c",
            "size": 25.89717164548658
          },
          {
            "color": "#BB7DF6",
            "label": "日本2.5次元舞台剧火爆中国日媒:宅文化扎根",
            "y": 517.1531843762756,
            "x": 979.6318292889092,
            "id": "587cb71470d3bf06a05a90ba",
            "size": 25.772160111647008
          },
          {
            "color": "#7395FF",
            "label": "120的中国启动（三）：特朗普让一项中国课题加速",
            "y": 485.2131136961537,
            "x": 1022.450212511845,
            "id": "587cb71a70d3bf06a05a90d2",
            "size": 25.23371772124351
          },
          {
            "color": "#B69FFF",
            "label": "2016中国游戏风云榜",
            "y": 483.4408316547969,
            "x": 992.2193549452658,
            "id": "587cb68170d3bf06a05a8e3e",
            "size": 24.323780439107697
          },
          {
            "color": "#83DBE4",
            "label": "日媒：中国石油线路被美军控制若被切断将崩溃",
            "y": 503.82172225599686,
            "x": 959.7649040185044,
            "id": "587cb7e570d3bf06a05a93b6",
            "size": 23.87470317946217
          },
          {
            "color": "#72AEF8",
            "label": "美国公立高中排名NO.1：达拉斯资优人才高中",
            "y": 487.11352736631096,
            "x": 978.4588513369894,
            "id": "587cb93d70d3bf06a05a98ed",
            "size": 23.006832540428373
          },
          {
            "color": "#83DBE4",
            "label": "中国花10亿造的这座大桥让英美网友炸开了锅",
            "y": 483.5179470202822,
            "x": 1028.8298936284475,
            "id": "587cb76270d3bf06a05a91cb",
            "size": 22.691215863293294
          },
          {
            "color": "#FFF76F",
            "label": "中国",
            "y": 501.9038031855337,
            "x": 1012.5640552891489,
            "id": "中国",
            "size": 129.23606156758916
          },
          {
            "color": "#FFA3BA",
            "label": "美国",
            "y": 506.2983154095472,
            "x": 1007.9105698320694,
            "id": "美国",
            "size": 94.77347174532478
          },
          {
            "color": "#FF8755",
            "label": "世界",
            "y": 502.7660505326547,
            "x": 1015.0872328007923,
            "id": "世界",
            "size": 57.618121596824594
          },
          {
            "color": "#FF9F82",
            "label": "未来",
            "y": 502.79249442428153,
            "x": 983.7812484727095,
            "id": "未来",
            "size": 58.724991155935996
          },
          {
            "color": "#FFCE6F",
            "label": "全球",
            "y": 494.2284468169549,
            "x": 1007.8907237805428,
            "id": "全球",
            "size": 55.86361046582285
          },
          {
            "color": "#F87A7A",
            "label": "2016",
            "y": 495.13465955770477,
            "x": 1007.4256009388207,
            "id": "2016",
            "size": 78.44661666020885
          },
          {
            "color": "#FA5757",
            "label": "学生",
            "y": 500.93104407343145,
            "x": 984.358817600627,
            "id": "学生",
            "size": 60.266867842824034
          },
          {
            "color": "#FFA3BA",
            "label": "北京",
            "y": 500.89240520351683,
            "x": 1014.3717506947035,
            "id": "北京",
            "size": 75.62638998871925
          },
          {
            "color": "#FFAC6F",
            "label": "日本",
            "y": 505.63881133864743,
            "x": 987.1021310988133,
            "id": "日本",
            "size": 65.47823613189678
          },
          {
            "color": "#FFF76F",
            "label": "孩子",
            "y": 501.19394274377004,
            "x": 1018.3512518212406,
            "id": "孩子",
            "size": 70.60431358682054
          },
          {
            "color": "#FF8755",
            "label": "留学",
            "y": 492.6468909564066,
            "x": 1006.1370224932296,
            "id": "留学",
            "size": 57.55144612146814
          },
          {
            "color": "#F87A7A",
            "label": "市场",
            "y": 508.5196463072271,
            "x": 995.1579753883804,
            "id": "市场",
            "size": 63.142292111679616
          },
          {
            "color": "#FFC092",
            "label": "特朗普",
            "y": 488.8251755355427,
            "x": 997.0987967384015,
            "id": "特朗普",
            "size": 65.41165464398938
          },
          {
            "color": "#F41010",
            "label": "留学生",
            "y": 507.6354455225041,
            "x": 1009.4413064150323,
            "id": "留学生",
            "size": 76.32003268387066
          },
          {
            "color": "#FF9F82",
            "label": "国际",
            "y": 489.09226786632144,
            "x": 1003.2267131033497,
            "id": "国际",
            "size": 56.8031273474443
          }
        ],
        "edges": [
          {
            "sourceID": "中国",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "学生",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "孩子",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "留学生",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb9c770d3bf06a05a9c1c",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "北京",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "市场",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "日本",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "特朗普",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "国际",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "日本",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "北京",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "学生",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          }
        ]
      }
  })
  // 查询页关系图
  .mock('api/getSearchGraph', 'post', {
      'errorCode': 0,
      'errorMsg': 'success',
      'data':{
        "nodes": [
          {
            "color": "#5D7EE3",
            "label": "留学生必读：美国高中留学如何评定美高好坏",
            "y": 487.6912706133443,
            "x": 1024.89424620536,
            "id": "587cb93370d3bf06a05a98b5",
            "size": 38.410715965074225
          },
          {
            "color": "#6CC5FF",
            "label": "纽约高中中文试卷流出中国网友自称学到假中文",
            "y": 482.1832705854845,
            "x": 1006.9045250188649,
            "id": "587cb9c770d3bf06a05a9c1c",
            "size": 25.89717164548658
          },
          {
            "color": "#BB7DF6",
            "label": "日本2.5次元舞台剧火爆中国日媒:宅文化扎根",
            "y": 517.1531843762756,
            "x": 979.6318292889092,
            "id": "587cb71470d3bf06a05a90ba",
            "size": 25.772160111647008
          },
          {
            "color": "#7395FF",
            "label": "120的中国启动（三）：特朗普让一项中国课题加速",
            "y": 485.2131136961537,
            "x": 1022.450212511845,
            "id": "587cb71a70d3bf06a05a90d2",
            "size": 25.23371772124351
          },
          {
            "color": "#B69FFF",
            "label": "2016中国游戏风云榜",
            "y": 483.4408316547969,
            "x": 992.2193549452658,
            "id": "587cb68170d3bf06a05a8e3e",
            "size": 24.323780439107697
          },
          {
            "color": "#83DBE4",
            "label": "日媒：中国石油线路被美军控制若被切断将崩溃",
            "y": 503.82172225599686,
            "x": 959.7649040185044,
            "id": "587cb7e570d3bf06a05a93b6",
            "size": 23.87470317946217
          },
          {
            "color": "#72AEF8",
            "label": "美国公立高中排名NO.1：达拉斯资优人才高中",
            "y": 487.11352736631096,
            "x": 978.4588513369894,
            "id": "587cb93d70d3bf06a05a98ed",
            "size": 23.006832540428373
          },
          {
            "color": "#83DBE4",
            "label": "中国花10亿造的这座大桥让英美网友炸开了锅",
            "y": 483.5179470202822,
            "x": 1028.8298936284475,
            "id": "587cb76270d3bf06a05a91cb",
            "size": 22.691215863293294
          },
          {
            "color": "#FFF76F",
            "label": "中国",
            "y": 501.9038031855337,
            "x": 1012.5640552891489,
            "id": "中国",
            "size": 129.23606156758916
          },
          {
            "color": "#FFA3BA",
            "label": "美国",
            "y": 506.2983154095472,
            "x": 1007.9105698320694,
            "id": "美国",
            "size": 94.77347174532478
          },
          {
            "color": "#FF8755",
            "label": "世界",
            "y": 502.7660505326547,
            "x": 1015.0872328007923,
            "id": "世界",
            "size": 57.618121596824594
          },
          {
            "color": "#FF9F82",
            "label": "未来",
            "y": 502.79249442428153,
            "x": 983.7812484727095,
            "id": "未来",
            "size": 58.724991155935996
          },
          {
            "color": "#FFCE6F",
            "label": "全球",
            "y": 494.2284468169549,
            "x": 1007.8907237805428,
            "id": "全球",
            "size": 55.86361046582285
          },
          {
            "color": "#F87A7A",
            "label": "2016",
            "y": 495.13465955770477,
            "x": 1007.4256009388207,
            "id": "2016",
            "size": 78.44661666020885
          },
          {
            "color": "#FA5757",
            "label": "学生",
            "y": 500.93104407343145,
            "x": 984.358817600627,
            "id": "学生",
            "size": 60.266867842824034
          },
          {
            "color": "#FFA3BA",
            "label": "北京",
            "y": 500.89240520351683,
            "x": 1014.3717506947035,
            "id": "北京",
            "size": 75.62638998871925
          },
          {
            "color": "#FFAC6F",
            "label": "日本",
            "y": 505.63881133864743,
            "x": 987.1021310988133,
            "id": "日本",
            "size": 65.47823613189678
          },
          {
            "color": "#FFF76F",
            "label": "孩子",
            "y": 501.19394274377004,
            "x": 1018.3512518212406,
            "id": "孩子",
            "size": 70.60431358682054
          },
          {
            "color": "#FF8755",
            "label": "留学",
            "y": 492.6468909564066,
            "x": 1006.1370224932296,
            "id": "留学",
            "size": 57.55144612146814
          },
          {
            "color": "#F87A7A",
            "label": "市场",
            "y": 508.5196463072271,
            "x": 995.1579753883804,
            "id": "市场",
            "size": 63.142292111679616
          },
          {
            "color": "#FFC092",
            "label": "特朗普",
            "y": 488.8251755355427,
            "x": 997.0987967384015,
            "id": "特朗普",
            "size": 65.41165464398938
          },
          {
            "color": "#F41010",
            "label": "留学生",
            "y": 507.6354455225041,
            "x": 1009.4413064150323,
            "id": "留学生",
            "size": 76.32003268387066
          },
          {
            "color": "#FF9F82",
            "label": "国际",
            "y": 489.09226786632144,
            "x": 1003.2267131033497,
            "id": "国际",
            "size": 56.8031273474443
          }
        ],
        "edges": [
          {
            "sourceID": "中国",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "学生",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "孩子",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "留学生",
            "targetID": "587cb93370d3bf06a05a98b5",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb9c770d3bf06a05a9c1c",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "北京",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "市场",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "日本",
            "targetID": "587cb71470d3bf06a05a90ba",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "特朗普",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "国际",
            "targetID": "587cb71a70d3bf06a05a90d2",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb68170d3bf06a05a8e3e",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "2016",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "日本",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "北京",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb7e570d3bf06a05a93b6",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "学生",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb93d70d3bf06a05a98ed",
            "size": 1
          },
          {
            "sourceID": "全球",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "中国",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "世界",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "未来",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          },
          {
            "sourceID": "美国",
            "targetID": "587cb76270d3bf06a05a91cb",
            "size": 1
          }
        ]
      }
  })
