import type { NextPage } from 'next'
import Header from '../components/text/Header'
import Button from '../components/util/Button'
import Container from '../components/util/Container'
import InputBox from '../components/util/InputBox'
import Image from '../components/media/Image'
import LargeInputBox from '../components/util/LargeInputBox'
import NumberInput from '../components/util/NumberInput'

const Home: NextPage = () => {
    return <>
        <div className="flex flex-col items-center justify-center">
            <div className='flex gap-4 items-center justify-center p-6 flex-col'>
                <Header>GIG-1</Header>
                <div className='max-w-lg text-center'>
                    <p>Sunt dolor officia sint ipsum aliquip dolor fugiat duis. Ea nostrud ex reprehenderit ut. Exercitation ex occaecat reprehenderit est sit.</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center p-2 flex-col md:flex-row'>
                <InputBox placeholder='Write something...' />
                <NumberInput placeholder={'Words'}></NumberInput>
                <Button>Autocomplete</Button>
            </div>
            {/* <div className='flex justify-center md:w-96 md:h-96 p-2'>
                <Container>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <Image src='https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' alt='Generated image' />
                        <Image src='https://images.unsplash.com/photo-1484593068577-0b446a79ed33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsbXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='Generated image' />
                        <Image src='https://images.unsplash.com/photo-1598421740750-0761fdb75213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&w=1000&q=80' alt='Generated image' />
                        <Image src='https://images.unsplash.com/photo-1624973419141-739e19a26793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' alt='Generated image' />
                    </div>
                </Container>
            </div> */}
            <div className='flex justify-center md:w-96 md:h-96 p-2'>
                <LargeInputBox placeholder='This is where output of GIG-1 goes.' />
            </div>
        </div>
    </>
}

export default Home
