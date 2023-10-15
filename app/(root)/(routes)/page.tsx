"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import {AiOutlinePlusCircle} from "react-icons/ai"


const TestPage = () => {
    const {user} = useUser();
    return ( 
        <div className="flex flex-col items-center justify-center mt-7">
            <UserButton afterSignOutUrl="/" />
            <img className="h-96" src="https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/public/empty.png?raw=true" alt="" />
            <h2>welcome to {user?.fullName}&apos;s Audtion</h2>
            <Button className="mt-4"><AiOutlinePlusCircle className="mr-3" /> Create a note</Button>
        </div>
     );
}
 
export default TestPage;