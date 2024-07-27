const notes=require('./notes.js')
console.log(notes.age);
console.log(notes.addNumber(notes.age,4));

var _=require('lodash');
var users=["rohan", "mohan", "sohan", "rohan", "mohan", "deepak",2,3,2,21,21];
console.log(_.uniq(users));
console.log(_.isString(4));
console.log(_);





// const { log } = require('console');
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// // console.log(user);
// fs.appendFile("greeting.txt","Hi "+user.username +'\n',()=>console.log("add success"));

// console.log(fs);
// console.log(os);



