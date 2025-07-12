// React
import { useEffect, useRef, useState } from "react"
// Store and Services
import useGlobalStore from "./store/global.store";
import { downloadWithH2PDF } from "./services/subject.services";
// Components
import CoverPage from "./components/CoverPage"
import CombinedForm from "./components/CombinedForm";
import Download from "./components/icons/Download";
import Loader from "./components/Loader.jsx";
import Footer from "./components/Footer.jsx";

function AppContent() {

  const [ loading , setLoading ] = useState(false);
  const downloadRef = useRef();
  const { loadFieldData } = useGlobalStore();
  const nodeRef = useRef();
  useEffect(() => {
    document.title = "Personalized Front Page Maker";
  }, []);

  const animateDownload = ()=>{
    if( downloadRef.current !== null ){
      downloadRef.current.style.opacity = 100;
      downloadRef.current.style.top = '2.5rem';
    }
  }

  const resetDownload = async()=>{
    if( downloadRef.current !== null ){
      downloadRef.current.style.opacity = 0;
      downloadRef.current.style.top = '-5rem';
    }
  }

  const handleDownloadWithCanvas = async( userObj )=>{
    if( nodeRef.current !== null ){
      animateDownload()
      await downloadWithH2PDF(nodeRef.current , userObj);
      resetDownload();
    }
  }

  useEffect(()=>{
    const fetchSem = async()=>{
      try {
        setLoading(true);
        await loadFieldData('bit');
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }

    fetchSem();
  },[ loadFieldData ])

  if(loading){
    return <Loader />
  }

  return (
    <main className="flex flex-col gap-36 md:gap-4 items-center min-h-screen bg-[#081e28] m-auto" >
      <div ref={downloadRef} className="p-3 rounded-full bg-gray-100 absolute opacity-0 -top-20 right-3 transition-all duration-700 ease-in " >
        <Download size={30} />
      </div>

      <div className="md:hidden"></div>
      <CombinedForm handleClick={handleDownloadWithCanvas} />
      <div className="md:hidden"></div>
      
      {/* Invisible to viewer */}
      <CoverPage nodeRef={nodeRef} />

      <Footer />
    </main>
  )
}

export default AppContent;
