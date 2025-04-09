import { Section } from 'lucide-react'
import React from 'react'
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Biova Surgicals – Trusted Medical & Biomedical Supplier</title>
                <meta
                    name="description"
                    content="Learn about Biova Surgicals, a reliable supplier of certified medical and biomedical products. Founded by biomedical engineers, our mission is to deliver quality, innovation, and affordability to the healthcare industry."
                />
                <meta
                    name="keywords"
                    content="Biova Surgicals, About Us, Medical Supplier Pakistan, Biomedical Products, Surgical Instruments, Lab Equipment, Diagnostic Devices, Medical Procurement"
                />
                <link rel="canonical" href="https://www.biovasurgicals.com/about-us" />

                {/* Open Graph (for social sharing) */}
                <meta property="og:title" content="About Biova Surgicals – Trusted Medical & Biomedical Supplier" />
                <meta property="og:description" content="Discover how Biova Surgicals is redefining healthcare supply with innovative, reliable, and cost-effective solutions." />
                <meta property="og:image" content="https://www.biovasurgicals.com/images/og-image.jpg" /> {/* Replace with real image */}
                <meta property="og:url" content="https://www.biovasurgicals.com/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className='w-[95%] m-auto max-w-[1300px]'>
                <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[30px] mb-[10px]'>About Us</h1>
                <p className='text-[#00807b] text-center lato text-[20px] mb-[20px]'>In a rapidly evolving healthcare landscape, finding a dependable supplier for medical and biomedical products can be a challenge. At Biova Surgicals, we combine engineering precision with healthcare expertise to deliver products that meet the highest industry standards. Our team of biomedical engineers meticulously selects every item in our inventory, ensuring that hospitals, clinics, and laboratories receive durable, safe, and cost-effective solutions. Whether you need surgical instruments, diagnostic equipment, or lab supplies, we provide end-to-end procurement support—making us more than just a vendor, but a trusted partner in healthcare excellence.</p>

                <div className='h-[2px] mt-[20px] bg-[#00605f]'></div>


                <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>Our Story</h2>
                <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>Founded in 2024 by three passionate biomedical engineers, Biova Surgicals was built on a vision to redefine the medical and biomedical supply industry. With expertise in the field, we recognized the challenges healthcare professionals face in sourcing reliable, high-quality supplies at competitive prices. That’s why we took on the mission to bridge this gap—offering affordable, premium-grade products while ensuring an effortless digital purchasing experience.  </p>

                <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>Our Vision</h2>
                <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>We aim to become a trusted and reliable name in the medical and biomedical supply industry by: <br />
                    <ul className='list-disc ml-5'>
                        <li>Offering the best market prices without compromising quality.</li>
                        <li>Modernizing the industry through digital solutionswhile preserving the traditional essence of sales and service. </li>
                        <li>Bringing innovation and advanced solutionsto enhance medical supply chains and healthcare efficiency.</li>
                    </ul>
                </p>

                <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>Our Mission</h2>
                <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>At Biova Surgicals, we are not just suppliers—we are partners in healthcare progress. We are committed to: <br />
                    <ul className='list-disc ml-5'>
                        <li><b>Delivering Excellence</b>: Providing certified, high-quality medical and surgical supplies.</li>
                        <li><b>Ensuring Accessibility</b>: Making the procurement process simple, fast, and onlinefor healthcare professionals.</li>
                        <li><b>Driving Innovation</b>: Exploring future solutionsto revolutionize the biomedical industry.</li>
                    </ul>
                </p>

                <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>The Future of Medical Supply</h2>
                <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>We believe the future of medical supplies is smart, digital, and efficient. Our goal is to blend technology with traditional sales, offering a seamless shopping experience while continuing to introduce cutting-edge solutions that shape the industry.  </p>

                <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[30px] mb-[10px]'>Join Us on This Journey</h1>
                <p className='text-[#00807b] text-center lato text-[20px] mb-[20px]'>At <b>Biova Surgicals</b> , every order represents a step toward better healthcare delivery. Whether you’re a surgeon, lab technician, or hospital administrator, we’re here to simplify your supply chain so you can focus on what truly matters—patient care. Explore our catalog today and experience the Biova difference: where expertise meets innovation, and reliability meets affordability.</p>

            </section>
        </>
    )
}

export default About
