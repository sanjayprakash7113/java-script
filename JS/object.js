//object
// name ,age,isstudent are key ,ram,47,true are values
let person={
    name:"sam"
    age=47,
    isstudent:true};
    console.log(person.name);
    person.city="new work";
    console.log(person.city);
    delete person.isstudent;//deleted
    
    console.log(person.isstudent);
    //printing the obj
    for(let key in person)
    {
        console.log(key+":"+person[key]);
    }
    //obj using function
    let user={
        name:"alice",
        greet:function()
        {
            console.log("hi i am alice")
        }
    };
    user1.greet();// array of objects
    flower.foreach(flower=>{
        console.log(`${flower.name} is a ${flower.type}plant is usually ${flower.color}.')
    });

