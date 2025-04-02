import Button from "./components/Button"

function App() {

  return (
    <>
      <div className="w-[50%] flex">
        <Button
          variant="outline"
          borderRadius="rounded"
          size="md"
          width="auto"
          onClick={() => {
            console.log("clicked")
          }}
        >
          Click me
        </Button>
        <Button
        variant="primary"
        width="full"
        size="lg"
        borderRadius="default"
        >
        Click me
        </Button> 
      </div>
    </>
  )
}

export default App
