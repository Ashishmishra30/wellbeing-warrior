const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect("mongodb+srv://gaurav:pardeshi@cluster0.naivyl2.mongodb.net/Hackthon_Project?retryWrites=true&w=majority");
module.exports = {connection};