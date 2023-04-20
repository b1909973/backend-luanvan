const  UserService = require('../services/user.service')

class UserController{

  static async findAll(req,res){
        const records =await UserService.findAll()
        console.log(records)
         return  res.send(records)
        
    }
    static find(req,res){
        return  res.send('------find------')
       
   }
   static findOne(req,res){
    return  res.send('------findOne------')
}
static async create(req,res){
  console.log(req)
  const result = await UserService.create(req.body)
  res.send('ok')
}




}
module.exports = UserController