import { FrameStack } from "../src";

const fs = new FrameStack();

const f = fs.addFrame({
  url: "http://localhost:3000/frame.html",
  size: "small",
});

fs.enableHooks(f.id);
