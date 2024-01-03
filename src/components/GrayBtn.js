import React from "react";

const GrayBtn = ({ children, onClick }) => {
	return (
		<div className="flex justify-center">
			<button
				className="flex justify-center items-center font-bold gap-1 bg-transparent border-2 border-gray_color text-gray_color py-2 px-4 rounded-full hover:scale-110 transition-all"
				onClick={onClick}
				type="button"
			>
				{children}
			</button>
		</div>
	);
};

export default GrayBtn;
