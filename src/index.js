import "dotenv/config";
import app from "./app/server.js";

const PORT = process.env.PORT || process.env.LOCAL_PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running in ${PORT}`);
});
