import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { LOGIN } from './mutation-type';
import { login } from '../../api/user/login';
import { register } from '../../api/user/register';
// import { register } from '../..api/user/login';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:null,
  },
  getters:{
    getUserInfo:(state)=>{
        return state.userInfo;
    }
  },
  mutations: {
    [LOGIN]:(state,info)=>{
      console.log(info,'test-----')
      state.userInfo = info;
    }
  },
  actions: {
    getLogin:({commit},info)=>{
      if(!info.userName){
        alert("用户名不能为空")
      }
      if(!info.userPassWord){
        alert('用户密码不能为空')
      }

      login(info).then((res)=>{
        console.log(res,'888888')
        if(res.status == 200){
          commit('LOGIN',res.data.data);
          router.replace('/Home');
        }
      })
    },
    getRegister:({commit},info)=>{
      if(!this.obj.nickName){
        console.log("用户名不能为空");
        return;
      }
      if(!this.obj.userName){
        console.log("用户姓名不能为空");
        return;
      }
      register(info).then((res)=>{
        console.log(res)
        if(res.data.code == 0){
          commit('REGISTER',res.data.data);
          router.replace('/Login');
        }
      })
    
    }
  }
})
