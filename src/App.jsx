import { useEffect, useRef, useState } from "react"
import CoverPage from "./components/CoverPage"
import useGlobalStore from "./store/global.store";
import { downloadWithH2PDF } from "./services/subject.services";
import NewForm from "./components/NewForm";
import Download from "./components/icons/Download";

function App() {

  const [ loading , setLoading ] = useState(false);
  const downloadRef = useRef();
  const { loadSemester } = useGlobalStore();
  const nodeRef = useRef();

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
      await new Promise(resolve => setTimeout(resolve , 100));
      downloadRef.current.style.opacity = 0;
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
        await loadSemester();
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }

    fetchSem();
  },[ loadSemester ])

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <main className="flex flex-col gap-4 items-center min-h-screen bg-neutral-300" >
      <div ref={downloadRef} className="p-3 rounded-full bg-gray-100 absolute opacity-0 -top-20 right-3 transition-all duration-700 ease-in " >
        <Download size={30} />
      </div>
      <NewForm handleClick={handleDownloadWithCanvas} />
      <div id="coverPage">
        <CoverPage nodeRef={nodeRef} />
      </div>
    </main>
  )
}

export default App
