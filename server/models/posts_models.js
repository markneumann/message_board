//basic model
var mongoose = require('mongoose');
var SchemaSchema = new mongoose.Schema({
    //define schema here
    }, { timestamps: { createdAt: 'created_at'}}
);

mongoose.model('posters', SchemaSchema);
