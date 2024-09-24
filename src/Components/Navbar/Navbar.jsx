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
            <div className="navbar bg-base-100 my-4 font-montserrat text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <ul className="flex gap-5 ">
                                {
                                    links.map((link) => <Link className={`${pathName == link.path && 'text-[#ffffff] font-bold'}`} key={link.path} href={link.path} >{link.title}</Link>)
                                }
                            </ul>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl w-52">
                        <img src='https://i.ibb.co.com/ssjWYHm/logo.png' alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1"><ul className="flex gap-5 ">
                        {
                            links.map((link) => <Link className={`${pathName == link.path && 'text-[#ffffff] font-bold'}`} key={link.path} href={link.path} >{link.title}</Link>)
                        }
                    </ul></ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <Link href={"/register"} className="btn bg-transparent hover:bg-transparent border-0 text-white">Sign Up</Link>
                    <Link href={'/login'} className="btn rounded-full bg-white text-[#0B2F9F] hover:text-white">Log In</Link>
                </div>
            </div>
        </div>
    );
};
export default Navbar;


