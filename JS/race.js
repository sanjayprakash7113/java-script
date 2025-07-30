const p1=new Promise(resolve=>setTimeout(()=>resolve("a"),));
const p2=new Promise(resolve=>setTimeout(()=>resolve("b")));
race =Promise.race([p1,p2]).then(result=>
{
    console.log(result);
}
)