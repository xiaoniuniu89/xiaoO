import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useApplicationContext } from "@/context/ApplicationContext";

export function ChatWindow() {

  const { chatHistory } = useApplicationContext();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[80%]">
          {chatHistory.map((chat, index) => (
            <div key={index} className="flex">
              <p>{chat.role}</p>
              <p>{chat.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
