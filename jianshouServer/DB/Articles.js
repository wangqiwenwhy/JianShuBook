let mongoose = require('mongoose');
let Schema =  mongoose.Schema;
// 创建 Schema 
let articlesSchema = new Schema({
  title:String,
  authorHeadLogo: String,
  authorName: String,
  authorPublishTime: String,
  content: String,
  contentPic: String,
  comment: String,
  commentPersonName: String,
  commentTime : String,
  praiseNumber: Number
});

// 生成 model
let articlesModel = mongoose.model('articles',articlesSchema);
// 最后导出
module.exports = articlesModel;