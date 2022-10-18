type ContainerProps = {
    children: React.ReactNode
}

export default function Container(props: ContainerProps) {
    return <div className={
        `bg-white 
        text-black
        transition ease-in-out duration-150
        border-2 border-black
        rounded`
    }> {props.children} </div>
}