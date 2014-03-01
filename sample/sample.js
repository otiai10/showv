var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample;
(function (Sample) {
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            _super.call(this, {
                id: 'main'
            });
        }
        MainView.prototype.render = function () {
            this.$el.append('<h1>Showv</h1>', '<h2>The Simplest View Framework for TyepScript.</h2>');
            return this;
        };
        return MainView;
    })(showv.View);
    Sample.MainView = MainView;
})(Sample || (Sample = {}));
