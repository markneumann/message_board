console.log("loading routes");
//********** RESTful routes *************
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Posts = require('../controllers/posts_controller.js');

module.exports = function(app){
    app.get('/', Posts.index);
    app.post('/new_post', Posts.new_post);
    app.post('/new_comment/:id', Posts.new_comment);  // need to define in schema;
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
