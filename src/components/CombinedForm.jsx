import Form from "./Form"
import Preview from "./Preview"

const CombinedForm = ({handleClick}) => {
    return (
        <section id="combinedForm" className="my-auto w-screen flex flex-col md:flex-row md:justify-evenly gap-20 md:gap-0 items-center" >
            <Form handleClick={handleClick} />
            <div className="flex flex-col gap-2 text-white font-bold text-center bg-black/25 rounded-sm border-white/45 border-1 p-5 box-border backdrop-blur-2xl shadow-xl" >
                <h2 className="text-lg font-bold border-b border-white/90 w-full text-center">Preview</h2>
                <Preview />
            </div>
        </section>
    )
}

export default CombinedForm;