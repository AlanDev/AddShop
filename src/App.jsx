import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState([]);


  const handleClick = (e) => {
    e.preventDefault();

    if (!name || !description || !price) return alert('Todos los campos son obligatorios');
    else {
      const newProduct = { name, description, price };
      setProducts([...products, newProduct]);

      const newQuantities = [...quantities, 1];
      setQuantities(newQuantities);

      setTotal(total + parseFloat(price));
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
    setTotal(total + parseFloat(products[index].price));
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
      setTotal(total - parseFloat(products[index].price));
    }
  };


  return (

      <div id="app" className='relative h-screen bg-[#EAD7BB] text-[#113946]'>
        <aside className='[grid-area:aside] flex flex-col overflow-y-auto'>
          <h1 className='text-4xl font-semibold p-2 text-center'>Cargar producto</h1>

          <div className="container mx-auto">
            <form action="" className="mt-12">

              <h2 className="text-center text-xl">Nombre del producto</h2>
              <input type="text"
               placeholder="Nombre" 
               className="p-2 rounded mt-2 block mx-auto" 
               required 
               value={name}
                onChange={e => setName(e.target.value)}
                maxLength={15}

               />

              <h2 className="text-center mt-6 text-xl">Descripcion</h2>
              <input type="text" 
              placeholder="Descripcion" 
              className="p-2 rounded mt-2 block mx-auto" 
              required 
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={25}
              />

              <h2 className="text-center mt-6 text-xl">Precio</h2>
              <input type="number" 
              placeholder="Precio" 
              className="p-2 rounded mt-2 block mx-auto" 
              required 
              value={price}
              onChange={e => setPrice(e.target.value)} 
              min={0}
               />

              <button 
              className="text-center px-28 py-2 flex rounded mx-auto
               border-2 mt-8 text-[#113946] hover:bg-[#e0cdaf] 
               font-bold text-xl"
                type="submit"
                onClick={handleClick}
               >Agregar</button>

            </form>
          </div>
        </aside>

        <main className='[grid-area:main] bg-[#FFF2D8] relative'>
        <h1 className='text-4xl ml-4 mt-3 text-[#113946]'>Listado</h1>
        {products.length === 0 ? (
          <p className='text-3xl  ml-4 mt-12 text-[#113946] '>Tu carrito esta vacio!</p>
        ) : (
          <div className='inline-flex flex-wrap'>
            {products.map((product, index) => (
              <div key={index} className='bg-white m-4 shadow-md rounded-md pt-12 pb-12 w-[250px] text-center'>
                <h2 className='text-2xl font-semibold'>{product.name}</h2>
                <p className='text-zinc-400 mt-2 '>{product.description}</p>
                <p className='mt-2 text-black font-bold'>${product.price}</p>
                <div className='mt-4 flex justify-center items-center'>
                  <button onClick={() => handleDecrement(index)} className='bg-gray-300 px-3 py-1 rounded-md'>
                    -
                  </button>
                  <span className='mx-3'>{quantities[index]}</span>
                  <button onClick={() => handleIncrement(index)} className='bg-gray-300 px-3 py-1 rounded-md'>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

<div className='absolute top-0 right-0 border-2 border-[#113946]  m-3 rounded '>
    <button className='flex mx-auto'>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag inline-block " width="32" height="32" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
        <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
      </svg>
    </button>
    <p className='text-xl font-bold  p-2'>Total: ${total.toFixed(2)}</p>
  </div>
</main>

        <footer className='[grid-area:footer] bg-[#113946] text-[#EAD7BB] h-16 flex items-center justify-center'>
          <p className='text-center'>©Todos los derechos reservados</p>
        </footer>
        


      </div>
      
  )
}


export default App
