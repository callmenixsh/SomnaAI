import React from 'react';

const teamMembers = [
  {
    name: 'Ayush Kumar',
    role: 'UI/UX Designer',
    user: 'username',
    avatar: '../avatars/ayush.png',
    github: 'https://github.com/ayushkr018',
  },
  {
    name: 'Ashutosh Jha',
    role: 'AI/ML Engineer',
    user: 'username',
    avatar: '../avatars/ashu.png',
    github: 'https://github.com/As190704',
  },  
  {
    name: 'Nandan Pradhan',
    role: 'Backend Developer',
    user: 'username',
    avatar: '../avatars/ashu.png',
    github: 'https://github.com/',
  },
  {
    name: 'Nishant',
    role: 'Frontend Developer',
    user: 'callmenixsh',
    avatar: '../avatars/nixsh.png',
    github: 'https://github.com/callmenixsh',
  },
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-300">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Meet the Team</h2>
      <p className="text-lg text-center mb-12">
        We’re a small team passionate about bridging subconscious creativity with modern AI.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1f1b36] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition dream-glow"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition flex items-center gap-1"
                aria-label={`GitHub profile of ${member.name}`}
              >
                {member.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.17c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.38-3.37-1.38-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 012.5-.35 9.4 9.4 0 012.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.75-4.57 5 .36.31.69.92.69 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.17 10.17 0 0022 12.17C22 6.58 17.52 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </h3>
            <p className="text-sm text-gray-400">{member.user}</p>
            <p className="text-indigo-400 mb-2">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
