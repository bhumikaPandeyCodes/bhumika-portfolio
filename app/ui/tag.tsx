
interface ITag{
    skill: string,
    theme: "dark" | "light",
    size: "sm" | "lg"
}
export function Tag({skill,theme, size}:ITag){
    const colorVariant = {
        "dark": "bg-gray-200 text-white",
        "light": "bg-gray-50 text-gray-600 hover:bg-gray-300"
    }
    const sizeVariant = {
        "sm": "px-1 py-[2px]",
        "lg": "px-2 md:py-1 "
    }
    const defaultStyle = "rounded-md mb-2 mr-1 cursor-default"

    return(
        <span className={`${colorVariant[theme]} ${sizeVariant[size]} ${defaultStyle}`}>{skill}</span>
    )
}