import { Card } from "@material-ui/core";
import styled, { css } from "styled-components";
import { color } from "../assets/colors";
import { Priority, Message } from "../interfaces/MessageInterface";

export interface CollInfoProps {
  title?: string;
  count?: number;
  info?: Message[];
  priority?: Priority;
  eventClear?(id?: number): void;
}

const Container = styled.div`
  display: inline-grid;
  width: 30%;
  margin: 5px;
  text-align: left;
`;

const Title = styled.h2`
  color: ${color.black};
  font-weight: bold;
  margin: 0;
`;
const Count = styled.h5`
  color: ${color.black};
  font-weight: normal;
  margin: 0px 0 5px;
`;

const CustomCard = styled(Card)`
  color: ${color.black};
  font-weight: normal;
  margin: 0px 0 8px;
  padding: 5%;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color}!important;
    `}
`;

const CustomFloat = styled.h5`
  position: relative;
  font-weight: normal !important;
  margin: 0;
  float: right;
  cursor: pointer;
`;

const CustomMessage = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 40px;
  white-space: nowrap;
  ${(props) =>
    `:hover, :after {
				position: relative;
				top: 0;
    		content: '${props.title}';
  		}`}
`;

function CollInfo(props: CollInfoProps) {
  const { title, count, priority, info, eventClear } = props;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      {count && <Count>{`Count ${count}`}</Count>}
      {info &&
        info.map((item: Message) => {
          return (
            <CustomCard
              color={
                priority === 0
                  ? color.error
                  : priority === 1
                  ? color.warn
                  : color.info
              }
            >
              <CustomMessage title={item.message}>{item.message}</CustomMessage>
              <CustomFloat
                onClick={eventClear ? () => eventClear(item.id) : () => {}}
              >
                {"Clear"}
              </CustomFloat>
            </CustomCard>
          );
        })}
    </Container>
  );
}

export default CollInfo;
