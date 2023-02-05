import React, { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { logsDummyData } from "./logDummyData"

const Log = () => {
    const [logs, setLogs] = useState(logsDummyData)
    return (
        <section className="overflow-x-scroll">
            <div className=" flex justify-between items-center px-3 py-3 rounded-t-md">
                <h3>Card Stock Log</h3>
                <button className="flex justify-center items-center bg-bac text-white px-3 py-1 rounded-md">
                    <AiFillFolderAdd className="inline mr-2"/>
                    <span>Add New Log</span>
                </button>
            </div>
            <table
				style={{ height: "calc(100vh - 144.2px)" }}
				className='flex flex-col bg-white w-fill mb-[7px] overflow-x-scroll shadow-sm'
			>
				<thead className="flex justify-between min-w-fit px-[30px] py-[7px] bg-bac2 text-bac">
					<tr className="w-full font-[700] text-[0.9rem] flex justify-between pr-[16px]">
						<td className="min-w-[120px]">S/N</td>
						<td className="min-w-[250px]">Supplied by</td>
						<td className="min-w-[250px]">Received by</td>
						<td className="min-w-[125px]">Date</td>
						<td className="min-w-[125px]">Time</td>
						<td className="min-w-[150px]">Quantity Received</td>
					</tr>
				</thead>
				<tbody className="flex flex-col min-w-fit bg-white text-bac overflow-y-scroll"
					style={{ height: "calc(100vh - 205.4px)" }}
				>
					{ logs.map((log, index) => {
                        const {id, suppliedBy, receivedBy, date, time, quantity} = log;
                        return (
                            <tr className="w-full flex text-[0.8rem] justify-between border-[1px] px-[30px] py-[10px]">
							    <td className="min-w-[120px]">{index + 1}</td>
						        <td className="min-w-[250px]">{suppliedBy}</td>
						        <td className="min-w-[250px]">{receivedBy}</td>
						        <td className="min-w-[125px]">{date}</td>
						        <td className="min-w-[125px]">{time}</td>
						        <td className="min-w-[150px]">{quantity}</td>
						    </tr>
                        )
                    }
						
					) }
				</tbody>
			</table>
        </section>
    )
};

export default Log