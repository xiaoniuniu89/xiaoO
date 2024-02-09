import { ChatWindow } from "./ChatWindow";
import { TextInput } from "./TextInput";

export function Chat() {


  return (

    <div className='w-[calc(100vw-250px)] min-h-screen flex flex-col'>
        <div className="w-[80%] h-[80vh] m-auto">
            <ChatWindow />    
        </div>

        <div className="w-[80%] h-[15vh] m-auto flex">
            <TextInput />      
        </div>
      </div>
  );
}
