'use client'

import { Button } from '@heroui/button';
import { div } from 'framer-motion/client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Your message has been received, we will be in touch within the next 24 hours!');
      setFormData({ name: '', contact: '', service: '', message: '' });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751821737/IMG_3296_twidcm.jpg" alt="" className='absolute top-0 left-0 w-screen h-screen object-cover -z-10'/>
    <div className="max-w-xl  p-6 mt-10 bg-white shadow-2xl rounded-2xl mx-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Service</option>
          <option value="Emergency Plumbing">Emergency Plumbing</option>
          <option value="Renovation">Renovation</option>
          <option value="Walk-In Shower">Walk-In Shower</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" className="w-full bg-white text-black border border-black p-3 rounded-full 
             hover:bg-black hover:text-white transition ease-in-out duration-300">
          <span className="relative">Submit</span>
        </Button>
        {status && <p className="text-sm mt-2 text-gray-700">{status}</p>}
      </form>
    </div>
    </div>
  );
}
