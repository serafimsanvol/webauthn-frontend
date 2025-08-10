import { redirect, useLoaderData } from "react-router";
import { logout } from "~/api/auth";

export const clientLoader = async () => {
	const response = await logout();

	if (response.status < 400) return redirect("/");

	return { status: response.status };
};

const Logout = ({}) => {
	const loaderData = useLoaderData<typeof clientLoader>();
	if (loaderData.status && loaderData.status >= 400) {
		return <p className="text-red-500">Logout failed. Please try again.</p>;
	}

	return (
		<div>
			<h1>Logout</h1>
			<p>You have been logged out successfully.</p>
		</div>
	);
};

export default Logout;
