
import Bit from "./CoverPages/Bit"

const CoverPage = ({nodeRef}) => {
  return (
    <main ref={nodeRef} className="A4 printable cover-wrapper m-auto flex flex-col absolute -top-[999rem] -left-[999rem] -z-[999] pointer-events-none " >
        <Bit />
    </main>
  )
}

export default CoverPage