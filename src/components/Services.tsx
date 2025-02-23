import React from "react";

const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand's identity and goals.",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Building robust and scalable web applications using the latest technologies and best practices.",
  },
  {
    id: "03",
    title: "Backend Development",
    description:
      "Developing server-side logic and databases to ensure seamless data integration and optimal performance.",
  },
  {
    id: "04",
    title: "CI/CD Pipelines",
    description:
      "Setting up automated workflows to streamline the development process and ensure code quality and deployment reliability.",
  },
  {
    id: "05",
    title: "Azure Cloud Services",
    description:
      "Leveraging Azure's cloud infrastructure to deploy and scale your applications with ease and efficiency.",
  },
];

function Services() {
  return (
    <section id="services" className="text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl text-purple-300 font-extrabold">SERVICES</h2>
        </div>

        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
