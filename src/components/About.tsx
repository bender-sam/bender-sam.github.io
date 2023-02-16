import { resume } from "../database/resumeData";

export function About() {

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src="images/mountain_sam.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{resume.aboutMe}
               </p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{resume.name}</span>
                        <br></br>
                        <span>
                           {resume.address}
                        </span>
                        <br></br>
                        <span>{resume.website}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}