var Spec;
(function (Spec) {
    chai.should();

    describe('View', function () {
        it('should be HOGE!!', function (ok) {
            console.log(mocha);
            console.log(chai);
            console.log(ok);
            console.log('うぃっす');
            ok();
        });
        it('[test of test] can fail', function () {
            var f = false;
            f.should.equal(true);
        });
    });
})(Spec || (Spec = {}));
