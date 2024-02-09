import { create } from 'zustand'
import { useApplicationContext } from '@/context/ApplicationContext'
import useOpenAI from './useOpenAI'
import { useEffect } from 'react'

type State = {
    textInputValue: string
    disabled: boolean
  }

type Actions = {
    setTextInputValue: (value: string) => void
    setDisabled: (value: boolean) => void
  }

const useStore = create<State & Actions>((set) => ({
    textInputValue: '',
    setTextInputValue: (value: string) => set(() => ({ textInputValue: value })),
    disabled: false,
    setDisabled: (value: boolean) => set(() => ({ disabled: value })),
  }))

export const useTextInput = () => {
  const { chatHistory, setChatHistory } = useApplicationContext();

  const { handlePromptOpenAi } = useOpenAI();
    const { textInputValue, setTextInputValue, disabled, setDisabled } = useStore();
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        setDisabled(true);
        const {userMessage, result} = await handlePromptOpenAi(textInputValue, chatHistory);
        console.log(result)
        setChatHistory([...chatHistory, userMessage, result]);
        setTextInputValue("");
        setDisabled(false);
    };
    
    return { textInputValue, disabled, onChange, handleSubmit };
};