"use client";
import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";
import { footerVarient } from "@/motion";
import { footerIcons, footerLinks } from "@/constants";
import { Magnetic } from "@/animation";
import { call } from "@/public";



export default function MFooter() {
	return (
		<motion.section
			variants={footerVarient}
			initial="hidden"
			whileInView="vissible"
			className="w-full overflow-hidden">
			<div className="flex justify-between py-[50px] gap-[50px] sm:flex-col xm:flex-col">
				<div className="flex justify-between flex-col gap-y-[20px]">
					<div className="flex-col flex">
						<h1 className="text-[#010101] text-[22px] font-semibold leading-none mb-[15px]">
							About the company
						</h1>
						<p className="text-[#676767] text-[16px] sm:text-[14px] xm:text-[14px] leading-normal font-normal">
							Learn To Love Growth <br /> And Change And You Will <br /> Be A
							Success. Microsoft <br /> Patch
						</p>
					</div>
					<div className="flex gap-[10px] items-center">
						{footerIcons.map((item) => (
							<Magnetic key={item.id}>
								<Link href={item.link}>
									<Image
										src={item.img}
										alt="img"
										width={25}
										height={25}
										className="w-auto h-auto object-cover"
									/>
								</Link>
							</Magnetic>
						))}
					</div>
				</div>
				<div className="flex justify-between gap-[80px] flex-wrap">
					{footerLinks.map((item, i) => (
						<div
							className="flex flex-col gap-y-[10px] sm:w-[80px] xm:w-[80px]"
							key={item.id}>
							<div className="flex items-center">
								{i === 3 && (
									<Image
										src={call}
										alt="img"
										width={20}
										height={20}
										className="object-cover w-auto h-auto mt-[-13px] mr-[7px]"
									/>
								)}
								<h1 className="text-[#363940] text-[22px] font-semibold leading-none mb-[15px]">
									{item.title}
								</h1>
							</div>
							{item.links?.map((item) => (
								<Link
									href={item.link}
									key={item.id}>
									<p className="text-[#676767] text-[16px] sm:text-[14px] xm:text-[14px] font-normal hover:text-[#363940] transition-all ease-in-out duration-[500] leading-normal">
										{item.title}
									</p>
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
