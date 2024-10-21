"use client";
import { LogoMarquee, TextMask } from "@/animation";
import { partnerList } from "@/constants";
import Image from "next/image";

export default function Partner() {
	const phrases = ["Business Partners"];

	return (
		<section className="w-full padding-y bg-[#fce0ef27]">
			<div className="flex flex-col gap-y-20 sm:gap-y-10 xm:gap-y-10">
				<div>
					<h1 className="heading text-[#343434] font-bold leading-none text-center">
						<TextMask>{phrases}</TextMask>
					</h1>
				</div>
				<div>
					<LogoMarquee baseVelocity={1.5}>
						{partnerList.map((item) => (
							<div
								className="w-[200px] h-[100px] flex"
								key={item.id}>
								<Image
									src={item.img}
									alt="asd"
									width={200}
									height={100}
									className="w-[200px] h-[100px]"
								/>
							</div>
						))}
					</LogoMarquee>
				</div>
			</div>
		</section>
	);
}
