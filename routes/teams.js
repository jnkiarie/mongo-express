var express = require('express');
const { status } = require('express/lib/response');
var router = express.Router();
const Team = require('../models/team');

//CRUD
/* GET users listing. */

//CREATE
router.post('/', function (req, res, next) {
    //save the object in mongo
    const { name, stadium, size } = req.body;
    let newTeam = new Team({
        name,
        stadium,
        size
    });

    newTeam.save((err) => {
        if (err) {
            console.log(err)
        }
    });
    res.send('Teams Page Creating Teams');
});
//READ
router.get('/', function (req, res, next) {

    Team.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }

        data.forEach((entry) => {
            console.log(entry);
        })
    });

    res.send('Fetched Data');
});

//UPDATE
router.put('/', function (req, res, next) {

    const id = req.query.id;
    Team.updateOne({ _id: id }, { name: 'New Man U' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });

    res.send('Record Updated');
});

//DELETE
router.delete('/', function (req, res, next) {

    const id = req.query.id;

    Team.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
    res.send('Deleted')
})

module.exports = router;