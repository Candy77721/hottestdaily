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
    'data|5': [{
        'type': 'news',
        'title':'@csentence(10,30)',
        'url': '@url()',
        'hot|26-100':100,
        'label': '@cword(2,4)',
        'keywords|3': ['@cword(2,4)'],
        'abstract': '@cparagraph()',
    	  'fromTopic': '@cword(2,6)',
      }, {
          'type': 'news',
          'title':'@csentence(10,20)',
          'url': '@url()',
          'hot|26-100':100,
          'label': '@cword(2,4)',
          'keywords|3': ['@cword(2,4)'],
          'abstract': '@cparagraph()',
      	  'fromTopic': '@cword(2,6)',
      }, {
          'type': 'news',
          'title':'@csentence(10,20)',
          'url': '@url()',
          'hot|26-100':100,
          'label': '@cword(2,4)',
          'keywords|3': ['@cword(2,4)'],
          'abstract': '@cparagraph()',
      	  'fromTopic': '@cword(2,6)',
      }, {
          'type': 'news',
          'title':'@csentence(10,20)',
          'url': '@url()',
          'hot|26-100':100,
          'label': '@cword(2,4)',
          'keywords|3': ['@cword(2,4)'],
          'abstract': '@cparagraph()',
      	  'fromTopic': '@cword(2,6)',
      }, {
          'type': 'news',
          'title':'@csentence(10,20)',
          'url': '@url()',
          'hot|26-100':100,
          'label': '@cword(2,4)',
          'keywords|3': ['@cword(2,4)'],
          'abstract': '@cparagraph()',
      	  'fromTopic': '@cword(2,6)',
      }, {
          'type': 'group',
          'title':'@cword(2,4)',
          'relatedNews|4':[{
            'title':'@csentence(10,20)',
            'url':'@url()'
          }],
          'hot|26-100':100,
          "history|10":['@integer(26, 100)'],
          'keywords':[['@cword(2,4)','@cword(2,4)','@cword(2,4)'],['@cword(2,4)','@cword(2,4)','@cword(2,4)']]
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
  // 检查用户登录状态
  .mock('accounts/getLoginStatus', 'get', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 获取用户信息
  .mock('accounts/getUserInfo', 'get', {
    'errorCode': 1,
    'errorMsg': 'success',
    'username': '@cword(2,8)',
    'email': '@email()',
    'acceptPost': 1
  })
  // 修改用户是否接受推送
  .mock('accounts/editUserAcceptPost', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  // 返回 标签
  .mock('accounts/getWatchList', 'get', {
    'errorCode': 0,
    'errorMsg': 'success',
    'data|20': [{
      'word': '@cword(2,4)',
      'like|1-2': true
    }]
  })
  // 增加关注内容
  .mock('accounts/addWatchTag', 'post', {
    'errorCode': 0,
    'errorMsg': 'success',
  })
  // 删除关注内容
  .mock('accounts/delWatchTag', 'post', {
    'errorCode': 0,
    'errorMsg': 'success',
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
  // 地图数据
  .mock('api/geodata', 'get', {
    'errorCode': 0,
    'errorMsg': 'success',
    'data': [
      {'name': '北京', 'value': '@integer(0, 150)' },
      {'name': '天津', 'value': '@integer(0, 150)' },
      {'name': '上海', 'value': '@integer(0, 150)' },
      {'name': '重庆', 'value': '@integer(0, 150)' },
      {'name': '河北', 'value': '@integer(0, 150)' },
      {'name': '河南', 'value': '@integer(0, 150)' },
      {'name': '云南', 'value': '@integer(0, 150)' },
      {'name': '辽宁', 'value': '@integer(0, 150)' },
      {'name': '黑龙江', 'value': '@integer(0, 150)' },
      {'name': '湖南', 'value': '@integer(0, 150)' },
      {'name': '安徽', 'value': '@integer(0, 150)' },
      {'name': '山东', 'value': '@integer(0, 150)' },
      {'name': '新疆', 'value': '@integer(0, 150)' },
      {'name': '江苏', 'value': '@integer(0, 150)' },
      {'name': '浙江', 'value': '@integer(0, 150)' },
      {'name': '江西', 'value': '@integer(0, 150)' },
      {'name': '湖北', 'value': '@integer(0, 150)' },
      {'name': '广西', 'value': '@integer(0, 150)' },
      {'name': '甘肃', 'value': '@integer(0, 150)' },
      {'name': '山西', 'value': '@integer(0, 150)' },
      {'name': '内蒙古', 'value': '@integer(0, 150)' },
      {'name': '陕西', 'value': '@integer(0, 150)' },
      {'name': '吉林', 'value': '@integer(0, 150)' },
      {'name': '福建', 'value': '@integer(0, 150)' },
      {'name': '贵州', 'value': '@integer(0, 150)' },
      {'name': '广东', 'value': '@integer(0, 150)' },
      {'name': '青海', 'value': '@integer(0, 150)' },
      {'name': '西藏', 'value': '@integer(0, 150)' },
      {'name': '四川', 'value': '@integer(0, 150)' },
      {'name': '宁夏', 'value': '@integer(0, 150)' },
      {'name': '海南', 'value': '@integer(0, 150)' },
      {'name': '台湾', 'value': '@integer(0, 150)' },
      {'name': '香港', 'value': '@integer(0, 150)' },
      {'name': '澳门', 'value': '@integer(0, 150)' }
    ]
  })
  // 新闻追踪数据
  .mock('api/newstrail', 'get',
    // 'errorCode': 0,
    // 'errorMsg': 'success',
    // 'data|20': [{
    //   'title': '@cword(4,10)',
    //   'timeaxis|1-3': [{
    //     'time': '@cword(4,10)',
    //     'keywords|3': ['@cword(2,4)'],
    //     'text': '@csentence(100)'
    //   }],
    //   'graph': {
    //     'name|5': ['@cword(2,4)'],
    //     'data|5': [['@integer(26, 100)', '@integer(26, 100)', '@integer(26, 100)', '@integer(26, 100)', '@integer(26, 100)']],
    //     'time': [1493028294, 1493056294]
    //   }
    // }]
    {"errorCode": 0,
"data":[{
"title":"世卫大会拒邀台湾地区参加",
"timeaxis":[
{
    'time': '2017-5-20',
    'keywords':['民进党', '世卫组织', '参会'],
    'text':'民进党当局唆使尼加拉瓜、伯利兹、马绍尔群岛共和国等11个所谓台湾“邦交国”向世卫组织提交了名为“邀请台湾以观察员身份参加世界卫生大会”的提案，要求将其纳入大会补充议程。'
    },
    {
    'time': '2017-5-22',
    'keywords':['国台办', '一中', '否决'],
    'text':'负责确定大会日程的总务委员会召开闭门会议，迅速做出了拒绝将涉台提案纳入大会议程的建议，并提交世卫大会全会审议。！'
    }
],
'graph' :{
    'name':['蔡英文','否决','参会','国台办'],
    'data':[
     [72, 93 ,64, 53, 47, 23, 52],
     [8 ,24 ,35, 72, 87, 87, 72],
     [75 ,83, 73, 65, 76, 63, 51],
     [16 ,27, 55, 72, 84, 95, 85],
    ],
  'time':[1495795674,1495799674]
},
},

 {
    'title':'美国在韩部署萨德',

    'timeaxis':[
    {
    'time': '2017-3-6',
    'keywords':['韩国', '乐天', '萨德'],
    'text':'乐天集团同意给韩美提供萨德反导系统的最终部署地。中国和俄罗斯坚决反对这项部署计划。中国外交部发言人耿爽回应此事称，中方对此表示坚决反对和强烈不满。 中国民众发起抵制以“乐天”为首的韩货热潮'
    },
    {
    'time': '2017-5-2',
    'keywords':['美国', '10亿', '韩国'],
    'text':'韩旅游业、轿车工业、电子工业同时遭受重创，损失惨重。特朗普27日称，“萨德”反导系统造价10亿美元，应该由韩方承担。这使韩国经济雪上加霜。'
    },
    {
    'time': '2017-5-25',
    'keywords':['文在寅', '撤除', '萨德'],
    'text':'韩国新总统文在寅上任之后。韩国一方面向中国示好，一方面向美国表忠心，自以为太极拳打的不错。但是，韩国新政府拙劣的表演逃不过中国的“火眼金睛”，中国反制萨德措施仍然让韩国寝食难安！'
    }
    ],
    'graph':{
      'name':['韩国', '萨德', '乐天', '外交部'],
      'data':[
        [83,87,92,84,76,86],
        [86,86,95,68,72,89],
        [90,85,74,55,48,38],
        [75,85,95,75,55,87]
      ],
  'time':[1495795674,1495799674]
    }
},

{
  'title': '人机大战2017柯洁不敌alphago',
  'timeaxis': [
  { 'time': '2017-5-53',
      'keywords': ['柯洁', '王思聪', 'alphago'],
      'text': '5月23日，围棋峰会柯洁对阵AlphaGo三番棋首局人机大战在浙江桐乡战罢。最终，双方经过289手的激战，由Deepmind团队研发的围棋人工智能AlphaGo执白1/4子战胜目前等级分排名世界第一的中国棋手柯洁九段，拔得头筹。王思聪：“当时李和alphago下的时候你那嚣张劲儿哪去了？”。'
    },
  { 'time': '2017-5-25',
      'keywords': ['alphago', '柯洁','英文记者'],
      'text': '5月25日，中国围棋峰会人机大战三番棋第二局在浙江桐乡进行。柯洁执白155手中盘落败，总比分0比2不敌AlphaGo。柯洁怼央视记者：“你是不是中国人？如果你是中国人的话，就应该用中文向我提问题！”。'
    },
    { 'time': '2017-5-26',
      'keywords': ['alphago', '连笑',  '古力'],
      'text': 'Alphago输了！人机大战配对赛，连笑AlphaGo逆转战胜古力组合，人类棋手总算又尝到了“战胜AlphaGo”的滋味。连笑成为继李世石之后“战胜AlphaGo” 的第二位人类棋手，当然，这盘棋的意义不能归于此处，人类棋手与AlphaGo思路的交融才是看点。“败招”究竟是人类棋手下出来的还是AlphaGo下出来的，非常令人感兴趣。'
    }
    ],
    'graph': {
      'name': ['柯洁','王思聪','人工智能'],
      'data': [[70, 81, 92, 85, 87],
           [64, 80, 83, 72, 65],
           [82, 85, 84, 81, 86]],
  'time':[1495795674,1495799674]
    }
},

{
  'title': '欢乐颂',
  'timeaxis': [
  { 'time': '2017-5-53',
      'keywords': ['欢乐颂', '安迪', '小包总'],
      'text':'《欢乐颂》安迪两任男友：原来，喜欢和爱的差别竟然这么大！喜欢是改变你，爱是保护你。'
    },
  { 'time': '2017-5-25',
      'keywords': ['欢乐颂', '邓伦',  '关雎尔'],
      'text':'今晚的欢乐颂25 欢乐颂26，关雎尔和音乐王子邓伦一见钟情，二见倾心，美美的爱情要开始啦。邓伦好帅啊，话说安迪跟小包总又出现了新的矛盾，好心疼，大家一起来追欢乐颂。'
    },
    { 'time': '2017-5-26',
      'keywords': ['结局', '完美',  '结婚'],
      'text':'《欢乐颂2》五美结局曝光：邱莹莹最早先结婚，安迪和小包总在经历一波折的考验后，最终走到了一起；樊胜美最后跟帮她打官司的律师好上了；应勤克服处女情结，大胆跟邱莹莹求婚，两人走进幸福的婚姻殿堂；关雎尔和谢童分手，五美中也只有关关的感情没得到归属。'
    }
    ],
    'graph': {
      'name': ['欢乐颂','邓伦','安迪'],
      'data': [[87, 88, 86, 91, 84],
           [63, 70, 80, 81, 78],
           [66, 71, 79, 82, 86]],
  'time':[1495795674,1495799674]
    }
},

]

  })
  // 首页关系图
  .mock('api/getGraph', 'get', {
      'errorCode': 0,
      'errorMsg': 'success',
      'data':{
        "nodes": [
    {
        "color": "#BB7DF6",
        "label": "\r《2016年中国互联网产业综述与2017年发展趋势》发布",
        "url": "http://news.xinhuanet.com/info/2017-01/06/c_135961141.htm",
        "y": 487.5526492408173,
        "x": 1025.008639761072,
        "id": "58a80bf370d3bf0a08f4dd16",
        "size": 38.48473333523889
    },
    {
        "color": "#B69FFF",
        "label": "中国十三五续建新建机场74个未来去这些城市可坐飞机",
        "url": "http://finance.china.com.cn/industry/wl/20170218/4103847.shtml",
        "y": 490.26041219920677,
        "x": 969.3512954926402,
        "id": "58a80c5070d3bf0a08f4deba",
        "size": 36.01324336454664
    },
    {
        "color": "#FF6D40",
        "label": "发布",
        "url": "",
        "y": 494.6145468895497,
        "x": 1001.4829556636296,
        "id": "发布",
        "size": 85.05158847488734
    },
    {
        "color": "#F41010",
        "label": "中国",
        "url": "",
        "y": 493.0556781290903,
        "x": 999.8633842311799,
        "id": "中国",
        "size": 126.65295101181022
    },
    {
        "color": "#FF8755",
        "label": "2017",
        "url": "",
        "y": 502.10047972124806,
        "x": 986.028572456451,
        "id": "2017",
        "size": 105.99902347523125
    },
    {
        "color": "#FA5757",
        "label": "市场",
        "url": "",
        "y": 504.44244631408566,
        "x": 1010.8570041189755,
        "id": "市场",
        "size": 85.57433989568173
    },
    {
        "color": "#FFCE6F",
        "label": "未来",
        "url": "",
        "y": 497.47719240139355,
        "x": 989.7313473857863,
        "id": "未来",
        "size": 78.23879242818072
    },
    {
        "color": "#FFF76F",
        "label": "创新",
        "url": "",
        "y": 498.4703585089396,
        "x": 1014.400845617397,
        "id": "创新",
        "size": 79.66186358123896
    },
    {
        "color": "#F87A7A",
        "label": "北京",
        "url": "",
        "y": 506.6942423134017,
        "x": 1012.2979404136756,
        "id": "北京",
        "size": 97.38576319788248
    },
    {
        "color": "#FDD95C",
        "label": "春节",
        "url": "",
        "y": 492.0485688739097,
        "x": 1008.7383978138522,
        "id": "春节",
        "size": 77.34568578441534
    },
    {
        "color": "#FFAC6F",
        "label": "2016",
        "url": "",
        "y": 502.6194353428557,
        "x": 1018.6170672171746,
        "id": "2016",
        "size": 102.10476279854248
    },
    {
        "color": "#FB2B60",
        "label": "发展",
        "url": "",
        "y": 491.03623394497777,
        "x": 1002.6791864784801,
        "id": "发展",
        "size": 81.96043402118434
    }
],
"edges": [
    {
        "sourceID": "北京",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "2017",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "2016",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "中国",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "市场",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "创新",
        "targetID": "58a80bf370d3bf0a08f4dd16",
        "size": 1
    },
    {
        "sourceID": "发展",
        "targetID": "58a80c5070d3bf0a08f4deba",
        "size": 1
    },
    {
        "sourceID": "未来",
        "targetID": "58a80c5070d3bf0a08f4deba",
        "size": 1
    },
    {
        "sourceID": "2017",
        "targetID": "58a80c5070d3bf0a08f4deba",
        "size": 1
    },
    {
        "sourceID": "春节",
        "targetID": "58a80c5070d3bf0a08f4deba",
        "size": 1
    },
    {
        "sourceID": "发布",
        "targetID": "58a80c5070d3bf0a08f4deba",
        "size": 1
    },
    {
        "sourceID": "中国",
        "targetID": "58a80c5070d3bf0a08f4deba",
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
