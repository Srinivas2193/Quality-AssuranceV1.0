import React from 'react';
import { Link } from 'react-router-dom';
export default function Header()
{

    return(
        <>
        <div>
        <h2 className='text-4xl text-center text-blue-400 mb-3 mt-3 hover:font-bold text-blue-700 ease-in duration-300 '>INSTOCKS..</h2>
         
            <br/>
            <ul className='flex bg-blue-300 text-2xl  gap-20 h-10'>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/feature1'>Feature1</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/feature2'>Feature2</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/feature3'>Feature3</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/about'>About</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/contact'>Contact Us</Link></li>


            </ul>
        </div>

        </>
    )
}