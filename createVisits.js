let personalData = require('./personalData')
let allDataVisits = require('./allDataVisits')



personalData.forEach((person,i)=>{
    if(!personalData.visits){
        person.visits = []
    }
})


personalData.forEach((person,i)=>{

 let threeVisits = allDataVisits.splice(i,3)
  person.visits = JSON.stringify(threeVisits)
})

console.log(personalData)

module.exports = personalData