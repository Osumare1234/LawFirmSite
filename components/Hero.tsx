import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { Magnetic, TextMask } from "@/animation";
import { call, car, hero, house } from "@/public";
import { footerIcons } from "@/constants";

export default function Hero() {
	const phrases = ["Chase Your Dream with us"];
	const phrases1 = ["Chase", "Your Dream", " with us"];
	return (
		<div className="w-full">
			<div className="w-full min-h-[90vh] flex justify-center flex-col sm:gap-y-[40px]">
				<h1 className="text-[#202020] uppercase tracking-wider heading font-bold sm:hidden xm:hidden flex">
					<TextMask>{phrases}</TextMask>
				</h1>
				<h1 className="text-[#202020] uppercase tracking-wider heading leading-none font-bold sm:block xm:block hidden mb-[20px]">
					<TextMask>{phrases1}</TextMask>
				</h1>
				<div className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col">
					<div className="w-[75%] sm:w-full xm:w-full bg-[#ffeaf5] relative rounded-[30px] h-full">
						<div className="w-full h-full flex items-center justify-center">
							<Image
								src={hero}
								alt="img"
								width={800}
								height={400}
								className="w-[70%] h-full object-cover"
							/>
						</div>
						<div className="bg-white px-[20px] h-[60px] sm:hidden xm:hidden flex items-center gap-x-[10px] absolute top-[10%] left-[-2%] shadow-lg rounded-full">
							<Image
								src={car}
								alt="img"
								width={30}
								height={30}
								className="w-[30px] h-[30px]"
							/>
							<p className="paragraph text-[#343434] font-bold leading-[22px]">
								Car Loans
							</p>
						</div>
						<div className="bg-white px-[20px] h-[60px] sm:hidden xm:hidden flex items-center gap-x-[10px] absolute bottom-[10%] right-[-2%] shadow-lg rounded-full">
							<Image
								src={house}
								alt="img"
								width={30}
								height={30}
								className="w-[30px] h-[30px]"
							/>
							<p className="paragraph text-[#343434] font-bold leading-[22px]">
								House Loans
							</p>
						</div>
					</div>
					<div className="sm:w-full xm:w-full w-[25%] h-full sm:gap-y-[40px]">
						<div>
							<p className="paragraph tracking-wider leading-[137%] text-[#676767] mb-[20px]">
								The path to achieving a goal is often laden with challenges and
								obstacles that test our determination and resilience. Each
								hurdle we overcome, each setback we navigate through, adds
								layers of satisfaction and fulfillment to our eventual success.
								<br />
								<br />
								The path to achieving a goal is often laden with challenges and
								obstacles that test our determination and resilience.
							</p>
							<div className="flex items-center gap-x-[15px]">
								<Button
									className="bg-[#ED017F] text-white"
									title="Apply Online"
								/>
								<Button
									className="text-black border border-black"
									title="Loan Caclulator"
								/>
							</div>
						</div>
						<div className="flex items-center gap-x-[30px] mt-[30px]">
							<div className="flex items-center gap-x-[10px]">
								<Image
									src={call}
									alt="img"
									width={25}
									height={25}
									className="w-[25px] h-[25px]"
								/>
								<p className="text-[#363940] paragraph font-semibold leading-[22px]">
									16519
								</p>
							</div>
							<div className="flex items-center gap-x-[10px]">
								{footerIcons.map((item) => (
									<Magnetic key={item.id}>
										<Link href={item.link}>
											<Image
												src={item.img}
												alt="img"
												width={25}
												height={25}
												className="w-[25px] h-[25px] object-cover"
											/>
										</Link>
									</Magnetic>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
