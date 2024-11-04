'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons/faPenAlt";
import { TaskType } from "../page";
import { Status } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DisplayTask({elements}: {elements:TaskType[]}){
    const router = useRouter()

    const handelDelete = async (id:number)=>{
        console.log('deleted', )
        
        try {
            await axios.delete(`/api/tasks/${id}`);
            console.log("Task deleted successfully.");
        } catch (err) {
            console.error("Error deleting task:", err);
        }

        router.refresh()
    }

  
    return elements.map((elm:TaskType)=> (
        <tr key={elm.id as React.Key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {elm.id}
            </th>
            <td className="px-6 py-4">
                {elm.task}
            </td>
            <td className="px-6 py-4">
                {elm.desc}
            </td>
            <td className="px-6 py-4">
                {elm.status as unknown as Status}
            </td>
            <td className="px-6 py-4">
                <div className="flex gap-4 justify-center items-center">
                    <Link href={`/todos/${elm.id}`}>
                        <button className="btn">
                            <FontAwesomeIcon 
                                icon={faPenAlt} 
                                className="fas fa-check" 
                                style={{ color: "white" }}>
                            </FontAwesomeIcon>
                        </button>
                    </Link>
                    <button className="btn" onClick={() => handelDelete(elm.id)}>
                        <FontAwesomeIcon 
                            icon={faTrashAlt} 
                            className="fas fa-check" 
                            style={{ color: "red" }}>
                        </FontAwesomeIcon>
                    </button>
                </div>
            </td>
        </tr>
        )
    )

}