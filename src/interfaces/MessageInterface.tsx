export enum Priority {
  Error,
  Warn,
  Info,
}

export interface Message {
  message: string;
  priority: Priority;
  id?: number;
}

export interface MessageContextData {
  messages: Message[];
  clearAllMessages(): void;
  callMessages(value: boolean): void;
  clearUniMessage(id: number): void;
}
