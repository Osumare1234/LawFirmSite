"use client";
import { TextMask } from "@/animation";
import { servicsItems } from "@/constants";
import { arrow } from "@/public";
import Image from "next/image";


export default function Services() {
	const phrases = ["Our Services"];
	return (
		<section className="w-full padding-y bg-[#fce0ef27] padding-x">
			<div className="flex flex-col gap-y-20 sm:gap-y-10 xm:gap-y-10">
				<div className="flex flex-col gap-y-[20px]">
					<h1 className="heading text-[#343434] font-bold sm:text-left xm:text-left leading-none text-center tracking-wider">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[16px] text-[#999] font-normal leading-[22px] text-center sm:text-left xm:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
						dapibus mattis vel feugiat erat tortor eleifend.
					</p>
				</div>
				<div className="w-full flex sm:flex-col xm:flex-col items-center justify-center gap-x-10 gap-y-3">
					{servicsItems.map((item) => (
						<div
							className="flex flex-col gap-y-4"
							key={item.id}>
							<div className="w-[300px] sm:max-w-full xm:max-w-full h-[400px]">
								<Image
									src={item.img}
									alt={item.title}
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<div className="w-full flex justify-between items-center">
								<p className="text-[#363940] paragraph leading-normal font-semibold capitalize">
									{item.title}
								</p>
								<div className="p rounded-full flex items-center justify-center bg-[#fad7ec] group">
									<Image
										src={arrow}
										alt="img"
										width={35}
										height={35}
										className="group-hover:translate-x-[3px] ease-in-out duration-200 transition-all"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
