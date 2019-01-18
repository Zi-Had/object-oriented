
function Person(name){
    this.name= name;
   
   }
   Person.prototype.print = function(){
       console.log(`Hello , ${this.name}`); 
   }
   function Person1(name,age){
    Person.call(this,name)
    this.age=age;
   }
   Person1.prototype = Object.create(Person.prototype)
   function Person2(name,age,id){
    Person1.call(this,name,age)
    this.id = id;
   }
   Person2.prototype = Object.create(Person1.prototype)
   
   
   
   var p = new Person("Zihad")
   var p1 = new Person1("rakib" , 21)
   var p2 = new Person2("Jihad",21,1550)
   
   