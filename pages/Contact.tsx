import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-24">
        <h1 className="text-9xl font-black tracking-tighter">CONTACT</h1>
        <p className="text-2xl font-mono opacity-60 mt-6">For bookings, collaborations, and inquiries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-7">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-[0.3em]">Full Name</label>
                <input type="text" placeholder="TYPE HERE..." className="w-full border-b-2 border-black py-5 text-base font-bold focus:outline-none placeholder:opacity-20 bg-transparent" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-[0.3em]">Email Address</label>
                <input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full border-b-2 border-black py-5 text-base font-bold focus:outline-none placeholder:opacity-20 bg-transparent" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.3em]">Interest</label>
              <select className="w-full border-b-2 border-black py-5 text-base font-bold focus:outline-none uppercase appearance-none bg-transparent">
                <option>New Project Inquiry</option>
                <option>Talent Application</option>
                <option>Press & Media</option>
                <option>Location Scouting</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.3em]">Brief Description</label>
              <textarea rows={6} placeholder="TELL US ABOUT YOUR VISION..." className="w-full border-b-2 border-black py-5 text-base font-bold focus:outline-none placeholder:opacity-20 resize-none bg-transparent" />
            </div>

            <button className="bg-black text-white px-16 py-6 text-sm font-black uppercase tracking-[0.3em] hover:opacity-80 transition-all brutalist-shadow">
              Transmit Message
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-20">
          <div className="p-16 border-2 border-black brutalist-shadow bg-gray-50">
            <h4 className="text-sm font-bold uppercase tracking-[0.4em] mb-12 border-b border-black/10 pb-6">Our Base</h4>
            <div className="space-y-10">
              <div className="flex items-start space-x-8">
                <MapPin size={24} />
                <p className="text-sm font-mono uppercase leading-loose font-bold">
                  Storgata 24, 0184 Oslo<br/>Norway, Planet Earth
                </p>
              </div>
              <div className="flex items-start space-x-8">
                <Mail size={24} />
                <p className="text-sm font-mono uppercase underline font-bold">hello@nopropzz.com</p>
              </div>
              <div className="flex items-start space-x-8">
                <Phone size={24} />
                <p className="text-sm font-mono uppercase font-bold">+47 22 44 66 88</p>
              </div>
              <div className="flex items-start space-x-8">
                <Globe size={24} />
                <p className="text-sm font-mono uppercase font-bold">GMT +1:00</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest opacity-40">Office Hours</p>
            <div className="text-sm font-mono flex justify-between uppercase font-bold">
              <span>Monday — Friday</span>
              <span>10:00 — 18:00</span>
            </div>
            <div className="text-sm font-mono flex justify-between uppercase font-bold">
              <span>Saturday — Sunday</span>
              <span>By Appointment</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
