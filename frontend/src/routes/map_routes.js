// map_routes.js
export async function loadMaps() {
    const maps = await import('@googlemaps/api/js-api-loader');
    return maps;
}
