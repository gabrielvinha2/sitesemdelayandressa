/// <reference types="vite/client" />

// Declare custom element for VSL player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        style?: React.CSSProperties;
      };
    }
  }
}