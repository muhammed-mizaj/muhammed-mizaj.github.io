// fetch("pro.json").then((response)=>{
//     console.log("resolved",response);
//      return response.json();
// }).then(data=>{
//     console.log(data);  
// }).catch((err)=>{
//     console.log("rejected",err);
// }); 
const getTodos = async()=>{
 const response = await fetch("pro.json").then(()=>{
 console.log(response);
 });
}; 
const test = getTodos();
console.log(test);