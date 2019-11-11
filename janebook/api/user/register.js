import request from '../../utils/request';
import faceUrl from '../faceUrl';

//用户注册
export function register(obj){
    console.log(obj.userName)
    return request({
        url:faceUrl.url+faceUrl.register,
        method:'post',
        data:{
            nickName:obj.nickName,
            userName:obj.userName,
            pwd:obj.pwd
        }
    })
}