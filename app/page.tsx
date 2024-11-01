import { AddTask } from "./todos/addtask";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 justify-center items-end h-[100vh] mx-12">
      <div className="mr-5 mb-5">
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
            <tr key="product-1" className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Change Status</button>
                    </div>
                </td>
            </tr>
        </tbody>

      </table>
    </main>
  );
}
