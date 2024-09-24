"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
const Footer = () => {
    const pathName =usePathname();
    if (pathName.includes('dashboard')) return (
        <div>
            <div className='bg-amber-200 text-black p-4'>Dashboard Footer</div>
        </div>
    )
    return (
        <div>
            <footer className="footer footer-center bg-base-300 text-base-content p-4 w-full bg-purple-800 text-center text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-[#ffffff]'>Auraloom By Hexa-Devs</span></p>
                </aside>
            </footer>
        </div>
    );
};
export default Footer;