import * as React from 'react';
import { highlightElement } from 'prismjs';
import { CodeBlock } from 'notion-types';
import { getBlockTitle } from 'notion-utils';
import { getTextContent } from 'notion-utils';

import Prism from 'prismjs';

export const cs = (...classes: Array<string | undefined | false>) => classes.filter((a) => !!a).join(` `);

export const Code: React.FC<{
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
}> = ({ block, defaultLanguage, className }) => {
  const [language, setLanguage] = React.useState(defaultLanguage);
  const codeRef = React.useRef<HTMLElement>(null);
  const content = getTextContent(block.properties?.title);

  React.useEffect(() => {
    if (block.properties?.language?.[0]?.[0] == `C#`) {
      setLanguage(`csharp`);
    } else {
      setLanguage(block.properties?.language?.[0]?.[0].toLowerCase() || defaultLanguage);
    }
  }, []);

  React.useEffect(() => {
    if (codeRef.current && language) {
      try {
        highlightElement(codeRef.current);
      } catch (err) {
        console.warn(`prismjs highlight error`, err);
      }
    }
  }, [codeRef, language]);

  return (
    <pre className={cs(`notion-code`, className)}>
      <code className={`language-${language}`} ref={codeRef}>
        {content}
      </code>
    </pre>
  );
};
