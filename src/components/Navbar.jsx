"use client"
import logo from '../img/logo.jpg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-light p-3 sticky top-0 z-50">       
        <div className="container-fluid">
            <div>
                <Image
                    src={logo}
                    alt="Logo"
                    width={110}
                    height={80}
                />
            </div>
            <h2 className="text-center text-success mb-3">Asistente de Salud</h2>
            <div>
                <Image
                    src={logo}
                    alt="Logo"
                    width={110}
                    height={70}
                />
            </div>
        </div>
        </div>
    )
};


export default Navbar;
