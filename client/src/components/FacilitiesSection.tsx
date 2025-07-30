import { Truck, Leaf, CalendarCheck, PhoneCall, Tag } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Truck size={36} className="text-lime-500" />,
      title: "Fast & Reliable Delivery",
      description: "Get your favorite meals delivered hot and fresh, right at your doorstep, on time every time."
    },
    {
      icon: <Leaf size={36} className="text-lime-500" />,
      title: "Fresh & Organic Ingredients",
      description: "We use only the freshest, locally-sourced, and organic ingredients in all our dishes."
    },
    {
      icon: <CalendarCheck size={36} className="text-lime-500" />,
      title: "Easy Online Booking",
      description: "Reserve your table or place your order online with just a few clicks."
    },
    {
      icon: <PhoneCall size={36} className="text-lime-500" />,
      title: "24/7 Customer Support",
      description: "Our friendly support team is here to assist you anytime, any day."
    },
    {
      icon: <Tag size={36} className="text-lime-500" />,
      title: "Special Discounts & Offers",
      description: "Enjoy exclusive deals, seasonal discounts, and loyalty rewards."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-40">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
        Why Choose <span className="text-lime-600 dark:text-lime-400">BhojanMap?</span>
      </h2>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {facilities.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-lime-400 transition-all duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
