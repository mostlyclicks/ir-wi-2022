import React from 'react'
import CraigImg from '../images/craig-annen_flip.jpg'

const Owner = () => {
  return (
    <section className="flex flex-col md:flex-row content-center">
      <div className="md:w-4/12 bg-gray-50 p-12 ">
        <img src={CraigImg} alt="Craig Annen" />
      </div>
      <div className="md:w-8/12 p-12 text-left">
        <h2 className="text-3xl font-bold text-gray-800">Craig Annen</h2>
        <h3 className="font-bold text-gray-500">Operations Manager | Principal Restoration Ecologist</h3>
<p className="mt-2 text-gray-700">B.S. Environmental Science, Molecular Biology (1998)<br />
M.S. Aquatic Botany (2002)</p>

<quote className="text-3xl block m-8 text-gray-900 ">“For me, the appeal of restoration ecology is the opportunity to apply ecological principles to real-world problems to find solutions that concurrently benefit species, habitats, and people”</quote>

<h3 className="text-gray-700 font-bold">Certifications:</h3>
<p className="mb-4">
WDATCP-Certified Commercial Pesticide Applicator (Aquatic and Forestry Categories)<br />
Basic Wetland Delineation Certificate<br />
Advanced Wetland Delineation Certificate<br />
Certified Wildland Firefighter (IC 100, S130, S131, S190)<br />
WDNR Hunter and Firearms Safety Training <br />
Enbridge US/LP Safety Orientation and Life Saving Rules Certificate<br />
Enbridge US/LP Environmental Orientation Certificate</p>

<p className="mb-4">
<h3 className="text-gray-700 font-bold">Research Interests:</h3>
Ecology and control of invasive species<br />
Herbicide and additive biochemistry and plant physiology<br />
Mathematical ecology (with an emphasis on complex pattern analysis)<br />
Habitat management for game species<br />
Conservation economics and ecosystem services</p>

<p className="mb-4">
<h3 className="text-gray-700 font-bold">Professional Affiliations:</h3>
Wisconsin Wetlands Association, Ice Age Trail Alliance, Swamplovers' Foundation, The Prairie Enthusiasts, Ducks Unlimited, Blue Mounds Area Project, Savanna Oak Foundation, Natural Heritage Land Trust, American Association for the Advancement of Science</p>
      </div>

      
    </section>
  )
}

export default Owner
