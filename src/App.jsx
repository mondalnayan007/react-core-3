
import './App.css'

function App() {

  const handleSubmit =(e)=>{
    e.preventDefault();
  
    const name  = e.target.name.value;
    const price  = e.target.price.value;
    const quantity  = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity
    }

    console.log(newProduct);
  }


  return (
    <>



      <div>

        <form onSubmit={handleSubmit} action="">
              <input type="text" name='name' placeholder='Product name' /> 
              <br />

              <input type="text" name='price' placeholder='price' />
              <br />
              <input type="text" name='quantity' placeholder='Enter Quantity' />
              <br />
              <button type="submit">Submit</button>
        </form>
      </div>


    </>
  )
}

export default App
