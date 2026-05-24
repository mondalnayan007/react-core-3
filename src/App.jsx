
import './App.css'

function App() {

  const handleSubmit =()=>{
    console.log("form is submitting");
  }


  return (
    <>



      <div>

        <form onSubmit={handleSubmit} action="">
              <input type="text" placeholder='Enter  your name' />
              <button type="submit"></button>
        </form>
      </div>


    </>
  )
}

export default App
