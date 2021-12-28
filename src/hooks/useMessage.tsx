import { useContext } from 'react';
import { MessageContext } from '../contexts/MessageContext';

function useMessage(): any {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error('useMessage must be used within an MessageProvider');
  }

  return context;
}

export default useMessage;