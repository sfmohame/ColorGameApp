console.log("CONNECTED!");


var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(0, 255, 0)"
]

var randomColors=[];
var pickedColor;

// var boxed=document.querySelectorAll('square');
var boxes=document.getElementsByClassName('square');

var colorDisplay= document.getElementById("colorDisplay");

//hard and easy buttons
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

var h1=document.getElementsByTagName("h1")[0];
//Try again or correct display
var tryAgain=document.getElementById("tryAgain");

//when page first runs tryagain is empty
tryAgain.style.color="white";


hardBtn.classList.add("selected");

//boolean to help switch between easy and hard mode
var hardBtnSelected=true;

easyBtn.addEventListener("click", function(){

	if(hardBtnSelected==true){
		hardBtnSelected=false;
		hardBtn.style.removeProperty("background-color");
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
	// hardBtn.classList.add("unselected");
	// easyBtn.classList.remove("unselected");
		h1.style.removeProperty("background-color");
		tryAgain.textContent="";
	
	newColors();
}


});

hardBtn.addEventListener("click", function(){

	if(hardBtnSelected==false){
		hardBtnSelected=true;
		easyBtn.style.removeProperty("background-color");
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		h1.style.removeProperty("background-color");
		tryAgain.textContent="";




		newColors();
	}
});


//picking a random index from the Color array
function pickedColors(){
	if(hardBtnSelected){
		var min=0; 
		var max=5; 
		var pickedIndex = Math.floor(Math.random() * (+max - +min)) + +min;
		var pickedClr=randomColors[pickedIndex];
		return pickedClr;
	}
	else{
		var min=0; 
		var max=2; 
		var pickedIndex = Math.floor(Math.random() * (+max - +min)) + +min;
		var pickedClr=randomColors[pickedIndex];
		return pickedClr;
	}

}



//selecting one Random RGB color
function randomFunc(){
	var min=0; 
	var max=255;  
	var firstRandom =Math.floor(Math.random() * (+max - +min)) + +min;
	var secondRandom =Math.floor(Math.random() * (+max - +min)) + +min;
	var thirdRandom =Math.floor(Math.random() * (+max - +min)) + +min;

	return "RGB("+firstRandom+", "+(secondRandom)+", "+thirdRandom+")";
}

//Filling in Random Colors and choosing a winner color from HARD option
function newColors(){
	randomColors=[];


	if(hardBtnSelected){
		for(var i=3; i<boxes.length; i++){
			boxes[i].style.display="block";
		}
		for(var i=0; i<6; i++){
			randomColors.push(randomFunc());
		}

		for(var i=0;i<boxes.length; i++){
			boxes[i].style.backgroundColor=randomColors[i];
		}

	}
	else{
		for(var i=0; i<3; i++){
			randomColors.push(randomFunc());
		}

		for(var i=0;i<3; i++){
			boxes[i].style.backgroundColor=randomColors[i];
		}
		for(var i=3; i<boxes.length; i++){
			boxes[i].style.display="none";
		}
		
	}

	pickedColor=pickedColors();

	colorDisplay.textContent=pickedColor;

}

//functionE

// new Colors button
var newColorsBtn=document.getElementById("newColorsBtn");

//Refreshes new colors when clicking on new color button
newColorsBtn.addEventListener("click",function(){

	newColors();
	h1.style.removeProperty("background-color");

	if(hardBtnSelected){
		hardBtn.style.backgroundColor="steelblue";
	}
	else{
		easyBtn.style.backgroundColor="steelblue";
		
		

	}

	tryAgain.textContent="";
});

//when page first runs
newColors();

//Checks if box color equals winner color
for(var i=0; i<boxes.length; i++){

	boxes[i].addEventListener("click", function(){
		if(this.style.backgroundColor.slice(3) == pickedColor.slice(3)){

			tryAgain.style.color="black";
			tryAgain.textContent="Correct!"
			for(var j=0; j<boxes.length;j++){
				boxes[j].style.backgroundColor =pickedColor;
			}
			h1.style.backgroundColor=pickedColor;
			if(hardBtnSelected){
				hardBtn.style.backgroundColor=pickedColor;
			}
			else{
				easyBtn.style.backgroundColor=pickedColor;
			}



		}
		else{

			tryAgain.textContent="Try Again!"
			this.style.backgroundColor ="#232323";

		}
	})
};




