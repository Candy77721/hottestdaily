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
    {
    "errorCode": 0,
    "data": [
        {
            "timeaxis": [
                {
                    "keywords": [
                        "乐视",
                        "断缴社保",
                        "维权"
                    ],
                    "text": "乐视网员工很多人的社保和公积金已经停止缴纳达到了2个月的时间。很多人发现自己的五险一金只缴纳到今年3月，但4月和5月都是欠缴的状态。员工临时组建了消息群，来相互沟通信息甚至维权。",
                    "time": "2017/6/11"
                },
                {
                    "keywords": [
                        "乐视",
                        "资金问题",
                        "严重"
                    ],
                    "text": "贾跃亭公开承认 乐视非上市体系资金问题比想象要严重。贾跃亭坦言，“原以为90亿可以解决所有问题，结果还是犯了一定错误，还是不够解决资金问题。我们在归还金融机构的欠款之后，目前仍然没有获得金融机构的后续资金支持",
                    "time": "2017/6/28"
                },
                {
                    "keywords": [
                        "贾跃亭",
                        "辞职",
                        "乐视网"
                    ],
                    "text": "乐视发布公告，贾跃亭将辞去乐视网董事长一职，同时辞去董事会提名委员会委员、审计委员会委员、战略委员会主任委员、薪酬与考核委员会委员相关职务，退出董事会，辞职后将不再在乐视网担任任何职务。",
                    "time": "2017/7/9"
                }
            ],
            "graph": {
                "data": [
                    [
                        80,
                        85,
                        86,
                        89,
                        93,
                        93
                    ],
                    [
                        80,
                        66,
                        54,
                        88,
                        92,
                        92
                    ],
                    [
                        35,
                        58,
                        75,
                        85,
                        70,
                        70
                    ],
                    [
                        60,
                        70,
                        56,
                        45,
                        78,
                        78
                    ],
                    [
                        64,
                        70,
                        76,
                        62,
                        56,
                        56
                    ]
                ],
                "name": [
                    "资金",
                    "乐视网",
                    "乐视汽车",
                    "借款",
                    "情感值"
                ],
                "time": [
                    1497139200,
                    1499846400
                ]
            },
            "title": "乐视贾跃亭"
        },
        {
            "timeaxis": [
                {
                    "keywords": [
                        "人民网",
                        "质疑",
                        "负能量"
                    ],
                    "text": "人民网发表了题为《一评<王者荣耀>：是娱乐大众还是“陷害”人生？》的评论文章。文中质疑，作为游戏《王者荣耀》是成功的，而面向社会它却在不断释放负能量。",
                    "time": "2017/7/3"
                },
                {
                    "keywords": [
                        "腾讯",
                        "健康系统",
                        "未成年"
                    ],
                    "text": "7月2日，腾讯发布《王者荣耀》健康系统，4日正式上线。《王者荣耀》健康系统明确规定12岁以下（含12周岁）未成年人每天限玩1小时，12岁以上未成年人每天限玩2小时，每日凌晨5：00刷新累计时长以及登陆时间。",
                    "time": "2017/7/4"
                },
                {
                    "keywords": [
                        "家长",
                        "教育",
                        "监护人"
                    ],
                    "text": "很多人的观点都是这样的，《王者荣耀》只是一款流行的移动游戏，与其说“沉迷《王者荣耀》”，倒不如说沉迷游戏。而中小学生沉迷游戏，已经是老生常谈的话题了。在这背后真正应该做到监管和限制责任的，其实是家长，毕竟家长才是儿童真正的监护人。",
                    "time": "2017/7/10"
                }
            ],
            "graph": {
                "data": [
                    [
                        85,
                        90,
                        75,
                        60,
                        62
                    ],
                    [
                        85,
                        80,
                        40,
                        45,
                        64
                    ],
                    [
                        0,
                        78,
                        85,
                        65,
                        60
                    ],
                    [
                        90,
                        92,
                        84,
                        78,
                        70
                    ],
                    [
                        78,
                        81,
                        84,
                        55,
                        26
                    ]
                ],
                "name": [
                    "沉迷",
                    "负能量",
                    "健康系统",
                    "人民网",
                    "情感值"
                ],
                "time": [
                    1498957200,
                    1499853600
                ]
            },
            "title": "<王者荣耀>陷入舆论漩涡"
        },
        {
            "timeaxis": [
                {
                    "keywords": [
                        "数据接口",
                        "菜鸟",
                        "顺丰"
                    ],
                    "text": "阿里巴巴牵头组建的菜鸟网络称，顺丰突然关闭了对菜鸟的数据接口，可能对商家和消费者造成重大损失，建议商家暂时改用其他物流发货。\n\n对于菜鸟这一声明，顺丰方面反击称，菜鸟为推销阿里云服务，单方面切断顺丰“丰巢”接口，以信息安全为由对顺丰进行“有针对性的封杀”。",
                    "time": "2017/6/1"
                },
                {
                    "keywords": [
                        "邮政局",
                        "快递",
                        "业重视"
                    ],
                    "text": "掐架震动全国快递业，国家邮政局昨日发文，对此事表示高度重视，发布《关于近期快递服务消费的提示》，喊话两家企业，“决不能让企业间的纠纷产生严重的社会影响。”",
                    "time": "2017/6/2"
                },
                {
                    "keywords": [
                        "马云",
                        "数据",
                        "摩擦"
                    ],
                    "text": "阿里巴巴董事局主席马云今日在2017天下网商大会上谈及菜鸟与顺丰的风波时表示，这次冲突的背后还是数据的安全。\n\n“我们坚持把握数据的安全，但物流公司肯定还是有自己的想法。没想到这个摩擦最后变成了这么的事件，不过也正常。”",
                    "time": "2017/7/11"
                }
            ],
            "graph": {
                "data": [
                    [
                        40,
                        80,
                        90,
                        75,
                        62
                    ],
                    [
                        90,
                        92,
                        87,
                        81,
                        76
                    ],
                    [
                        0,
                        80,
                        86,
                        42,
                        23
                    ],
                    [
                        15,
                        36,
                        45,
                        65,
                        89
                    ],
                    [
                        64,
                        70,
                        77,
                        54,
                        41
                    ]
                ],
                "name": [
                    "顺丰",
                    "菜鸟",
                    "邮政局",
                    "马云",
                    "情感值"
                ],
                "time": [
                    1496275200,
                    1499752800
                ]
            },
            "title": "菜鸟顺丰之争"
        },
        {
            "timeaxis": [
                {
                    "keywords": [
                        "章莹颖",
                        "香槟分校",
                        "失踪"
                    ],
                    "text": "北京大学研究生毕业的章莹颖，现为伊利诺伊大学厄巴纳香槟分校的访问学者，于当地时6月9日中午离开学校去一北公寓签约时失去联系。监控显示，章莹颖在校内等待转车时，有一黑色轿车靠近，驾车者疑似为一名白人男子，经短暂27秒的交谈后，章莹颖进入该轿车驶往他处，随后与外界失去联系。",
                    "time": "2017/6/9"
                },
                {
                    "keywords": [
                        "总领馆",
                        "FBI",
                        "香槟分校"
                    ],
                    "text": "中国驻芝加哥总领馆开始介入。副总领事余鹏与侨务组、教育组工作人员，一起前往伊利诺伊大学香槟分校，了解章莹颖失踪情况。驻芝加哥总领馆促请警方和校方加大搜寻力度，当天，案件正式移交FBI。",
                    "time": "2017/6/12"
                },
                {
                    "keywords": [
                        "FBI",
                        "逮捕",
                        "遇难"
                    ],
                    "text": "美国司法部6月30日发布消息称，FBI当天逮捕了一名伊利诺伊大学香槟分校的27岁男子克里斯滕森，该男子涉嫌在6月9日绑架中国访问学者章莹颖。美国联邦法庭将于下周一上午10点对该男子进行庭审。根据章莹颖案最新媒体曝光消息得知，美联邦调查局已经透出“相信章莹颖已经遇难”。",
                    "time": "2017/7/1"
                }
            ],
            "graph": {
                "data": [
                    [
                        78,
                        95,
                        84,
                        85,
                        76
                    ],
                    [
                        5,
                        85,
                        89,
                        75,
                        95
                    ],
                    [
                        15,
                        85,
                        90,
                        78,
                        65
                    ],
                    [
                        90,
                        84,
                        75,
                        64,
                        50
                    ],
                    [
                        46,
                        50,
                        48,
                        70,
                        99
                    ]
                ],
                "name": [
                    "章莹颖",
                    "FBI",
                    "领事馆",
                    "香槟分校",
                    "情感值"
                ],
                "time": [
                    1496973600,
                    1498903200
                ]
            },
            "title": "章莹颖失踪案"
        }
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
