import OMapp from "./app.js";
import { PORT } from "./config/env";

// const OMPORT = process.env.OMPORT || 3000;

OMapp.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
