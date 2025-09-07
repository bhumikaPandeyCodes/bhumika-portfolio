import ProjectBox from "../ui/ProjectBox"
import { Title } from "../ui/title"
export default function Projects () {

  const skills1 = ["Reactjs", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind"]
  const skills2 = ["Reactjs", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind"]
  const skills3 = ["Reactjs", "WebSocket" ,"Typescript", "Tailwind"]
  const skills4 = ["Reactjs","Typescript", "Tailwind"]
  const skills5 = ["Next.js", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind"]
  const skills6 = ["Next.js", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind","Razorpay", "cloudinary"]
  const skills7 = ["Next.js", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind", "Razorpay", "aws S3"]


  return (
    <section className="h-full w-screen flex flex-col items-center " id="Projects">
        <Title title="Projects"/>
      <ProjectBox img="/project1.png"name="Flicker: Dating webapp" description="Flicker is a full-stack dating app featuring user authentication, profile creation, swiping, matching, and real-time messaging. Designed a dynamic, responsive UI for a smooth user experience across devices."
       techStack={skills1} githubLink="https://github.com/bhumikaPandeyCodes/flicker" websiteLink="https://flicker-date.vercel.app/" videoLink="https://drive.google.com/file/d/16_wT8cDHYx8cfRQEFa90k6Pq8LXw1Bax/view"/>
      <ProjectBox img="/project21.png"name="Recall - Create Personal Organiser" description="Recall lets users create a personal space to save, organize, and manage important social media posts, links, and videos. It also allows users to collaborate by sharing spaces with others, making content organization seamless and accessible."
       techStack={skills2} githubLink="https://github.com/bhumikaPandeyCodes/recall" websiteLink="https://recall-second-brain.vercel.app/" videoLink="https://drive.google.com/file/d/1n9l6HOM2yxf7kMwggzna3iQ8pv58-8mD/view"/>
      <ProjectBox img="/project3.png"name="ChatSpace - Join Chat Rooms" description="Built a real-time chat application where users can create chat rooms, generate a unique room code, and share it with friends to join instantly. Enables smooth group conversations using room-based connections."
       techStack={skills3} githubLink="https://github.com/bhumikaPandeyCodes/space-chat" websiteLink="https://chat-space-id7f.onrender.com/" videoLink="https://drive.google.com/file/d/1-XgO8WlDHdRnQFdLaWDSGyQEeBX7oP9h/view"/>
       
        {/* Internship projects */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Client Projects at CMTAI</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Projects I have worked on for clients during my time at CMTAI.</p>
        </div>

      <ProjectBox img="/project5.png"name="A-S Textiles - buy Premium Handloom" description="Created a handloom e-commerce website for an India-based seller using React.js, Tailwind CSS, and TypeScript. Implemented features for product exploration, search functionality, and a quotation system where users can specify item quantities.."
       techStack={skills4} githubLink="" websiteLink="https://a-s-textiles-rho.vercel.app/" videoLink=""/>
      <ProjectBox img="/project4.png"name="Grow UP - work from home for everyone" description="Developed a lead management website using Next.js, TypeScript, Node.js, and MongoDB. Enabled CSV upload of user data, where teams can track client transaction IDs, generate new leads, and earn rewards based on the number of leads created."
       techStack={skills5} githubLink="" websiteLink="https://www.ingrowup.in/" videoLink=""/>
      <ProjectBox img="/project6.png"name="RMHSE - Trust" description="Developed a membership platform with a built-in digital wallet system using [your stack]. Implemented user registration with fee-based signup, automatic ID assignment, referral hierarchy tracking, and wallet functionality allowing users to earn and withdraw money."
       techStack={skills6} githubLink="" websiteLink="https://www.rmhse.org/" videoLink=""/>

      <ProjectBox img="/project7.png"name="Gullnaaz - Jewellery Ecommerce" description="Built a full-stack jewellery e-commerce website for men and women using Next.js, Node.js, and MongoDB. Implemented secure payments with Razorpay, a complete order management system, and real-time order tracking functionality."
       techStack={skills7} githubLink="" websiteLink="https://luv-kush-jewelry-fe.vercel.app/" videoLink=""/>
    </section>
  )
}
