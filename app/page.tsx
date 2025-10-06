import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalistPortfolio() {
	return (
		<main className="flex flex-col bg-gray-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column - Profile */}
				<div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 border-gray-800 md:flex h-full">
					<div className="mt-8">
					<ProfileSection/>
					</div>
				</div>

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-4 flex flex-col md:justify-center h-full">
					{/* Skills Section */}
					<div className="">
						<SkillsSection />
					</div>

					{/* Experience Section */}
					<div>
						<ExperienceSection />
					</div>
				</div>
			</div>
		</main>
	);
}
