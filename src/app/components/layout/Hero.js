import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section className="flex ju">
			<div>
				{" "}
				<h1>Everything is better with a Pizza</h1>
				<p>
					Pizza is the missing piece that makes every day complete, a simple yet
					delicious joy in life.
				</p>
			</div>
			<div className="relative">
				<Image
					src={"/hero_pizza.png"}
					layout={"fill"}
					objectFit={"contain"}
					alt={"pizza"}
				/>
			</div>
		</section>
	);
};

export default Hero;
