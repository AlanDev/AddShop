function Main (){
  return (
    <main className='[grid-area:main] bg-[#FFF2D8] relative'>
  <h1 className='text-4xl ml-4 mt-3 text-[#113946]'>Listado</h1>
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
  )
}

export default Main;