"use client"
export default function NavItem({name}:{name:string}){
    return(
        <button onClick={() => {
            document.getElementById(`${name}`)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="opacity-80 transition-all hover:opacity-100 ease-in-out hover:font-semibold hover:cursor-pointer  "
          ><li>{name}</li></button>
    )
}