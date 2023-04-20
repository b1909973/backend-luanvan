const neo4j = require('neo4j-driver')
// import { nanoid } from 'nanoid'
const driver = neo4j.driver( "bolt://localhost:7687/",neo4j.auth.basic('neo4j','phuongkp0'))
const session = driver.session({database:'neo4j'})
// const personName = 'Alice'

    const findAll = async ()=>{
     const result = await session.run(`match (u:Person) return u`)
      return result.records.map(i=>i.get('u').properties)
    }
    const findById =async (id)=>{
      const result= await session.run(`match (u:User {_id:'${id}'}) return u limit 1`)
      return result.records[0].properties
    }

     const create = async (user)=>{
      console.log(user)
        const result = await session.run(`CREATE (u:User {_id:'${Math.floor((new Date().getTime() * Math.random())).toString()}' , name:'${user.name}', phone:'${user.phone}'})`)
        // return result.records[0].properties
        return true
    }
     const findByAndUpdate = async (id,user)=>{
      const result = await session.run(`MATCH (u:user {_id:'${id}'}) SET name='${user.name}' , phone='${user.email  }' `)
      return result.records[0].properties

    }
       
      
      // // on application exit:
      // await driver.close()
    
    module.exports={
        findAll,findById,findByAndUpdate,create
      }
 