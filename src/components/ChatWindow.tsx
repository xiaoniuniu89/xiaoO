import React, { useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useApplicationContext } from "@/context/ApplicationContext";
import { Bot, User } from "lucide-react";
import Markdoc from '@markdoc/markdoc';
import Code from "./markdoc/code";
import fence from "./markdoc/Fence";

const config = {
  nodes: {
    fence
  }
}

export function ChatWindow() {
  const { chatHistory } = useApplicationContext();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <Card className="h-full overflow-y-auto">
      <CardHeader>
        <CardTitle>New Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[80%]">
          {chatHistory.map((chat, index) => {
            const source = chat.content;

            const ast = Markdoc.parse(source);
            const astTransform = Markdoc.transform(ast, config);
            
            const content = Markdoc.renderers.react(astTransform, React, {components: {
              Code
            }});
            return (

            
              <div key={index} className="flex items-start mb-2">
                {chat.role === "user" ? (
                  <User className="mr-2 mt-2" size={20} />
                ) : chat.role === "assistant" ? (
                  <Bot className="mr-2 mt-2" size={20} />
                ) : null}
                <p className="p-2">{content}</p>
              </div>
            )
          })}
          {/* Empty div to keep chat window scrolled to the bottom */}
          <div ref={chatEndRef} />
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
