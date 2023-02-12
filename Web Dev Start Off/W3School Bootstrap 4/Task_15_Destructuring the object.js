/* Destructuring the object

Take out the age from the person object using destructuring and console log
Take out state from the person object using destructuring and console log */

const person = {
    age: 26,
    firstName: "Yash",
    lastName: "Prasad",
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'BLR',
        state: 'Karnataka'
    }
}
// In the person object, print 2nd hobby = "movies" from the hobbies

console.log("Person's 2nd hobby = ",person.hobbies[1])

// In the person object, print the "state" value from address key
console.log("Person's state = ", person.address.state)

// Take out the age and city from the person object using destructuring and console log
const { age, address: {city}} = person
console.log("Person's age = ", age)
console.log("Person's city = ", city)