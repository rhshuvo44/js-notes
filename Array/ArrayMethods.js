const products =[
    { name:'laptop', price :32000 , brand:'lenovo', color:'silver'},
    { name:'Phone', price :10000 , brand:'iphone', color:'black'},
    { name:'Bag', price :500 , brand:'lenovo', color:'black'},
    { name:'Watch', price :2000 , brand:'samsang', color:'silver'},
    { name:'phoneCase', price :200 , brand:'iphone', color:'white'},
]
// 1. map()
// কোনো একটা array থেকে কোনো element নিয়ে অন্য একটা নতুন array বানানোর জন্য map() ব্যবহার করা হয় , original array change না করেই .... 
// map -> array return করে ....  
///array looping এর value return দরকার হলে map ব্যবহার করা হয়  

//products.map(function(currentValue, index, arr), thisValue) --optional(index,arr,thisValue)

const brand=users.map(product=> product);
console.log(brand);


// -----------------------
//2. forEach() 

// কোনো কিছু return করে না ...
// looping এর value return দরকার না হলে forEach ব্যবহার করা হয় 

// products.forEach(function(currentValue, index, arr), thisValue) --optional(index,arr,thisValue)

// ----------------
// 3. filter()

// কোনো শর্ত দিলে সেই শর্ত অনুশারে যত গুলো element পাবে সবগুলেকে একটা নতুন array বানিয়ে return করবে ......... 
//original array change না করেই ....  

// products.filter(function(currentValue, index, arr), thisValue)--optional(index,arr,thisValue)


//4. find()

// কোনো শর্ত দিলে সেই শর্ত অনুশারে প্রথম যে element টা পাবে শুধু তাকেই return করবে 


// products.find(function(currentValue, index, arr),thisValue)--optional(index,arr,thisValue)


// নোট ঃ map ,forEach ,filter ,find এই গুলো array উপর কাজ করে object এর উপর কাজ করে না কিন্তু object এর উপর তখনই কাজ করে যখন object অন্য একটা array ভিতর থাকে ।। 