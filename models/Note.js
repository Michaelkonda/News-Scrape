// Require a mongoose
var mongoose = require("mongoose");

// Create schema class
var Schema = mongoose.Schema;

// create noteschema
var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

// create the note nodel with the noteschema
var Note = mongoose.model("Note", NoteSchema);
// export model
module.exports = Note;