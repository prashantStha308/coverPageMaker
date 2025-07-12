import useGlobalStore from "../../store/global.store"

const IT = () => {

    const { userData, selectedSem, selectedSub , selectedField , fullFieldName } = useGlobalStore();


    const getOrdinal = (num) => {
        const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
        return num + (suffixes[num] || 'th');
    };

    const sem = getOrdinal(selectedSem.index);

    return (
        <section className=" m-auto text-black">
            <div className="flex flex-col m-auto items-center gap-8 h-full" >

                <header className="flex flex-col gap-8 items-center">
                    <h1 className="text-4xl font-black ">Central Campus of Technology</h1>
                    <div>
                        <img src="/CCT_2x.png" alt="CCT_logo" style={{width: '400px'}} />
                    </div>
                </header>

                <section className="flex flex-col items-center gap-8">
                    <div>
                        <h1 className="text-2xl font-extrabold">
                            <span id="subName">{selectedSub}</span> LAB REPORT
                        </h1>
                    </div>
                    <div className="flex flex-col gap-8 items-center text-xl w-full font-bold">
                        <h1>SUBMITTED BY:</h1>
                        {/* Student details */}
                        <div className="flex flex-col items-start text-xl gap-1 min-w-[50%]">
                            <div className="flex gap-2 ">
                                <label>Name:</label>
                                <span className="inline-block p-0 m-0 px-1">
                                    {userData.studentName}
                                </span>
                            </div>
                            <div className="flex gap-2 ">
                                <label>Roll No:</label>
                                <span className="inline-block p-0 m-0 px-1">
                                    {userData.rollNumber}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="text-xl flex flex-col gap-1 font-bold">
                    <p>
                        <span>{sem}</span> Semester { fullFieldName }({selectedField.toUpperCase()})
                    </p>
                    <p>
                        Submitted to: Department of Information Technology
                    </p>
                </footer>

            </div>
        </section>
    )
}

export default IT
