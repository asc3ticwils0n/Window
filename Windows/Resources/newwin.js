//Fun little way to make a nested window, part of the eventlistner in app.js
var win = Titanium.UI.currentWindow;

var Welcome = Titanium.UI.createLabel({
	color: '#999',
	text: 'You did it!',
	font:{fontSize:30,fontFamily:'Arial'},
	textAlign: 'center',
	width: 'auto'
});
//Honestly, since it doesn't work in a browser I don't know if this is needed here or
//in the actual event. Doesn't seem to hurt things to have it in both
win.orientationModes =[Ti.UI.LANDSCAPE_LEFT];
