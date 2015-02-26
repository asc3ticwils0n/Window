/**
 * @author Ascetic
 */
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#226666');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    // title:'Tab 1',
    backgroundColor:'#226666'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Awesome!',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Let me change your view!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
//creates a view on the first window
var view1 = Titanium.UI.createView({
	layout: 'vertical',
	top: 10,
	bottom: 10,
	left: 10,
	right: 10,
	backgroundColor: '#003333',
});

var button1 = Titanium.UI.createButton({
	title: 'Change it!',
	bottom: 0,
	left: '47%'
});
//creates a new window with a button click
button1.addEventListener('click',function(e){
	var newWin = Titanium.UI.createWindow({
		// title: 'My Favorite',
		url: 'newwin.js',
		backgroundColor: '#AA8439'
	});
	Titanium.UI.currentTab.open(newWin, {animation:true});
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
} );
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    // title:'Tab 2',
    backgroundColor:'#55AA55'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'No way',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'You do not want change?',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view2 = Ti.UI.createView({
	top:20,
	bottom:20,
	left:20,
	right:20,
	backgroundColor:'#116611'
});

// var button2 =Titanium.UI.createButton({
	// title:'Button in View',
	// top:20,
	// left:20
// });

view1.add(label1);
view1.add(button1);
win1.add(view1);

// view2.add(button2);
win2.add(view2);
view2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
//win1.open();
//win2.open();
