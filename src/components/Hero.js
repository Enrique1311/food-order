import React from "react";
import { FaArrowRight } from "react-icons/fa";
import RedBtn from "./RedBtn";
import GrayBtn from "./GrayBtn";

const Hero = () => {
	return (
		<section className="section-container flex flex-col justify-center items-center gap-6 mt-10 md:flex-row md:gap-10">
			<div className="flex flex-col justify-start w-4/5 mt-20 md:w-1/3 md:mt-10">
				<h1 className="text-5xl font-bold">
					Everything
					<br /> is better
					<br /> with a <span className="text-red_color">Pizza</span>
				</h1>
				<p className="my-6 text-gray_color font-extrabold">
					Pizza is the missing piece that makes every day complete, a simple yet
					delicious joy in life.
				</p>
				<div className="flex flex-wrap gap-4">
					<RedBtn>
						Order now
						<FaArrowRight />
					</RedBtn>
					<GrayBtn className="gray-btn">
						Learn more
						<FaArrowRight />
					</GrayBtn>
				</div>
			</div>
			<img
				className="w-3/4 py-2 md:w-2/5 md:py-10"
				src="/pizza.png"
				alt="pizza"
			/>
		</section>
	);
};

export default Hero;
