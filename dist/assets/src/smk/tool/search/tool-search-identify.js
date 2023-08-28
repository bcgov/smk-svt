include.module( 'tool-search.tool-search-identify-js', [
    'tool.tool-panel-js',
    'tool.tool-feature-list-js',
    'component-feature-list',
    'tool-search.panel-search-identify-html',
    'tool-search.location-title-html',
    'tool-search.location-address-html'
], function ( inc ) {
    "use strict";

    Vue.component( 'search-identify-panel', {
        extends: SMK.COMPONENT.ToolPanelBase,
        template: inc[ 'tool-search.panel-search-identify-html' ],
        props: [ 'feature', 'tool', 'command', 'locationComponent', 'layers', 'searchHighlightId' ]
    } )
    // _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
    //
    return SMK.TYPE.Tool.define( 'SearchIdentifyTool',
        function () {
            SMK.TYPE.ToolPanel.call( this, 'search-identify-panel' )
            SMK.TYPE.ToolFeatureList.call( this, function ( smk ) { return smk.$viewer.searchedIdentified } )
            SMK.TYPE.ToolPanelFeature.call( this, function ( smk ) { return smk.$viewer.searchedIdentified } )

            this.defineProp( 'locationComponent' )
            this.defineProp( 'searchHighlightId' )

            this.locationComponent = {}
            this.parentId = 'SearchListTool'
        },
        function ( smk ) {
            var self = this

            var featureIds

            this.tool = smk.getToolTypesAvailable()

            smk.getToolById( 'SearchListTool' ).startedSearchIdentify( function () {
                self.active = true;
            } )

            self.featureSet.addedFeatures( function ( ev ) {
                self.resultCount = self.featureSet.getStats().featureCount

                featureIds =  Object.keys( self.featureSet.featureSet )

                if ( featureIds && featureIds.length )
                    self.featureSet.pick( featureIds[0] )

            } )

            self.featureSet.clearedFeatures( function ( ev ) {
                self.resultCount = 0
            } )
        }
    )
} )
