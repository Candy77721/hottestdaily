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

Mock.mock('api/getNewsPage', 'get', {
  'errorCode': 0,
  'errorMsg': 'success',
  'data|30': [{
      'type': 'news',
      'title':'@csentence(10,20)',
      'url': '@url()',
      'hot|1-500.1-500': 1,
      'label': '@cword(2,4)',
      'keywords|1-3': ['@cword(2,6)'],
      'abstract': '@cparagraph()',
  	  'fromTopic': '@cword(2,6)',
    }]
})
  .mock('accounts/login', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  .mock('accounts/register', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  .mock('accounts/captcha', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
  .mock('accounts/fgPasswd', 'post', {
    'errorCode': 0,
    'errorMsg': 'success'
  })
