//basic model
console.log("loading posts_model");
var mongoose = require('mongoose');
// !!!! need to do the comment association !!!!
var PostSchema = new mongoose.Schema({
    //define schema here
    name: String,
    Post: String
    }, { timestamps: { createdAt: 'created_at'}}
);

var Post = mongoose.model('Post', PostSchema);
