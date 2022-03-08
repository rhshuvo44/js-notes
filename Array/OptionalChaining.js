// optional chaining (?) আমি যে data খুজতেছি সেই data না পেলে program error দিবে সেই error থেকে পরিতান পেতে  optional chaining (?) ব্যবহার করা হয় ,,optional chaining (?) ব্যবহার করলে value হিসেবে undefine return দিবে 


const products =
{ 
    name:'laptop', 
    price :32000 , 
    brand:'lenovo', 
    color:'silver',
    config:{
        ssd:"120gb",
        procesor: 'core i3'
    }
}

// console.log(products.config.procesor.band.ssd); //error
console.log(products?.config?.procesor?.band?.ssd); //optional chaining
