import request from '../../utils/request';
import faceUrl from '../faceUrl';

//用户登录
export function login(obj){
    return request({
        url:faceUrl.url+faceUrl.login,
        method:"post",
        data:{
            userName:obj.userName,
                pwd:obj.pwd 
        }
    })
}

