/*
1.Display button with the cat names
2. list the cats in model with name, picture and text)
3. Display the buttons in view and get the cat names from octopus which get it from model
4. When button is pressed in view get data from octopus which communicate with model.
5. When click interact with octopus and add number to model and display it in view

2. When a button is clicked display cat'sname, a picture of the cat, text showing number of clicks.
3.

Visuals

The application should display

a list of cats by name
an area to display the selected cat
In the cat display area, the following should be displayed

the cat's name
a picture of the cat
text showing the number of clicks
The specifics of the layout do not matter, so style it however you'd like.
Interaction

When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.


*/


var model = {
	Cats: [
	{
	name: "Ruth",
	img: "cat_picture1.jpg"

	},
	{
		name:"Nora",
		img: "cat_picture2.jpeg"
	},
	{
		name:"Test",
		img: "cat_picture2.jpeg"
	}

],
	getAllCats: function(){
		var names = [];

		for (cat in model.Cats){
			names.push(model.Cats[cat].name);

		}
		return names;
	}

};


var octopus = {
	getCats: function(){
		return model.getAllCats();

	}



}


var view_cats = {
	render: function() {
	var cats = octopus.getCats()
	for(var i = 0; i<cats.length;i++){
	var newdiv = document.createElement("BUTTON");
	newdiv.appendChild(document.createTextNode(cats[i]));
	document.body.appendChild(newdiv);

	}

}
}