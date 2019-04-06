import React from 'react'
import { FaEye, FaCode } from 'react-icons/fa'

const ProjectCard = ({ prjt }) => (
    <div className="card">
        <div className="card__container">
            <img src={`/images/projects/${prjt.img}`} className="card__img" />
            <h2 className="card__date">{prjt.date}</h2>
        </div>
        <h1 className="card__name">{prjt.name}</h1>
        <p className="card__description">{prjt.description}</p>
        <div className="card__btns">
            <a href={`${prjt.code}`} target="_blank" className="card__btn card__btn--code"><FaCode /></a>
            <a href={`${prjt.live}`} target="_blank" className="card__btn card__btn--live"><FaEye /></a>
        </div>
    </div>
)

export default ProjectCard