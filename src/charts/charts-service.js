const knex = require('knex')
var moment = require('moment');

const ChartsService = {
getMonthlyData(db, teamId){
        let monthlyData = [];
   let i =1;
   async function getData(){ 
       while(i < 5){
        db
        .from('issues')
        .select('*')
        .where({team_id: teamId})
        .andWhereRaw(`EXTRACT(MONTH FROM date_created::date) = ?`, [i])
        .then((rows) => {
            monthlyData.push(rows.length);
            console.log('Monthly data while')
         console.log(monthlyData);
         })
         .catch((e) => {
              console.log(e);
         });
         i++;
 }
 return monthlyData;
}

getData().then(res => {
    console.log('monthlyData p')
    console.log(res)
       return res;
    } );
},
getUserDays(db, user_id){
    return db
    .from('users')
    .where({id: Number(user_id)})
    .first()
    .then(user => {
      let start = moment(user.date_created, "YYYY-MM-DD");
      let end = moment().startOf('day');

    return moment.duration(end.diff(start)).asDays();
    }).then(days => Math.round(days))
},
getTotalCurrentMonth(db, teamId){
    let currentMonth = moment().month() + 1;

return db
    .from('issues')
    .select('*')
    .where({team_id: teamId})
    .andWhereRaw(`EXTRACT(MONTH FROM date_created::date) = ?`, [currentMonth])
    .then(res => res.length)
},

getResolvedLastMonth(db, teamId){
    let lastMonth = moment().month();
return db
    .from('issues')
    .select('*')
    .where({team_id: teamId})
    .andWhereRaw(`EXTRACT(MONTH FROM date_created::date) = ?`, [lastMonth])
    .then(res => res.length)
},

getResolvedCurrentMonth(db, teamId){
    let currentMonth = moment().month() + 1;

return db
    .from('issues')
    .select('*')
    .where({team_id: teamId})
    .andWhere({resolution: 'resolved'})
    .andWhereRaw(`EXTRACT(MONTH FROM date_created::date) = ?`, [currentMonth])
    .then(res => res.length)
},

getTotalLastMonth(db, teamId){
    let lastMonth = moment().month();
return db
    .from('issues')
    .select('*')
    .where({team_id: teamId})
    .andWhere({resolution: 'resolved'})
    .andWhereRaw(`EXTRACT(MONTH FROM date_created::date) = ?`, [lastMonth])
    .then(res => res.length)
}
}


module.exports = ChartsService