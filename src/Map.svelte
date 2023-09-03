<script lang="ts">
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import TileLayer from 'ol/layer/Tile.js';
    import OSM from 'ol/source/OSM.js';
    import 'ol/ol.css';
    import { onMount } from 'svelte';
    import Print from "ol-ext/control/Print.js";
    import { srcImage } from './store/data';

    let map: Map;

    function addPrintControl(){
        let printControl = new Print({ title: "Печать", imageType: "image/png" });
        map.addControl(printControl);

        printControl.on(['print', 'error'], function(e) {
            if (e.image) {
                $srcImage = e.image;
            } else {
                console.warn('No canvas to export');
            }
        });
    }

    onMount(() => {    
        map = new Map({
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map',
        });

        addPrintControl();
    }); 
</script>

<div id="map" class="map"/>

<style>  
    .map {
        width: 100%;
        height: 100%;
    }    

    :global(.ol-print){
        top: 0.5em;
        right: 0.5em;
    }
</style>