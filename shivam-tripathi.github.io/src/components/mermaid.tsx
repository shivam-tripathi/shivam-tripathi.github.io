import { useEffect } from 'react';
import mermaid from 'mermaid';


export const Mermaid = ({ code }: { code: string }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return (
    <pre className="mermaid">
		{code}
    </pre>
  );
}

