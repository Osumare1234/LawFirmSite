import { TextMask } from "@/animation";
import { resultList } from "@/constants";


export default function Result() {
	const phrases = ["Our best results for the year"];

	return (
		<section className="w-full padding-y">
			<div className="flex flex-col gap-y-20 sm:gap-y-10 xm:gap-y-10">
				<div className="flex flex-col gap-y-[20px]">
					<h1 className="heading text-[#343434] font-bold leading-none text-center tracking-wider sm:text-left xm:text-left">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[16px] text-[#999] font-normal leading-[22px] text-center sm:text-left xm:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
						dapibus <br className="sm:hidden xm:hidden" />
						mattis vel feugiat erat tortor eleifend.
					</p>
				</div>
				<div className="w-full grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 xm:grid-cols-1 gap-x-[100px] gap-y-[20px]">
					{resultList.map((item, i) => (
						<div
							className="shadow-md rounded-md my-[10px] text-center sm:text-left xm:text-left p-[20px]"
							key={item.id}>
							{i === 0 ? (
								<h1 className="text-[#ED017F] text-[40px] font-bold leading-[43px]">
									{item.title}
								</h1>
							) : (
								<h1 className="text-[#343434] text-[40px] font-bold leading-[43px]">
									{item.title}
								</h1>
							)}
							<p className="text-[#676767] text-[16px] font-normal leading-[25px] uppercase tracking-[1px]">
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
