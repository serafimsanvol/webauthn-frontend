import { useLoaderData, useNavigate } from "react-router";
import { verifyEmail } from "~/api/auth";

export async function clientLoader() {
	// TODO separate page for verify token
	const urlParams = new URLSearchParams(window.location.search);
	const token = urlParams.get("token");

	const response = await verifyEmail(token || "");

	if (response.status >= 400) {
		return { message: "" };
	}

	return { message: "Email verified successfully" };
}

const Passkey = () => {
	const { message } = useLoaderData<typeof clientLoader>();
	return (
		<div className="flex flex-col items-center justify-center min-h-[100%]">
			{message && <p className="text-green-500">{message}</p>}
			<p className="mb-4">Sign up with Passkey</p>
			<button className="bg-blue-500 py-2 px-4 text-white p-2 rounded-md cursor-pointer">
				Signup
			</button>
		</div>
	);
};

export default Passkey;
