import React from 'react'

function Nosotros() {
  return (
    <main className='w-5/6 mx-auto'>
        <h2 className='font-semibold text-3xl text-center my-10'>Nosotros</h2>
        <div className=' flex flex-col lg:flex-row items-center lg:gap-x-10'>
            <img className='w-full lg:w-1/2' src="https://i.ibb.co/599FpGR/pratik-bachhav-5p6-B2-SGx1qc-unsplash.jpg" alt="pratik-bachhav-5p6-B2-SGx1qc-unsplash" border="0" />
            <p className='text-lg py-10'>Piscium SRL es una empresa líder en el mercado de productos para la cocina y el hogar. Ofrecemos una amplia variedad de productos de alta calidad, incluyendo condimentos, frutos secos, avenas, bebidas y harinas. Todos nuestros productos son cuidadosamente seleccionados para garantizar que nuestros clientes reciban los mejores productos disponibles en el mercado. Nos esforzamos por brindar un servicio excepcional y una experiencia de compra satisfactoria para todos nuestros clientes. Además, nos enorgullecemos de ofrecer productos de origen sostenible y responsable. ¡Visítenos para descubrir cómo podemos mejorar su cocina y hogar con nuestros productos de calidad!</p>
        </div>
    </main>
  )
}

export default Nosotros