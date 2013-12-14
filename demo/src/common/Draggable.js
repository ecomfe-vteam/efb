define(function (require) {

    var util = require('./util');
    var Emitter = require('emitter');
    var current;

    /**
     * 可拖拽类
     * 
     * 辅助类
     * 
     * @constructor
     * @param {DOM} main 可拖拽的主元素
     */
    function Draggable() {
    }

    Draggable.prototype.init = function () {

        var me = this;
        var main = this.main;

        main.addEventListener('dragstart', function (e) {
            current = me;
            me.emit('dragstart', e);
        });

        main.addEventListener('dragend', function (e) {
            me.emit('dragend', e);
            current = null;
        });

    };

    /**
     * 生成拖拽时的影子DOM
     * 
     * @return {DOMElement} Shadow 不包括内容填充
     */
    Draggable.prototype.createShadow = function () {
        var shadow = document.createElement('div');
        shadow.className = 'draggable-shadow';
        document.appendChild(shadow);
        return shadow;
    };

    document.addEventListener('dragover', function (e) {

        if (!current || !current.shadow) {
            return;
        }

        var shadow = current.shadow;

        shadow.css({
            display: 'block',
            left: e.pageX + 5 + 'px',
            top: e.pageY + 5 + 'px'
        });

    });

    require(util.inherits(Draggable, Emitter));

    return Draggable;

});