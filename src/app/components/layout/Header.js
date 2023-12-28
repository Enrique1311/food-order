import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<head className="flex gap-2 justify-between items-center bg-secondary_color py-4 px-8">
			<Link
				className="text-primary_color font-bold text-2xl"
				href=""
			>
				Pizza GREEN
			</Link>
			<nav className="flex justify-between gap-8 text-gray_color text-xl">
				<Link href={""}>Home</Link>
				<Link href={""}>Menu</Link>
				<Link href={""}>About</Link>
				<Link href={""}>Contact</Link>
				<Link
					className="bg-primary_color text-white py-1 px-5 rounded-md text-base"
					href={""}
				>
					Login
				</Link>
			</nav>
		</head>
	);
};

export default Header;
