
const util = require('/util.js')
//获取新闻列表数据
//如分页数据不传 默认page:1;rows:10条
const getArtelData = function (infotypeid,page,rows) {
	return new Promise((resolve, reject) => {
		let data = {
			infotypeid: infotypeid,
			page: page==undefined?1:page,
			rows: rows==undefined?100:rows,
		}
		util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
			let artelList = res.data.rows==undefined?[]:res.data.rows;
			resolve(artelList);
		});
	})
}
module.exports = {
	getArtelData: getArtelData,
}