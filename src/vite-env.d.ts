
/// <reference types="vite/client" />
/// <reference types="node" />

// This file adds additional TypeScript definitions for the project
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
