import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./layouts/layout.tsx", [
		index("routes/home.tsx"),
		route("protected", "routes/protected.tsx"),
		route("passkey", "routes/passkey.tsx"),
		route("logout", "routes/logout.tsx"),
		route("signin", "routes/signin.tsx"),
	]),
] satisfies RouteConfig;
