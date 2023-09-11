import Map from 'ol/Map.js';
import Print from "ol-ext/control/Print.js";
import { srcImage } from './store/data';

function deleteMapFromDoc(){
    const mainContent = document.getElementById('main-content');
    const div = document.getElementById('map');
    mainContent.removeChild(div);
}

export function addPrintControl(map: Map){
    if(map){
        let printControl = new Print({ title: "Печать", imageType: "image/png" });
        map.addControl(printControl);

        printControl.on(['print', 'error'], function(e) {
            if (e.image) {
                srcImage.update(updater => updater.concat(e.image));
                deleteMapFromDoc();
            } else {
                console.warn('No canvas to export');
            }
        });
    }
}

export function makePrintClick(map: Map){
    if(map){
        let divOlPrint = map.getControls().getArray().find(i => i.constructor.name === 'olcontrolPrint');
        if(divOlPrint){
            const button = divOlPrint.element.children[0];
            try{
                button.click();
            }
            catch(e){
                console.log(e);
            }
        }
    }
}

export function initMapOnDoc(map: Map){
    if(map){
        const mainContent = document.getElementById('main-content');
        const div = document.createElement('div');
        div.style.visibility = 'hidden';
        div.setAttribute("id", "map");
        map.setTarget(div);
        mainContent.appendChild(div);
    }
}

export function downloadBase64Image(base64String, fileName) {
    if(base64String !== ''){
        const a = document.createElement('a');
        a.href = base64String;
        a.download = fileName;

        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
        });

        a.dispatchEvent(clickEvent);
    }
}