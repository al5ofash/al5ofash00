/// <reference types="react/experimental" />
declare namespace React {
  // Minimal React typings for editor to stop "React not found" noise while deps are not installed.
  // Once you run npm install, TypeScript will use the real @types/react / Next types.
  interface ReactNode {}
  interface CSSProperties {}
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
