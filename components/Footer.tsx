const Footer = () => {
    return(
        <div className="mt-32 flex flex-row items-center p-2 justify-center">
           <div className="flex items-center">
                <img className="h-24 ml-8 block dark:hidden" src="/logo.png" alt="" />
                <img className="h-24 ml-8 dark:block" src="/logo2.png" alt="" />
            </div>

            <div className="flex flex-row items-center text-sm font-medium gap-2 space-x-3 text-gray-400">
                <h1 className="flex flex-row items-center">Private Ploicy</h1>
                <h1 className="flex flex-row items-center">By Adel Benmouhoub</h1>
            </div>
        </div>
    )
}

export default Footer;