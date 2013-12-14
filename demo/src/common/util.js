define(function (require) {

    return {

        /**
         * 原型链继承
         * 
         * @param {Function} subClass 子类
         * @param {Function} superClass 父类
         * @return {Function} 子类
         */
        inherits : function (subClass, superClass) {

            var empty = new Function();

            empty.prototype = superClass.prototype;

            var subPrototoype = new empty();

            for (var name in subClass.prototype) {
                if (subClass.prototype.hasOwnProperty(name)) {
                    subPrototoype[name] = subClass.prototype[name];
                }
            }

            subPrototoype.constructor = subClass;

            subClass.prototype = subPrototoype;

            return subClass;

        }

    };

});