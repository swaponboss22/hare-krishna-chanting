import ThemeSwitchToggle from "./shared-components/ThemeSwitchToggle.jsx";

function NavBar() {
    return (<div className={'bg-white shadow-lg'}>
        <div className={'container mx-auto  h-[100px] flex items-center justify-between'}>
            <h3 className="text-2xl font-bold">Hare Krishna</h3>
            <nav>
                <ul className={'flex items-center gap-4 font-bold text-gray-800'}>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li><ThemeSwitchToggle></ThemeSwitchToggle></li>
                </ul>
            </nav>
        </div>
    </div>)
}

export default NavBar
