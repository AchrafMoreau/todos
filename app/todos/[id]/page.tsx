'use client'

import axios, { AxiosRequestConfig } from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons/faPenAlt";
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function AddTask(){

    const { id } = useParams()
    const route = useRouter()
    const [value, setValue] = useState({
        task: "",
        desc: "",
        status: ""
    })

    useEffect(()=>{

        axios.get(`/api/tasks/${id}`)
            .then(({data}) => {
                setValue(data.data)
            })
            .catch((err) => console.log(err))

    },[])
    
    const handelChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const target = e.target as HTMLInputElement;
        setValue((prev)=> ({
            ...prev,
            [target.name] : target.value
        }))
    }
    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(value)
        
        const config: AxiosRequestConfig = {
            headers:{
                'Content-Type': 'application/json'
            },
            data:{
                task : value.task,
                desc : value.desc,
                status : value.status,
            }
        }
        axios.put(`/api/tasks/${id}`, config.data, config)
            .then(({data}) => {
                console.log(" task was update ")
                route.refresh()
                route.push("/")
            })
            .catch((err) => console.log(err))
        
    }

    return(
        <div 
            className="h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-slate-800  z-50 "
        >
            <div className="relative p-4 w-full max-w-md max-h-full ">
                <Link href='/' className="flex gap-3 mb-3">
                    <button className="btn">
                        <FontAwesomeIcon 
                            icon={faArrowAltCircleLeft} 
                            className="fas fa-check lg" 
                            style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </button>
                    <h2 className="font-bold">
                        Back
                    </h2>
                </Link>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Task
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handelSubmit}>
                            <div>
                                <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
                                <input 
                                    type="text" 
                                    name="task" 
                                    id="task" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                    placeholder="wanna do something" 
                                    value={value.task}
                                    onChange={handelChange}
                                    required 
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                <textarea 
                                    id="description" 
                                    name='desc'
                                    rows={4} 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    value={value.desc}
                                    onChange={handelChange}
                                    placeholder="Write product description here"
                                >
                                </textarea>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                <select 
                                    id="category" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    name="status"
                                    value={value.status}
                                    onChange={handelChange}
                                >
                                    <option selected value=""></option>
                                    <option value="Complited">Complited</option>
                                    <option value="Pending">Pending</option>
                                    <option value="New">New</option>
                                    <option value="Tomorrow">Hta Lghda</option>
                                </select>
                            </div>
                            <div className="footer mt-5 border-top-2">
                                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )
}