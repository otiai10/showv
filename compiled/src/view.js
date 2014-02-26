var showv;
(function (showv) {
    var View = (function () {
        function View(options) {
            if (typeof options === "undefined") { options = {}; }
            this.tagName = 'div';
            this.className = '';
            this.id = '';
            this.delegate = true;
            this.events = {};
            this.ensureOptions(options);
            this.delegateEvents();
            console.log(this);
        }
        View.prototype.ensureOptions = function (options) {
            this.tagName = options.tagName || 'div';
            this.className = options.className || '';
            this.id = options.id || '';
            this.delegate = (options.delegate == null) ? true : options.delegate;
        };

        View.prototype.delegateEvents = function (events) {
            var _this = this;
            this.events = events || {};
            _.map({}, function (eventFunction, eventNameAndSelector) {
                console.log(_this);
            });
            $.map(this.events, function (eventFunction, eventNameAndSelector) {
                console.log(_this);
            });
            return this;
        };

        View.prototype.render = function () {
            return this;
        };
        return View;
    })();
    showv.View = View;
})(showv || (showv = {}));
