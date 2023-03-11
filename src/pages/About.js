import NavBar from "../components/NavBar"


function About() {
    return (
        <><NavBar />
        <div class="flex flex-wrap md items-center h-screen">
            <div class="w-full md:w-1/2 h-screen">
                <div class="lg:mx-32 md:mx-32 mx-5">
                <h1 class="text-5xl font-bold mt-16">Sobre</h1>
                    <div
                        class="description w-full sm: md:w-2/3 mt-16 text-lg"
                    >
                        
                        Nessa era de pós pandemia do corona vírus, muitas sanghas aderiram as práticas on-line, o que por sua vez abriu as portas para as pessoas que moram em cidades remotas onde não há templos nem locais fisicos de prática.
                        O Dharma Online surgiu como uma forma de disponibilizar o acesso as práticas on-line e tornar isso o mais acessível possivel.
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About