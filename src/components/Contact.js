import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
	return (
		<section className="section-container text-center">
			<SectionHeader
				subHeader={"Don´t hesitate"}
				mainHeader={"Contact us"}
			/>
			<div className="text-2xl font-bold text-gray_color mt-8">
				<a href="+5491146464586">+54 9 114646 4586</a>
			</div>
			<footer className="border-t p-2 mt-16">
				&copy; 2024 All rights reserved
			</footer>
		</section>
	);
};

export default Contact;
