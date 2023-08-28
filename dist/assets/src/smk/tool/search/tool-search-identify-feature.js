include.module( 'tool-search.tool-search-identify-feature-js', [
    'tool.tool-feature-list-js',
    'component-tool-panel-feature',
    'tool.tool-panel-feature-js'
 ], function ( inc ) {
    "use strict";

    return SMK.TYPE.Tool.define( 'SearchIdentifyFeatureTool',
        function () {
            SMK.TYPE.ToolPanel.call( this, 'tool-panel-feature' )
            SMK.TYPE.ToolFeatureList.call( this, function ( smk ) { return smk.$viewer.searchedIdentified } )
            SMK.TYPE.ToolPanelFeature.call( this, function ( smk ) { return smk.$viewer.searchedIdentified } )

            this.parentId = 'SearchIdentifyTool'
        },
        function ( smk ) {
            var self = this

            var featureIds

            self.changedActive( function () {
                if ( !self.active ) {
                    self.featureSet.highlight()
                    self.featureSet.pick()
                    smk.$viewer.searched.pick( null )
                }
            } )

            smk.on( this.id, {
                'zoom': function () {
                    self.featureSet.zoomTo( featureIds[ self.resultPosition ] )
                },
                'select': function () {
                    var f = self.featureSet.get( featureIds[ self.resultPosition ] )
                    smk.$viewer.selected.add( f.layerId, [ f ] )
                },
                'move-previous': function () {
                    self.featureSet.pick( featureIds[ ( self.resultPosition + self.resultCount - 1 ) % self.resultCount ] )
                },
                'move-next': function () {
                    self.featureSet.pick( featureIds[ ( self.resultPosition + 1 ) % self.resultCount ] )
                },
            } )

            self.featureSet.addedFeatures( function ( ev ) {
                self.resultCount = self.featureSet.getStats().featureCount

                featureIds =  Object.keys( self.featureSet.featureSet )
            } )

            self.featureSet.clearedFeatures( function ( ev ) {
                self.resultCount = 0
            } )

            self.featureSet.pickedFeature( function ( ev ) {
                if ( !ev.feature ) {
                    self.feature = null
                    self.layer = null
                    return
                }

                self.active = true
                var fids = Object.keys( self.featureSet.featureSet )

                var ly = smk.$viewer.layerId[ ev.feature.layerId ]
                self.layer = {
                    id:         ev.feature.layerId,
                    title:      ly.config.title,
                    attributes: ly.config.attributes && ly.config.attributes.map( function ( at ) {
                        return {
                            visible:at.visible,
                            title:  at.title,
                            name:   at.name,
                            format: at.format,
                            value:  at.value
                        }
                    } )
                }

                self.feature = {
                    id:         ev.feature.id,
                    title:      ev.feature.title,
                    properties: Object.assign( {}, ev.feature.properties )
                }

                self.setAttributeComponent( ly, ev.feature )

                self.resultPosition = fids.indexOf( ev.feature.id )

                self.featureSet.zoomTo( ev.feature.id )
            } )
        }
    )
} )
