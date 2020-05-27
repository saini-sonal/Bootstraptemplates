function Person(firstName , lastName , Dob){
  this.firstName=firstName;
  this.lastName=lastName;
  this.Dob= new Date(Dob);
}
Person.prototype.getBirthYear = function () {
  return this.Dob.getFullYear();
}
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}
const person1=new Person('sonal','saini','3-3-1999');

console.log(person1);
