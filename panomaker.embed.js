(function ( $ ) {
    $.fn.panomaker = function( options ) {
        // Extend default settings
        var settings = $.extend({
			tour_width: false,
			tour_height: false,
			button_url: options.tour_url,
			button_image: false,
			button_text: "Rundgang öffnen",
			button_newwindow_text: "Rundgang in neuem Fenster öffnen"
        }, options );

		// Wrapper
		var tourContainer = document.createElement("div");
		tourContainer.setAttribute('class', "panomaker-wrapper");
		tourContainer.addEventListener("click", clickWrapper);
		tourContainer.addEventListener("mouseleave", leaveWrapper);
		if(settings.tour_width !== false) tourContainer.style.width = settings.tour_width;
		if(settings.tour_height !== false) tourContainer.style.height = settings.tour_height;

		// iFrame
		var tourIframe = document.createElement('iframe');
		tourIframe.setAttribute('src', settings.tour_url)
		tourIframe.setAttribute('data-src', settings.tour_url)
		tourIframe.setAttribute('class', "panomaker-iframe")
		tourIframe.setAttribute('frameborder', 0)
		tourIframe.setAttribute('style', "pointer-events: none;")
		if(settings.tour_width !== false) tourIframe.setAttribute('width', settings.tour_width)
		if(settings.tour_height !== false) tourIframe.setAttribute('height', settings.tour_height)
		tourContainer.appendChild(tourIframe);

		// Button
		var tourButton = document.createElement('div');
		tourButton.setAttribute('class', "panomaker-button")
		if(settings.button_image !== false) {
			tourButton.innerHTML = '<img src="' + settings.button_image + '" alt="' + settings.button_image + '">';
		}
		tourButton.innerHTML = '<div>'+ settings.button_text +'</div>';
		tourContainer.appendChild(tourButton);

		// Textlink
		if(settings.button_newwindow_text !== false) {
			var tourText = document.createElement('div');
			tourText.setAttribute('class', "panomaker-link")
			tourText.innerHTML = '<a href="' + settings.button_url + '" target="_blank">' + settings.button_newwindow_text + '</a>';
			tourContainer.appendChild(tourText);
		}

        return this.html(tourContainer);

		function clickWrapper() {
			$(this).find('iframe').css("pointer-events", "auto");
			$(this).find('.panomaker-button').hide();
		}

		function leaveWrapper() {
			$(this).find('iframe').css("pointer-events", "none");
			$(this).find('.panomaker-button').show();
		}
    };

}( jQuery ));
