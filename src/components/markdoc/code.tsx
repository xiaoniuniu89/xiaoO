import React, { useEffect } from "react";
import copy from "copy-to-clipboard";
import { Copy, CheckIcon } from "lucide-react";

interface Props {
  children: string;
  language: string;
}

export default function Code({ children, language = "javascript" }: Props) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    if (copied && ref && ref.current) {
      copy((ref.current as HTMLElement).innerText);
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied]);

  const lang = language === "md" ? "markdoc" : language || "markdoc";


  console.log(children, lang, hljs.highlightAuto(children).value)

  return (
    <div className="code group my-2 relative" aria-live="polite">
      <pre
        key={children}
        ref={ref}
        className={` bg-gray-100 p-2 rounded language-${lang}`}
      >
        {children}
      </pre>
      <button
        className=" absolute top-[17px] appearance-none right-[11px] flex h-8 w-8 items-center justify-center rounded-lg border border-gray-400 bg-gray-300 opacity-100 shadow-md transition-all ease-in-out group-hover:scale-100 group-hover:opacity-100 dark:border-gray-500 dark:bg-gray-700 md:scale-0 md:opacity-0"
        type="button"
        onClick={() => setCopied(true)}
      >
        {copied ? (
          <CheckIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Copy className="h-5 w-5 bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
}
