import Button from "./components/Button"

function App() {

  return (
    <>
      <div className="w-[50%] flex">
        <Button
          variant="outline"
          borderRadius="rounded"
          width="full"
        >
          Click me
        </Button>
        <Button
        variant="default"
        width="full"
        size="large"
        borderRadius="default"
        >
        Click me
        </Button> 
      </div>
    </>
  )
}

export default App
