const fs = require('fs');
const config = require('config')
const {Skills,Developers,Documents, } = require('../models/models')
const ApiError = require("../exceptions/api.error");
const {Sequelize} = require('sequelize')
const PATH = require('path');
const FilesService = require('./files.service')

class SkillService {
    async createSkill(name,days,info,files,user_id,group) {
        const skill = await Skills.create({name,days,info})
        console.log(files)

        files.map(async item => {
            FilesService.createSkill(skill.id,files)
            await Documents.create({name:item.name,file:`${skill.id}_${item.name}`,user_id:user_id,skill_id:skill.id})
        })

        if(group.length){
            group.map(async item => {
                const dev = await Developers.findByPk(item.id)
                await skill.addDevelopers(dev);
            })
        }
        return skill
    }
    async getDevelopers(){
        return await Developers.findAll()
    }
    async getSkills(){
        return await Skills.findAll()
    }
    async loadSkill(skill_id){
        const skill = await Skills.findByPk(skill_id, { include: 'documents' })
        const files = skill.documents
        return await {skill,files}
    }


}
module.exports = new SkillService()


//     const skill = await Skills.create({ name: 'JavaScript', days: '7', info: 'Frontend development' });
//     const developer = await Developers.create({ name: 'John Doe' });
//
// // Добавление связи между навыком и разработчиком
//     await skill.addDevelopers(developer);

//     // Получение всех разработчиков, связанных с определенным навыком
//     const developers = await skill.getDevelopers();
//
// // Получение всех навыков, связанных с определенным разработчиком
//     const skills = await developer.getSkills();