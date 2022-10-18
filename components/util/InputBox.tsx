type InputBoxProps = {
    placeholder: string
}

export default function InputBox({placeholder}: InputBoxProps) {
    return <input className={
        `bg-white 
        text-black 
        py-2 px-6
        rounded
        font-bold 
        transition ease-in-out duration-150
        border-2 border-black
        focus:outline-none focus:border-blue-500`
    }
    placeholder={placeholder}/>
}