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

	document.addEventListener("resume",function(){
		escribehistoria('La APP se reinicio');
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
