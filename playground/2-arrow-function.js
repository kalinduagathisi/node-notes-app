// tradition function
// const square = function (x) {
//     return x*x;
// }

// arrow function
// const square = (x) => {
//     return x*x;
// }

// arrow function shorthand
// const square = (x) => x*x;
//
// console.log(square(3));

// dealing with arrow functions with objects
const event = {
    name: "Birthday Party",
    guestList: ["Alistor", "Sylvester", "Torinton"],

    // arrow functions can't be used in these type of scenarios because, they do not bind 'this' value.
    // so what we can use is a standard function.
    // following is a standard function in a special syntax! (ES6 method definition)
    printGuestList() {
        console.log("Guest list for " + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

event.printGuestList();