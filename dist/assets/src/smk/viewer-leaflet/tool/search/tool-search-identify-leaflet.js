include.module( 'tool-search-identify-leaflet', [
    'leaflet',
    'tool-identify',
    'tool-leaflet',
    'tool-leaflet.tool-feature-list-leaflet-js'
], function ( inc ) {
    "use strict";

    SMK.TYPE.SearchIdentifyTool.addInitializer( function ( smk ) {
        inc[ 'tool-leaflet.tool-feature-list-leaflet-js' ].call( this, smk )
    } )
} )
