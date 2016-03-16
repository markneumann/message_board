//********** RESTful routes *************
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Posts = require('./../controllers/posts.js');

module.exports = function(app){
    app.get('/', Posts.index);
    app.get('/posts/new', Posts.new);
    app.post('/new_post', Posts.create);
    app.post('/new_comment', Comment.create);  // need to define in schema
};
//********** End routes **************
