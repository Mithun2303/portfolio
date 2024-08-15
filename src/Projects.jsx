import React from 'react'
import ProjectCard from './components/ProjectCard'

export const Projects = () => {
    return (
        <main className='main-inner  md:p-[10vh] md:h-[90vh] mt-12 mb-24 md:mb-0'>
            <section className='md:h-[90vh] flex flex-col gap-12 md:p-10 text-4xl font-semibold font-poppins items-center  ' id="projects">
                <div className='text-primary'>
                    My Projects
                </div>
                <div className='flex flex-wrap gap-12 justify-center'>

                    <ProjectCard
                        title="Groovehub"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt molestiae explicabo sapiente iste delectus veniam voluptatem illum. Quod odio, animi veritatis delectus hic dolores doloremque. Nam sed aspernatur cum consectetur."
                        techStack="ReactJS, ExpressJS, MongoDB, PostgreSQL"
                        livePreview="https://leetcode.com/u/mithunkarthick1610"
                        code="https://github.com/mithun2303/groovehub"
                    />
                    <ProjectCard
                        title="Proleap"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt molestiae explicabo sapiente iste delectus veniam voluptatem illum. Quod odio, animi veritatis delectus hic dolores doloremque. Nam sed aspernatur cum consectetur."
                        techStack="ReactJS, ExpressJS, MongoDB, PostgreSQL"
                        livePreview="https://leetcode.com/u/mithunkarthick1610"
                        code="https://github.com/mithun2303/groovehub"
                    />
                    <ProjectCard
                        title="Algostats"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt molestiae explicabo sapiente iste delectus veniam voluptatem illum. Quod odio, animi veritatis delectus hic dolores doloremque. Nam sed aspernatur cum consectetur."
                        techStack="ReactJS, ExpressJS, MongoDB, PostgreSQL"
                        livePreview="https://leetcode.com/u/mithunkarthick1610"
                        code="https://github.com/mithun2303/groovehub"
                    />
                </div>
            </section>
        </main>
    )
}
