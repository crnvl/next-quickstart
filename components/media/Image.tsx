type ImageProps = {
    src: string
    alt: string
}

export default function Image(props: ImageProps) {
    return <img src={props.src} alt={props.alt} className={
        `aspect-square
        object-cover
        p-2
        rounded-xl`
    } />
}