import NavBar from "../components/NavBar"

function Suggests() {
    return (
        <>
        <NavBar />
        <div className="flex justify-around h-screen w-full p-2 my-5">
            <form className="w-full max-w-lg mx-5">
                <div className="mt-10">
                    <h1 className="text-4xl font-bold my-5 ">Formulário de adição</h1>
                    <p class="text-md">Cadastre uma prática que é realizada em modalidade on-line.</p>
                    <p class="text-md">Após o preenchimento e envio os dados passarão por análise.</p>
                    <p className="text-md my-5"><strong>Somente práticas realizadas por sanghas legitimamente budistas serão aceitas.</strong></p>
                </div>  
                <hr class="md:w-80 w-100 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Nome da Sangha<span className="text-red-400">*</span>
                        </label>
                        <input className="bg-slate-800 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="grid-password" type="text" placeholder="" />
                    </div>
                </div>
        
                <div className="flex flex-wrap -mx-3 mb-6 gap-5 md:gap-0">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                            Veículo<span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select className="bg-slate-800 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8  rounded leading-tight focus:outline-none focus:border-gray-500" id="grid-state">
                                <option value="">Selecione</option>
                                <option value="theravada">Theravada</option>
                                <option value="mahayana">Mahayana</option>
                                <option value="vajrayana">Vajrayana</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Escola<span className="text-red-400">*</span>
                        </label>
                        <input className="placeholder:text-xs bg-slate-800 appearance-none block w-full border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: Zen (Soto)"  />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Prática realizada<span className="text-red-400">*</span>
                        </label>
                        <input className="placeholder:text-xs bg-slate-800 appearance-none block w-full border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: Zazen e Fala do Dharma"  />

                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6 gap-5 md:gap-0">
                    <div className="w-full md:w-2/5 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                            Dia <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select className="bg-slate-800 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="grid-state">
                                <option value="">Selecione</option>
                                <option value="dom">Domingo</option>
                                <option value="seg">Segunda</option>
                                <option value="ter">Terça</option>
                                <option value="qua">Quarta</option>
                                <option value="qui">Quinta</option>
                                <option value="sex">Sexta</option>
                                <option value="sab">Sábado</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
    
                    <div className="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Horário<span className="text-red-400">*</span>
                        </label>
                        <input className="placeholder:text-xs bg-slate-800 appearance-none block w-full text-center border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="time" placeholder="Ex.: Zen (Soto)"  />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                    <div className="flex items-center justify-around w-full h-30 md:w-1/5 px-3 mb-6 md:mb-0 align-middle">
                        <button type="button" className=" text-white w-200 w-full  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center mb-1 md:mr-0 "><span class="material-symbols-outlined">add</span></button>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Link para prática<span className="text-red-400">*</span>
                        </label>
                        <input className="placeholder:text-xs bg-slate-800 appearance-none block w-full border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: link de invite do Zoom ou link para canal onde ocorre a live da prática (e etc.)"  />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                        Email para contato (<span className="italic">opcional</span>)
                        </label>
                        <input className="placeholder:text-xs bg-slate-800 appearance-none block w-full border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Email da pessoa que está preenchendo o formulário"  />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Informações adicionais (<span className="italic">opcional</span>)
                        </label>
                        <textarea rows="8" className=" placeholder:text-slate-400 placeholder:text-xs bg-slate-800 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 " placeholder="Informações adicionais como divulgação da pagina oficial, endereço da sangha, etc."></textarea>
                    </div>
                </div>
               
                <div className="flex md:justify-end justify-center">
                <div className="flex flex-wrap -mx-3 mb-6 md:w-1/3 w-full">
                    <div className="flex row-auto w-full px-3 ">
                        <button type="button" className=" text-white w-200 w-full  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center mb-1 md:mr-0 "><span>Enviar</span></button>
                    </div>
                </div>
                </div>

            </form>
        </div>
        </>
    )
}

export default Suggests