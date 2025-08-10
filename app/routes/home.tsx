import type { Route } from "./+types/home";
import { Signup } from "../welcome/signup";
import { redirect } from "react-router";
import { getUser } from "~/api/auth";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function clientLoader() {
	const user = await getUser();

	if (user.status === 200) return redirect("/protected");
}

export default function Home() {
	return <Signup />;
}
