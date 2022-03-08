// fetch  এর মাধ্যমে API থেকে Data load করে থাকি 
fetch('url')
.then(res=>res.json()) //Api এর Data JSON এ convert করা 
.then(data=> console.log(data))// api থেকে যে data পাওয়া যায় তা log করে দেখা হয় বা অন্য কোনো function কল করা 