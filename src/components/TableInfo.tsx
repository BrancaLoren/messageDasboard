import { useEffect, useState } from "react";
import styled from "styled-components";
import { Message, Priority } from "../interfaces/MessageInterface";
import CollInfo from "./CollInfo";

export interface TableInfosProps {
  data?: Message[];
  eventClear?(id?: number): void;
}

const Container = styled.div`
  display: inline-block;
  width: 90%;
  text-align: center;
  margin-top: 5%;
`;

function TableInfo(props: TableInfosProps) {
  const { data, eventClear } = props;
  const [dataErro, setDataErro] = useState<Message[]>([]);
  const [dataInfo, setDataInfo] = useState<Message[]>([]);
  const [dataWarn, setDataWarn] = useState<Message[]>([]);

  useEffect(() => {
    const error: Message[] = [];
    const info: Message[] = [];
    const warn: Message[] = [];
    data?.map((item: Message) => {
      switch (item.priority) {
        case 0:
          error.push(item);
          break;
        case 1:
          warn.push(item);
          break;
        default:
          info.push(item);
          break;
      }
    });
    if (error !== dataErro) setDataErro(error);
    if (warn !== dataWarn) setDataWarn(warn);
    if (info !== dataInfo) setDataInfo(info);
  }, [data]);

  return (
    <Container>
      <CollInfo
        title={"Error Type 1"}
        count={dataErro.length}
        eventClear={eventClear}
        priority={Priority.Error}
        info={dataErro}
      />
      <CollInfo
        title={"Warning Type 2"}
        count={dataWarn.length}
        eventClear={eventClear}
        priority={Priority.Warn}
        info={dataWarn}
      />
      <CollInfo
        title={"Info Type 3"}
        count={dataInfo.length}
        eventClear={eventClear}
        priority={Priority.Info}
        info={dataInfo}
      />
    </Container>
  );
}

export default TableInfo;
