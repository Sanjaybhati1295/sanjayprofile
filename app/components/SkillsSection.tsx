const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages & Frontend',
			items: ['Apex (Salesforce)', 'JavaScript', 'Basic Python', 'Lightning Web Components (LWC)', 'HTML', 'CSS', 'Bootstrap'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
				</svg>
			),
		},
		{
			category: 'Backend & Architecture',
			items: ['Salesforce Platform: Apex Triggers', 'Async Processing (Batch, Queueable, Schedulable)', 'REST & SOAP API Development & Integration', 'WebSocket servers',
				'System & Data Design', 'Integration Patterns', 'Event-Driven Architecture'
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Cloud & DevOps',
			items: ['Salesforce Cloud: Sales, Service, Experience Cloud', 
				'AWS: Lambda, S3, API Gateway, CloudFront, ALB, Route 53, IAM, Bedrock, Transcribe, Redshift, Step Functions', 
				'CI/CD Pipelines (GitHub Actions, Brazil CDK, CloudFormation)',
				'Security & Compliance: IAM Policies, GDPR workflows, PII data handling'
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
		{
			category: 'Other',
			items: ['Agile & Scrum', 'Sprint Planning', 'Git & GitHub (version control & deployments)', 'Monitoring & Logging (CloudWatch, PM2)'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		}
	];

	return (
		<div className="py-6 bg-white bg-gray-900 px-6">
			<div className="space-y-4">
				<div>
					<h3 className="text-2xl font-semibold text-gray-900 text-white text-center md:text-left">Core Skills</h3>
					<div className="h-px w-full bg-gray-200 bg-gray-700 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-200"><b>{skillGroup.category}</b></h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 bg-gray-800 text-gray-700 text-gray-300 rounded-full ring-1 ring-gray-200 ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
