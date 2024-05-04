import $api from "../http"

export default class AuthService{
    static async login(login,password){
        return $api.post('/auth/login',{login,password})
    }
    static async registration(login,password,tn,full_name,email,inn,moderator,account,unit){
        return $api.post('/auth/registration',{tn,full_name,login,password,email,inn,moderator,account,unit})
    }
    static async logout(){
        return $api.post('/auth/logout')
    }
    static async getUsers(){
        return $api.get('/auth/getusers')
    }

}
