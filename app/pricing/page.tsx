'use client'
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "Up to 1,000 text checks per month",
      "Basic AI detection",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$29.99",
    features: [
      "Unlimited text checks",
      "Advanced AI detection algorithms",
      "Priority email support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited text checks",
      "Custom AI detection models",
      "24/7 phone and email support",
      "Dedicated account manager",
      "On-premise deployment options",
    ],
  },
]

export default function PricingPage() {
  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Use e.currentTarget to target the container
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <>
      <style jsx>{`
        .custom-hover-outline {
          position: relative;
          z-index: 0;
        }

        .custom-hover-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          z-index: -1;
          transition: border-color 0.8s ease, border-width 0.3s ease;
          pointer-events: none;
        }

        .custom-hover-outline:hover::before {
          border-color: blue;
          border-width: 4px;
          border-radius: 12px;
          {/* background: rgba(0, 0, 255, 0.1); */}
          clip-path: circle(38% at var(--x, 50%) var(--y, 50%));
        }

        /* Disable pointer events on child elements */
        .custom-hover-outline * {
          pointer-events: none;
        }
      `}</style>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className="relative bg-white shadow rounded-lg overflow-hidden flex-grow flex flex-col justify-between transition duration-300 transform group hover:z-10 hover:scale-105 custom-hover-outline"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">{plan.name}</h2>
                <p className="text-4xl font-bold text-center mb-6 text-gray-900">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
