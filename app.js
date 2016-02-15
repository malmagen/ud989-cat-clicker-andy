/*
Problem: Skapa en click funktion för varje bild. Som skapas.
Lösning: Sätta upp en eventlistener för clicken. behöver ange ett annat id. Finns flera med samma nu.



*/

var model = {
	Cats: [
	{
	name: "Ruth",
	img: "cat_picture1.jpg",
	click: 0

	},
	{
		name:"Nora",
		img: "cat_picture2.jpeg",
		click: 0

	},
	{
		name:"Test",
		img: "cat_picture3.jpeg",
		click: 0

	}

],
	getAllCats: function(){
		var cats = model.Cats;
		return cats;
	},


};




var octopus = {
	getCats: function(){
		return model.getAllCats();

	},


	getClick: function(i){
		return model.Cats[i].click;
	},

	addClick: function(num,i){
		model.Cats[i].click = num;
	}




}


var view_button = {
	render: function() {
		var cats = octopus.getCats(); //get cat names

		for(var i = 0; i<cats.length;i++){
			/*
			create a button and display the name of the cat for each cat stored in model
			 */
			var newbutton = document.createElement("BUTTON");

			cat_name = cats[i].name;
			newbutton.id = cat_name;
			newbutton.innerHTML= cat_name;

			document.getElementById("buttons").appendChild(newbutton);

			var cat =document.getElementById(cat_name);

			/*
			method
			*/
			cat.addEventListener("click",(function(cat,i){

				return function(){
					view_cat.render(cat,i);
				}

			})(cats[i],i));

		}

	}
}

var view_cat = {
	render: function(cat,i){
		document.getElementById("cat_img").innerHTML = "";

		var name = cat.name;
		var click = octopus.getClick(i);
		var h3 =document.createElement("h3");
		h3.textContent = cat.name;
		var img_cat = document.createElement("img");
		img_cat.src = cat.img;
		img_cat.id = name + "pic";

		document.getElementById("clicks").textContent = click;
		document.getElementById("cat_img").appendChild(h3);
		document.getElementById("cat_img").appendChild(img_cat);

		var catpic = document.getElementById(name+"pic");

		catpic.addEventListener("click",(function(CatClick){

			return function(){
				CatClick +=1;
				document.getElementById("clicks").innerHTML = CatClick;
				octopus.addClick(CatClick,i);
			}
		})(click));




		/**
		cat_name = document.createTextNode(cat.name);
		cat_img = document.getElementById();

		var cat_name = cat.name;
		var cat_img = cat.img;
		var cat_click = cat.click;

		**/

	}
}




/**
var click = octopus.getClick[0]
	cat.addEventListener("click",(function(numCopy){
		return function(){
			numCopy+=1;
			console.log(numCopy);
		}
	})(num))
*/
view_button.render();