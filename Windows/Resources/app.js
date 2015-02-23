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
    title:'Tab 1',
    backgroundColor:'#226666'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view1 = Titanium.UI.createView({
	top: 10,
	bottom: 10,
	left: 10,
	right: 10,
	backgroundColor: '#003333',
});

var button1 = Titanium.UI.createButton({
	title: 'My Favorite',
	bottom: 0,
	left: 50
});

button1.addEventListener('click',function(e){
	var newWin = Titanium.UI.createWindow({
		title: 'My Favorite',
		url: 'newwin.js'
	});
	Titanium.UI.currentTab.open(newWin, {animation:true});
} );
view1.add(button1);
win1.add(label1);
win1.add(view1);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view2 = Ti.UI.createView({
	top:20,
	bottom:'50%',
	left:20,
	right:'50%',
	backgroundColor:'red'
});

var button2 =Titanium.UI.createButton({
	title:'Button in View',
	top:20,
	left:20
});

view2.add(button2);
win2.add(view2);
win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
//win1.open();
//win2.open();
