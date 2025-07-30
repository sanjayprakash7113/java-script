let globalvar="i am global";//global variable
function showglobal()
{
    let name="santhosh";//local variable
    console.log("hello"+name);//printing local var inside the function

}
showglobal();
console.log(globalvar);
console.log("hello"+name)

{
    const inside=42;//block level variable
    console.log(typeof inside);
}
console.log(typeof inside);//underfined bcoz of block level var
{
    var inside=42;
}
console.log(typeof insidevar);