




function Person(firstName, lastName, age, sex) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.printFullName = () => {
     //complete this function such that it console logs the full name 
     //Be aware  - Format should match and case sensitive
     console.log(this.firstName, this.lastName);
    };
  }
  
  Person.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
      //complete this function such that it prints ELIGIBLE or NOT ELIGIBLE based on user's age
      //Be aware  - Format should match and case sensitive
      const eligibility = this.age > minAge ? 'ELIGIBLE' : 'NOT ELIGIBLE';
      console.log(eligibility);
  };
  
  
  function createNewStudents(){
      const person1 = new Person("yash", "prasad", 10, "M");
      const person2 = new Person("vaibhav", "prasad", 20, "M");
      
      person1.printFullName();
      person1.findegligibleOrNot(18);
      person2.printFullName();
      person2.findegligibleOrNot(18);
  
  }