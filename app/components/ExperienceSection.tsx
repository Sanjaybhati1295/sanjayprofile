const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Application Engineer 2',
			company: 'Amazon Seller Services Pvt. Ltd.',
			period: 'Feb 2022 - Present',
			highlights: 'Designed and delivered scalable Salesforce & AWS solutions (Telephony, AM Hub, CosmoConnect) improving seller management and compliance; led architecture, automation, and AI integrations to boost productivity and data security.',
		},
		{
			role: 'Consultant',
			company: 'Capgemini Pvt. Ltd.',
			period: 'Aug 2021 - Feb 2022',
			highlights: 'Managed full migration from Salesforce Classic to Lightning, ensuring seamless transition and improved user experience. Collaborated with stakeholders to analyze requirements and deliver Salesforce solutions that streamlined and optimized financial workflows.',
		},
		{
			role: 'Sr. Salesforce Developer',
			company: 'Dazeworks',
			period: 'April 2019 - Aug 2021',
			highlights: 'Led a team of developers across multiple Salesforce projects, providing strategic solutions to complex client challenges. Mentored and trained junior developers, fostering skill growth and ensuring high-quality deliverables.',
		},
		{
			role: 'Associate Developer',
			company: 'Ibirds Pvt. Ltd.',
			period: 'Dec 2016 - April 2019',
			highlights: 'Managed Salesforce security configurations to ensure data protection and compliance with best practices. Automated business processes with workflow tools and implemented Salesforce Communities to boost customer engagement.',
		},
	];

	return (
		<div className="py-6 bg-white bg-gray-900 px-6">
			<div className="space-y-4">
				<div>
					<h3 className="text-2xl font-semibold text-gray-900 text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
