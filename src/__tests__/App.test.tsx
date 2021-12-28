import { render } from "@testing-library/react";
import App from "../pages/App";

test("renders page withour problems", () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});
