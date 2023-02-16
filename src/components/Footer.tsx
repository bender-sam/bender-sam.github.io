import { resume } from "../database/resumeData";

export function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resume.socialLinks && resume.socialLinks.map((item) => {
                return (
                  <li>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
  );

}