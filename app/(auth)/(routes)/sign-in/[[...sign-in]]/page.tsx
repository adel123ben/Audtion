import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="mt-40">
      <Navbar />
      <Feed />


      
        <Footer />
      
    </div>
  );
}