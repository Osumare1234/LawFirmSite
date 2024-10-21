interface buttonProps {
	title: string;
	className: string;
}
export default function Button({ title, className }: buttonProps) {
	return (
		<div>
			<button
				className={`rounded-[5px] px-[34px] py-[12px] text-[14px] font-medium leading-[20px] tracking-[0.8px] btn transition-all duration-200 ease-in-out ${className}`}>
				{title}
			</button>
		</div>
	);
}
