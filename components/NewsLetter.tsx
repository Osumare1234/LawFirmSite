import { TextMask } from "@/animation";
import Button from "./Button";


export default function NewsLetter() {
	const phrases = ["Newsletter"];

	return (
		<section className="w-full padding-y bg-[#FEF9FC] padding-x">
			<div className="flex flex-col gap-y-[10px] flex-wrap">
				<div className="flex flex-col gap-y-[10px]">
					<h1 className="heading text-[#343434] font-bold leading-none text-center tracking-wider sm:text-left xm:text-left">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[#999] text-[16px] font-normal leading-[22px] text-center sm:text-left xm:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Eget
						ac quis aliquam arcu lacus.
					</p>
				</div>
				<div className="flex items-center sm:items-start xm:items-start justify-center gap-[10px] sm:flex-col xm:flex-col">
					<div className="w-[350px]">
						<input
							type="email"
							placeholder="Your Email"
							className="py-[10px] px-[20px] w-full text-[#CCC] text-[16px] font-normal leading-[22px] rounded-[4px] border-[1px] border-[#CCC] outline-none"
						/>
					</div>
					<div className="sm:w-full xm:w-full sm:flex sm:items-start xm:flex xm:items-start">
						<Button
							title="SUBSCRIBE"
							className="bg-[#ED017F] text-white"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
