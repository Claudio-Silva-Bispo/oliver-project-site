
import imagem from '../../../public/assets/SocialMedia/logo3.png'

export default function SocialMedia(){
    return(

        <section className="bg-terceira">
            
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    
                    <img src="/assets/SocialMedia/logo3.png" alt="Logo da empresa" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    
                </div>

                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                    <h1 className="text-4xl font-bold leading-none sm:text-6xl text-white uppercase">Social Media
                    
                    </h1>

                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-white font-manrope">Explore our social media channels to dive deeper into our services, watch videos, and read customer feedback. Follow us for a closer look at what we offer!
                    </p>
                    
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start font-manrope">
                        
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-segunda text-white hover:bg-setima hover:text-black">Instagram</a>

                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded text-white hover:bg-white hover:text-black">Facebook</a>
                    </div>

                </div>
            </div>

        </section>

    );
}