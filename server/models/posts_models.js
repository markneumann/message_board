//basic model
console.log("loadiit'sng posts_model");
var mongoose = require('mongoose');
// define Schema variable
var Schema = mongoose.Schema;
// !!!! need to do the comment association !!!!
var PostSchema = new mongoose.Schema({
    //define schema here
    name: String,
    message: String,
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
    }, { timestamps: { createdAt: 'created_at'}}
);

var CommentSchema = new mongoose.Schema({
    _Post: {type: Schema.Types.ObjectId, ref: 'Post'},
    commentor: String,
    theComment: String,
    }, { timestamps: { createdAt: 'created_at'}}
);

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
