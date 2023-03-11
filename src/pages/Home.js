import { Link } from "react-router-dom";
import bg from '../assets/bg.jpg'
import NavBar from "../components/NavBar";

function Home () {
    return (
        <>
        <NavBar />
        <div className="image-background"  style={{ background: `url(${bg})`}}>
            <section class="bg-black bg-opacity-60 text-white">
                <div
                    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center h-screen"
                >
                    <div class="mx-auto max-w-3xl text-center">
                    <h1
                        class="bg-gradient-to-r from-red-300 via-green-500  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Dharma Online

                        <span class="sm:block"> Pratique com a sangha, remotamente. </span>
                    </h1>

                    <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        Seja você do zen budismo, terra pura, tibetano ou theravada. Pratique online de qualquer lugar com o Dharma Online.
                    </p>

                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                        class="block w-full rounded border border-red-500 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        to={"/sugestoes"} 
                        >
                        Faça uma sugestão
                        </Link>

                        <a
                        class="block w-full rounded border border-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        href="/about"
                        >
                        Sobre
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home