import { Tag } from "../ui/tag"

export function Skills(){
    const skills = ["HTML","CSS","Javascript","Bootstrap","Tailwind","Typescript","React.js", "Next.js", "Node.js", "Express.js", "Mongodb", "Mongoose","Postgres","Prisma", "s3", "cloudinary"]
    return(
        <div className="h-screen flex flex-col justify-center items-center " id="Skills">
                <div className=" py-1  bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 ">
                    <h1 className="text-5xl font-semibold">Skills</h1>
                </div>
                <div className="mt-8 max-w-[460px] flex flex-wrap gap-2 items-center justify-center">{skills.map((skill,id)=> <Tag key={id} skill={skill} size="lg" theme="light"/>)}</div>
        </div>
    )
}
