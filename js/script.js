
//Answeer question 1

var outOfStock = "true";
if ( outOfStock === "true" ) {
  console.log("Out of stock.");
} else {
  console.log("In stock.");
};

//Answeer question 2

for (var i=15; i<25; i++){
  if (i===17 || i===20){
    console.log(i);
  };
};

//Answeer question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gamesContainer = document.querySelector(".games");

for (var i=0; i < games.length; i++ ) {

	if ( games[i].rating !== null && games[i].rating < 3.5 ) 

	gamesContainer.innerHTML += "<li>" + games[i].title + "-"  + games[i].rating + "</li>"; 

}; 

//Answeer question 4

function whatIDontLike (ghost){
 var typeofDontLike = typeof ghost; 
 if (typeofDontLike === "string") {
   console.log("Please send in a string." );
 } else {
   console.log("I don't like" + whatIDontLike);
 }
};
whatIDontLike ("ghost");

//Answeer question 5

function guitarsItem (twoguitars, fourguitars){
	return fourguitars - twoguitars;
}
// call the function and assign the return value to innerHTML (#substraction)
var result = guitarsItem (2, 4);
console.log(result +" guitars");

var assignReturn = document.querySelector ("#subtraction");
assignReturn.innerHTML += guitarsItem;

//Answeer question 6

var heading = document.querySelector("h1");
var buttonPage = document.querySelector(".page");
var body = document.querySelector("body");
var changeUl = document.querySelector("ul");


function changeThePage (){

heading.innerHTML =  "Updated title";
heading.style.color = "green";
heading.style.fontFamily = "impact";
body.style.background = "yellow";
heading.innerHTML = "<a href='#'> Programming Foundations Course Assignment </a>";
changeUl.style.listStyle ="none"
changeUl.style.padding ="0px"

}
buttonPage.onclick = changeThePage;

//Answeer question 7

var buttonPrice = document.querySelector(".price");
var productToys = document.querySelector("#total");
var productToysFunction = function (){
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
]; 
	
for (var i = 0; i < toys.length; i++) {
	var sumTotal = toys[i].price;
	
var priceSum = parseFloat(toys[i].price)

if  (toys[i].price !== NaN) {

	sumTotal += priceSum
}
}
productToys.innerHTML = sumTotal;
};
buttonPrice.addEventListener( "click", productToysFunction);

/*
// Notes

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];


function loopTroughTheArray ( Lego, Master, Barbie, Potato ){
	return Lego + Master + Barbie + Potato;
}

var total = loopTroughTheArray (15.6, parseFloat("28.3"), null, 89.99 )
console.log(total);

/*
var buttonPrice = document.querySelector(".price");
var productToys = document.querySelector("#total");

for (var i=0; i < toys.length; i++);
function loopTheArray (){
productToys.innerHTML += "for (var i=0; i = toys.length; i++)"
productToys.innerHTML += "toys[i].price + toys[i].price + null + toys[i].price + parseFloat('28.3')";
productToys.innerHTML += (toys);
}
buttonPrice.onclick = loopTheArray;

 */


