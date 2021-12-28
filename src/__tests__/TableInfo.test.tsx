import React from "react";
import { render, screen } from "@testing-library/react";
import TableInfo from "../components/TableInfo";

describe(`Component: TableInfo`, () => {
  test(`TableInfo renders with default props`, () => {
    const wrapper = render(<TableInfo />);
    expect(wrapper).toMatchSnapshot();
  });

  test("TableInfo without data", () => {
    const wrapper = render(
      <TableInfo data={[]} eventClear={() => {}}></TableInfo>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
