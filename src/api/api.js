// 新闻页面请求接口
export const uriGetNews = 'api/getNewsPage'

// 首页关系图接口
export const getIndexGraph = 'api/getGraph'

/* 查询页面 */
// 查询页面关系图
export const getSearchGraph = 'api/getSearchGraph'
// 查询页新闻
export const getSearchNews = 'api/getSearchNews'

// 查询排行榜页面图表
export const getRankGraph = 'api/getHotWords'

// 新闻追踪
export const getNewsTrack = 'api/newstrail'

/* 用户 */
// 用户登陆
export const userLogin = 'accounts/login'
// 用户注册
export const userRegister = 'accounts/register'
// 发送验证码
export const userGetCaptcha = 'accounts/captcha'
// 忘记密码的重置密码
export const userfgPasswd = 'accounts/fgPasswd'
// 检查登录状态
export const userIsLogin = 'accounts/getLoginStatus'
// 用户基本信息
export const userGetInfo = 'accounts/getUserInfo'
// 修改用户推送邮箱
export const userEditUserMail = 'accounts/editUserMail'
// 修改用户名
export const userEditUsername = 'accounts/editUsername'
// 修改用户是否接受推送
export const userIsAcceptEmail = 'accounts/editUserAcceptPost'
// 我的喜欢 数据
export const userGetLike = 'accounts/getWatchList'
// 我的喜欢 增加 喜欢标签
export const userLikeAdd = 'accounts/addWatchTag'
// 我的喜欢 删除 喜欢标签
export const userLikeDelete = 'accounts/delWatchTag'
// 用户爱好追踪
export const userInterestTracking = 'accounts/userBrowseNews'
