<template>
    <section>
        <div class="editor_btn">
            <router-link to="/Release"><div class="editor_return">返回</div></router-link>
            <router-link to="/Release"><div class="editor_save" @click="save">保存</div></router-link>
        </div>
        <div class="editor_title">
            <input type="text" placeholder="请写入标题" v-model="title2">
            <!--:value="item[this.$route.query.id].title"-->
        </div>
        <div class="editor_content">
            <textarea  placeholder="请写入内容" v-model="content2"></textarea>
            <!--:value="item[this.$route.query.id].content"-->
        </div>

    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                title2:"",
                content2:""

            }
        },
        //事件
        methods:{
            save(){
                console.log(this.title2)
                console.log(this.content2)
                axios.post('http://localhost:4000/api/updateArticle/user',{
                    _id:this.$route.query.id,
                    title:this.title2,
                    content:this.content2
                })
                    .then((res)=>{
                        console.log(res)
                    }).catch((err)=>{
                        console.log(err);
                    })
            }
        },
        //页面加载渲染
            mounted(){
                axios.get('http://localhost:4000/api/onlyArticle/user',{params:{
                        _id:this.$route.query.id
                    }})
                    .then((res)=>{
                        var that = this
                        console.log(res.data.data[0])
                        console.log(res.data.data[0].title)
                        that.title2 = res.data.data[0].title
                        console.log(res.data.data[0].content)
                        that.content2 = res.data.data[0].content


                        // console.log(this.$route.query.id)  获取url  上面的id
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
section{
    width: 100%;
}
    .editor_title{
        width: 80%;
        margin: 0 auto;
        height: 100px;
        padding-top: 20px;
        padding-bottom: 40px;
    }
.editor_title input{
        width: 100%;
        height: 100px;
        background-color: #fff;
    font-size: 50px;
}
.editor_content{
    width: 80%;
    height: 610px;
    margin: 0 auto;
    background-color: #fff;
}
.editor_content textarea{
    width: 100%;
    height: 600px;
    margin-top: 10px;
    font-size: 20px;
    outline: 0;
    border: 0;
}
.editor_btn{
    width: 80%;
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    text-align: center;
}
.editor_btn .editor_save{
    margin-top: 35px;
    width: 100px;
    height: 30px;
    color: white;
    border-radius: 10px;
    margin-right: 30px;
    line-height: 30px;
    background-color: darkorange;
    cursor:pointer;	/*指针变成小手*/
}
    .editor_btn .editor_return{
        margin-top: 35px;
        width: 80px;
        height: 30px;
        border-radius: 10px;
        margin-left: 30px;
        line-height: 30px;
        background-color: #f8f8f8;
        cursor:pointer;	/*指针变成小手*/
    }
</style>