import React from "react";

const RedBtn = ({ onClick, children }) => {
	return (
		<div className="flex justify-center">
			<button
				className="flex justify-center items-center font-bold gap-2 bg-red_color text-white border-2 border-red_color py-2 px-4 rounded-full hover:bg-transparent hover:text-red_color transition-all"
				onClick={onClick}
				type="button"
			>
				{children}
			</button>
		</div>
	);
};

export default RedBtn;
