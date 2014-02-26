/// <reference path="../src/view.ts" />
/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

module Spec {

    chai.should();

    describe('View', () => {
        it('should be HOGE!!', (ok) => {
            console.log(mocha);
            console.log(chai);
            console.log(ok);
            console.log('うぃっす');
            ok();
        });
    });
}
