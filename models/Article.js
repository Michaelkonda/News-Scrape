// Require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");

//create schema class
var Schema = mongoose.Schema;

//create article class
var ArticleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    link: {
        type: String,
        required: true
    }, 
    saved: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;