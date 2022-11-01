/* Use the prototype property to add a new property to all objects of a given type: */

function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 2000;
  
  const fred = new employee("Fred Flintstone", "Caveman", 1970);

 /*  The prototype is a global property available with all JavaScript objects.

The prototype property allows you to add new properties and methods to objects. */

console.log(fred.salary);