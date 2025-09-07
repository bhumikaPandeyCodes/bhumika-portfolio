"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import { Title } from "../ui/title"
import { TwitterIcon } from "../ui/icons/twitter"
import { LinkedInIcon } from "../ui/icons/linkedIn"
import { GithubIcon } from "../ui/icons/github"
import Link from "next/link"
export default function Hero(){
    return (
        <section className=" h-full my-20" id="Home">
            <div className="flex flex-col items-center justify-center ">
                <motion.div
                initial={{opacity: 0, y:50 }}
                animate={{opacity: 1, y:0 }}
                transition={{duration:0.4, ease: "easeInOut"}}
                className="md:w-[200px] md:h-[200px] w-[160px] h-[160px] relative">
                    <Image
                    src="/pfp.jpg"
                    alt="portfolio-image"
                    height={200}
                    width={200}
                    className="object-cover rounded-full shadow-[0px_4px_12px_#515151]"
                    />
                </motion.div>
                <div className="flex flex-col items-center mt-8 font-krub">
                    <h3 className="text-base md:text-lg font-medium text-gray-50">Hi My name is</h3>
                    <div className="relative">
                        <Title title="Bhumika Pandey"/>
                        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent h-[1px] w-3/4 mx-auto"></span>
                    </div>
                    <p className="mt-6 text-sm md:text-base text-gray-300  w-[360px] text-center">I&apos;m a <span className="font-semibold">full-stack web developer</span> building <span className="font-semibold">websites</span>, <span className="font-semibold">web designs</span> and <span className="font-semibold">mordern UIs</span></p>
                </div>
                <div className="flex gap-6 mt-3">
                    <Link href="https://x.com/bhumiCodes" target="_blank" className="p-2 rounded-full group transition-all hover:bg-gray-600 hover:duration-300 hover:-translate-y-1 ">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bhumika-pandey-0a5901267/" target="_blank" className="p-2 rounded-full group transition-all hover:bg-gray-600 hover:duration-300 hover:-translate-y-1 ">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://github.com/bhumikaPandeyCodes" target="_blank" className="p-2 rounded-full  group transition-all hover:bg-gray-600 hover:duration-300 hover:-translate-y-1 ">
                        <GithubIcon />
                    </Link>
                </div>
                <button className="mt-4 flex items-center justify-center hover:bg-gray-600 rounded-full h-8 w-8 cursor-pointer"
                 onClick={() => {
                    document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                    <Image 
                    src="/Vector.png" 
                    alt="down"
                    height={20}
                    width={16}
                    className=""
                    />
                </button>
            </div>
        </section>
    )
}
