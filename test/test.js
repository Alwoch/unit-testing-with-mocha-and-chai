/* eslint-disable no-undef */
/* eslint-disable func-names */
const { assert } = require("chai");
const {multiply} = require("../multiply");

describe("test multiplication", ()=> {
  it("cycle 1", () => {
   assert.equal(multiply(1, 1), 1);
  });
  it("cycle 2", () => {
    assert.equal(multiply(2, 2), 4);
  });
  it("cycle 3", () => {
    assert.equal(multiply(3, 3), 9);
  });
  it("cycle 4", () => {
    assert.equal(multiply(4, 4), 16);
  });
  it("cycle 5", () => {
    assert.equal(multiply(5, 5), 25);
  });
});
