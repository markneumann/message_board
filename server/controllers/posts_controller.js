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
                res.render('message_board.ejs', {posts: posts});
            });
        },

        new_post: function(req, res) {
            console.log("--> new post path");
            var post = new Post({name: req.body.name, message: req.body.message});
            post.save(function(err){
                if(err) {
                    console.log("error =" + err);
                } else {
                    res.redirect('/');
                }
            });
        },

        // new_comment: function(req, res) {
        //     console.log("--> new post path");
        //     res.render('posts/new', {input: req.params});
        //}

        // more controller methods here (edit, destroy)
    };
})(); //returns object
