let promise = new Promise((resolve,reject)=>{
     
    let InputNum = parseInt(prompt("enter the number"))

   if( !NaN(InputNum) && InputNum<=10){

      resolve("you entered the right value")
   }
   else{
    reject("oops! value entered by you is larger")
   }
})

let readFunc = (retrived)=>{
    console.log(retrived)
}


promise.then(readFunc)
.catch(readFunc)