// write your code here
const input = require('sync-input');

/*Start of stage 3.
const giftsList = function () {
console.log (`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets`);
}
  
let tickets = 100;

let buyAction = function () {
console.log(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts`)
let usersAnswer = Number(input());
  
switch (usersAnswer) {
  case 1:
    let buyOption = Number(input("Enter the number of the gift you want to get: "));
    if (buyOption === 1) {
    tickets -= 10;
    console.log("Here you go, one Teddy Bear!");
    }
    if (buyOption === 2) {
    tickets -= 5;
    console.log("Here you go, one Big Red Ball!");
    }
    if (buyOption === 3) {
    tickets -= 50;
    console.log("Here you go, one Huge Bear!");
    }
    if (buyOption === 4) {
    tickets -= 8;
    console.log("Here you go, one Candy!");
    }
    if (buyOption === 5) {
    tickets -= 15;
    console.log("Here you go, one Stuffed Tiger!");
    }
    if (buyOption === 6) {
    tickets -= 30;
    console.log("Here you go, one Stuffed Dragon!");
    }
    if (buyOption === 7) {
    tickets -= 100;
    console.log("Here you go, one Skateboard!");
    }
    if (buyOption === 8) {
    tickets -= 25;
    console.log("Here you go, one Toy Car!");
    }
    if (buyOption === 9) {
    tickets -= 20;
    console.log("Here you go, one Basketball!");
    }
    if (buyOption === 10) {
    tickets -= 75;
    console.log("Here you go, one Scary Mask!");
    }
    break;
  case 2:
    let ticketsAdd = Number(input("Enter the ticket amount: "));
    tickets += ticketsAdd;
    break;
  case 3:
    console.log(tickets);
  case 4:
    giftsList();
    break;
}
  console.log(`Total tickets: ${tickets}`);
  console.log("Have a nice day!");
}

giftsList();
buyAction();

End of stage 3.*/


/*Start of stage 4.

let totalTickets = 0;

function Gift(name, price, id){
        this.name = name;
        this.price = price;
        this.id = id;
}

const gifts = [
    new Gift("Teddy Bear", 10, 1),
    new Gift("Big Red Ball", 5, 2),
    new Gift("Huge Bear", 50, 3),
    new Gift("Candy", 8, 4),
    new Gift("Stuffed Tiger", 15, 5),
    new Gift("Stuffed Dragon", 30, 6),
    new Gift("Skateboard", 100, 7),
    new Gift("Toy Car", 25, 8),
    new Gift("Basketball", 20, 9),
    new Gift("Scary Mask", 75, 10),
];

function printGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach(gift =>
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
    );
}

function printWelcome() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}

function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function addTickets() {
    let amount = Number(input("Enter the ticket amount: "));
    totalTickets += amount;
    console.log(`Total tickets: ${totalTickets}`);
}

function buyGift() {
    let id = Number(input("Enter the number of the gift you want to get: "));
    let gift = gifts.find(el => el.id === id);
    console.log(`Here you go, one ${gift.name}!`);
    gifts.splice(id -1, 1);
    totalTickets -= gift.price;
    console.log(`Total tickets: ${totalTickets}`);
}

function whatToDo() {
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let selection = Number(input());

    switch (selection) {
        case 1:
            buyGift();
            whatToDo();
            break;
        case 2:
            addTickets();
            whatToDo();
            break;
        case 3:
            checkTickets();
            whatToDo();
            break;
        case 4:
            printGifts();
            whatToDo();
            break;
      case 5:
        break;
        default:
            console.log("Unknown selection")
    }
}

function main() {
    printWelcome();
    printGifts();
    whatToDo();
    console.log("Have a nice day!");
}

main();

End of stage 4.*/


let totalTickets = 0;

function Gift(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

let gifts = [
    new Gift(1, "Teddy Bear", 10),
    new Gift(2, "Big Red Ball", 5),
    new Gift(3, "Huge Bear", 50),
    new Gift(4, "Candy", 8),
    new Gift(5, "Stuffed Tiger", 15),
    new Gift(6, "Stuffed Dragon", 30),
    new Gift(7, "Skateboard", 100),
    new Gift(8, "Toy Car", 25),
    new Gift(9, "Basketball", 20),
    new Gift(10, "Scary Mask", 75),
];

function printWelcome() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}

function printGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach(gift =>
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
    );
}

function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function addTickets() {
    let amount = Number(input("Enter the ticket amount: "));
    if (isNaN(amount) || amount < 0 || amount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
        addTickets();
    } else {
        totalTickets += amount;
        console.log(`Total tickets: ${totalTickets}`);
    }
}

function buyGift() {
    let id = Number(input("Enter the number of the gift you want to get: "));
    const findInGifts = gifts.find(f => f.id === id);
    const giftIndex = gifts.indexOf(findInGifts);
    const chosenGift = gifts[giftIndex];
    if (isNaN(id)) {
        console.log("Please enter a valid number!");
        buyGift();
    } else if (typeof chosenGift === 'undefined') {
        console.log("There is no gift with that number!");
        buyGift();
    } else {
        if (totalTickets < findInGifts.price) {
            console.log("You don't have enough tickets to buy this gift.");
            whatToDo();
        } else {
            console.log(`Here you go, one ${findInGifts.name}!`);
            totalTickets -= findInGifts.price;
            console.log(`Total tickets: ${totalTickets}`);
            const delGift = gifts.splice(giftIndex, 1);
        }
    }
}

function whatToDo() {
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let selection = Number(input());
    switch (selection) {
        case 1:
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.");
                whatToDo();
            } else {
                buyGift();
                whatToDo();
            }
            break;
        case 2:
            addTickets();
            whatToDo();
            break;
        case 3:
            checkTickets();
            whatToDo();
            break;
        case 4:
            printGifts();
            whatToDo();
            break;
        case 5:
            break;
        default:
            console.log("Please enter a valid number!")
            whatToDo();
    }
}

function main() {
    printWelcome();
    printGifts();
    whatToDo();
    console.log("Have a nice day!");
}

main();