Alloy.Globals.tabgroup = $.tabgroup;
Alloy.Globals.drawer = $.drawer;
Alloy.Globals.tabs = {
	news : $.news_tab,
	product : $.product_tab,
	store : $.store_tab,
	user : $.user_tab
};

function open() {
	var view = Alloy.createController('win2').getView();
	Alloy.Globals.tabs.news.open(view);
}

$.drawer.open();
$.drawer.leftWindow.setActiveTab("tab_news");