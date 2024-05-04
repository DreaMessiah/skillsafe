const SkillService = require('../services/skill.service')
const {Files, Developers} = require('../models/models')
const fs = require('fs');
const FileDto = require('../dtos/fileDto')
const config = require('config')
const PATH = require('path')

class SkillController {
    async getDevelopers(req, res, next) {
        try {
            const developers = await SkillService.getDevelopers()
            return res.status(200).json(developers)
        } catch (e) {
            next(e)
        }
    }
    async createSkill(req, res, next) {
        try {
            const { name,days,info,files,group } = req.body
            console.log(name,days,info,files)
            const skill = await SkillService.createSkill(name,days,info,files,req.user.id,group)
            return res.status(200).json(skill)
        } catch (e) {
            next(e)
        }
    }
    async getSkills(req, res, next) {
        try {
            const skills = await SkillService.getSkills()
            return res.status(200).json(skills)
        } catch (e) {
            next(e)
        }
    }
    async loadSkill(req, res, next) {
        try {
            const {skill_id} = req.body
            const {skill,files} = await SkillService.loadSkill(skill_id)
            console.log(files)
            return res.status(200).json({skill,files})
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new SkillController()