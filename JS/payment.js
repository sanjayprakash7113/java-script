function fakepaymentAPI(amount)
{
    return new promise ((resolve) =>
    {
        setTimeout(() => {
            resolve(`payment of ${amount}sucess`);
        },2000);
            
    
    });
}
async function makepayment()
{
    console.log("process payment");
const message =await fakepaymentAPI(500);
console.log(message);

}
makepayment();
