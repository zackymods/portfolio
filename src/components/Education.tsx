import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Education
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2018-2025</p>
								<p className="my-1 font-medium sm:text-xl">FullStack Developer</p>
								<p className="my-1 text-sm font-medium">Autodidact</p>
								<p className="text-sm"></p>
							</div>
							<Image
								src="/autodidacta.png"
								alt="Autodidact Logo"
								width={100}
								height={100}
								title="Autodidact"
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>

					
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left cascade>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2019-2024</p>
								<p className="my-1 text-xl font-medium">IPEM 206 Fernando Fader</p>
								<p className="my-1 text-sm font-medium">Degree in social sciences</p>
								<p className="text-sm">Completion: 100% </p>
							</div>
							<div className="block">
								<Image
									src="/i206.png"
									alt="IPEM 206 Fernando Fader Logo"
									width={100}
									title="IPEM 206 Fernando Fader"
									height={100}
									onClick={() => {
										window.open('https://ipem206fernandofader.edu.ar/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2025-2030</p>
								<p className="my-1 text-xl font-medium">Universidad Tecnológica Nacional</p>
								<p className="my-1 text-sm font-medium">Information systems engineer</p>
								<p className="text-sm">Completion: 0% </p>
							</div>
							<div className="block">
								<Image
									src="/utn.png"
									alt="UTN Logo"
									width={100}
									height={100}
									title="UTN Logo"
									onClick={() => {
										window.open('https://www.frc.utn.edu.ar/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
