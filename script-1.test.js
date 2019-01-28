const script1 = require("./script-1")

describe("script1", () => {
  it("returns a truthy value", () => {
    expect(script1()).toBeTruthy()
  })
  it("does not return a falsy value", () => {
    expect(script1()).not.toBeFalsy()
  })
})
