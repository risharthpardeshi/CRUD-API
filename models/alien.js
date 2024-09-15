const mongoose = require('mongoose');

const alienScheme = new mongoose.Schema({
   name: {
    type: String,
    requires: true
   },
   tech: {
    type: String,
    required: true
   },
   sub: {
    type:Boolean,
    required: true,
    default: false
   }
})

module.exports = mongoose.model('Alien', alienScheme)