type HeaderProps = {
    children: React.ReactNode
}

export default function Header(props: HeaderProps) {
    return <h1 className={
        `text-black
        font-bold text-6xl`
    }> {props.children} </h1>
}