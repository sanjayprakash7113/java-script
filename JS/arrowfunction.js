//arrow funtion (=> big arrow)
// arrow funtion without parameter

const sla=() =>
    {
        console.log("welcome to sla")

    } 
    sla();
    function sla()//traditionl function
    {
        console.log("welcome to sla");
    }
    sla();
    //2.arrow funtion with single parameters
    const s=x=>x*x;
    console.log(s(5));

    const add=(a,b)=>a+b;
    console.log(add(2,3));

    //3.arrow function with multiple parameter
    const s1=(x1,y1,z1)=>{
        console.log(x1+y1+z1);
    }
    
 //even number
 const even=(a) => a%2==0?"even":"odd";
 
    console.log(even(2));
 
 //odd number
 var odd=(a) =>a%2!=0?"odd":"even";
 
    console.log(odd(1));
 
 
   
