<script lang="ts">
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import TileLayer from 'ol/layer/Tile.js';
    import OSM from 'ol/source/OSM.js';
    import 'ol/ol.css';
    import { onMount } from 'svelte';
    import { addPrintControl, initMapOnDoc, makePrintClick } from './utils';

    onMount(() => {
        const map = new Map({
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ]
        });

        addPrintControl(map);
        initMapOnDoc(map);
        makePrintClick(map);
    }); 
</script>