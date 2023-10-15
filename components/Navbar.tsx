import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { SignUpButton } from "@clerk/nextjs";

const Navbar = () => {
    return(
        <div className="flex items-center justify-between p-2  fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 z-10  dark:bg-neutral-950">
            <div className="flex items-center">
                <img className="h-28 ml-8 block dark:hidden" src="/logo.png" alt="" />
                <img className="h-28 ml-8 dark:block" src="/logo2.png" alt="" />
            </div>

            <div className="flex items-center space-x-3 gap-2 mr-7">
                <SignUpButton mode="modal">
                <h1 className="flex items-center text-sm cursor-pointer dark:text-white text-neutral-900 font-medium">Log in</h1>
                </SignUpButton>
                
                <Button className="flex items-center">Get Audtion Free</Button>
                <ModeToggle  />
            </div>
        </div>
    )
}

export default Navbar;