import CoverPage from "./components/CoverPage"
import Form from "./components/Form"

function App() {

  return (
    <main className="flex flex-col gap-4" >
      <Form />
      <div id="coverPage">
        <CoverPage />
      </div>
    </main>
  )
}

export default App
