// arithmetic operators : + - * ** / % ++ --
a=10
          b=20
    console.log(a+b);
   console.log(a-b);
   console.log(a*b-a);
   console.log(a*b-a+b);
   a=11
   b=2
   console.log(a%b);
   console.log(a**2);
   console.log(++a); //pre increment
   console.log(--a); //pre decrement
   a=15
   console.log(a++);//post increment
   console.log(a);
   console.log(a--);//post decrement
   console.log(a);
   a=2
   b=a--
   console.log(b);
   console.log(a);

   //assignment operators: = += -= *= /= %= **=
   a=5
   b=3
   console.log(a+3);
   console.log(b+=3);
   console.log(a-=4);
   console.log(b*=3);
   console.log(a/=4);
   console.log(b%=2);
   console.log(a%=2);
   console.log(a**=9);

   //comparsion operator: == === != > < >=  <= ?:
   a=10
   console.log(typeof a);
   age=24
   console.log(age>24);
   console.log(age<25);
   console.log(age>=24);
   console.log(age==10);
   console.log(age===24); //compare very stright (to compare to type a=2 "2" it it a not a number it's a string if we mention the |number of(a=2)| that time only it's take a number another time it's take a string even that was anumber
   console.log(age!=20); // != not equal

   //logical operators:&& || !
   a=10

   console.log(a>5 && a%2==0);

   console.log(a>5 && a%3==0); // need two condition are satiesfied for true
   a=10

   console.log(a>5 || a%3==0); //need atleast one condition enough for true

   
   a=2
   console.log(a>0 & a%2==0);

   a=50
   console.log(a>100 && a%2==0);
   console.log(a<100 ^ a%2==0);


   //bitwise operation: & | ~ ^ << >> >>>
   a=10
   console.log(a>>>10);
   console.log(a>>1);



