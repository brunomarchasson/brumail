import { ViteDevServer } from "vite";

export default function express(path: string) {
    return {
      name: "vite3-plugin-express",
      configureServer:  (server: ViteDevServer) => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        server.middlewares.use(async (req, res, next) => {
          process.env["VITE"] = "true";
          try {
            const { app } = await server.ssrLoadModule(path);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            app(req, res, next);
          } catch (err) {
            console.error(err);
          }
        });
      },
    };
  }
  