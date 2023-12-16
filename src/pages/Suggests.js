import NavBar from "../components/NavBar"
import { useState } from "react"

function EmptyFieldError(message="Preenchimento obrigatório") {
    return <p className="text-red-500 text-xs italic">{message}</p>
}

function Suggests() {

    const [sanghaName, setSanghaName] = useState("")
    const [vehile, setVehile] = useState("")
    const [school, setSchool] = useState("")
    const [practice, setPractice] = useState("")
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [dayAndHour, setDayAndHour] = useState([])
    const [practiceLink, setPracticeLink] = useState("")
    const [aditionalInformation, setAditionalInformation] = useState("")
    const [email, setEmail] = useState("")

    const WeekDays = {
        "seg": "Segunda-feira",
        "ter": "Terça-feira",
        "qua": "Quarta-feira",
        "qui": "Quinta-feira",
        "sex": "Sexta-feira",
        "sab": "Sábado",
        "dom": "Domingo"
    }

    console.log(aditionalInformation)

    const handleDeleteDayAndHour = (e, id) => {
        e.preventDefault()
        const updatedDayAndHourList = dayAndHour.filter((value) => value.id != id )
        setDayAndHour(updatedDayAndHourList)
    }

    const handleDayAndHour = () => {
        const practiceDayAndHour = {
            "id": dayAndHour.length > 0 ? dayAndHour[dayAndHour.length - 1].id + 1 : 0,
            "day": day,
            "hour": hour
        }
        const updatedDayAndHourList = [...dayAndHour, practiceDayAndHour]
        setDayAndHour(updatedDayAndHourList)
        setHour("")
    }

    console.log(dayAndHour)

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

                <div className="flex flex-row justify-between items-center"> 
                    <hr class="md:w-50 w-40 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                    <p className="uppercase  font-bold">Dados da sangha</p>
                    <hr class="md:w-50 w-40 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Nome da Sangha<span className="text-red-400">*</span>
                        </label>
                        <input onChange={(e) => setSanghaName(e.target.value)} value={sanghaName} maxLength={200} className="bg-slate-800 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="grid-password" type="text" placeholder="" />
                        { sanghaName ? "" : EmptyFieldError() }
                    </div>
                </div>
        
                <div className="flex flex-wrap -mx-3 mb-6 gap-5 md:gap-0">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                            Veículo<span className="text-red-400">*</span>
                        </label>
                        <div className="relative mb-3">
                            <select defaultValue={vehile} onChange={(e) => setVehile(e.target.value)} className="bg-slate-800 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8  rounded leading-tight focus:outline-none focus:border-gray-500" id="grid-state">
                                <option value="">Selecione</option>
                                <option value="theravada">Theravada</option>
                                <option value="mahayana">Mahayana</option>
                                <option value="vajrayana">Vajrayana</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        { vehile ? "" : EmptyFieldError() }
                    </div>
    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Escola<span className="text-red-400">*</span>
                        </label>
                        <input onChange={(e) => setSchool(e.target.value)} value={school} maxLength={100} className="placeholder:text-xs bg-slate-800 appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: Zen (Soto)"  />
                        { school ? "" : EmptyFieldError() }                        
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Prática realizada<span className="text-red-400">*</span>
                        </label>
                        <input onChange={(e) => setPractice(e.target.value)} value={practice} maxLength={200} className="placeholder:text-xs bg-slate-800 appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: Zazen e Fala do Dharma"  />
                        { practice ? "" : EmptyFieldError() }                        
                    </div>
                </div>
                
                <div className="flex flex-row justify-between items-center"> 
                    <hr class="md:w-50 w-40 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                    <p className="uppercase  font-bold">Dados da prática</p>
                    <hr class="md:w-50 w-40 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                </div>

                
                <div className="flex flex-wrap -mx-3 mb-6 gap-5 md:gap-0">
                    <div className="w-full md:w-2/5 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                            Dia <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select defaultValue={day} onChange={(e) => setDay(e.target.value)} className="mb-3 bg-slate-800 block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="grid-state">
                                <option selected value="">Selecione</option>
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
                        { day ? "" : EmptyFieldError() }                        
                    </div>
    
                    <div className="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Horário<span className="text-red-400">*</span>
                        </label>
                        <input value={hour} onChange={(e) => setHour(e.target.value)}className="placeholder:text-xs bg-slate-800 appearance-none block w-full text-center border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="time" placeholder="Ex.: Zen (Soto)"  />
                        { hour ? "" : EmptyFieldError() }
                    </div>

                    <div className="flex items-center justify-around w-full h-30 md:w-1/5 px-3 mb-6 md:mb-0 align-middle">
                        <button disabled={ day && hour ? false : true } onClick={() => handleDayAndHour() } type="button" className=" text-white w-200 w-full  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center mb-1 md:mr-0 "><span class="material-symbols-outlined">add</span></button>
                    </div>
                </div>

                {dayAndHour.length > 0 && (<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Dia
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Horário
                                </th>
                             
                                <th scope="col" class="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        { dayAndHour.map((value, i) => {
                            return (<tbody>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                
                                    <td class="px-6 py-4">
                                        {WeekDays[value.day]}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.hour}
                                    </td>
                                    <td class="px-6 py-4">
                                        <button href="#" onClick={(e) => handleDeleteDayAndHour(e, value.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><span class="material-symbols-outlined">delete</span></button>
                                    </td>
                                </tr>
                            </tbody>)
                        })}
                    </table>
                </div>)}

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Link para prática<span className="text-red-400">*</span>
                        </label>
                        <input maxLength={200} value={practiceLink} onChange={(e) => setPracticeLink(e.target.value)} className="placeholder:text-xs bg-slate-800 appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Ex.: link de invite do Zoom ou link para canal onde ocorre a live da prática (e etc.)"  />
                        { practiceLink ? "" : EmptyFieldError() }                        
                    </div>
                </div>
                
                <div className="flex flex-row justify-between items-center"> 
                    <hr class="md:w-50 w-20 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                    <p className="uppercase  font-bold">Informações adicionais</p>
                    <hr class="md:w-50 w-20 h-0.5 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                        Email para contato (<span className="italic">opcional</span>)
                        </label>
                        <input maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} className="placeholder:text-xs bg-slate-800 appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder:text-slate-400" id="grid-first-name" type="text" placeholder="Email da pessoa que está preenchendo o formulário"  />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                            Informações adicionais (<span className="italic">opcional</span>)
                        </label>
                        <textarea value={aditionalInformation} onChange={(e) => setAditionalInformation(e.target.value)} maxLength={500} rows="8" className=" placeholder:text-slate-400 placeholder:text-xs bg-slate-800 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 " placeholder="Informações adicionais como divulgação da pagina oficial, endereço da sangha, etc."></textarea>
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