SMK.INIT( {
    containerSel: '#smk-map-frame',
    config: [ './smk-config.json', '?' ]
} )
.then( function ( smk ) {
    // SMK initialized

    var dialog = document.getElementById( 'disclaimer' )
    include( [ { url: './assets/disclaimer.html' } ], 'disclaimer' ).then( function ( inc ) {
        dialog.innerHTML = inc[ 'disclaimer.disclaimer-html' ]
        dialogPolyfill.registerDialog(dialog)
        dialog.showModal()
    } )
} )
