import { useForm, type SubmitHandler } from "react-hook-form";
import { redirect } from "react-router";
import { getUser } from "~/api/auth";

export const clientLoader = async () => {
	const response = await getUser();
	if (response.status < 400) return redirect("/protected");
};

type SigninFormData = {
	email: string;
};

const Signin = () => {
	const { register, handleSubmit } = useForm<SigninFormData>();
	const onSubmit: SubmitHandler<SigninFormData> = async (data) => {};
	return (
		<section className="flex flex-col items-center justify-center min-h-[100%]">
			<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					placeholder="Email"
					autoComplete="webauthn"
					className="border border-gray-300 p-2 rounded-md mb-2"
					{...register("email")}
				/>
				<button className="bg-blue-500 text-white p-2 rounded-md">
					Sign in
				</button>
			</form>
		</section>
	);
};

export default Signin;
