import Link from "next/link"

const Header = () => {
    return (
        <div className="w-5/6 flex items-center  justify-between py-2 my-4 mx-auto">
            <Logo />
            <div className="flex items-center space-x-4">
                {
                    menuItems.map(item => (
                        <Link key={item.id} href={item.link} className="text-slate-800 mx-4">{item.name}</Link>
                    ))
                }
            </div>

            <button className="bg-violet-600 text-center border-2 border-transparent text-white px-4 py-2 rounded-md ">Try For Free</button>
        </div>
    )
}

const menuItems = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Pricing", link: "#" },
    { id: 3, name: "About", link: "#" },
    { id: 4, name: "Contact", link: "#" }
]

const Logo = () => {
    return <h3 className="font-semibold text-lg"> <span className="font-bold text-3xl text-violet-600">T</span>icket <span className="text-3xl font-bold text-violet-600">R</span>ail</h3>

}

export default Header