/**
 * Javascript anchor navigation
 */
function init(delegate) {
    if (arguments.callee.done) return;
    arguments.callee.done = true;

    delegate();
}

// ff, opera
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}

// ie
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=javascript:void(0)>");
document.write("<\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
        init();
    }
};
/*@end @*/

// safari
if (/WebKit/i.test(navigator.userAgent)) {
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(_timer);
            delete _timer;
            init();
        }
    }, 10);
}

// others
window.onload = init;

//On load page, init the timer which check if the there are anchor changes each 300 ms
init(function(){
    setInterval("checkAnchor()", 100);
});

var currentAnchor = null;
//Function which check if there are anchor changes, if there are, sends the ajax petition
function checkAnchor(){
    var container = document.getElementById("content");

    //Check if it has changes
    if(currentAnchor != document.location.hash){
        currentAnchor = document.location.hash;
        //Creates the  string callback. This converts the url URL/#main&id=2 in URL/?section=main&id=2
	    var splits = currentAnchor.substring(1).split('&');
	    //Get the section
	    var section = splits[0];
	    delete splits[0];
	    var query = splits.join("&");

	    switch (section) {
		    case "register":
			    soy.renderElement(container, mouthpiece.site.register, {});
			    break;
		    case "news":
				soy.renderElement(container, mouthpiece.site.news, {});
			    break;
		    case "contacts":
				soy.renderElement(container, mouthpiece.site.contacts, {});
			    break;
		    case "about":
				soy.renderElement(container, mouthpiece.site.about_detailed, {});
			    break;
		    case "registrationSuccess":
		        soy.renderElement(container, mouthpiece.site.registrationSuccess, {});
		        break;
		    case "home":
		    default:
				soy.renderElement(container, mouthpiece.site.index, {});
	    }
    }
}