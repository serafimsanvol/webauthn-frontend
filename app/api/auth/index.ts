import { ORIGIN } from "../constants";

export const sendVerifyEmail = async (email: string) => {
	const response = await fetch(`${ORIGIN}/auth/send-verify-email`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email }),
	}).then((res) => res.json());

	return response;
};

export const SEND_VERIFY_EMAIL_KEY = "sendVerifyEmail";

export const getUser = async () => {
	return await fetch(`${ORIGIN}/users/me`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const verifyEmail = async (token: string) => {
	const response = await fetch(`${ORIGIN}/auth/verify-email`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			token: token,
		}),
	});

	return response;
};
export const VERIFY_EMAIL_KEY = "verifyEmail";

export const logout = async () => {
	return fetch(`${ORIGIN}/auth/logout`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

