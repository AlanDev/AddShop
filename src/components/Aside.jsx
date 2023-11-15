import Config from "../utils/Config";

function Aside (){
  return (
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
                maxLength={20}

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
  )
}

export default Aside;