import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://findvectorlogo.com/wp-content/uploads/2022/02/camp-chef-vector-logo-2022.png' alt='logo' className='h-20 cursor-pointer' onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Главная</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Предложения</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Авторизация</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
