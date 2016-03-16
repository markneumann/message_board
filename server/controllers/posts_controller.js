var mongoose = require('mongoose');
var Poster = mongoose.model('posters');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            //db.posts.find()
            res.render(index);
        },

        new: function(req, res) {
            res.render('posts/new');
        },

        edit: function(req, res){
            var data = this.show(req, res);
            res.render('posts/edit', {data:data});
        },

        show: function(req, res) {
            var data = this.show(req.res);
            res.render('posts/show');
        }


        // more controller methods here
    };
})(); //returns object
