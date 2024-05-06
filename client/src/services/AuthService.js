import $api from "../http"

export default class AuthService{
    static async login(login,password){
        return $api.post('/auth/login',{login,password})
    }
    static async registration(login,password,tn,name,email){
        return $api.post('/auth/registration',{tn,name,login,password,email})
    }
    static async logout(){
        return $api.post('/auth/logout')
    }
    static async getUsers(sort,direct){
        return $api.post('/auth/getusers',{sort,direct})
    }

}
