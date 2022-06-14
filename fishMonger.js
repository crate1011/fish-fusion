const {boatInventory} = require("./fishingBoat.js")
let allFishes = boatInventory()
//buys 10 of each inexpensive fish
//if any of the fish quantity is less then 10 the mish monger does not buy
//does not buy fish higher than 7.50 per fish
//needs price input 
//each object provided by fishmonger should have quantity of 10.

//build a function that iterates through all species array
//and returns a new array of each fish with a quantity greater than 10
//params; fishArray
//returns: fisharray
const fishMonger = (fishArray) => {
    const newFishArray = []
    for (const fish of fishArray) {
        if (fish.amount >= 10) {
        newFishArray.push(fish)
        }
    }
    return newFishArray
}

//this function itterates through first function and selects fish less than 7.50
//params: fishArray
//rturns fishArra
const cheapFish = (fishArray) => {
    const cheapestFish = []
    for (fish of fishArray) {
        if (fish.price <= 7.50) {
            cheapestFish.push(fish)
        }
    }
    return cheapestFish
}

//this function needs a price input from the chef
//params; fishArray, chefPrice
//returns fishArray

const chefPrice = (fishArray, chefsprice) => {
    const finalFish = []
    for (const fish of fishArray) {
        if (fish.price <= chefsprice) {
            finalFish.push(fish)
        }
    }
    return finalFish
}

const tenFish = (finalFish) => {
    for (const fish of finalFish) {
            fish.amount = 10
    }
    return finalFish
}

const mongerInventory = (chefsprice) => {
    const myMonger = fishMonger(allFishes)
    const myCheapFish = cheapFish(myMonger)
    const myChefPrice = chefPrice(myCheapFish, chefsprice)
    const myTenFish = tenFish(myChefPrice)

    return myTenFish

}

const theFinalFishes = mongerInventory(5)

module.exports = { mongerInventory }