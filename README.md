Ext.ux.GMapManager
==================

Manager of Google Maps
 
This singleton provide some useful functions to manage multiple Google Maps with multiple markers each.

**Warning: this is not a wrapper for Google Maps object.**

*For more information:* [**Google Maps API v3**](https://developers.google.com/maps/documentation/javascript/)

## Usage
Load `Ext.ux.GMapManager` via `Ext.require`:

```javascript
Ext.Loader.setConfig ({
	enabled: true
});

Ext.require (['Ext.ux.GMapManager']);
```

Now, you are ready to use them in your code as follows:

```javascript
// Creates a new google map
Ext.ux.GMapManager.createMap ('idDivMap', {
	center: new google.maps.LatLng (42.605656, 12.010787) ,
	mapTypeId: google.maps.MapTypeId.ROADMAP ,
	zoom: 5
});

// Creates a new marker
Ext.ux.GMapManager.createMarker ('idDivMap', {
	position: new google.maps.LatLng (44.694887, 11.742616) ,
	title: 'Reggio Emilia'
}, 'reggioEmiliaMarker');

// Attaches an event handler (on drag)
Ext.ux.GMapManager.attachMarkerEvent ('reggioEmiliaMarker', 'drag', function (event) {
	alert ('Coords of the dragged marker are: ' + event.latLng.lat () + ',' + event.latLng.lng ());
	// will alert something like this: 'Coords of the dragged marker are: 44.29182,13.49302'
});

// Removes the marker
Ext.ux.GMapManager.removeMapMarker ('reggioEmiliaMarker');
```

## Run the demo
First of all, open `index.html` and change the following things:

    - **change the ExtJS script folder**
    - **insert your Google Maps API Key** (for more info: [**Obtain an API Key**](https://developers.google.com/maps/documentation/javascript/tutorial#api_key))

Then, open your browser at **http://localhost/Ext.ux.GMapManager/** and play the demo =)

## Documentation
You can build the documentation (like ExtJS Docs) with [**jsduck**](https://github.com/senchalabs/jsduck):

```bash
$ jsduck ux --output /var/www/docs
```

It will make the documentation into docs folder and it will be visible at: **http://localhost/docs**

## License
(GNU GPLv3)

Copyright (c) 2012 Vincenzo Ferrari <wilk3ert@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
