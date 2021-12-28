import { Divider } from "@material-ui/core";
import styled from "styled-components";
import { color } from "../assets/colors";

export interface HeadersProps {
  title: string;
}

const Title = styled.h2`
  color: ${color.black};
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
`;

const CustomDivider = styled(Divider)`
  background-color: ${color.black};
`;

function Header(props: HeadersProps) {
  const { title } = props;

  return (
    <>
      <Title>{title}</Title>
      <CustomDivider></CustomDivider>
    </>
  );
}

export default Header;
