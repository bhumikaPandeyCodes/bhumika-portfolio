import Link from "next/link";
import { GithubIcon } from "../ui/icons/github";
import { LinkedInIcon } from "../ui/icons/linkedIn";
import { TwitterIcon } from "../ui/icons/twitter";

export function Footer(){
    return(
        <footer className="w-full border-t-[1px] border-white py-2 grid grid-cols-10 grid-rows-1">
            <Link href="https://x.com/bhumiCodes" className="col-span-4 md:col-span-3 col-start-2 md:col-start-3 text-sm md:text-base"><p className="text-white ">Designed and Developed by Bhumika</p></Link>
            <div className="flex gap-2 col-span-2 col-start-7 ">
                    <Link href="https://x.com/bhumiCodes" className="p-2 rounded-full group hover:bg-gray-600 ">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bhumika-pandey-0a5901267/" className="p-2 rounded-full group hover:bg-gray-600 ">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://github.com/bhumikaPandeyCodes" className="p-2 rounded-full  group ">
                        <GithubIcon />
                    </Link>
            </div>
        </footer>
    )
}