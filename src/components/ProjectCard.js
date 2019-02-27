import React from 'react'

const ProjectCard = ({ prjt }) => (
    <div className="card">
        <div className="card__container">
            <img src={`/images/${prjt.img}`} className="card__img" />
            <h2 className="card__date">{prjt.date}</h2>
        </div>
        <h1 className="card__name">{prjt.name}</h1>
        <p className="card__description">{prjt.description}</p>
        <div className="card__btns">
            <a href="" className="card__btn card__btn--code">code</a>
            <a href="" className="card__btn card__btn--live">live</a>
        </div>
    </div>
)

export default ProjectCard