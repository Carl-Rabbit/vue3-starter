/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FRONTEND_PORT: string
  readonly VITE_BACKEND_PORT: string
  readonly VITE_BACKEND_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}