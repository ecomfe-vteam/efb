define(function (require) {

    var Draggable = require('common/Draggable');
    var Droppable = require('common/Droppable');

    var Container = require('./layout/');

    var tool = require('./tool');

    return {

        init: function () {

            $('#main').each(function (i, item) {

                var container = 

            });
            
            $('.dragger').each(function (i, item) {

                var dragger = new Draggable(item);

                dragger.on('dragstart', function (e) {
                    console.log(e);
                });

                dragger.on('dragend', function (e) {
                    console.log(e);
                });

            });

            $('.dropper').each(function (i, item) {
                new Droppable(item);
            });

            tool.init();

        }

    };

});