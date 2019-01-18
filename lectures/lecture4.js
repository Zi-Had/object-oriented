//Prototype



function person(name,age){
    this.name=name;
    this.age=age;

}

person.prototype.print = function(){
    console.log(`Hello , ${this.name}`)
}
person.prototype.greeting = function(){
 console.log("Good Morning ! "+this.name)
}

var p1 = new person("Rakib", 21);
var p2 = new person("Zihad", 20);

p2.greeting()
p1.print();

