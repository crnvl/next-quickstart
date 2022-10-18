type NumberInputProps = {
    placeholder: string
}

export default function NumberInput({ placeholder }: NumberInputProps) {
    return <input className={
        `bg-white 
        text-black 
        py-2 px-6
        rounded
        font-bold 
        transition ease-in-out duration-150
        border-2 border-black
        focus:outline-none focus:border-blue-500
        w-20 md:w-32`
    }
    placeholder={placeholder}
    type='number'/>
}