
let limitBtn = document.getElementById("limit-btn")
let customBtn = document.getElementById("custom-btn")
 
let inputEl = document.getElementById("input")
let inputLimitEl = document.getElementById("input-limit")
let lengthEl = document.getElementById("length-el")

let customOz = document.getElementById("custom-oz")
let customAbv = document.getElementById("custom-abv")

let countStoreEl = document.getElementById("count-score")
let countStoreRoundedEl = document.getElementById("count-score-rounded")


let drinkCountStoreEl = document.getElementById("drink-score-count")

let limitStoreEl = document.getElementById("limit-set")
let limitStorePtsEl = document.getElementById("limit-pts-set")

let resetButton = document.getElementById("reset-button")
let increaseOneButton = document.getElementById("increase-one-standard")

let count = 0
let roundedCount = 0

let drinkCount = 0

// let customOunces = customOz.value 
// let customPercent = customABV.value

// let customTotal = (customOunces * customPercent)


const pointLimit = 0

const liteBeer = 500
const avgDrink = 600
const avgIPA = 740

const tallLiteBeer = 670
const tallAvgBeer = 800
const tallIPA = 990

const largeLiteBeer = 924
const largeAvgBeer = 1100
const largeIPA = 1360


// convertBtn.addEventListener("click", function() {
//     let baseValue = inputEl.value
//     lengthEl.textContent = `${baseValue} drink(s) = ${baseValue * avgDrink} Alcohol Points` 
// })

limitBtn.addEventListener("click", function() {
  let baseLimitValue = inputLimitEl.value
  limitStorePtsEl.textContent = divideScoreBy100(`${baseLimitValue * avgDrink}`)
  limitStoreEl.textContent = `${baseLimitValue}` 
})

// customBtn.addEventListener("click", function(){
//   customDrink()
// })


function convertInput(num) {
  return num * 10; 
  
}

function divideScoreBy100(num) {
  return num / 100; 
  countStoreRoundedEl.textContent = roundedCount
}

//add icons for drinks
//custom input field, percent and oz

//to do: refactor all these functions 

function increaseOneLight() {
  count += liteBeer
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function increaseOneStandard() {
    count += avgDrink
    drinkCount += 1
    roundedCount = divideScoreBy100(count)
    countStoreRoundedEl.textContent = roundedCount
    drinkCountStoreEl.textContent = drinkCount   
}

function increaseOneHeavy() {
  count += avgIPA
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function increaseOneTall() {
  count += tallLiteBeer
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function increaseOneTallAvg() {
  count += tallAvgBeer
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount 
}

function increaseOneTallHeavy() {
  count += tallIPA
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function increaseOneLargeLight() {
  count += largeLiteBeer
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function increaseOneLargeStandard() {
  count += largeAvgBeer
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount 
}

function increaseOneLargeHeavy() {
  count += largeIPA
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount
}

function resetCount(){
  count = 0
  roundedCount = 0
  drinkCount = 0
  countStoreRoundedEl.textContent = 0
  drinkCountStoreEl.textContent = drinkCount
}  

function resetAll(){
  count = 0
  roundedCount = 0
  drinkCount = 0
  pointLimit = 0
  countStoreRoundedEl.textContent = 0
  drinkCountStoreEl.textContent = drinkCount
  limitStoreEl.textContent = pointLimit
}  

function customDrink(){
  count += customTotal
  drinkCount += 1
  roundedCount = divideScoreBy100(count)
  countStoreRoundedEl.textContent = roundedCount
  drinkCountStoreEl.textContent = drinkCount

}

