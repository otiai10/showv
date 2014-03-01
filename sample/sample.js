var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample;
(function (Sample) {
    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView() {
            _super.call(this);
        }
        FooterView.prototype.render = function () {
            this.$el.append('<h2>This is Footer</h2>');
            return this;
        };
        return FooterView;
    })(showv.View);
    Sample.FooterView = FooterView;
})(Sample || (Sample = {}));
var Sample;
(function (Sample) {
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView() {
            _super.call(this);
        }
        HeaderView.prototype.render = function () {
            this.$el.append('<h1>Showv</h1>', '<h2>The Simplest View Framework for TypeScript.</h2>');
            return this;
        };
        return HeaderView;
    })(showv.View);
    Sample.HeaderView = HeaderView;
})(Sample || (Sample = {}));
var Sample;
(function (Sample) {
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            _super.call(this);
        }
        MainView.prototype.render = function () {
            this.$el.append('<div>This is main</div>');
            return this;
        };
        return MainView;
    })(showv.View);
    Sample.MainView = MainView;
})(Sample || (Sample = {}));
var Sample;
(function (Sample) {
    var WrapperView = (function (_super) {
        __extends(WrapperView, _super);
        function WrapperView() {
            _super.call(this, {
                id: 'wrapper'
            });
            this.header = new Sample.HeaderView();
            this.main = new Sample.MainView();
            this.footer = new Sample.FooterView();
        }
        WrapperView.prototype.render = function () {
            this.$el.append(this.header.render().$el, this.main.render().$el, this.footer.render().$el);
            return this;
        };
        return WrapperView;
    })(showv.View);
    Sample.WrapperView = WrapperView;
})(Sample || (Sample = {}));
