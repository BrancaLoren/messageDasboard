import React from "react";
import { render, screen } from "@testing-library/react";
import CollInfo from "../components/CollInfo";

describe(`Component: CollInfo`, () => {
  test(`CollInfo renders with default props`, () => {
    const wrapper = render(<CollInfo />);
    expect(wrapper).toMatchSnapshot();
  });

  test("CollInfo without data", () => {
    render(
      <CollInfo
        title={"Test"}
        count={6}
        info={[]}
        priority={0}
        eventClear={() => {}}
      ></CollInfo>
    );

    expect(screen.getByText("Test")).toBeTruthy();
  });
});
