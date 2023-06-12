import React, { useEffect, useState } from 'react'
import { ProjectsData } from './Data';
import { ProjectsNav } from './Data';
import WorkItem from './WorkItem';

const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProject] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all"){
            setProject(ProjectsData);
        } else {
            const newProjects = ProjectsData.filter((projects) => {
                return projects.category.toLowerCase() === item.name;
            });
            setProject(newProjects);
        }
    }, [item]);
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
    <div>
        <div className="work__filters">
        {ProjectsNav.map((item, index) => {
            return( <span onClick={(e) => {
                handleClick(e, index);
            }} className = { `${active === index ? "active-work" : ""} work__item`}
                key={index}>
                {item.name
            }</span> )
        })}
        </div>
        <div className="work__container container grid">
            {projects.map((item) => {
                return(
                    <WorkItem item={item} key={item.id} />
                )
            })}
        </div>
    </div>
  );
};

export default Works