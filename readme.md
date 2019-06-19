# Panomaker tour embed script

## Usage

Write your HTML like so:

	<div id="meine_tour"></div>

Then activate with jQuery like so:

	$( "#meine_tour" ).panomaker({
		tour_url: "https://cms.panomaker.de/de/vt/gpnNCNqlHW/d/45913/siv/1/rm/1/hiho/11"
		button_url: "https://cms.panomaker.de/de/vt/gpnNCNqlHW/d/45919/siv/1"
	});

### Configuration

You can change the follow options:

* `tour_url` URL of the tour to be displayed. (required)
* `button_url` URL of the tour to be opened. If `false`, no text link will be displayed. If nothing is specified the tour url will be used. (default `tour_url`)

These advanced config options are also available:

* `tour_width` Width of the iFrame in Pixel or Percent.  (default `false`)
* `tour_height` Height of the iFrame in Pixel or Percent. (default `false`)
* `button_image` Image URL for play button (default `false`)
* `button_text` Text for play button (default `'Rundgang öffnen'`)
* `button_newwindow_text` Text for the plays in new windows text link. (default `'Rundgang in neuem Fenster öffnen'`)
