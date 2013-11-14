// JavaScript Document
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
	$('#disp table td').eq(1).text(device.name);
	$('#disp table td').eq(3).text(device.platform);
	$('#disp table td').eq(5).text(device.cordova);
	$('#disp table td').eq(7).text(device.version);
	$('#disp table td').eq(9).text(device.uuid);
	
	document.addEventListener("pause",function(){
		escribehistoria('La APP se pauso');
	},false);
<<<<<<< HEAD
	document.addEventListener("pause",function(){
		escribehistoria('La APP se pauso');
	},false);
	document.addEventListener("online",function(){
		escribehistoria('La APP se conecto a la red');
	},false);
	document.addEventListener("offline",function(){
		escribehistoria('La APP se desconecto de la red');
	},false);
	
	
	
},false);//addEvent
});//ready

function escribehistoria(accion){
	$('#ehistoria').append('<li>' + accion + '</li>');
		}
=======
		document.addEventListener("resume",function(){
		escribehistoria('La APP se resumio');
	},false);
		document.addEventListener("online",function(){
		escribehistoria('La APP esta en linea');
	},false);
		document.addEventListener("offline",function(){
		escribehistoria('La APP esta fuera de linea');
	},false);
	
	
},false);//addEvent
});//ready

function escribehistoria(h){
	
	$('#ehistoria').append('<li>'+h+'</li>');
}
>>>>>>> 6882c3b20c2dd96363bdc5a68fdffe78726939d7
	
