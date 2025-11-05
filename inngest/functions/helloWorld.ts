import { inngest } from "../client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.run("say-hello", async () => {
      console.log("Hello World!");
    });
  }
);
