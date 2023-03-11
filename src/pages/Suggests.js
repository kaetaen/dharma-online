import NavBar from "../components/NavBar"

function Suggests() {
    return (
        <>
        <NavBar />
        <div class="flex flex-wrap md items-center h-screen">
            <div class="w-full md:w-1/2 h-screen">
                <div class="lg:mx-32 md:mx-32 mx-5">
                <h1 class="text-5xl font-bold mt-16">Sugestões</h1>

                    <div
                        class="description w-full sm: md:w-2/3 mt-16 text-lg"
                    >
                        Nossa lista de sanghas com atividade online é criada de modo comunitário, ajude sugerindo novas sanghas para adicionarmos a lista  
                    </div>
                    <div
                        class="description w-full sm: md:w-2/3 mt-16  text-lg"
                    >
                        Para enviar uma sugestão envie um email para <strong>dharmaonlinebrasil@gmail.com</strong> com o assunto "Sugestão".
                        <p>O corpo do email deve conter:</p>
                        <br/>
                        <ul type="circle">
                           <li>- Nome da sangha</li>
                           <li>- Prática realizada</li>
                            <li>- Escola</li>
                            <li>- Dia(s) e horário(s) da prática online</li>
                            <li>- Link de acesso</li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Suggests