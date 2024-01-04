import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
	return (
		<section className="section-container mt-20">
			{" "}
			<h1 className="text-center text-red_color text-4xl font-bold">
				Register
			</h1>
			<form className="block mx-auto max-w-sm">
				<input
					type="email"
					placeholder="Your Email"
				/>
				<input
					type="password"
					placeholder="Your Password"
				/>
				<button
					className="w-full bg-red_color py-2 px-6 my-2 rounded-2xl border-2 border-red_color text-white font-bold hover:bg-transparent hover:text-red_color"
					type="submit"
				>
					Register with email address
				</button>
				<p className="text-center">or</p>
				<button className="flex justify-center items-center gap-2 w-full bg-transparent py-1 px-6 my-1 rounded-2xl border-2 border-gray_color text-gray_color text-4xl font-bold hover:bg-gray_color hover:text-white">
					<FcGoogle />
					<p className="text-base">Login with Google</p>
				</button>
			</form>
		</section>
	);
};

export default Register;
