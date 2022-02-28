var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Define a schema
const teamSchema = new Schema({
    'teamName': String,
    'stadiumName': String,
    'teamSize': Number
})
// Create a model from the schema
const Team = mongoose.model('Team', teamSchema);

// Export it
module.exports = Team;

