(function (bespoke){
	
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'scripts/gest.min.js';

	script.onload = function() { 
		document.addEventListener('gest', function(gesture) {
			if (gesture.left) {
				bespoke.next();
			} else if (gesture.right) {
				bespoke.prev();
			}
		}, false);

		gest.options.messages = false;
		gest.options.locking = 100;
		gest.start();
	};

	bespoke.plugins.gest = function() {
		head.appendChild(script);
	}

}(bespoke));