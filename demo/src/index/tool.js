define(function (require) {

    var current = null;
    var map = {};

    return {

        init: function () {

            $('#tool .tab-panel').each(function (i, item) {

                var name = item.getAttribute('data-for-tab');

                if (!name) {
                    return;
                }

                map[name] = $(item);

            });

            $('#category-list li').click(function () {

                if (current === this) {
                    return;
                }

                var name = this.getAttribute('data-tab');
                var currentName = current.getAttribute('data-tab');

                if (!map[name]) {
                    return;
                }

                map[currentName].removeClass('active').hide();
                map[name].show();

                $(this).addClass('active');
                $(current).removeClass('active');

                current = this;

            }).each(function (index, tab) {

                if (index === 0 || $(tab).hasClass('active')) {
                    current = tab;
                }

            });

        }

    };

});