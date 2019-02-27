import React from 'react'
import Projects from '../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsPage = () => (
    <div className="projects container">
        {Projects.map(prjt => (
            <ProjectCard prjt={prjt} />
        ))}
    </div>
)

export default ProjectsPage