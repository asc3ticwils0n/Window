function activityIndicator(args) {
	var actInd = Ti.UI.createActivityIndicator({height:50,width:10});
	if (Ti.Platform.osname != 'android') actInd.style=Titanium.UI.iPhone.ActivityIndicatorStyle.DARK;
	
	actInd.message = args.message || null;
	if (Ti.Platform.name = 'iPhone OS') args.win.add(actInd);
	return actInd;
}
