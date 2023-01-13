import AboutImageDisplay from "./AboutImageDisplay";
import AboutSecondImageDisplay from "./AboutSecondImageDisplay";
import "./about.css";
const About = () => {
    return (
    <div>
    <div className="aboutPageBlock">
    <h1 className="aboutTitle">Importance of Diversity in Tech</h1>
    <div className="aboutTextBlock">
       <AboutImageDisplay />
    <p className="aboutText">Research shows us that diversity among teams helps them make better business decisions 73% of the time.
    Gender diversity sheds more light on an organization's opportunities and vulnerabilities.</p>
    </div>
    <div className="aboutTextBlockTwo">
        <p className="aboutTextTwo">This heightened awareness means gender-diverse teams can be more efficient 
        and better able to make crucial decisions twice as fast and with half of the meetings.
        Adopting gender diversity can help companies experience these far-reaching benefits.</p>
        <AboutSecondImageDisplay />
        </div>
    </div>
    </div>
    );
};

export default About; 
