import { redirect, useLoaderData } from "react-router";
import type { Route } from "./+types/protected";
import { getUser } from "~/api/auth";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function clientLoader() {
	const user = await getUser();

	if (user.status === 401) {
		return redirect("/");
	} else if (user.status === 403) {
		return redirect("/passkey");
	} else if (user.status !== 200) {
		return { user: { message: "Failed to fetch user data" } };
	}
	return { user: await user.json() };
}

export default function Protected() {
	const { user } = useLoaderData<typeof clientLoader>();

	return (
		<div className="flex flex-col items-center justify-center  min-h-[100%]">
			<p className="mb-4">This is your protected page, {user.message}</p>
		</div>
	);
}
