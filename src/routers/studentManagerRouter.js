const express = require('express')
const path = require('path')

const studentManagerRouter = express.Router()

//导入控制器
const studentManagerCTRL = require(path.join(__dirname, "../controllers/studentManagerController.js"))

//处理请求
//获取学生列表页面
studentManagerRouter.get('/list', studentManagerCTRL.getStudentListPage)
studentManagerRouter.get('/add',studentManagerCTRL.getAddStudentPage)
studentManagerRouter.post('/add',studentManagerCTRL.addStudent)
module.exports = studentManagerRouter