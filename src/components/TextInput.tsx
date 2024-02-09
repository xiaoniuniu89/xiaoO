import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { useTextInput } from "@/hooks/useTextInput"
 
export function TextInput() {
    const { textInputValue, onChange, handleSubmit, disabled } = useTextInput();

    return (
        <div className="grid w-full gap-2">
          <Textarea placeholder="Type your message here." value={textInputValue} onChange={e => onChange(e)} disabled={disabled}/>
          <Button disabled={disabled} onClick={handleSubmit}>send</Button>
        </div>
      )
}