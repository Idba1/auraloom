"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
const Navbar = () => {
    const pathName = usePathname();
    // console.log(pathName);
    const router = useRouter();
    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Podcast Directory",
            path: '/podcast-directory'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "My Playlist",
            path: '/my-playlist'
        },
        {
            title: "Get Subscription",
            path: '/get-subscription'
        },
    ]
    const handlr = () => {
        router.push('/login');
    }
    if (pathName.includes('dashboard')) return (
        <div>
            <div className='bg-purple-200 text-black p-4'>Dashboard navbar</div>
        </div>
    )
    return (
        <div>
            <nav className="flex justify-between bg-purple-800 p-5">
                <h1 className='text-2xl font-bold'>Explore <span className='text-[#ffffff]'>NextJs</span></h1>
                <ul className="flex gap-5 ">
                    {
                        links.map((link) => <Link className={`${pathName == link.path && 'text-[#ffffff] font-bold'}`} key={link.path} href={link.path} >{link.title}</Link>)
                    }
                </ul>
                <button onClick={handlr} className='bg-white text-purple-800 px-5 py-2 rounded-sm hover:text-purple-950 hover:font-bold cursor-pointer'>login</button>
            </nav>
        </div>
    );
};
export default Navbar;