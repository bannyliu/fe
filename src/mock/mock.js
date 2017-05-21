var videoList = require('./video/list.json');
var videoDetail = require('./video/videoDetails.json');
var videoQanda = require('./video/videoqanda.json');
var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json');
var qandaReply = require('./qanda/qandaReply.json');
var jobList = require('./job/jobList.json');
var jobDetail = require('./job/jobDetail.json');
var jobReply = require('./job/jobReply.json');
var interviewqList = require('./interviewq/interviewqList.json')
var interviewqDetail = require('./interviewq/interviewqDetail.json')
var interviewqReply = require('./interviewq/interviewqReply.json')
var interviewRemove = require('./interview/interviewRemove.json')
var videoClassifyAdd = require('./video/classifyAdd.json')
var videoClassifyList = require('./video/classifyList.json')
var videoClassifyRemove = require('./video/classifyRemove.json')
var videoStage = require('./video/stage.json')
var videoStageAdd = require('./video/stageAdd.json')
var videoStageRemove = require('./video/stageRemove.json')
var interviewqList = require('./interviewq/interviewqList.json');
var searchList = require('./search/searchList.json')

module.exports = function () {
  return {
    'videolist': videoList,
    'videodetail': videoDetail,
    'videoqanda': videoQanda,
    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply,
    'joblist':jobList,
    'jobdetail':jobDetail,
    'jobreply':jobReply,
    'interviewqlist':interviewqList,
    'interviewqdetail':interviewqDetail,
    'interviewqreply':interviewqReply,
    'interviewremove':interviewRemove,
    'videoclassifylist':videoClassifyList,
    'videoclassifyadd':videoClassifyAdd,
    'videoclassifyremove':videoClassifyRemove,
    'videostagelist':videoStage,
    'videostageadd':videoStageAdd,
    'videostageremove':videoStageRemove,
    'interviewqlist':interviewqList,
    'search':searchList
  }
}
