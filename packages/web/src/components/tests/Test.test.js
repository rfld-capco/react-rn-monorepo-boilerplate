import React from "react";
import Test from "../Test";
import { create } from "react-test-renderer";

describe("Examining the syntax of Jest tests", () => {
  it("renders without crashing", () => {
    const container = create(<Test />, document.getElementById('root'));
    const instance = container.getInstance()
    console.log(instance.state)
    expect(instance.state.test === "test");
  });

});

