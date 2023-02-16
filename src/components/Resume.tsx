import { resume } from "../database/resumeData";

export function Resume() {
  return (
    <div>
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resume.education && resume.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.name}</h3>
                      <p className="info">
                        {item.major}
                        <span>&bull;</span> <em className="date">{item.graduationMonth} {item.graduationYear}</em></p>
                      <p>
                        {item.achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resume.work && resume.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.name}</h3>
                      <p className="info">
                        {item.focus}
                        <span>&bull;</span> <em className="date">{item.startDate} {item.endDate}</em></p>
                      <p>
                        {item.projects}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              "Skills"
            </p>
            <div className="bars">
              <ul className="skills">
                {
                  resume.skills && resume.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.toLowerCase()}`}>
                        </span><em>{item}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}