import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology – Computer Science Engineering",
    institute: "Acropolis Institute of Technology and Research Indore - RGPV University",
    duration: "2023 – 2027",
    percentage: "6.9 CGPA",
    description:
      "Currently pursuing B.Tech in Computer Science with a strong focus on Data Structures, Algorithms, Web Development, and Software Engineering. Actively building real-world projects and improving problem-solving skills.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education - Science Stream",
    institute: "Gurukul Public School Indore - MP Board of Secondary Education",
    duration: "2021-2022",
    percentage: "12th - 88%",
    description:
      "Completed higher secondary education with a focus on Mathematics and Science, building a strong analytical and problem-solving foundation.",
  },
  {
    id: 3,
    degree: "Secondary Education",
    institute: "Gurukul Public School Indore - MP Board of Secondary Education",
    duration: "2019-2020",
    percentage: "10th - 95.6%",
    description:
      "Completed Secondary Education with a strong academic foundation, developing discipline, curiosity, and fundamental analytical skills.",
  }
];


const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-heading">
          <FaGraduationCap className="section-icon"/>&nbsp;
          My <span>Education . .</span>
        </h2>

        <div className="education-list">
          {educationData.map((item) => (
            <div key={item.id} className="education-card">
              <h3 className="education-title">{item.degree}</h3>
              <p className="education-college">{item.institute}</p>
              <p className="education-duration">{item.duration}</p>
              <p className="education-percentage">{item.percentage}</p>
              <p className="education-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

