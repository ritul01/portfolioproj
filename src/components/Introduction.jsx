import profile from "../assets/profile.jpg";
function Introduction() {
  return (
    <section className='w-full mb-5 py-10 px-5'>
    <div className="w-full border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="pb-16 text-6xl font-thin tracking-tight
                    lg:mt-16 lg:text-8xl"
            >
              Ritul Singh
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-4xl tracking-tight
                    text-transparent"
            >
              Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              I am Ritul Singh currently doing B.Tech in Electrical Engineering
              and Passionate to be a web developer and also doing DSA.I am a
              dedicated and versatile full stack developer with a passion for
              creating efficient and user-friendly web applications., I have
              worked with a variety of technologies, including HTML, CSS,
              Javascript,React, Node.js, MySQL, and MongoDB. My journey in web
              development began with a deep curiosity for how things work, and
              it has evolved into a career where I continuously strive to learn
              and adapt to new challenges. I thrive in collaborative
              environments and enjoy solving complex problems to deliver
              high-quality solutions. Outside of coding, I enjoy staying active,
              exploring new technologies, and contributing to open-source
              projects.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="mx-10 w-1/2 rounded-3xl"
              src={profile}
              alt="ritul singh"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Introduction;
