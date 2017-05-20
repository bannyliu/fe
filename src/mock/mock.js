var videoList = require('./video/list.json');
var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json');
var qandaReply = require('./qanda/qandaReply.json');
var jobList = require('./job/jobList.json');
var interviewList = require('./interview/interviewList.json')

module.exports = function () {
  return {
    'videolist': videoList,
    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply,
    'joblist':jobList,
    'interviewlist':interviewList
  }
}
