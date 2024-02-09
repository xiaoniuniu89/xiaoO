import OpenAI from "openai";

const useOpenAI = () => {

  const openai = new OpenAI({apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  const handlePromptOpenAi = async (message: string, history) => {

    const systemMessage = {
      role: 'system',
      content: 'You are an AI code assistant. You should format all messages in markdown.',
  }

    const newMessage = formatMessage(message, "user");

    const result = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [systemMessage, ...history, newMessage],
      temperature: 0.6,
    });

    console.log(result);

    return {
      result: result.choices[0].message as { role: string; content: string },
      userMessage: newMessage,
    }
      
  };

  const formatMessage = (message: string, role: string) => {
    return { role: role, content: message };
  };

  return {
    handlePromptOpenAi,
  };
};

export default useOpenAI;
