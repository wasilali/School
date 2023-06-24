import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
const [open,setOpen]=useState(false)
console.log(open);
  return (
    <>
        <div className="container-fluid">
        <header>
            <div className={`${open?"bg-black w-full":"w-full bg-[#009688]"}`}>
                <div className="banner ">
                    <div className="logo px-2 mt-2 lg:mt-[1.6rem]"> Kidz<span className="text-[yellow]">First</span></div>
                <nav className=" hidden lg:flex">
                    <ul>
                        <li><Link to={"/"} className="a">Home</Link></li>
                        <li><Link to="/school-directory" className="a">School Diectory</Link></li>
                        <li><Link to={"/educationa-resources"} className="a">Educational Resources</Link></li>
                        <li><Link to={"/news-and-updates"} className="a">News and Update</Link></li>
                        <li><Link to={"/contact"} className="a">Contact Us</Link></li>
                        <li><Link to={"/login"} className="button text-secondary">Sign In</Link></li>

                        
                    </ul>
                </nav>
                <div className=' flex flex-col lg:hidden'>
                <div>
                {open?
                <CloseIcon
                style={{color:"white",
                margin:".1rem 1rem",
                fontSize:"3rem",
                marginLeft:open?"10rem":""
            }}
                onClick={()=>{
                    setOpen(!open)
                }}
                />
                :<MenuIcon 
                style={{color:"white",
                margin:".1rem 1rem",
                fontSize:"3rem",
                marginLeft:open?"10rem":""
            }}
                onClick={()=>{
                    setOpen(!open)
                }}
                />}

                </div>
                <div className=' z-50'>
                    {open&&  <ul className='lg:hidden flex flex-col bg-[black] rounded-[2rem] px-10 mt-[1rem] -ml-16'>
                        <li className='mt-[.5rem]' ><Link to={"/"} className="a text-white">Home</Link></li>
                        <li className='mt-[.5rem]'><Link to={"/educationa-resources"} className="a text-white">SchoolDiectory</Link></li>
                        <li className='mt-[.5rem]'><Link to={"/educationa-resources"} className="a text-white">EducationalResources</Link></li>
                        <li className='mt-[.5rem]'><Link to={"/news-and-updates"} className="a text-white">NewsandUpdate</Link></li>
                        <li className='mt-[.5rem]'><Link to={"/contact"} className="a text-white">ContactUs</Link></li>
                        <li className='mt-[1rem] mb-6'><Link to={"/login"} className="button cursor-pointer">SignIn</Link></li>

                        
                    </ul>}
                </div>
                </div>
                </div>

            </div>
        </header>
    </div>
    </>
  )
}

export default Navbar