

export default function HomePage(){
    return(

        <section id="Home">
            
            <div className="bg-primeira">
                
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 pt-20">
                    
                    <h1 className="text-4xl font-orelega uppercase leading-none sm:text-6xl xl:max-w-3xl text-white">Welcome to Oliver Cleaning Services</h1>

                    <p className="mt-6 mb-8 text-xl text-white sm:mb-12 xl:max-w-3xl font-manrope">Professional Cleaning Solutions for Residential and Commercial Spaces</p>
                    
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl font-manrope">Let your home shine bright with our professional cleaning services. We offer thorough and reliable solutions tailored to your needs.</p>
                    
                    <div className="flex flex-wrap justify-center">
                        
                        <a href="#FormQuote" type="button" className="px-8 py-3 m-2 text-lg border rounded hover:bg-terceira hover:text-white font-manrope text-white">Quote</a>
                        
                        <a href="#Contact" type="button" className="px-8 py-3 m-2 text-lg border rounded hover:bg-terceira hover:text-white font-manrope text-white">Contact</a>

                    </div>

                </div>
            </div>
	        
            <div>
                <img src="/assets/Navbar/logo-empresa.png" alt="" className="w-3/6 mx-auto mb-36 -mt-20 rounded-lg shadow-md lg:-mt-40" />
            </div>

        </section>
    );
}