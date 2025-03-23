import React from 'react'
import Link from 'next/link'


function HomeScreen() {

    return (
        <div>
            <div className='h-190 w-90 rounded-xl bg-[#FBFBFB] drop-shadow-xl border border-[#BCCCDC] flex justify-center items-end p-5' >
                <div className='flex flex-col' >
                <h1 className='text-3xl font-medium' >Welcome to PopX</h1>
                <p className='mt-2 mb-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illum!</p>
                
            <Link className='text-white font-medium rounded-md h-11 bg-[#6900FF] cursor-pointer flex justify-center items-center' href='/signup' >
            Create Account
            </Link>

            <Link className='text-black font-medium rounded-md h-11 bg-[#CABBE9] mt-3 mb-5 cursor-pointer flex justify-center items-center' href='/login' >
            Already Registered? Login</Link>
            </div>
            </div>
        </div>
    )
}

export default HomeScreen
