import Container from "../components/dashboard/Container"
import Search from "../components/search/Search"

const PrintLogs = () => {
	const dummy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	return (
		<Container title='Print Logs'>
			{ () => (
				<>
					<Search />
					<table
						style={{ height: "calc(100vh - 144.2px)" }}
						className='flex flex-col bg-white w-fill my-[18px] overflow-x-scroll rounded-tl-[12px] rounded-tr-[12px] shadow-sm'
					>
						<thead className="flex justify-between min-w-fit px-[30px] py-[20px] bg-bac2 text-bac">
							<tr className="w-full font-[700] text-[0.9rem] flex justify-between pr-[16px]">
								<td className="min-w-[200px]">Card Reference no.</td>
								<td className="min-w-[250px]">Customer's Name</td>
								<td className="min-w-[250px]">Printed By</td>
								<td className="min-w-[125px]">Date Printed</td>
								<td className="min-w-[125px]">Time Printed</td>
							</tr>
						</thead>
						<tbody className="flex flex-col min-w-fit bg-white text-bac overflow-y-scroll"
							style={{ height: "calc(100vh - 205.4px)" }}
						>
							{ dummy.map(dummy =>
								<tr className="w-full flex text-[0.8rem] justify-between border-[1px] px-[30px] py-[10px]">
									<td className="min-w-[200px]">202e69db-74a5-4862</td>
									<td className="min-w-[250px]">Ishaya Solomon - Your Zaddy</td>
									<td className="min-w-[250px]">Major General Chinonso - aka XYZ</td>
									<td className="min-w-[125px]">01/02/2056</td>
									<td className="min-w-[125px]">04:19pm</td>
								</tr>
							) }
						</tbody>
					</table>
				</>
			) }
		</Container>
	)
}

export default PrintLogs
