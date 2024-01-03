import React from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
	return (
		<section className="section-container">
			<SectionHeader
				subHeader={"Our Story"}
				mainHeader={"About Us"}
			/>
			<div className="text-center text-gray_color max-w-2xl mx-auto">
				<p className="mt-4">
					Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam
					non pro id el elementum et dolor sed diam non pro id elit. Ut enim ad
					minim veniam, quis nostr arranged but rep congue.
				</p>
				<p className="mt-4">
					Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam
					non pro id el elementum et dolor sed diam non pro id elit. Ut enim ad
					minim veniam, quis nostr arranged but rep congue with id elit.
				</p>
				<p className="mt-4">
					Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam
					non pro id el elementum et dolor sed diam non pro id elit. Ut enim ad
					minim veniam, quis nostr arranged but.
				</p>
			</div>
		</section>
	);
};

export default About;
