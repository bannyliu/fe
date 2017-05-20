var videoList = require('./video/list.json');
var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json');
var qandaReply = require('./qanda/qandaReply.json');
var jobList = require('./job/jobList.json');
var interviewqList = require('./interviewq/interviewqList.json');
var searchList = require('./search/searchList.json')

module.exports = function () {
  return {
    'videolist': videoList,
    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply,
    'joblist':jobList,
    'interviewqlist':interviewqList,
    'search':searchList
  }
}
