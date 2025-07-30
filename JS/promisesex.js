function getNumber(num)
{
    //promise is a based object for async work
    return new Promise(resolve=>setTimeout(()=>resolve(num),500));
}

getNumber(2) //return a promise that 
 //resolve with 2 after 500ms
.then(n=>getNumber(n*3)) //resolve after another 500 ms
.then(n2=>console.log("result",n2)) //result 6
.catch(err=>console.error(err)); 
//handle error any posible rejection
function getNumber(num) {
    return new Promise(resolve => setTimeout(() => resolve(num), 500));
}
