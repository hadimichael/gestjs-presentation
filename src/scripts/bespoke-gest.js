(function (bespoke){
	gest.options.messages = false;
	
	bespoke.plugins.gestjs = function() {
		//gest.start();
		console.log("Asdf");
	}

	document.addEventListener('gest', function(gesture) {
		if (gesture.left) {
			bespoke.next();
		} else if (gesture.right) {
			bespoke.prev();
		}
	}, false);

}(bespoke));