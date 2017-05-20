var videoList = require('./video/list.json');
var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json');
var qandaReply = require('./qanda/qandaReply.json');
var jobList = require('./job/jobList.json');
var interviewList = require('./interview/interviewList.json')
var interviewRemove = require('./interview/interviewRemove.json')
var videoClassifyAdd = require('./video/classifyAdd.json')
var videoClassifyList = require('./video/classifyList.json')
var videoClassifyRemove = require('./video/classifyRemove.json')
var videoStage = require('./video/stage.json')
var videoStageAdd = require('./video/stageAdd.json')
var videoStageRemove = require('./video/stageRemove.json')

module.exports = function () {
  return {
    'videolist': videoList,
    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply,
    'joblist':jobList,
    'interviewlist':interviewList,
    'interviewremove':interviewRemove,
    'videoclassifylist':videoClassifyList,
    'videoclassifyadd':videoClassifyAdd,
    'videoclassifyremove':videoClassifyRemove,
    'videostagelist':videoStage,
    'videostageadd':videoStageAdd,
    'videostageremove':videoStageRemove,
  }
}
