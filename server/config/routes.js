console.log("loading routes");
//********** RESTful routes *************
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Posts = require('../controllers/posts_controller.js');

module.exports = function(app){
    app.get('/', Posts.index);
    app.post('/new_post', Posts.new_post);
    return function(app2){console.log('back from routes');};
    // app.post('/new_comment', Comment.create);  // need to define in schema
};
//********** End routes **************
