var users={name:"sachin",age:20,work:"engineer"}
var objectToJson=JSON.stringify(users);
console.log(objectToJson);
console.log(typeof objectToJson);

var employee='{"name":"sachin","age":20,"work":"engineer"}'
var jsonToObject=JSON.parse(employee);
console.log(jsonToObject);
console.log(typeof jsonToObject);