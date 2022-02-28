var express = require('express');
const { status } = require('express/lib/response');
var router = express.Router();
const Team = require('../models/team');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CRUD
/* GET users listing. */

//CREATE
router.post('/addteam', function (req, res, next) {
    //save the object in mongo
    let myTeam = new Team(req.body);
    // const { name, stadium, size } = req.body;
    // let newTeam = new Team({
    //     name,
    //     stadium,
    //     size
    // });

    myTeam.save((err) => {
        if (err) {
            console.log(err)
        }
        console.log('Success')
        res.send('Teams Saved to Database');
    });
    
});
//READ
router.get('/', function (req, res, next) {

    Team.find({}, (err, data) => {
        if (err) {
            res.send(`${err}`);
        }
        res.send(`${data}`)
        // data.forEach((entry) => {
        //     console.log(entry);

        // })
        // console.log(data)
    });

    // res.send('Fetched Data', data);
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