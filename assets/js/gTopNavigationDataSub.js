/**
 * Submenu
 */
angular.module('gTopNavigation').service('gTopNavigationData', function(){
    var data = {};

    data.segments = [
        {"href": "../index.html#XDConf", "name": "About"},
        {"href": "../index.html#Speakers", "name": "Speakers"},
        {"href": "../index.html#Location", "name": "Location"},
        {"href": "../index.html#GetInTouch", "name": "Get in Touch"}
    ];

    data.segmentActive = 'XD Conf';

    return data;
});
