import { Title } from "../ui/title"

export function About(){
    return(
        <section className="h-screen flex flex-col justify-center items-center gap-20 " id="About">
            <div className="flex flex-col justify-center items-center">
                <Title title="About"/>
                <p className="relative text-white flex flex-wrap max-w-[520px] my-4 text-sm md:text-base pt-2 pb-4">
                    I am a full stack developer from India, skilled in building scalable web applications.
                    <br/><br/>
                    Currently, I am working full-time at CMTAI, where for the past 3 months, I have been developing a variety of full-stack projects for clients. I specialize in turning ideas into fully functional web applications and pixel-perfect user interfaces. I can help bring your vision to life with clean, efficient code.
                    <br/><br/>
                    I have completed my Bachelor's of Computer Application from GGSIPU.
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent h-[1px] w-3/4 mx-auto"></span>
                </p>
            </div>
            
        </section>
    )
}
