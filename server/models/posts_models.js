//basic model
console.log("loading posts_model");
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

PostSchema.path('name').required(true, 'Name cannot be blank');
PostSchema.path('name').validate(function (v) {
    return v.length > 4;
}, 'The minimum length is 4 characters');
PostSchema.path('message').required(true, 'Message cannot be blank');

var CommentSchema = new mongoose.Schema({
    _Post: {type: Schema.Types.ObjectId, ref: 'Post'},
    commentor: String,
    theComment: String,
    }, { timestamps: { createdAt: 'created_at'}}
);

CommentSchema.path('commentor').required(true, 'Name cannot be blank');
CommentSchema.path('commentor').validate(function (v) {
    return v.length > 4;
}, 'The minimum length is 4 characters');
CommentSchema.path('theComment').required(true, 'Comment cannot be blank');

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

console.log("exit posts_models");
