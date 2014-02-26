/// <reference path="../src/view.ts" />
/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

module Spec {

    chai.should();

    describe('View', () => {
        var mockView: ShowvMockView;

        beforeEach(() => {
            mockView = new ShowvMockView();
        });
        it('should be HOGE!!', () => {
            console.log(mockView);
        });
    });

    // This is just a mock!
    class ShowvMockView extends showv.View {
        constructor() {
            super();
        }
    }
}
