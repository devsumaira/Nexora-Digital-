import React, { useState } from 'react';
import { BRAND } from '../data/agencyData';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
  Calendar,
  Send,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = ''
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    serviceNeeded: initialService || 'Digital Marketing',
    monthlyBudget: '$3,000–$5,000',
    message: initialMessage || ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calendar slot selection state
  const [selectedDay, setSelectedDay] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM EST');
  const [calendarBooked, setCalendarBooked] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) {
      errs.company = 'Company name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please tell us briefly about your growth goals';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 900);
  };

  const handleCalendarBooking = () => {
    setCalendarBooked(true);
  };

  const serviceOptions = [
    'Digital Marketing',
    'SEO',
    'Social Media',
    'Paid Advertising',
    'Content Marketing',
    'Branding',
    'Web Development',
    'Marketing Strategy',
    'Other'
  ];

  const budgetOptions = [
    'Under $500',
    '$500–$1,000',
    '$1,000–$3,000',
    '$3,000–$5,000',
    '$5,000+'
  ];

  return (
    <section id="contact" className="py-24 bg-[#0E1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Direct Strategic Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Your Strategic Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Connect directly with an executive growth partner. We review your current funnel economics, uncover acquisition bottlenecks, and present actionable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Booking Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Global Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">New York Office</span>
                    <span className="text-slate-400">{BRAND.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Direct Partner Inquiries</span>
                    <a href={`mailto:${BRAND.email}`} className="text-blue-400 hover:underline">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Advisory Desk</span>
                    <a href={`tel:${BRAND.phone}`} className="text-slate-300 hover:text-white">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                  What Happens Next?
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Response from a Senior Strategist within 4 business hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complimentary preliminary digital footprint audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mutual NDA automatically executed upon request</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-slate-300 font-medium">Next available strategy slot:</span>
              </div>
              <span className="text-blue-400 font-mono font-semibold">Tomorrow at 10:00 AM EST</span>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              {/* Tab Selector */}
              <div className="flex border-b border-slate-800 pb-4 mb-6 gap-3">
                <button
                  id="tab-inquiry-form"
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'form'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white bg-slate-950'
                  }`}
                >
                  Send Written Inquiry
                </button>

                <button
                  id="tab-calendar-booking"
                  type="button"
                  onClick={() => setActiveTab('calendar')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'calendar'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white bg-slate-950'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Instant 30-Min Calendar</span>
                </button>
              </div>

              {/* TAB 1: FORM */}
              {activeTab === 'form' && (
                <div>
                  {submitSuccess ? (
                    <div id="contact-success-state" className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        Consultation Request Received
                      </h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry has been routed to our Senior Growth Partners. We will review <span className="text-blue-400">{formData.company || 'your brand'}</span> and contact you within 4 business hours.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitSuccess(false);
                            setFormData({
                              fullName: '',
                              email: '',
                              company: '',
                              phone: '',
                              website: '',
                              serviceNeeded: 'Digital Marketing',
                              monthlyBudget: '$3,000–$5,000',
                              message: ''
                            });
                          }}
                          className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form id="consultation-contact-form" onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Row 1: Name & Business Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="fullName" className="text-xs font-semibold text-slate-300">
                            Full Name <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            placeholder="Sarah Connor"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                              errors.fullName ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.fullName && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.fullName}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                            Business Email <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="sarah@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                              errors.email ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.email && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Company & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="company" className="text-xs font-semibold text-slate-300">
                            Company / Brand Name <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                              errors.company ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.company && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.company}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                            Phone Number <span className="text-blue-400">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 019-2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                              errors.phone ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.phone && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Website & Service Needed Dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="website" className="text-xs font-semibold text-slate-300">
                            Website / Store URL (Optional)
                          </label>
                          <input
                            id="website"
                            type="url"
                            placeholder="https://yourbrand.com"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="serviceNeeded" className="text-xs font-semibold text-slate-300">
                            Service Needed <span className="text-blue-400">*</span>
                          </label>
                          <select
                            id="serviceNeeded"
                            value={formData.serviceNeeded}
                            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt} className="bg-slate-900 text-white">
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Monthly Budget */}
                      <div className="space-y-1.5">
                        <label htmlFor="monthlyBudget" className="text-xs font-semibold text-slate-300">
                          Monthly Marketing Budget <span className="text-blue-400">*</span>
                        </label>
                        <select
                          id="monthlyBudget"
                          value={formData.monthlyBudget}
                          onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b} className="bg-slate-900 text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Row 5: Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                          Message / Strategic Growth Goals <span className="text-blue-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          placeholder="Tell us about your current revenue run-rate, primary channels, and your target commercial milestones for the next 6-12 months..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                            errors.message ? 'border-red-500' : 'border-slate-800'
                          }`}
                        />
                        {errors.message && (
                          <span className="text-[11px] text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          id="submit-consultation-btn"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-blue-600/30 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span>Submitting Strategic Brief...</span>
                          ) : (
                            <>
                              <span>Request a Consultation</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono text-center pt-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span>256-bit encrypted data transmission • Strictly confidential</span>
                      </div>

                    </form>
                  )}
                </div>
              )}

              {/* TAB 2: INSTANT CALENDAR BOOKING */}
              {activeTab === 'calendar' && (
                <div className="space-y-6">
                  {calendarBooked ? (
                    <div id="calendar-booking-confirmed" className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        Strategy Call Reserved!
                      </h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Your 30-minute deep dive has been reserved for <strong className="text-white">{selectedDay} at {selectedTime}</strong>. A Google Meet invitation and agenda have been dispatched.
                      </p>
                      <button
                        type="button"
                        onClick={() => setCalendarBooked(false)}
                        className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold"
                      >
                        Reschedule or Book Another
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="text-slate-300 font-semibold">Select Strategy Session Day:</span>
                        <span className="text-blue-400 font-mono">30 Min Executive Session</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {['Tomorrow', 'Thursday', 'Friday'].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`p-3 rounded-lg border text-center text-xs font-semibold transition-colors ${
                              selectedDay === day
                                ? 'bg-blue-600 border-blue-500 text-white'
                                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-slate-300 block">
                          Available Time Slots (EST):
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {['10:00 AM EST', '11:30 AM EST', '02:00 PM EST', '03:30 PM EST', '05:00 PM EST'].map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-2.5 rounded-lg border text-center text-xs font-mono transition-colors ${
                                selectedTime === time
                                  ? 'bg-blue-600 border-blue-500 text-white font-bold'
                                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                        <span className="text-slate-200 font-semibold block">Session Focus:</span>
                        <p>1. Audit of current marketing stack & CAC</p>
                        <p>2. High-intent acquisition leverage points</p>
                        <p>3. Next 90-day execution roadmap</p>
                      </div>

                      <button
                        type="button"
                        id="confirm-calendar-slot-btn"
                        onClick={handleCalendarBooking}
                        className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
                      >
                        Confirm Booking for {selectedDay} at {selectedTime}
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
