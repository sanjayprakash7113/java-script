const delaysum=(x,y)=>
    new Promise((reslove,reject)=>{
    setTimeout(() => {
        const sum=x+y;
        resolve(sum);
    },500)
});
delayssum(3,7)
.then(result=>{
    console.log("sum is",result,5);
})
.then(result2=>
{
    //sum 5,after another 500ms
    console.log("sum plus 5 is",result2);
})
.catch(error=>
{
    console.error("error occured",error)
}
);


