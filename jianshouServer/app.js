let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//导入数据库模块的操作
let db = require('./DB/operating.js');
//(1)连接数据库
db.connect('mongodb://127.0.0.1:27017/jianshuDB',{useNewUrlParser: true});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended:false }) );
// 解决 axios跨越的同源策略设置
var allowCors = function(req, res, next) {  
	res.header('Access-Control-Allow-Origin', req.headers.origin); 
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type'); 
	res.header('Access-Control-Allow-Credentials','true');  
	next();
};	
app.use(allowCors);

//基本服务
app.get('/',function(req,res){
	res.send('hello world');
});

// (1) 处理注册请求
app.post('/api/register/user',(req,res)=>{
	
	let obj = {
		nickName: req.body.nickName,
		userName: req.body.userName,
		pwd: req.body.pwd
	}
	db.addInfo(obj,'userInfo',(num)=>{
		// 返回的是 0 ，就是存储成功，但是并没有在数据库中看到数据
		if(num){// 1 ---服务器内部错误
			res.send( {"code":num,"data":[],"msg":"服务器错误"} );
		}else{// 0 --- 成功
			res.send( {"code":num,"data":[],"msg":"注册成功"} );
		}
		
	});
});

// （2）处理登陆
app.post('/api/login/user',(req,res)=>{
	// 拿到当前用户提交上来的数据  与  数据库里面用户信息进行对比
	db.readUserInfo(req.body,'userInfo',(num,result)=>{
		if(num==1){//num=1,服务器错误
			res.send({"code":1,"data":[],"msg":"服务器错误"});
		}else if(num==0){
			res.send({"code":0,"data":[result],"msg":"登陆成功"});
		}else if(num==2){
			res.send({"code":2,"data":[],"msg":"亲，密码错误"});
		}else if(num==3){
			res.send({"code":3,"data":[],"msg":"用户名不存在"});
		}
		
	})	
})

// (3)处理文章保存操作
app.post('/api/saveArtical/user',(req,res)=>{
	db.addInfo(req.body,'saveArticle',(num)=>{
		if(num){// 1 ---服务器内部错误
			res.send( {"code":num,"data":[],"msg":"服务器错误"} );
		}else{// 0 --- 成功
			res.send( {"code":num,"data":[],"msg":"保存成功"} );
		}
	})
})

// （4）处理更新文章
app.post('/api/updateArticle/user',(req,res)=>{
		console.log(req.body)
	let dataObj = {
            "title": req.body.title,
            "authorHeadLogo": req.body.authorHeadLogo,
            "authorName": req.body.authorName,
            "authorPublishTime": req.body.authorPublishTime,
            "content": req.body.content,
            "contentPic": req.body.contentPic,
            "comment": req.body.comment,
            "commentPersonName": req.body.commentPersonName,
            "commentTime" : req.body.commentTime,
            "praiseNumber": req.body.praiseNumber       
        }
    let conditionObj = {"_id":req.body._id};
	db.updateArticles(conditionObj,dataObj,(num)=>{
		if(num){//1,服务器内部错误
			res.send({"code":num,"data":[],"msg":"服务器错误"});
		}else{//0,文章发布成功
			res.send({"code":num,"data":[],"msg":"文章更新成功"});
		}
	});
	
})

// （4）处理查询文章的请求
app.get('/api/readArticle/user',(req,res)=>{
	db.readArticles((num,result)=>{
		if(num){// 1 服务器错误
			res.send( {"code":num,"data":[],"msg":"服务器错误"} );
		}else{// 0 成功，返回数据
			res.send( {"code":num,"data":result,"msg":"查询成功"} );
		}
	});
	
})
// （5）处理单独查询一个文章的请求
app.get('/api/onlyArticle/user',(req,res)=>{

	db.readOnlyArticle(req.query,(num,result)=>{

		if(num){
			res.send( {"code":num,"data":[],"msg":"服务器错误"} );
		}else{
			res.send( {"code":num,"data":result,"msg":"查询成功"} );
		}
	});
	
})

// （6）删除自己某一个文章
app.get('/api/onlyDeleteArticle/user',(req,res)=>{
	console.log(req.query);
	db.deleteOneArticle(req.query,(num)=>{
		if(num){// 服务器内部错误
			res.send( {"code":num,"data":[],"msg":"服务器错误"} );
		}else{
			res.send( {"code":num,"data":[],"msg":"删除成功"} );
		}
	});
	
})

app.listen(4000,()=>{

	console.log('（1）node server is running port on 4000... ');
});
