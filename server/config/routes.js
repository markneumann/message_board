//********** RESTful routes *************
var mongoose = require('mongoose');

var Posts = mongoose.model('posts');

module.exports = (function(app){
    app.get('/posts', Posts.index);
    app.get('/posts/new', Posts.new);
    app.get('/posts/:id', Posts.show);
    app.get('/posts/:id/edit', Posts.edit);
    app.post('/posts', Posts.create);
    app.put('/posts/:id', Posts.update);
    app.delete('/posts/:id', Posts.delete);
});

//********** End routes **************
