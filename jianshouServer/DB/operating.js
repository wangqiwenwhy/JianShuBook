// 关于数据库的 连接 ，增删改查
let mongoose = require('mongoose');
// --- 将用户表结构
let userModel = require('./User.js');
// --- 将文章表结构
let articlesModel = require('./Articles.js');


//（1）数据库的连接
function connect(url){
	mongoose.connect(url);
	const conn = mongoose.connection;
	conn.on('error',()=>{
		console.log('mongodb数据库 连接失败');
	});
	conn.on('open',()=>{
		console.log('（2）mongodb数据库 连接成功');
	});
}



//（2）添加操作：根据不同的‘model’执行不同的操作
function addInfo(dataObj,type,callback){
	let Model;
	if(type=='userInfo'){
		Model = userModel;
	}else if(type=='saveArticle'){
		Model = articlesModel;
	}
	let d1 = new Model(dataObj);
	d1.save((err)=>{
		if(err){//错误返回 1
			callback(1);
		}else{ // 正确返回 0
			callback(0);
		}

	});
}


// （3）文章的更新
function updateArticles(conditionObj,dataObj,callback){
	/*
	语法：
	db.articles.update
	( 
		{'title':'测试文章1'},// 条件
		{ $set:{ 'title':'该文章不存在会添加吗','content':'我是内容' } }, // 插入的数据
		{ 'upsert':true }  // 如果数据不存在，直接插入
	);
	*/
	let Model = articlesModel;
	articlesModel.update(conditionObj,dataObj,{upsert:true,new:true},(err,res)=>{
		if(err){
			callback(1);
		}else{
			callback(0);
			console.log(res);					
		}
	});
}



// （4）查询操作：例1，比较用户信息是否存在
function readUserInfo(dataObj,type,callback){
	// （1）查询数据库，将数据读出来，放进一个数组
	// （2）遍历这个数组，比对是否
	let Model;
	if(type=='userInfo'){
		Model = userModel;
	}else if(type =='myArtical'){

	}
	// 指定userName条件查找
	let conditionObj = { "userName":dataObj.userName }
	Model.find(conditionObj,(err,result)=>{
		if(err){
			// 查询语句错误，才会进到error里面
			callback(1);
			return;
		}
		// 判断差没查到，指定的用户名
		if(result.length==1){//找到l了
			// 用户名存在
			// 确认密码是否正确
			if(result[0].pwd == dataObj.pwd){
				callback(0,result[0]); 
			}else{
				callback(2); // 2 --- 表示密码错误
			}
		}else{
			callback(3); // 3 --- 表示用户名不存在
		}
		
		
	});
}


//（5）查询 文章信息
function readArticles(callback){
	articlesModel.find((err,result)=>{
		if(err){
			callback(1); // 服务器错误
		}else{
			callback(0,result);
		}

	});
}


// （6）查询单独文章信息
function readOnlyArticle(conditionObj,callback){
	articlesModel.find(conditionObj,(err,result)=>{
		if(err){
			callback(1);// 失败，服务器内部错误
		}else{

			callback(0,result);// 成功，拿回数据 
		}
	})
}

// （7）通过id条件 删除自己某个文章
function deleteOneArticle(conditionObj,callback){
	articlesModel.deleteOne(conditionObj,(err)=>{
		if(err){
			callback(1);// 服务器内部错误
		}else{
			callback(0);// 成功
		}
	})
}

module.exports = {
	connect,
	addInfo,
	readUserInfo,
	readArticles,
	readOnlyArticle,
	deleteOneArticle,
	updateArticles,// 文章更新
}
