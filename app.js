const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsssDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Sweet"
});



//creating new schema for users->
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//Now creating a model for the users which is basically a new collection in database to save the value of users
const User = mongoose.model("User", userSchema);

//now creating a document for a user 
const user = new User({
    name: "Ayan Ansari",
    age: 20
});

const user2 = new User({
    name: "Ramesh",
    age: 16
});
const user3 = new User({
    name: "Rohan",
    age: 15
});

// user.save();  //only run this command when you want to save the document in the database(fruitsssDB) 🔥
User.insertMany([user2, user3], function(err){
    if(err){
        console.log("Error in inserting");
    }else{
        console.log("Successfully inserted");
    }

});