import '../styles/ProjectContainer.css'
import Project from '../components/Project'

export default function ProjectContainer(props) {
    return(
        <div className='project-box'>
            <div className='header'>
                <h1>{props.title}</h1>
            </div>
            <div className='projects'>
                <Project id="2" infoArray={["Team", "ApriSi"]} type="Link" />
                <Project id="1" infoArray={["Server", "Dog Api"]} type="Download" />
                <Project id="2" infoArray={["GitHub", "Basic Browser"]} type="Link" />
            </div>
        </div>
    );
}