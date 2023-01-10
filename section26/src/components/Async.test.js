import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn(); // use a mock function for fetch
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [{ id: "p1", title: "First post" }];
      },
    });
    render(<Async />);

    // not actions

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
