import React from 'react';

const ContactInfo = [
  { label: 'Name:', value: 'Sujal Chaudhary' },
  { label: 'Email:', value: 'chsujalm@gmail.com' },
  { label: 'Mobile:', value: '+918923492332' },
  { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/sujal-chaudhary-7379a1291/' },
  { label: 'GitHub:', value: 'https://github.com/Sujal059' },
  { label: 'Portfolio:', value: 'https://my-portfolio-zeta-pearl-81.vercel.app/' },
];

const Contact    = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      {/* Center the content horizontally */}
      <div className="flex justify-center">
        {/* Box with border */}
        <div className="p-8 border border-gray-300 rounded-md shadow-md mt-10 w-fit">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ContactInfo.map((info) => (
              <div key={info.label} className="flex items-center space-x-2">
                <span className="text-gray-400">{info.label}</span>
                <a href={info.value.startsWith('http') ? info.value : ''} target="_blank" rel="noreferrer" className="hover:text-gray-600">
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact  ;
