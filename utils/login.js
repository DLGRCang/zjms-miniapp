
const util = require('/util.js')
//获取新闻列表数据
//如分页数据不传 默认page:1;rows:10条
const isLogin = function () {
	if(wx.getStorageSync("token")==""){
			wx.showToast({
				title: "请先登录",
				icon: 'none',
				mask: true,
				success(res) {
					setTimeout(() => {
						wx.navigateTo({
							url: '/pages/plugin/home/home',
						})
					}, 1000)
				}
			});
			return false
	}
	return true
}
module.exports = {
	isLogin: isLogin,
}