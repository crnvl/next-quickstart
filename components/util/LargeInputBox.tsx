type LargeInputBoxProps = {
    placeholder: string
}

export default function LargeInputBox({ placeholder }: LargeInputBoxProps) {
    return (
        <textarea className={
            `resize-none
            py-2 px-6
            font-bold 
            border-2 border-black
            rounded
            focus:outline-none focus:border-blue-500
            transition ease-in-out duration-150
            w-80 h-80 md:w-96 md:h-96`
        } placeholder={placeholder} disabled/>
    )
}