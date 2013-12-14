define(function (require) {

    var Emitter = require('emitter');
    var util = require('common/util');

    function Droppable() {

    }

    Droppable.prototype.init = function () {

        var me = this;
        var main = this.main;

        main.addEventListener('dragover', function (e) {
            e.preventDefault();
            me.emit('dragover', e);
        });

        main.addEventListener('dragleave', function (e) {
            e.preventDefault();
            me.emit('dragleave', e);
        });

        main.addEventListener('drop', function (e) {
            e.preventDefault();
            me.emit('drop', e);
        });

    };

    /**
     * 判断被拖拽的DOM是否可以被Droppable所接收
     * 
     * @param {DataTransfer} dataTransfer 拖拽数据对象
     * @return {boolean}
     */
    Droppable.prototype.isAcceptable = function (dataTransfer) {
        return false;
    };

    util.inherits(Droppable, Emitter);

    return Droppable;

});