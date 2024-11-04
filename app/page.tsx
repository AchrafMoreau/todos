import { AddTask } from "./todos/addtask";
import prisma from "./lib/prisma";
import { Status } from "@prisma/client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import DisplayTask from "./todos/displaytask";
config.autoAddCss = false;
// enum Status{
//   Complited = "Complited",
//   New = "New",
//   Tomorrow = "Tomorrow",
//   Pending = "Pending",
// }
export interface TaskType{
    id: number;
    task: string;
    status: Status;
    desc: string;
    updated_at: Date;
    created_at: Date;
}

async function getTasks(){
    const tasks = await prisma.task.findMany({})
    return tasks
}
export default async function Home() {
    let tasks= []
    tasks = await getTasks()
  return (
    <main className="grid justify-center m-0 p-0 items-center h-[100vh] mx-12">
      <div className="mr-5 flex justify-end  m-0 p-0">
        <AddTask />
      </div>
      <table className="w-[80vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Task
                </th>
                <th scope="col" className="px-6 py-3">
                    Discription
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <DisplayTask elements={tasks} />
        </tbody>

      </table>
    </main>
  );
}
