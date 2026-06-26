// main.js
import { loadFullCalendar } from './calendar';
import { loadMaps } from './map_routes';

async function init() {
    const fullCalendar = await loadFullCalendar();
    // Initialize FullCalendar using the loaded library

    const maps = await loadMaps();
    // Initialize Maps using the loaded library
}

init();
