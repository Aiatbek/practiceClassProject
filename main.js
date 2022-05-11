// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//random - www.themealdb.com/api/json/v1/1/random.php

const input = document.querySelector(".input")
const btnSearch = document.querySelector(".btn-search")
const results = document.querySelector(".results")
const random = document.querySelector('.btnRandom')


btnSearch.addEventListener("click", function(){
    CallApi(input.value)
})

random.addEventListener('click', ()=>{
    CallApi2()
})

async function CallApi (name) {
const req = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
const res = await req.json()
results.innerHTML = res.meals[0].strMeal + '</br>' + res.meals[0].strInstructions
let img = document.createElement('img')
img.src = res.meals[0].strMealThumb
results.appendChild(img)
}

async function CallApi2 () {
const req = await fetch (`https://www.themealdb.com/api/json/v1/1/random.php`)
const res = await req.json()
results.innerHTML = res.meals[0].strMeal + '</br>' + res.meals[0].strInstructions
let img = document.createElement('img')
img.src = res.meals[0].strMealThumb
results.appendChild(img)
}
//Can we take the break?
