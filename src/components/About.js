import React from 'react'
import ServiceConsultingImg from '../images/botanicalsurvey1.JPG'

const About = () => {
  return (
    <section className=" flex flex-col md:flex-row md:container md:mx-auto">
    <div className="py-8 px-20 md:px-4 text-gray-500 text-lg">
      <p className="text-left mb-8"><strong>Integrated Restorations, LLC</strong> is a full-service consulting and contracting firm serving public and private lands in the Midwestern United States since 2007. Integrated was founded on the principle that successful land management must be a process-oriented, whole-system approach. Our unique approach blends the most current ecological concepts and empirical research with multiple concerted and properly sequenced practices. The use of multiple sequenced practices synergizes the natural dynamic elements of an ecological system, accelerating the recovery process to enhance habitat quality and achieve land management objectives and project targets while simultaneously reducing long-term costs.</p>

      <h2 className=" text-left font-bold">Integrated is THE cutting edge of restoration practices</h2>

      <p className="text-left mb-4">Integrated is the industry pioneer of the most innovative and scientifically rigorous habitat restoration and enhancement techniques. We designed, developed, and tested many of the theoretical approaches and standard procedures that our competition imitates. Our innovative research programs ensure that you will receive the cutting edge of the expanding science of restoration ecology. We develop and implement effective approaches to real-world problems and provide organized, affordable solutions for your land area.</p>
  
    </div>
    <div className="py-8 px-20 md:px-8">
      <img src={ServiceConsultingImg} alt="prairie field work" className="" />
    </div>
    </section>
  )
}

export default About
