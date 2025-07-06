
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    toast.success("Thank you for your RSVP! We'll be in touch with more details soon.");
    setFormData({ name: '', email: '', guests: '1', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8 leading-tight">
          We hope you'll join us
        </h2>
        <p className="text-stone-600 text-lg mb-12 font-light leading-relaxed">
          While we're still finalizing the details, we'd love to know if you're planning to celebrate with us. 
          Your early response helps us plan the perfect day.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-stone-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-stone-300 focus:border-stone-500 bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-stone-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-stone-300 focus:border-stone-500 bg-white"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-stone-700 text-sm font-medium mb-2">
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-md focus:border-stone-500 focus:ring-1 focus:ring-stone-500 bg-white"
            >
              <option value="1">Just me</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </div>
          
          <div>
            <label className="block text-stone-700 text-sm font-medium mb-2">
              Message for the couple (optional)
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-stone-300 focus:border-stone-500 bg-white min-h-[100px]"
              placeholder="Share your excitement or any special notes..."
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-stone-800 hover:bg-stone-900 text-white py-3 text-sm tracking-wide uppercase transition-colors duration-300"
          >
            Send RSVP
          </Button>
        </form>
        
        <p className="text-stone-500 text-sm mt-8">
          We'll send you all the details once our plans are finalized.
        </p>
      </div>
    </section>
  );
};

export default RSVP;
