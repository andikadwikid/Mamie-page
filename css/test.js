var deleteLog = false;
var placeHolder = $('#callbacks-placeholder');

new fullpage('#fullpage', {
    v2compatible: false,
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    responsiveWidth: 600,
    onLeave: function (origin, destination, direction) {
        if (deleteLog) {
            placeHolder.html('');
        }
        placeHolder.append('<p>onLeave - origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '</p>')
    },
    onSlideLeave: function (section, origin, destination, direction) {
        if (deleteLog) {
            placeHolder.html('');
        }
        placeHolder.append('<p>onSlideLeave - section:' + section.index + ' origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '</p>');
    },
    afterRender: function () {
        placeHolder.append('<p>afterRender</p>');;
    },
    afterResize: function () {
        placeHolder.append('<p>afterResize</p>');
    },
    afterSlideLoad: function (section, origin, destination, direction) {
        placeHolder.append('<p>afterSlideLoad - section:' + section.index + ' origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '</p>');
        deleteLog = true;
    },
    afterLoad: function (origin, destination, direction) {
        if (origin) {
            placeHolder.append('<p>afterLoad - origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '</p>');
        }
        deleteLog = true;
    },
    afterResponsive: function (isResponsive) {
        placeHolder.append('<p>afterResponsive - isResponsive:' + isResponsive + '</p>');
    }
});