define(function (require) {

    var Droppable = require('common/Droppable');
    var util = require('common/util');
    var Layout = require('./Base');

    function Container(main) {
        this.main = main;
    }

    Container.prototype.isAcceptable = function (dataTransfer) {
        var type = dataTransfer.getData('dragger/type');
        return type === 'grid';
    };

    util.inherits(Container, Droppable);

    return Container;

});