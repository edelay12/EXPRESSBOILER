const express = require("express");
const ChartsService = require('./charts-service')
const { requireAuth } = require("../middleware/jwt-auth");
const EventService = require('../issue-events/issue-events-service');


const ChartsRouter = express.Router();

ChartsRouter.route("/monthly/:teamId")
//make sure team id = teamid headers
//.all(requireAuth)
.get(( req, res, next) => {
      ChartsService.getMonthlyData(req.app.get("db"), req.params.teamId)
        .then(data => {
            console.log('returned monthly data')
                  console.log(data)
                res.json(data);
              })
              .catch(next);
          })


ChartsRouter.route("/userdays/:teamId")
//make sure team id = teamid headers
//.all(requireAuth)
.get(( req, res, next) => {
  const {user_id} = req.headers;
  console.log('chart user: ' + user_id)
      ChartsService.getUserDays(req.app.get("db"), user_id)
        .then(data => {
                res.json(data);
              })
              .catch(next);
          })

ChartsRouter.route("/changepercentage/:teamId")
//make sure team id = teamid headers
//.all(requireAuth)
.get(( req, res, next) => {
  let current;
  let last;

      ChartsService.getTotalCurrentMonth(req.app.get("db"), req.params.teamId)
        .then(data => current = data)
              .then(() => ChartsService.getTotalLastMonth(req.app.get("db"), req.params.teamId).then(data => last = data))
              .then(() => res.json(current - last))
              .catch(next);
          })

ChartsRouter.route("/changeresolved/:teamId")
//make sure team id = teamid headers
//.all(requireAuth)
.get(( req, res, next) => {
  let current;
  let last;

      ChartsService.getResolvedCurrentMonth(req.app.get("db"), req.params.teamId)
        .then(data => current = data)
              .then(() => ChartsService.getResolvedLastMonth(req.app.get("db"), req.params.teamId).then(data => last = data))
              .then(() => res.json(current - last))
              .catch(next);
          })

module.exports = ChartsRouter