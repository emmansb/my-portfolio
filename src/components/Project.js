import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js';


export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'project']{
      title,
      date,
      place,
      description,
      project,
      link,
      tags
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error);
}, []);

  return (
    <main className='bg-fuchsia-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Checkout my previous jobs</h2>
        <section className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projectData && projectData.map((project, index) => (
        <article className='relative rounded-lg shadow-xl bg-white p-12'>
        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-fuchsia-700'>
          <a
          href={project.link}
          alt={project.title}
          target='_blank'
          rel='noopener noreferrer'
          >  
          {project.title}
          </a>
        </h3>
        <div className='text-gray-500 text-xs space-x-4'>
        <span>
          <strong className='font-bold'>
            Finished on
          </strong>:{' '}
          {new Date(project.date).toLocaleDateString()}
        </span>
        <span>
          <strong className='font-bold'>Location</strong>:{' '}
          {project.place}
        </span>
        <span>
          <strong className='font-bold'>Type</strong>:{' '}
          {project.projectType}
        </span>
        <p className='my-9 text-lg text-gray-700 leading-relaxed'>
          {project.description}
        </p>
       
          <a href={project.link} rel='noopener noreferrer' target='_blank'
         className='text-white font-blog px-6 py-3 bg-fuchsia-600 shadow-lg shadow-fuchsia-500/50 hover:bg-fuchsia-500 rounded'>
          View The Project{' '}
         </a>
       
        </div>
        </article>
        ))}
      </section>
      </section>
    </main>
  )
    
}
