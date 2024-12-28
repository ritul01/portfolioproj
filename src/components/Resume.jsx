import React from 'react';

const Resume = () => {
  return (
    <section className='w-full px-5'>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="my-20 text-center text-4xl">Resume Overview</h2>
        <p className="text-black-600 mb-6">
        I am a skilled professional with expertise in Software Development, and DevOps. My resume highlights my key technical
          skills, work experience, and significant achievements.
        </p>
        <h2 className="text-2xl font-bold text-black-800 mb-4">Resume Link</h2>
        <p className="text-black-600 mb-6">
          Click Here to see my resume
        </p>
        <a
          href="https://drive.google.com/file/d/1PrV6F3JcJGW72YVvq0WTz_PUTmr9sHce/view?usp=drive_link" // Replace with your desired link
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-red-500 font-semibold hover:text-blue-600 border rounded-lg py-2 px-6 bg-gray-300 
          my-4 no-underline mx-5"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
