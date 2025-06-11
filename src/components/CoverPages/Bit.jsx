import useGlobalStore from "../../store/global.store"

const Bit = () => {

    const { userData , selectedSem , selectedSub } = useGlobalStore();


    const getOrdinal = (num) => {
        const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
        return num + (suffixes[num] || 'th');
    };

    const sem = getOrdinal(selectedSem.index);

    return (
        <section className="flex flex-col m-auto items-center gap-8 h-full">
            <header className="flex flex-col items-center">
                <h1 className="text-4xl">Central Campus of Technology</h1>
                <div>
                    <img src="/CCT.png" alt="CCT_logo" />
                </div>
            </header>
            <section className="flex flex-col items-center gap-8">
                <div>
                    <h1 className="text-xl">
                        <span id="subName">{selectedSub}</span> LAB REPORT
                    </h1>
                </div>
                <div className="flex flex-col gap-4 items-center text-xl w-full">
                    <h1>SUBMITTED BY:</h1>
                    <div className="flex flex-col items-start text-xl gap-1 w-full">
                        <div className="flex gap-2 items-center w-full ">
                            <label>Name:</label>
                            <span
                                className="inline-block p-0 m-0"
                                >
                                {userData.studentName}
                            </span>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <label>Roll No:</label>
                            <span
                                className="inline-block p-0 m-0"
                            >
                                {userData.rollNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="text-xl flex flex-col gap-1">
                <p>
                    <span>{sem}</span> Semester Bachelor in Information Technology(BIT)
                </p>
                <p>
                    Submitted to: Department of Information Technology
                </p>
            </footer>
        </section>
    )
}

export default Bit