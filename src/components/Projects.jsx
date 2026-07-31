import {
  Camera,
  Fence,
  RadioTower,
  Network,
  Code2,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

import "../styles/Projects.css";

const projects = [
  {
    title: "Corporate CCTV Surveillance",
    category: "Security",
    icon: Camera,
    status: "Completed",
    description:
      "Professional CCTV installation for offices with centralized monitoring and remote access.",
  },

  {
    title: "Boom Barrier Automation",
    category: "Access Control",
    icon: Fence,
    status: "Completed",
    description:
      "Automatic boom barrier with RFID integration for commercial premises and societies.",
  },

  {
    title: "RFID Attendance System",
    category: "RFID",
    icon: RadioTower,
    status: "Live",
    description:
      "Fast and secure employee attendance with real-time reporting dashboard.",
  },

  {
    title: "Enterprise Networking",
    category: "Networking",
    icon: Network,
    status: "Completed",
    description:
      "LAN, Wi-Fi, structured cabling and secure enterprise networking solutions.",
  },

  {
    title: "Business Software",
    category: "Software",
    icon: Code2,
    status: "Development",
    description:
      "Custom management software developed according to client requirements.",
  },

  {
    title: "Annual Maintenance",
    category: "AMC",
    icon: Wrench,
    status: "Ongoing",
    description:
      "Preventive maintenance and technical support for security infrastructure.",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            FEATURED PROJECTS
          </span>

          <h2>
            Solutions successfully delivered
          </h2>

          <p>
            From surveillance systems to software development,
            we deliver complete technology solutions that improve
            security, automation and operational efficiency.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="project-card"
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <div className="project-top">

                  <div className="project-icon">
                    <Icon size={28} />
                  </div>

                  <span className="project-status">
                    {item.status}
                  </span>

                </div>

                <span className="project-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>
                  View Details →
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;