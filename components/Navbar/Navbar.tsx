"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { navVariants } from "@/motion";
import { logo, magnifier } from "@/public";
import Button from "../Button";
import { LinkHover, MobileNavbar } from "@/animation";
import { navLinks } from "@/constants";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.nav
				className="w-full flex items-center justify-between h-[10vh] padding-x sticky top-0 z-10 bg-white sm:hidden xm:hidden"
				variants={navVariants}
				animate={hidden ? "hidden" : "vissible"}>
				<div>
					<Image
						src={logo}
						alt="logo"
						width={100}
						className="w-[100px] object-cover"
					/>
				</div>
				<div className="flex gap-[10px] font-medium tracking-[1px] uppercase sm:hidden xm:hidden">
					{navLinks.map((item) => (
						<div key={item.id}>
							<Link
								href={"/"}
								className="text-[20px] font-medium text-[#676767]">
								<LinkHover>{item.title}</LinkHover>
							</Link>
						</div>
					))}
				</div>
				<div className="flex items-center gap-[25px] sm:hidden xm:hidden">
					<div>
						<Image
							src={magnifier}
							alt="magnifier"
							width={50}
							className="w-[25px] object-cover"
						/>
					</div>
					<Button
						title="iSERVICES"
						className="bg-[#ED017F] text-white"
					/>
				</div>
			</motion.nav>
			<MobileNavbar />
		</>
	);
}
