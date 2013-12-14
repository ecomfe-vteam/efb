define(function () {

    /**
     * [Generator description]
     * 
     * @constructor
     * @param {[type]} options [options description]
     */
    function Generator(options) {
        this.options = options;
    }

    Generator.prototype.parse = function (options) {

    };

    /**
     * 生成etpl模板
     * 
     * @return {String} etpl模板
     */
    Generator.prototype.generate = function () {
        throw new Error('must be');
    };

    return Generator;

});