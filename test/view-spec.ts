/// <reference path="../src/view.ts" />
/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/jquery.d.ts" />

module Spec {

    chai.should();

    describe('View', () => {
        describe('on create default', () => {
            var mockView: ShowvMockView;
            beforeEach(() => {
                mockView = new ShowvMockView();
            });
            it('should have $el', () => {
                mockView.$el.should.be.instanceof(jQuery);
                mockView.$el[0].tagName.should.equal('DIV');
            });
        });
    });

    // This is just a mock!
    class ShowvMockView extends showv.View {
        constructor() {
            super();
        }
    }
}
