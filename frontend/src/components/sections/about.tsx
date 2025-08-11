import { Clock, Handshake, Banknote, Video } from "lucide-react";

const features = [
	{
		icon: Clock,
		title: "Instant legal services",
		description:
			"Get agreements, contracts, NDAs, and other legal documents quickly with transparent, fixed pricing.",
	},
	{
		icon: Handshake,
		title: "Lawyer Matching System",
		description:
			"Connect with expert lawyers tailored to your specific legal needs for seamless support.",
	},
	{
		icon: Banknote,
		title: "Affordable subscriptions.",
		description:
			"Choose cost-effective plans for lawyers and clients with exclusive benefits and no hidden fees.",
	},
	{
		icon: Video,
		title: "Virtual consulting.",
		description:
			"Access expert legal advice and consultations anytime, anywhere, from the comfort of your home.",
	},
];

const About = () => {
	return (
		<section id="about" className="py-20 bg-background">
			<div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
				<div className="space-y-8">
					<div>
						<h2 className="text-4xl font-body font-semibold mb-6">
							What's{" "}
							<span className="text-primary">Turn2Law</span>{" "}
							?
						</h2>
						<p className="text-foreground/80 leading-relaxed font-body text-base">
							Turn2Law is a next-generation legal platform designed to simplify
							access to legal services for everyone. Whether you're facing an
							emergency, drafting critical documents, or seeking legal advice,
							Turn2Law connects you to trusted professionals and resources
							instantly. With features like on-demand lawyer matching, and a
							comprehensive resource library, Turn2Law bridges the gap between
							legal expertise and accessibility. Our mission is to make justice
							accessible, affordable, and efficient for individuals and businesses
							alike.
						</p>
					</div>
					<div className="relative h-56 bg-gray-600/20 rounded-2xl overflow-hidden">
						<div className="w-full h-full bg-gray-600/20 flex items-center justify-center text-white/70 text-base font-body">
							Image
						</div>
					</div>
				</div>
				<div className="space-y-6">
					{features.map((feature, index) => (
						<div key={index} className="flex items-start gap-4">
							<div className="bg-primary/10 p-3 rounded-xl mt-1 flex-shrink-0">
								<feature.icon className="w-6 h-6 text-primary" />
							</div>
							<div>
								<h3 className="text-xl font-body font-semibold text-white mb-2">
									{feature.title}
								</h3>
								<p className="text-foreground/60 font-body text-base leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
