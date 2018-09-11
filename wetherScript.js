
    var site = "https://fcc-weather-api.glitch.me/api/current?";
    var shirota, dolgota;
    var temp;
$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var shirota = "lat=" + position.coords.latitude;
      var dolgota = "lon=" + position.coords.longitude;
      getWeather(shirota, dolgota);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
})


function getWeather(shirota, dolgota) {
  var urlString = site + shirota + "&" + dolgota;
  $.ajax({
    url: urlString, success: function (result) {
      $("#target1").text(result.name + ", "+result.sys.country);
      $("#target3").text(result.main.temp + " ");
      $("#target4").text(String.fromCharCode(176));
      $("#target2").text(perevod(result.weather[0].main));
      IconGen((result.weather[0].main));
    }
  });
}

   function perevod(string){
    string=string.toLowerCase();
	switch(string){
	  case "clouds":{
	   string="Облачно"; 
	   $('#image').css('background-image','url(https://images.bankoboev.ru/fon/bankoboev.ru-10882.jpg)');
      $('#image').css('background-size','cover');
	  }
	  break;
	  case "snow":{
  	   string="Снежно"; 
	   $('#image').css('background','yellow url(https://www.motto.net.ua/old_site//img/winter/1296914033_F1EDE5E3EEEFE0E420EDE520EDE020F8F3F2EAF3.jpg)');
      $('#image').css('background-size','cover');
	  }
	  break;
	  case "suny":{
	   string="Солнечно"; 
      $('#image').css('background','yellow url(http://edinstvo.by/wp-content/uploads/2016/02/8.20.jpeg)');
      $('#image').css('background-size','cover');
	  }
	  break;
	  case "rainy":{
	   string="Дождливо"; 
      $('#image').css('background','yellow url(http://media.1777.ru/images/images_processing/633/6331441005393851.jpeg)');
      $('#image').css('background-size','cover');
	  }
	  break;
	}
	return string;
   }

    function smena(){
      temp=0;
      if(document.getElementById('button').innerHTML=="C"){
       document.getElementById('button').innerHTML="F";
       temp=+document.getElementById('target3').innerHTML;
       temp*=1.8;
       temp+=32;
       document.getElementById('target3').innerHTML=temp+"";
      }
      else {
        document.getElementById('button').innerHTML="C"
        temp=+document.getElementById('target3').innerHTML;
        temp-=32;
        temp=Math.round(temp/1.8);
        document.getElementById('target3').innerHTML=temp+"";
      }
    }
    
  //# sourceURL=pen.js