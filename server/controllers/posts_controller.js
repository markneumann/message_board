console.log("loading posts_controller");
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> index path");
            Post.find({}).sort('-created_at')
            .populate({path:'comments', options: {sort:'-created_at'}})
            .exec(function(err, posts){
                //console.log(posts);
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

        new_comment: function(req, res) {
            console.log("--> new comment path");
            Post.findOne({_id: req.params.id}, function(err, post){
                //console.log(req.body);
                var comment = new Comment(req.body);
                comment._post = post._id;
                comment.commentor = req.body.commentor;
                comment.theComment = req.body.theComment;
                //console.log(comment);
                post.comments.push(comment);
                comment.save(function(err) {
                    post.save(function(err){
                        if(err) {console.log("error =" + err);}
                        else {res.redirect('/');}
                    });
                });
            });
        }

        // more controller methods here (edit, destroy)
    };
})(); //returns object
