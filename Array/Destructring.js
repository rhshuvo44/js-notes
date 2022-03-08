//


//array destructring


//destructring এর প্রথম শর্ত হলো দু পাশেই এক রকম data type থাকতে হবে যেমন ,ডান পাশে array = বাম পাশেও array থাকতে হবে ,,বাম পাশের array টা কোনো variable হতে পারে আবার কোনো function এর ভিতরের array ও হতে পারে আবার সরাসরি array ও থাকতে পারে আবার object এর ভিতর array ও হতে পারে .... 

const [a,b]=[30,40] // সরাসরি array 


const num = [10,20]; 
const [x,y]= num; // variable of array 

function desArray(num1,num2) {
    const num3 = [num1,num2] ;
    return num3
}

const [c,d] =desArray(50,60) // function of array

const students={
    name:'Ripon',
    id: 01,
    sub:['math','bangla']
}

const [sub1,sub2]=students.sub;




//object destructring


//destructring এর প্রথম শর্ত হলো দু পাশেই এক রকম data type থাকতে হবে যেমন ,ডান পাশে object = বাম পাশেও object থাকতে হবে ,,বাম পাশের object টা কোনো variable হতে পারে আবার কোনো function এর ভিতরের object ও হতে পারে আবার সরাসরি object ও থাকতে পারে আবার object এর ভিতর object ও হতে পারে .... 



const {id}= { id: 3 } //সরাসরি object 
    
const product ={ name:'laptop', price :32000 , brand:'lenovo', color:'silver'}

const {name}=product; //variable of object 


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
    
const {ssd}=products.config; //object of object



function desObj(id,name) {
    const objFun = {Roll:id,nickName:name} ;
    return objFun;
}

const {Roll,nickName} =desObj(50,'Ripon') // function of object

