type ButtonProps = {
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return <button className={
        `bg-black 
        text-white 
        py-2 px-6
        rounded
        font-bold 
        transition ease-in-out duration-150
        active:scale-95 active:shadow-lg active:outline-none active:border-blue-500
        hover:bg-white hover:text-black
        border-2 border-black`
    } {...props} />
}