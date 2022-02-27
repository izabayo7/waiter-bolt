import React from "react";
import ReactDOM from "react-dom";

import { BuyForm } from "./buy-form";
import MeterAccountService from "../../services/MeterAccountService";
import TransactionService from "../../services/TransactionService";

describe("Testing page components and API call", () => {
  test("Page content", () => {
    const root = document.createElement("div");
    ReactDOM.render(<BuyForm />, root);

    expect(root.querySelector("div").textContent).toBe("First, enter your meter Number followed by electricity amount.");
    expect(root.querySelector("button").textContent).toBe("Request");
  });

  describe("getTodos()", () => {
    test("should return todo list", async () => {
      //Our desired output
      const todos = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      };

      const data = await getTodos();
      expect(data[0]).toEqual(todos);
 
    });
  });
});