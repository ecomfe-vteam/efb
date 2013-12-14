define(function (require) {

    var Draggable = require('./Draggable');
    var Emitter = require('emitter');
    var util = require('util');

    function DraggableControl() {

    }

    DraggableControl.prototype.init = function () {

    };

    /**
     * 拖拽投入某个Layout
     * 
     * @param {Layout} layout 布局对象
     * @param {Object} options 参数
     * @return {}
     */
    DraggableControl.prototype.into = function (layout, options) {

    }

    util.inherits(DraggableControl, Emitter);

    return DraggableControl;

});