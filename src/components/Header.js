import React from "react";
import Link from "next/link";
import RedBtn from "./RedBtn";
import GrayBtn from "./GrayBtn";

const Header = () => {
	return (
		<head className="flex gap-2 justify-between items-center bg-orange_color py-4 px-8 fixed w-full z-10">
			<Link
				className="text-red_color font-bold text-2xl"
				href=""
			>
				New Pizza
			</Link>
			<nav className="flex justify-between gap-8 text-gray_color text-xl">
				<Link href={"/"}>Home</Link>
				<Link href={""}>Menu</Link>
				<Link href={""}>About</Link>
				<Link href={""}>Contact</Link>
			</nav>
			<nav className="flex gap-2">
				<Link href={"/login"}>
					<RedBtn>Login</RedBtn>
				</Link>
				<Link href="/register">
					<GrayBtn>Register</GrayBtn>
				</Link>
			</nav>
		</head>
	);
};

export default Header;
