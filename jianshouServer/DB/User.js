const mongoose = require('mongoose');
// 拿到Schema;
const Schema  = mongoose.Schema;
// 定义一个movie集合（表结构）
let userSchema = new Schema({
    nickName:String,
    userName:String,
    pwd:String
});
// 定义一张表
let userModel = mongoose.model('users',userSchema);

module.exports = userModel;