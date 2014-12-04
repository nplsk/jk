function rgb2hex(rgb) {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function genRGB() {
	var randRGB = "rgb("+Math.floor(Math.random()*55+200)+","+Math.floor(Math.random()*55+200)+","+Math.floor(Math.random()*55+200)+")";
	return randRGB;
}

// This function retrieves a cookie
function getCookie (name) {
	var dc = document.cookie;
	var cname = name + "=";

	if (dc.length > 0) {              
	begin = dc.indexOf(cname);       
		if (begin != -1) {           
		begin += cname.length;       
		end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
			return unescape(dc.substring(begin, end));
		} 
	}
	return null;
}

function createCookie(name,value,days) {
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime()+(days*24*60*60*1000));
	  var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function delayer(){
    window.location = "http://www.jacobkassay.com/about-jacob-kassay"
}
	
// cache buster 
var t = (new Date).getTime();		
var the_images = [];
var ica = [];
var draw = [];
for (var x=0; x<58; x++) {
	if (x<10){
		the_images.push( 'images/0'+x+'.jpg');
	}
	else {
		the_images.push('images/'+x+'.jpg');
	}
}
for (var x=0; x<27; x++)
	{
		ica.push( 'images/ica0'+x+'.jpg');
	}	
for (var x=0; x<52; x++){
	if (x<10){
		draw.push('images/draw0'+x+'.jpg');
	}
	else {
		draw.push('images/draw'+x+'.jpg');
	}
}

jQuery.imgpreload(the_images,
{
	each: function()
	{
		var pattern = new RegExp( "i=(\\d)", "gi" );
		var m = pattern.exec($(this).attr('src'));
		var status = $(this).data('loaded')?'success':'error';
		//$('#status').append('<li>' + m[1] + ': ' + $(this).attr('src') + ' ' + status + '</li>');
	},
	all: function()
	{
		//$('#status').append('<li> all images loaded </li>');
	}
});
jQuery.imgpreload(ica,
{
	each: function()
	{
		var pattern = new RegExp( "i=(\\d)", "gi" );
		var m = pattern.exec($(this).attr('src'));
		var status = $(this).data('loaded')?'success':'error';
		//$('#status').append('<li>' + m[1] + ': ' + $(this).attr('src') + ' ' + status + '</li>');
	},
	all: function()
	{
		//$('#status').append('<li> all images loaded </li>');
	}
});

jQuery(function($) {			 	  
	var $content = $("#content").children();
	$("#nav li").last().css("margin","0");
	$("h1, .close").click(function(){
		$("#content").find("div").fadeOut();
		$("#images").fadeIn();
	});
	$("#nav li a").each(function(){
		$(this).click(function(){
			var a = $(this).attr("class");
			$("#content").find("div").each(function(){
				if ($(this).attr("id")!=a){
					$(this).fadeOut();
				}
				if ($(this).attr("id")==a){							
					if ($(this).is(":visible")){
						//$(this).fadeOut();

					}
					else {
						$(this).fadeIn();
						
					}							
				}					
			});
		});
	});
	$('#images img').imgpreload
	({
		all: function()  
		{
			//$('#domstatus').append('<li> all images loaded </li>');
			$('#images').fadeIn(2000);
		}
	});

	$("img").mousedown(function(){
		return false;
	});

	var newBG = rgb2hex(genRGB());
	setInterval(function() {
		newBG = rgb2hex(genRGB());
		$('html').animate({backgroundColor: newBG}, 15000);
		
	}, 15000);
	
	$("#images").each(function(){
		// cache buster
				
	});
});




