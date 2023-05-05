import React from 'react';
import profileTwo from '../assets/profile2.jpg'
import SectionTitle from '../common/SectionTitle';
import Resume from '../assets/Resume.pdf';

const About = () => {
  return (
    <div id='about' className='about-section pt-24 lg:pt-28 xl:pt-32'>
      <div className='container mx-auto'>
        <SectionTitle topText='About Me' behindText='About'/>
        <div className='grid grid-cols-2 items-center gap-7'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='about-image overflow-hidden rounded-lg'>
              <div className='about-image-inner fiximage relative border-10 border-primary border-opacity-20'>
                <span className='absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary'></span>
                <span className='absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent'></span>
                <span className='absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary'></span>
                <span className='absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary'></span>
                <span className='' style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                  <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '63.9394% 0px 0px'}}>
                    <img src={profileTwo} alt="" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='about-content'>
              <h1 style={{fontSize: '26px'}}>Hi, I am <span>Gabriel Ghiurco</span></h1>
              <ul className='styledlist'>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>First Name</strong> : Ghiurco</li>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>Last Name</strong> : Gabriel-Emanuel</li>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>Age</strong> : 25</li>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>Nationality</strong> : Romanian</li>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>Country</strong> : Romania</li>
                <li className='text-lg mt-8'><strong className='inline-block min-w-[120px] font-medium'>City</strong> : Cluj-Napoca</li>
              </ul>
              <a href={Resume} download='Gabriel-Ghiurco-Resume' className='btn mt-3'>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About