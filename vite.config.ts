import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/dynamo-fit/",
	plugins: [react()],
});
