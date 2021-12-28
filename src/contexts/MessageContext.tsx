import { createContext, useCallback, useEffect, useState } from "react";
import { Message, MessageContextData } from "../interfaces/MessageInterface";
import generateMessage from "../service/Api";

const MessageContext = createContext<MessageContextData>(
  {} as MessageContextData
);

const MessageProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [request, setRequest] = useState(true);

  const callMessages = useCallback(
    (value) => {
      setRequest(value);
    },
    [setRequest]
  );

  const clearAllMessages = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  const clearUniMessage = useCallback(
    (id) => {
      setMessages(messages.filter((item: any) => item.id !== id));
    },
    [messages, setMessages]
  );

  useEffect(() => {
    if (request) {
      const cleanUp = generateMessage((message: Message) => {
        setMessages((oldMessages) => [...oldMessages, message]);
      });
      return cleanUp;
    }
  }, [request, setMessages]);

  return (
    <MessageContext.Provider
      value={{ messages, clearAllMessages, clearUniMessage, callMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
