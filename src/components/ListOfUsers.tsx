const people = [
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		image: 'https://bit.ly/33HnjK0',
	},
	{
		name: 'John Doe',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Tester',
		email: 'john.doe@example.com',
		image: 'https://bit.ly/3I9nL2D',
	},
	{
		name: 'Veronica Lodge',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: ' Software Engineer',
		email: 'veronica.lodge@example.com',
		image: 'https://bit.ly/3vaOTe1',
	},
	// More people...
]

export default function ListOfUsers() {
	return (
		<div className='h-screen bg-slate-700 p-3 '>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
					<div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
									>
										Name
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
									>
										Title
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
									>
										Status
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
									>
										Role
									</th>
									<th scope='col' className='relative px-6 py-3'>
										<span className='sr-only'>Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200 bg-white'>
								{people.map(person => (
									<tr key={person.email}>
										<td className='whitespace-nowrap px-6 py-4'>
											<div className='flex items-center'>
												<div className='size-10 shrink-0'>
													<img
														className='size-10 rounded-full'
														src={person.image}
														alt=''
													/>
												</div>
												<div className='ml-4'>
													<div className='text-sm font-medium text-gray-900'>
														{person.name}
													</div>
													<div className='text-sm text-gray-500'>
														{person.email}
													</div>
												</div>
											</div>
										</td>
										<td className='whitespace-nowrap px-6 py-4'>
											<div className='text-sm text-gray-900'>
												{person.title}
											</div>
											<div className='text-sm text-gray-500'>
												{person.department}
											</div>
										</td>
										<td className='whitespace-nowrap px-6 py-4'>
											<span
												className='inline-flex rounded-full bg-green-100 px-2
                      text-xs font-semibold leading-5 text-green-800'
											>
												Active
											</span>
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
											{person.role}
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
											<a
												href='#'
												className='text-indigo-600 hover:text-indigo-900'
											>
												Edit
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
