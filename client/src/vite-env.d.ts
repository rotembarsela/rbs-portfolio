/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_FACEBOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
