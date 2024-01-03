import React from "react";
import RedBtn from "./RedBtn";

const MenuItem = () => {
	return (
		<div className="bg-white border-2 p-4 rounded-lg text-center hover:bg-light_gray_color transition-all">
			<img
				src="/pizza.png"
				alt="pizza"
			/>
			<h4 className="font-semibold my-2">Pepperoni Pizza</h4>
			<p className="text-gray_color text-sm mb-2">
				Lorem ipsum dolor sit amet con et consectet ut labore et dolore magna
				aliquet er elit sed magna aliquet erat inter.
			</p>
			<h3 className="w-full text-center text-gray_color font-bold p-1 mb-2 border-2 border-gray_color rounded-md">
				$12
			</h3>
			<RedBtn
				className="bg-red_color text-white py-2 px-4 rounded-full"
				type="button"
			>
				Add to cart
			</RedBtn>
		</div>
	);
};

export default MenuItem;
