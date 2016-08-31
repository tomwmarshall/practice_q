/**
 * Created by Tom on 22/06/2016.
 */

/*
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(0.01));
console.log((Number.isFinite('Enki!')));
*/

// function aaa(){return {test:1};} console.log(typeof aaa());

/*
function aaa() {
    return
    {
        test:1
    };
}
console.log(typeof aaa());


function bbb() {
    return {test:1};
}
console.log(typeof bbb());
*/

/*
var e = 1;
function run(){
    console.log(e);
    var e = 4;
}
run();

var c = 1;
function calc() {
    console.log((c*c));
    c = 4;
}
calc(); */


describe("tests", function() {
    it("more tests", function() {
        setTimeout(function() {
            timer();
        }, 8000);

        // Test 1
        expect(timer).not.toHaveBeenCalled();
        jasmine.clock().tick(1000);

        // Test 2
        expect(timer).toHaveBeenCalled();
        jasmine.clock().tick(8000);

        // Test 3
        expect(timer).toHaveBeenCalled();
    })
})
