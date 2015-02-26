/**
 * @author Ascetic
 */
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#226666');

// tab groups seem to be almost necessary to maintain windows at this point
// Through use of multiple files, nesting windows shouldn't be to difficult to figure out
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    // title:'Tab 1',
    backgroundColor:'#226666'
});
//Tabs bug me, only because of the icons. Future learning objective is how to add images to an app
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Awesome!',
    window:win1
});
//Labels for the headline. I can't fine just a text option, I believe this is the best
//method for adding text to the app at this time
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
//Button. I had to play with the percentages to get it to center somewhat
var button1 = Titanium.UI.createButton({
	title: 'Change it!',
	bottom: 0,
	left: '47%'
});
//creates a new window with a button click event. Doesn't work in a browser, but should also rotate the orientation
button1.addEventListener('click',function(e){
	var newWin = Titanium.UI.createWindow({
		// title: 'My Favorite',
		url: 'newwin.js',
		backgroundColor: '#AA8439'
	});
	//Literally the reason for the tabs, the new window I made opens up in them. Haven't found code that doesn't require it yet
	Titanium.UI.currentTab.open(newWin, {animation:true});
	//The magic 5th requirement is just this line, pg 203 is the best way to implement it though. I was playing around with this
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];	
} );
//
// create controls tab and root window
//titles looked out of place, so I removed them
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
//removed, was just play code but I kept it in for reference
// var button2 =Titanium.UI.createButton({
	// title:'Button in View',
	// top:20,
	// left:20
// });
//adding the label and the button to view. Found out the hard way
//that if you add the label to the window, the view will obstruct it
view1.add(label1);
view1.add(button1);
//Don't forget to add your view to the window
win1.add(view1);

// view2.add(button2); //No buttons on the second page
win2.add(view2);
//Figured out you could add items to a view after it's implemented. Sloppy code but worth noting
view2.add(label2);

//
//  add tabs
// Left this in, again tab groups are easiest to work with right now
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
//win1.open();
//win2.open();
