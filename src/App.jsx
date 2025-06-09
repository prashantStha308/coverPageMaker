import { useEffect, useRef, useState } from "react"
import CoverPage from "./components/CoverPage"
import Form from "./components/Form"
import useGlobalStore from "./store/global.store";
import { downloadWithH2PDF } from "./services/subject.services";

function App() {

  const [ loading , setLoading ] = useState(false);
  const { loadSemester } = useGlobalStore();
  const nodeRef = useRef();


  const handleDownloadWithCanvas = async()=>{
    if( nodeRef.current !== null ){
      await downloadWithH2PDF(nodeRef.current);
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
    <main className="flex flex-col gap-4" >
      <Form />
      <button className="bg-neutral-200 rounded-sm cursor-pointer" onClick={handleDownloadWithCanvas} > Download with canvas </button>
      <div id="coverPage">
        <CoverPage nodeRef={nodeRef} />
      </div>
    </main>
  )
}

export default App
