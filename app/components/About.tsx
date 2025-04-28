import { Tag } from "../ui/tag"
import { Title } from "../ui/title"

export function About(){
    return(
        <section className="h-screen flex flex-col justify-center items-center gap-20 " id="About">
            <div className="flex flex-col justify-center items-center">
                <Title title="About"/>
                <p className="relative text-white flex flex-wrap max-w-[520px] my-4 text-sm md:text-md pt-2 pb-4">
                    I am a full stack developer skilled in building scalable web applications from India. 
                    <br/><br/>
                    I have completed my Bachelor's of Computer Application from GGSIPU.
                    <br/><br/>
                    I specialize in turning ideas into fully functional web applications and pixel-perfect user interfaces. I can help bring your vision to life with clean, efficient code.
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent h-[1px] w-3/4 mx-auto"></span>
                </p>
            </div>
            
        </section>
    )
}