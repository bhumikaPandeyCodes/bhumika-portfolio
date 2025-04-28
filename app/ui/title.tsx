
export function Title({title}:{title: string}){
    return(
        <div className="my-1 py-1  bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
        </div>
    )
}