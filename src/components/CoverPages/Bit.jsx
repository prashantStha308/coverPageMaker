const Bit = () => {
  return (
    <section className="flex flex-col m-auto items-center gap-8 h-full" >
        <header className="flex flex-col items-center" >
            <h1 className="text-4xl "> Central Campus of Technology </h1>
            <div>
                <img src="/CCT.png" alt="CCT_logo" className="w-xl" />
            </div>
        </header>
        <section className="flex flex-col items-center gap-8" >
            <div>
                <h1 className="text-xl" > <span id="subName"> YOUR SUBJECT </span> LAB REPORT </h1>
            </div>
            <div className="flex flex-col gap-4 items-center text-xl " >
                <h1>SUBMITTED BY:</h1>
                <div className="flex flex-col items-start text-xl gap-1" >
                    <p> Name: <span>Prashant Shrestha</span>  </p>
                    <p> Roll No: <span> 19 </span> </p>
                </div>
            </div>
        </section>
        <footer className="text-xl flex flex-col gap-1" >
            <p>
                <span>Nth Semester</span> Bachelor in Information Technology(BIT)
            </p>
            <p>
                Submitted to: Department of Information Technology
            </p>
        </footer>
    </section>
  )
}

export default Bit