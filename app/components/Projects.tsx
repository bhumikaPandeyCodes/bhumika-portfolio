import ProjectBox from "../ui/ProjectBox"
import { Title } from "../ui/title"
export default function Projects () {

  const skills1 = ["Reactjs", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind"]
  const skills2 = ["Reactjs", "Nodejs", "Expressjs", "Mongodb", "Mongoose", "Typescript", "Tailwind"]
  const skills3 = ["Reactjs", "WebSocket" ,"Typescript", "Tailwind"]

  return (
    <section className="h-full w-screen flex flex-col items-center " id="Projects">
        <Title title="Projects"/>
      <ProjectBox img="/project1.png"name="Flicker: Dating webapp" description="Flicker is a full-stack dating app featuring user authentication, profile creation, swiping, matching, and real-time messaging. Designed a dynamic, responsive UI for a smooth user experience across devices."
       techStack={skills1} githubLink="https://github.com/bhumikaPandeyCodes/flicker" websiteLink="https://flicker-date.vercel.app/"/>
      <ProjectBox img="/project21.png"name="Recall - Create Personal Organiser" description="Recall lets users create a personal space to save, organize, and manage important social media posts, links, and videos. It also allows users to collaborate by sharing spaces with others, making content organization seamless and accessible."
       techStack={skills2} githubLink="https://github.com/bhumikaPandeyCodes/recall" websiteLink="https://recall-second-brain.vercel.app/"/>
      <ProjectBox img="/project3.png"name="ChatSpace - Join Chat Rooms" description="Built a real-time chat application where users can create chat rooms, generate a unique room code, and share it with friends to join instantly. Enables smooth group conversations using room-based connections."
       techStack={skills3} githubLink="https://github.com/bhumikaPandeyCodes/space-chat" websiteLink="https://chat-space-id7f.onrender.com/"/>
    </section>
  )
}

