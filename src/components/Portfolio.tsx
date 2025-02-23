'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import project1 from '@assets/proj5.png'
import project2 from '@assets/proj6.png'
import project3 from '@assets/proj7.png'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

const projects = [
  {
    id: 1,
    during: '2021-2022',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam dui, porttitor vel libero quis, condimentum ultrices purus. Nullam nec nunc nec libero.',
    image: project1
  },
  {
    id: 2,
    during: '2020-2021',
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam dui, porttitor vel libero quis, condimentum ultrices purus. Nullam nec nunc nec libero.',
    image: project2
  },
  {
    id: 3,
    during: '2019-2020',
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam dui, porttitor vel libero quis, condimentum ultrices purus. Nullam nec nunc nec libero.',
    image: project3
  }
]

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [color])

  const backgroundImage = useMotionTemplate`radial-gradient(ellipse 125% 125% at 50% 0%, #000 50%, ${color})`

  return (
    <motion.section style={{ backgroundImage }} id="portfolio" className="py-3 text-white2">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold mb-10">
            Selected <span className="text-purple-300">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group:"
            >
              <p className="text-gray-400 text-lg mb-2">{project.during}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                  selectedProject.id === project.id ? 'text-gray-200' : ''
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-gray-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          width={800}
          height={450}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
        />
      </div>
    </motion.section>
  )
}

export default Portfolio
