describe("Test suite: Main page", function () {

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it("should have views", function () {
        expect(app.views.content).to.be.instanceof(Object);
        expect(app.views.settings).to.be.instanceof(Object);
    });
});
