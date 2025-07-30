const projects = [
  {
    title: "Website Coretax New Design",
    year: "2025",
    image: "../src/assets/images/project-1.webp",
  },
  {
    title: "Mobile App Sales Tracker",
    year: "2024",
    image: "../src/assets/images/project-2.webp",
  },
  {
    title: "Landing Page Marketing",
    year: "2023",
    image: "../src/assets/images/project-3.webp",
  },
  // Tambahkan lebih banyak data kalau mau
];

export default function ProjectSection() {
  return (
    <div className="cardContainer grid grid-cols-2 gap-x-8 gap-y-10 justify-center">
      {projects.map((project, index) => {
        const isLastOdd =
          projects.length % 2 === 1 && index === projects.length - 1;

        return (
          <div
            key={index}
            className={`card flex flex-col gap-y-5 ${
              isLastOdd ? "col-span-2 items-center" : ""
            }`}
          >
            <img
              src={project.image}
              alt="project-image"
              className={`rounded-xl object-cover w-full ${
                isLastOdd ? "max-w-md" : ""
              }`}
            />
            <div
              className={`desc grid grid-cols-2 px-3 w-full ${
                isLastOdd ? "max-w-md" : ""
              }`}
            >
              <span className="text-2xl">{project.title}</span>
              <span className="text-lg font-montserrat font-semibold text-end text-gray-400">
                {project.year}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
