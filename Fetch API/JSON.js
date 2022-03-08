// JSON ->JavaScript Object Notation 
// কোনো object কে json এ convert করলে object এর key & value উভয়ই duble cotesion("") হয়ে যায় 

//কোনো object কে json এ convert করতে JSON.stringify() এর মাধ্যমে করতে হয় 

//object to JSON
// -------------------------
const product ={ name:'laptop', price :32000 , brand:'lenovo', color:'silver'}

const productJson =JSON.stringify(product)

console.log(productJson);


//JSON to Object

// ------------------

//কোনো json কে object এ convert করতে JSON.parse() এর মাধ্যমে করতে হয় 



const products =JSON.parse(productJson)

console.log(products);