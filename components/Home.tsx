"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Sticky } from "@/animation";
import Hero from "./Hero";
import Experience from "./Experience";
import Partner from "./Partner";
import Glance from "./Glance";
import Services from "./Services";
import Result from "./Result";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";


export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div className="sm:hidden xm:hidden flex">
				<Sticky />
			</div>
			<div className="w-full">
				<div className="padding-x">
					<Hero />
				</div>
				<div className="padding-x">
					<Experience />
				</div>
				<Partner />
				<Glance />
				<Services />
				<div className="padding-x">
					<Result />
				</div>
				<NewsLetter />
				<div className="padding-x">
					<Footer />
				</div>
			</div>
		</>
	);
}
