const myself={
    firstName:"Rakibuzzaman ",
    lastName:"Jihad",
    age:21,
    hometown:"Comilla",
    school:"Dhampti H.R.High School",
    college:"Cantonment College,Comilla",
    hobby:"Codding",
    print:function(){
        console.log(`My Name Is ${this.firstName+this.lastName}. And my age is ${this.age}`)
    }
}
myself.print()
myself.relationship="Single"
console.log(myself.relationship)

for(var i in myself){
    console.log(`${i} = ${myself[i]}`)
}