console.log("loading posts_controller");
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> index path");
            Post.find({}, function(err, posts){
                res.render('index', {posts: posts});
            });
        },

        new_post: function(req, res) {
            console.log("--> new post path");
            res.render('posts/new', {input: req.params});
        },

        new_comment: function(req, res) {
            console.log("--> new post path");
            res.render('posts/new', {input: req.params});
        }

        // more controller methods here (edit, destroy)
    };
})(); //returns object
