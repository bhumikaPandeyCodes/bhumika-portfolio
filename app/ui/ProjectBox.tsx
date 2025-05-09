import Image from "next/image"
import Link from "next/link"
import { Tag } from "../ui/tag"

interface IProjectBox{
    name: string,
    description: string,
    img: string, 
    techStack: string[],
    githubLink: string,
    websiteLink: string,
    videoLink: string
}

export default function ProjectBox ({name, description, img, techStack, githubLink, websiteLink, videoLink}:IProjectBox) {
    return (
        <div className="border-[1px] border-gray-100 bg-gray-600 flex flex-col items-center md:items-start md:flex-row gap-4 mx-auto p-5 font-krub my-5">
            <div className="w-[240px] h-[240px] md:w-[268px] md:h-[268px]">
              {/* img */}
              <Image 
              src={img}
              alt="project image"  
              width={268}
              height={268}
              className="object-cover "
              />
            </div>
            <div className="text-white w-[360px] flex flex-col justify-between">
              {/* name + about */}
              <div className="text-center md:text-start">
                <h1 className="text-lg md:text-2xl ">{name}</h1>
                <p className=" text-sm md:text-base mt-2 md:mt-4 ">{description}</p>
                <div className="text-sm mt-4 mb-2 grid grid-cols-[auto_1fr] gap-2"><p className="">Tech Stack:</p><p className="flex flex-wrap">{techStack.map((skill,id)=> {return <Tag skill={skill} key={id} size="sm" theme="dark"/>})}</p></div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <Link href={githubLink} target="_blank">
                    <Image 
                    alt="project1-github"
                    src="/github.png"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    />
                </Link>
                <Link href={websiteLink} target="_blank">
                    <Image 
                    alt="project1-link"
                    src="/link.png"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    />
                </Link>
                <Link href={videoLink} target="_blank">
                    <Image 
                    alt="video-link"
                    src="/video.png"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    />
                </Link>
              </div>

            </div>
        </div>
    )
}