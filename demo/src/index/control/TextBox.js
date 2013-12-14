define(function (require) {

    var Draggable = require('Draggable');
    var util = require('util');

    function TextBoxDragger(dom) {
        this.main = dom;
        this.init();
    }

    TextBoxDragger.prototype.init = function () {
        Draggable.prototype.init.call(this);
    };

    util.inherits(TextBoxDragger, Draggable);

    return TextBoxDragger;

});