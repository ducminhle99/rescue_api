const { getDistance }  = require('geolib');

exports.measureDistance = (lat, long, la2,long2) => {
    const distance =  getDistance(
        { latitude:  parseFloat(lat), longitude:  parseFloat(long) },
        { latitude:  parseFloat(la2), longitude:  parseFloat(long2) }
    )
    return distance/1000;
}

