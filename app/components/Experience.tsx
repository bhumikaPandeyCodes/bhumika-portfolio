import { Title } from "../ui/title"

export function Experience(){
    return(
        <section className="h-screen flex flex-col justify-center items-center gap-20 " id="Experience">
            <div className="flex flex-col justify-center items-center">
                <Title title="Experience"/>
                
                <div className="relative max-w-[520px] w-full my-4 text-sm md:text-base pt-2 pb-4 text-white">

                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-bold">Full Stack Developer</h3>
                            <p className="text-gray-400 text-xs md:text-sm">June 2025 - Present</p>
                        </div>
                        <p className="text-gray-300">CMTAI - (Full-time)</p>
                        <p className="text-gray-400 mt-2 text-xs md:text-sm">
                            Gained hands-on experience with advanced technologies including Next.js for full-stack development, AWS S3 for cloud storage, and Razorpay for payment gateway integration.
                        </p>
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-bold">Bachelor of Computer Application</h3>
                            <p className="text-gray-400 text-xs md:text-sm">2021 - 2024</p>
                        </div>
                        <p className="text-gray-300">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                        <p className="text-gray-400 mt-2 text-xs md:text-sm">
                            Relevant Coursework: Web Development, Database Management Systems (DBMS), Data Structures & Algorithms (DSA), Operating Systems, and Computer Networking.
                        </p>
                    </div>

                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent h-[1px] w-3/4 mx-auto"></span>
                </div>
            </div>
            
        </section>
    )
}
