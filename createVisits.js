let personalData = require('./personalData')
let allDataVisits = require('./allDataVisits')



personalData.forEach((person,i)=>{
    if(!personalData.visits){
        person.visits = []
    }
})


personalData.forEach((person,i)=>{
 person.visits = allDataVisits[i]
})

module.exports = personalData