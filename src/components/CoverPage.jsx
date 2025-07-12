import useGlobalStore from "../store/global.store.js"
import IT from "./CoverPages/IT.jsx"

const CoverPage = ({ nodeRef}) => {

  const { selectedField } = useGlobalStore();

  // swicth, incase I add more coverPages
   const renderCover = () => {
    switch (selectedField) {
      case 'bit':
        return <IT />;
      case 'csit':
        return <IT />;
      default:
        return <IT />;
    }
  };

  return (
    <main ref={nodeRef} className="A4 printable cover-wrapper m-auto flex flex-col absolute -top-[999rem] -left-[999rem] -z-[999] pointer-events-none " >
      {renderCover()}
    </main>
  )
}

export default CoverPage