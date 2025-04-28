import NavItem from "./navItem";
export default function Navbar(){
    const components = ["Home", "About","Projects","Skills"]
    return (
        <nav className=" text-white ">
            <ul className="flex gap-8 justify-center bg-gray-600 w-[400px] py-2 rounded-full">
                {
                    components.map((item, id)=> {return <NavItem key={id} name={item} />})
                }
            </ul>
        </nav>
    )
}