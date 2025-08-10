import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SEND_VERIFY_EMAIL_KEY, sendVerifyEmail } from "~/api/auth";

type SignupFormData = {
	email: string;
};

export function Signup() {

	const mutation = useMutation({
		mutationFn: sendVerifyEmail,
		mutationKey: [SEND_VERIFY_EMAIL_KEY],
	});

	const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
		return mutation.mutate(data.email);
	};

	const { register, handleSubmit } = useForm<SignupFormData>();

	if (mutation.isPending) {
		return (
			<div className="flex items-center justify-center min-h-[100%]">
				<p>Sending verification email...</p>
			</div>
		);
	}

	if (mutation.isError) {
		return (
			<div className="flex items-center justify-center min-h-[100%]">
				<p className="text-red-500">
					Error sending verification email: {mutation.error.message}
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-[100%]">
			{mutation.isSuccess ? (
				<p className="text-green-500">
					Verification email is sent, please check your inbox!
				</p>
			) : (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center justify-center"
				>
					<h1 className="text-2xl font-bold mb-4">signup email</h1>
					<label htmlFor="email" className="mb-2">
						Email:
					</label>
					<input
						{...register("email", { required: true })}
						placeholder="Email"
						name="email"
						type="email"
						id="email"
						className="border border-gray-300 p-2 rounded-md mb-2"
					/>
					<button
						type="submit"
						className="bg-blue-500 w-full text-white p-2 cursor-pointer rounded-md"
					>
						Send verification email
					</button>
				</form>
			)}
		</div>
	);
}
