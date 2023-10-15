import { Button } from "./ui/button";
import {HiArrowNarrowRight} from "react-icons/hi"
import { SignUpButton } from "@clerk/nextjs";

const Feed = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-16 ">
            <h1 className="flex items-center text-5xl font-bold text-neutral-900 dark:text-white">Your ideas, Documents, &</h1>
            <h1 className="flex items-center text-5xl font-bold text-neutral-900 dark:text-white">Plans. Unified. Welcome</h1>
            <h1 className="flex items-center text-5xl font-bold text-neutral-900 dark:text-white">to <span className="flex items-center underline ml-4">Audtion</span>.</h1>
        <div className="flex items-center flex-col mt-3">
            <h1 className="flex items-center text-xl font-bold text-neutral-900 dark:text-white">Audtion is the connected workspace where</h1>
            <h1 className="flex items-center text-xl font-bold text-neutral-900 dark:text-white">better,faster work happens</h1>
            <SignUpButton mode="modal">
    
            <Button className="mt-7">Get Audtion Free <HiArrowNarrowRight className="ml-2" /></Button>
      </SignUpButton>
            
        </div>


        <div className="flex flex-row items-center justify-center mt-16">
            <img className="h-96 block dark:hidden" src="https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/public/documents.png?raw=true" alt="" />
            <img className="h-96 hidden dark:flex" src="https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/public/documents-dark.png?raw=true" alt="" />
            <img className="h-96 block dark:hidden" src="https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/public/reading.png?raw=true" alt="" />
            <img className="h-96 hidden dark:flex" src="https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/public/reading-dark.png?raw=true" alt="" />
        </div>
        </div>
    )
}

export default Feed;