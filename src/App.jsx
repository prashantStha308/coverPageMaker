import AppContent from "./AppContent";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Analytics />
      <AppContent />
    </>
  )
}

export default App
