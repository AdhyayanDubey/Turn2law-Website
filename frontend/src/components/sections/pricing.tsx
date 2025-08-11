import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
	{
		name: "Free",
		price: "₹0",
		features: [
			"Feature one",
			"Feature two",
			"Feature three",
			"Feature four",
			"Feature five",
		],
		isPopular: false,
		buttonText: "Subscribe",
	},
	{
		name: "Essential",
		price: "₹50",
		features: [
			"Feature one",
			"Feature two",
			"Feature three",
			"Feature four",
			"Feature five",
			"Feature six",
		],
		isPopular: true,
		buttonText: "Subscribe",
	},
	{
		name: "Premium",
		price: "₹250",
		features: [
			"Feature one",
			"Feature two",
			"Feature three",
			"Feature four",
			"Feature five",
			"Feature six",
			"Feature seven",
		],
		isPopular: false,
		isHighlighted: true,
		buttonText: "Subscribe",
	},
];

const Pricing = () => {
	return (
		<section id="pricing" className="py-24 bg-background">
			<div className="container mx-auto px-6">
				<div className="text-left mb-16">
					<h2 className="text-4xl font-headline font-bold">Pricing</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Free Tier */}
					<div className="bg-[#373737] border border-white/20 rounded-3xl p-8">
						<div className="mb-8">
							<h3 className="text-xl font-headline font-semibold mb-4">Free</h3>
							<div className="text-5xl font-headline font-bold">₹0</div>
						</div>
						<div className="space-y-3 mb-8">
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
						</div>
					</div>

					{/* Essential Tier */}
					<div className="bg-[#373737] border border-white/20 rounded-3xl p-8 transform md:scale-110 md:shadow-xl">
						<div className="mb-8">
							<h3 className="text-xl font-headline font-semibold mb-4">Essential</h3>
							<div className="text-5xl font-headline font-bold">₹50</div>
						</div>
						<div className="space-y-3 mb-8">
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
						</div>
						<Button className="w-full rounded-full bg-gray-200 text-black hover:bg-gray-300 font-body">
							Subscribe
						</Button>
					</div>

					{/* Premium Tier */}
					<div className="bg-primary/10 border border-primary/30 rounded-3xl p-8">
						<div className="mb-8">
							<h3 className="text-xl font-headline font-semibold mb-4">Premium</h3>
							<div className="text-5xl font-headline font-bold text-primary">₹250</div>
						</div>
						<div className="space-y-3 mb-8">
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
							<div className="w-full h-3 bg-white/20 rounded-full"></div>
						</div>
						<Button className="w-full rounded-full bg-primary text-black hover:bg-primary/90 font-body">
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
