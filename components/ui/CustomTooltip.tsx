import { FC, ReactNode, useRef } from "react";

interface Props {
	children: ReactNode;
	tooltip?: string;
}

const CustomToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
	const tooltipRef = useRef<HTMLSpanElement>(null);
	const container = useRef<HTMLDivElement>(null);

	return (
		<div
			// ref={container}
			onMouseEnter={({ clientX }) => {
				if (!tooltipRef.current || !container.current) return;
				const { left } = container.current.getBoundingClientRect();

				// tooltipRef.current.style.left = clientX - (left - 20) + "px";
				tooltipRef.current.style.left = "0px"
			}}
			className="group relative inline"
		>
			{children}
			<span
				ref={tooltipRef}
				className="z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-black text-white font-bold text-sm p-1 rounded absolute top-full mt-2 whitespace-nowrap"
			>
				{tooltip}
			</span>
			{/* {tooltip ? ( */}
			{/* 	<span */}
			{/* 		ref={tooltipRef} */}
			{/* 		className="z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-black text-white font-bold text-sm p-1 rounded absolute top-full mt-2 whitespace-nowrap" */}
			{/* 	> */}
			{/* 		{tooltip} */}
			{/* 	</span> */}
			{/* ) : null} */}
		</div>
	);
};

export default CustomToolTip;
