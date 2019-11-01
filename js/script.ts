let output = document.querySelector(".out");
let show = [];
let locPlace = [];
let counter = 0;
console.log(show);
// THIS IS THE PARENT CLASS
class Place {
	country= "";
	address="";
	img="";
	img2="";
	img3="";
	webaddress= "";
	name= "";
	constructor( country, address, img,img2,img3, webaddress, name){
		this.country = country;
		this.address = address;
		this.img = img;
		this.img2 = img2;
		this.img3 = img3;
		this.webaddress = webaddress;
		this.name = name;
	}
	showLocation(i){
		output.innerHTML += 
		`<div class="card col-lg-4 col-md-6 col-sm-12">
		<h4 class="card-title">${this.name}</h4>

<div id="carouselExampleControls pic" class="carousel slide shadow" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 card-img-top" src="${this.img}" alt="First slide">
    </div>
    <div class="carousel-item card-img-top">
      <img class="d-block w-100 card-img-top" src="${this.img2}" alt="Second slide">
    </div>
    <div class="carousel-item card-img-top">
      <img class="d-block w-100 card-img-top" src="${this.img3}" alt="Third slide">
    </div>
  </div>

</div>

 		 <div class="card-body card-text" id= "${counter}">


		</div>
		<div class="card-body card-text information border shadow">
		<p id="noGap">Address:</p>
		<div class="row">
		
				<p class="col-lg-4">${this.country}</p>
				<p class="col-lg-8">${this.address}</p>
		
		</div>
			<a href="${this.webaddress}">${this.webaddress}</a>
		</div>

		`

}
}
// THIS ARE THE RESTAURANTS
class restaurant extends Place{
	type="";
	openhours="";
	telephone="";
	constructor(country,address,img,img2,img3,webaddress,name,type,openhours,telephone){
		super(country,address,img,img2,img3,webaddress,name);
		this.type = type;
		this.openhours = openhours;
		this.telephone = telephone;
	}
	showLocation(i){
	super.showLocation(counter);
		$("#"+counter).append(
			`<div class="row">
				<p class="col-lg-6">Restaurant-type: <br><u class="text-danger">${this.type}</u></p>
				<p class="col-lg-6">open hours:<br> <u class="text-danger">${this.openhours}</u></p>
				<p>Call us! <u class="text-danger">${this.telephone}</u></p>
			</div>`
			);
		counter++;
	}
}
let motto = new restaurant("Vienna,","Franz-Josefs-Kai 2","./img/motto.jpg","./img/motto2.jpg","./img/motto3.jpg","https://www.mottoamfluss.at/de","Motto am Fluss","Austria","12:00 - 02:00","01 2525510")
let mochi = new restaurant("Vienna,","Vorgartenmarkt Stand 12","./img/mochi.jpg","./img/mochi2.jpg","./img/mochi3.jpg","https://www.mochi.at/ramen-bar","Mochi Ramen Bar","Chinese","11:30 - 21:30","01 92513800")
let franks = new restaurant("Vienna,","Laurenzerberg 2","./img/franks.jpg","./img/franks2.jpg","./img/franks3.jpg","https://www.franks.at/de","FRANK'S American Restaurant","American","11:00 - 00:00","01 5337805")
show.push(motto)
show.push(mochi)
show.push(franks)



//THIS ARE THE BARS
class bar extends Place{
	costs = "";
	taste="";
	dresscode="";
	constructor(country,address,img,img2,img3,webaddress,name,costs,taste,dresscode){
		super(country,address,img,img2,img3,webaddress,name);
		this.costs = costs;
		this.taste = taste;
		this.dresscode = dresscode;
	}
	
	showLocation(i){
	super.showLocation(counter);
		$("#"+counter).append(
			`<div class="row">
				<p class="col-lg-6">Costs: <u class="text-danger">${this.costs}</u></p>
				<p class="col-lg-5 offset-lg-1">Taste: <u class="text-danger">${this.taste}</u></p>
				<p >The dresscode motto of this location is:<br> <u class="text-danger">${this.dresscode}</u></p>
			</div>`
			);
		counter++;
	}
}

let fredi = new bar("Vienna,","Eßlinger Hauptstraße 120","./img/fredis.jpg","./img/fredis2.jpg","./img/fredis3.jpg","http://www.fredis-bar.at","Fredis Bar","$$","excellent","come as you are")
let eberts = new bar("Vienna,","Gumpendorfer Str. 51a","./img/eberts.jpg","./img/eberts2.jpg","./img/eberts3.jpg","http://www.eberts.at","Eberts Cocktailbar","$$","good","be good dressed")
let puff = new bar("Vienna,","Girardigasse 10","./img/Puffbar.jpg","./img/Puffbar2.jpg","./img/Puffbar3.jpg","https://puff-bar.at","Puff Bar","$$$","satisfying","be good dressed!")

show.push(fredi)
show.push(eberts)
show.push(puff)

//THIS ARE THE EVENT LOCATIONS

class events extends Place{
	nextEvent ="";
	music="";
	minimumAge="";
	constructor(country,address,img,img2,img3,webaddress,name,nextEvent,music,minimumAge){
		super(country,address,img,img2,img3,webaddress,name);
		this.nextEvent = nextEvent;
		this.music = music;
		this.minimumAge = minimumAge;
	}
	showLocation(i){
	super.showLocation(counter);
		$("#"+counter).append(
			`<div class="row">
				<p class="col-lg-6">Next Event: <br><u class="text-danger">${this.nextEvent}</u></p>
				<p class="col-lg-6">Musictype:<br> <u class="text-danger">${this.music}</u></p>
				<p >You have to be at least <u class="text-danger">${this.minimumAge} years old.</u></p>
			</div>`
			);
		counter++;
	}

}

let flex = new events("Vienna,","Augartenbrücke 1","./img/flex.jpg","./img/flex2.jpg","./img/flex3.jpg","http://flex.at","Flex","Bassline","DnB & Indi","18")
let forelle = new events("Vienna,","Spittelauer Lände 12","./img/forelle.jpg","./img/forelle2.jpg","./img/forelle3.jpg","https://www.grelleforelle.com","Grelle Forelle","Oliver Huntemann","Techno & HipHop","21")
let camera = new events("Vienna,","Neubaugasse 2","./img/camera.jpg","./img/camera2.jpg","./img/camera3.jpg","http://camera-club.at","Camera Club","Monday Madness","Techno & DnB","21")

show.push(flex)
show.push(forelle)
show.push(camera)

for(let i=0;i<show.length;i++){
	show[i].showLocation();
}


