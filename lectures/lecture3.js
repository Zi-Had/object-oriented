//This KeyWord


// var obj = {
//     name:"Rakibuzzaman",
//     print:function(){
//         console.log(this.name)
//     }
// }
// obj.print()

// function person(name,age,email){
//    //console.log(this)
//    this.name=name;
//    this.age=age;
//    this.email=email;
//    console.log(`My name is ${this.name} and My Age Is ${this.age}`)
// }
// person("Rakib",21,"Rakibuzzamanjihad@gmail.com")


// var myself = new person


var obj = {
    name:"Rakib",
    print:function(){
        setTimeout(function(){
            console.log("Hello ," + this.name)
        }.bind(this),2000)
    }
}
obj.print()

function Person(name,age){
 this.name=name;
 this.age=age;
 console.log(`My Name Is ${name} And My age Is ${age}`)
}
Person("Zihad",21)


var person = {
    name:"Rakibuzzaman",
    email:"Rakibuzzamanjihad@gmail.com",
    print:function(){
        console.log(`My Name Is ${this.name} and my email Is ${this.email}`)
    }
}
person.print()
