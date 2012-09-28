Ext.Loader.setConfig ({
	enabled: true
});

Ext.require (['Ext.ux.GMapManager']);

Ext.onReady (function () {
	var gmm = Ext.ux.GMapManager;
	
	Ext.create ('Ext.container.Viewport', {
		renderTo: Ext.getBody () ,
		layout: 'border' ,
		
		items: [{
			region: 'north' ,
			xtype: 'toolbar' ,
			defaultType: 'button' ,
			
			items: [{
				text: 'Load Maps' ,
				icon: 'icons/map--plus.png' ,
				handler: function (btn) {
					gmm.createMap ('italyBox', {
						zoom: 5 ,
						center: new google.maps.LatLng (42.605656, 12.010787) ,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
					
					gmm.createMap ('franceBox', {
						zoom: 5 ,
						center: new google.maps.LatLng (46.413496, 1.010742) ,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
					
					gmm.createMap ('ukBox', {
						zoom: 5 ,
						center: new google.maps.LatLng (53.555518, -1.37432) ,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
					
					gmm.createMap ('spainBox', {
						zoom: 5 ,
						center: new google.maps.LatLng (40.480381, -3.735352) ,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
				}
			} , '-' , {
				text: 'Load Markers' ,
				icon: 'icons/marker--plus.png' ,
				handler: function (btn) {
					// Italy markers
					gmm.createMarker ('italyBox', {
						position: new google.maps.LatLng (41.901514, 12.460774) ,
						title: 'Roma'
					});
					
					gmm.createMarker ('italyBox', {
						position: new google.maps.LatLng (45.465454, 9.186516) ,
						title: 'Milano'
					});
					
					gmm.createMarker ('italyBox', {
						position: new google.maps.LatLng (44.494887, 11.342616) ,
						title: 'Bologna'
					});
					
					// France markers
					gmm.createMarker ('franceBox', {
						position: new google.maps.LatLng (48.856614, 2.352222) ,
						title: 'Paris'
					});
					
					gmm.createMarker ('franceBox', {
						position: new google.maps.LatLng (45.764043, 4.835659) ,
						title: 'Lyon'
					});
					
					// UK markers
					gmm.createMarker ('ukBox', {
						position: new google.maps.LatLng (51.507335, -0.127683) ,
						title: 'London'
					});
					
					gmm.createMarker ('ukBox', {
						position: new google.maps.LatLng (55.864237, -4.251806) ,
						title: 'Glasgow'
					});
					
					gmm.createMarker ('ukBox', {
						position: new google.maps.LatLng (53.408371, -2.991573) ,
						title: 'Liverpool'
					});
				
					// Spain markers
					gmm.createMarker ('spainBox', {
						position: new google.maps.LatLng (40.416691, -3.700345) ,
						title: 'Madrid'
					});
					
					gmm.createMarker ('spainBox', {
						position: new google.maps.LatLng (41.387917, 2.169919) ,
						title: 'Barcelona'
					});
				}
			} , '-' , {
				text: 'Remove All Markers' ,
				icon: 'icons/marker--minus.png' ,
				handler: function (btn) {
					gmm.removeAllMarkers ();
				}
			} , '-']
		} , {
			region: 'center' ,
			xtype: 'container' ,
			layout: {
				type: 'vbox' ,
				align: 'stretch'
			} ,
			defaults: {
				xtype: 'container' ,
				flex: 1
			} ,
			
			items: [{
				layout: {
					type: 'hbox' ,
					align: 'stretch'
				} ,
				padding: '5 5 5 5' ,
				defaults: {
					xtype: 'panel' ,
					flex: 1 ,
					layout: {
						type: 'vbox' ,
						align: 'stretch'
					}
				} ,
				
				items: [{
					// Italy map
					title: 'Italy' ,
					padding: '0 5 0 0' ,
					icon: 'icons/flag-italy.png' ,
					
					items: [{
						xtype: 'container' ,
						id: 'italyBox' ,
						flex: 1
					}] ,
					
					bbar: {
						xtype: 'toolbar' ,
						items: ['->', '-', {
							xtype: 'button' ,
							text: 'Remove Markers' ,
							icon: 'icons/marker--minus.png' ,
							handler: function (btn) {
								gmm.removeAllMapMarkers ('italyBox');
							}
						}]
					}
				} , {
					// France map
					title: 'France' ,
					icon: 'icons/flag-france.png' ,
					
					items: [{
						xtype: 'container' ,
						id: 'franceBox' ,
						flex: 1
					}] ,
					
					bbar: {
						xtype: 'toolbar' ,
						items: ['->', '-', {
							xtype: 'button' ,
							text: 'Remove Markers' ,
							icon: 'icons/marker--minus.png' ,
							handler: function (btn) {
								gmm.removeAllMapMarkers ('franceBox');
							}
						}]
					}
				}]
			} , {
				layout: {
					type: 'hbox' ,
					align: 'stretch'
				} ,
				padding: '0 5 5 5' ,
				defaults: {
					xtype: 'panel' ,
					flex: 1 ,
					layout: {
						type: 'vbox' ,
						align: 'stretch'
					}
				} ,
				
				items: [{
					// UK map
					title: 'United Kingdom' ,
					padding: '0 5 0 0' ,
					icon: 'icons/flag-uk.png' ,
					
					items: [{
						xtype: 'container' ,
						id: 'ukBox' ,
						flex: 1
					}] ,
					
					bbar: {
						xtype: 'toolbar' ,
						items: ['->', '-', {
							xtype: 'button' ,
							text: 'Remove Markers' ,
							icon: 'icons/marker--minus.png' ,
							handler: function (btn) {
								gmm.removeAllMapMarkers ('ukBox');
							}
						}]
					}
				} , {
					// Spain map
					title: 'Spain' ,
					icon: 'icons/flag-spain.png' ,
					
					items: [{
						xtype: 'container' ,
						id: 'spainBox' ,
						flex: 1
					}] ,
					
					bbar: {
						xtype: 'toolbar' ,
						items: ['->', '-', {
							xtype: 'button' ,
							text: 'Remove Markers' ,
							icon: 'icons/marker--minus.png' ,
							handler: function (btn) {
								gmm.removeAllMapMarkers ('spainBox');
							}
						}]
					}
				}]
			}]
		}]
	});
});
