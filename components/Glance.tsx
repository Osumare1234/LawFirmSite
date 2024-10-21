"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { arrow, plant } from "@/public";
import { TextMask } from "@/animation";


export default function Glance() {
	const phrases = ["IPDC AT A GLANCE"];
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<section
			className="w-full"
			id="aboutUs">
			<div className="w-full flex flex-row-reverse justify-between gap-x-[30px] sm:flex-col-reverse xm:flex-col-reverse gap-y-[30px]">
				<div className="flex w-[60%] sm:w-full xm:w-full flex-col gap-y-[20px] padding-x justify-center p-5">
					<h1 className="text-[#343434] heading font-bold leading-normal tracking-wider">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[#676767] sub-heading font-normal leading-normal">
						IPDC Finance Limited previously known as Industrial{" "}
						<br className="block  sm:hidden xm:hidden" /> Promotion and
						Development Company of Bangladesh{" "}
						<br className="block  sm:hidden xm:hidden" /> Limited is the first
						private sector financial institution of{" "}
						<br className="block  sm:hidden xm:hidden" /> the country
						established in 1981 by a distinguished group of{" "}
						<br className="block  sm:hidden xm:hidden" /> shareholders namely
						International Finance Corporation{" "}
						<br className="block  sm:hidden xm:hidden" /> (IFC), USA, German
						Investment and Development{" "}
						<br className="block  sm:hidden xm:hidden" /> Company (DEG),
						Germany, The Aga Khan Fund for{" "}
						<br className="block  sm:hidden xm:hidden" /> Economic Development
						(AKFED), Switzerland, <br className="block  sm:hidden xm:hidden" />
						Commonwealth Development Corporation (CDC), UK and{" "}
						<br className="block  sm:hidden xm:hidden" /> the Government of
						Bangladesh
					</p>
					<Link
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						href={"/"}
						className="flex items-center w-max gap-x-[5px] group">
						<div className="flex flex-col">
							<p className="text-[#ED017F] sub-heading font-normal">
								Read more
							</p>
							<div
								className={`${
									hovered ? "w-full scale-100" : "w-0 scale-0"
								} origin-left mt-[2px]  transition ease-in duration-300 h-[2.5px] bg-[#ED017F] rounded-full`}
							/>
						</div>
						<Image
							src={arrow}
							alt="img"
							width={30}
							height={30}
							className="group-hover:translate-x-[3px] ease-in-out duration-200 transition-all"
						/>
					</Link>
				</div>
				<div className="w-[40%] sm:w-full xm:w-full">
					<Image
						src={plant}
						alt="img"
						width={800}
						height={400}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
