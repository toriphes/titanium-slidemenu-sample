var args = arguments[0] || {};

$.innermenu.addEventListener('click', function(e) {
	$.menu.setActiveTab(e.row.tab);
	Alloy.Globals.drawer.toggleLeftWindow();
});


$.menu.setActiveTab = function(item) {

	for(var i in $.innermenu.data[0].rows) {
		var row = $.innermenu.data[0].rows[i];
		if(row.tab == item) {
			$.addClass(row.children[0], 'active');
		} else {
			$.removeClass(row.children[0], 'active');
		}
	}
	
	switch(item) {
		case 'tab_news': 
			Alloy.Globals.tabgroup.setActiveTab(0);
			break;
		case 'tab_product': 
			Alloy.Globals.tabgroup.setActiveTab(1); 
			break;
		case 'tab_store': 
			Alloy.Globals.tabgroup.setActiveTab(2);
			break;
		case 'tab_user': 
			Alloy.Globals.tabgroup.setActiveTab(3);
			break;
	}		
	
};

