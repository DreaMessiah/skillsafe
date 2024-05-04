import $api from "../http"

export default class SkillService{
    static createSkill(name,days,info,files,group){
        return $api.post('/skill/create',{ name,days,info,files,group })
    }
    static getDevelopers(){
        return $api.get('/skill/getdev')
    }
    static fetchSkills(){
        return $api.get('/skill/fetchskils')
    }
    static loadSkill(skill_id){
        return $api.post('/skill/loadskill',{skill_id})
    }
}
