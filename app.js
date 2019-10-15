
var setBanner= function(message)
{   
 d3.select("#banner").text(message);
}

var clearInfo= function()
{
	d3.selectAll("p")
	.remove()
}
// Create a promise 
var filmPromise= d3.json("https://ghibliapi.herokuapp.com/films");
{
	filmPromise.then(
		function(filmData)
	{ // works
		setBanner("10 Highest Rotten Tomatoes Scored Films")
		displayTitles(filmData)
		console.log("works",filmData)
	},
		//nah try again
	function(err)
		{
		setBanner("Films not here")
		 console.log("broke",err)
	    }				  
 )}

//array.slice(0,9)
// displays list of titles(not yet sorted or limited to 10) 
	var displayTitles=function(films){
		//slice and sort
		
		films.sort(function(a,b){
			if(parseInt(a.rt_score)==parseInt(b.rt_score)){return 0;}
			if(parseInt(a.rt_score)< parseInt(b.rt_score)){return 1;}
			if(parseInt(a.rt_score)> parseInt(b.rt_score)){return -1;}
				
		})
		console.log("sorted",films)
		var films= films.slice(0,10);
		console.log("sorted and sliced",films)
		var title= d3.select("#rankings");
		title.selectAll("li")
		.data(films)
		.enter()
		.append("li")
		.text(function(film){
			return film.title
		
		}) 
		.on("click",function(film){
			displayInfo(film)
		})
	}
//Displayinfo(provide  director, producer,rt score, description,)
		var displayInfo=function(film){
			//clearInfo
			clearInfo()

		var box= d3.select("#display");
			box.append("p").text("Rotton Tomatoes Score: "+ film.rt_score)
			box.append("p").text("Director: "+film.director)
			
			box.append("p").text("Producer: "+ film.producer)
			box.append("p").text("Description: "+ film.description)	

		} 
//extra 
		var extra= function(film){
			
		}