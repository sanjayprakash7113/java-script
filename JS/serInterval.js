//setinterval (callbackfunction,delayinmilliseconds)
//callbackfunction-function to be exected
//delayedinmilliseconds-intervals between execution
setInterval(()=>
{
    const now=new Date();
    console.log(now.toLocaleTimeString());
},1000);