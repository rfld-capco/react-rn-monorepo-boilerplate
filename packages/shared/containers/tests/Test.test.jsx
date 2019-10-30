import React from "react";
import Test from "../Test";
import renderer from 'react-test-renderer';

describe("Examining the syntax of Jest tests", () => {
  it("sums numbers", () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });

  it("renders without crashing", () => {
    const container = renderer.create(<Test />,  document.getElementById('root'));
    const instance = container.getInstance()
    expect(instance.state.test === "test");
  });

});

