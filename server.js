import app from "./app.js";
// eslint-disable-next-line no-unused-vars
import { common } from "./config/env.js";
import connectToDatabse from "./mongodb/mongodb.js";

const PORT = process.env.PORT || 5500;

app.listen(PORT, async () => {
  await connectToDatabse();
  console.log(`server working at port ${PORT}`);
});
