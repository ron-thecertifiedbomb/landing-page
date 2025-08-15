type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
  name: import.meta.env.VITE_APP_NAME ?? "React Vite Shadcn UI Starter",
  github: {
    title: "React Vite Shadcn UI Starter",
    url: "https://github.com/ron-thecertifiedbomb/react-vite-shadcn-ui-starter",
  },
  author: {
    name: "ron-thecertifiedbomb",
    url: "https://github.com/ron-thecertifiedbomb",
  },
};

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
