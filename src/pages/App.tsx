import { Button, IconButton, Snackbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../assets/colors";
import Header from "../components/Header";
import TableInfo from "../components/TableInfo";
import useMessage from "../hooks/useMessage";

const STOP = "Stop";
const START = "Start";
const CLEAR = "Clear";

const CustomButton = styled(Button)`
  background-color: ${color.info} !important;
  color: ${color.black} !important;
  font-weight: 600 !important;
  margin: 5px 1px !important;
  padding: 5px 20px !important;
`;

const Container = styled.div`
  text-align: center;
`;

const App: React.FC<{}> = () => {
  const { messages, clearAllMessages, clearUniMessage, callMessages } =
    useMessage();
  const [start, setStart] = useState(true);
  const [snackbar, setSnackbar] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (messages) {
      const item = messages[messages.length - 1];
      if (item?.priority === 0) {
        setSnackbar(true);
        setCurrentMessage(item.message);
      }
    }
  }, [messages]);

  const handleClose = () => setSnackbar(false);

  return (
    <>
      <Header title="nuffsaid.com Coding Challenge"></Header>
      <Container>
        <CustomButton
          id={"home-button-start"}
          onClick={() => {
            callMessages(!start);
            setStart(!start);
          }}
        >
          {start ? STOP : START}
        </CustomButton>
        <CustomButton
          id={"home-button-clean"}
          onClick={() => {
            clearAllMessages();
          }}
        >
          {CLEAR}
        </CustomButton>
      </Container>
      {messages && (
        <Container>
          <TableInfo data={messages} eventClear={clearUniMessage}></TableInfo>
        </Container>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar}
        autoHideDuration={2000}
        onClose={handleClose}
        message={currentMessage}
      />
    </>
  );
};

export default App;
