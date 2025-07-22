
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Users, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Tariff = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const tariffData = [
    {
      category: 'DELUXE STUDIO SUITE',
      mealPlan: 'BREAKFAST INCLUDED',
      persons: '2 ADULTS',
      weekday: '3500/-',
      weekend: '4500/-'
    },
    {
      category: 'DELUXE EDGE VIEW',
      mealPlan: 'BREAKFAST INCLUDED',
      persons: '2 ADULTS',
      weekday: '4200/-',
      weekend: '5200/-'
    },
    {
      category: 'LOTUS FAMILY SUITE',
      mealPlan: 'BREAKFAST INCLUDED',
      persons: '4 ADULTS',
      weekday: '6000/-',
      weekend: '7000/-'
    },
    {
      category: 'PRESIDENTIAL SUITE',
      mealPlan: 'BREAKFAST INCLUDED',
      persons: '4 ADULTS',
      weekday: '7000/-',
      weekend: '8000/-'
    }
  ];

  const policies = [
    {
      title: 'Child Policy',
      content: 'Children Between 5 to 12 Years 1200/- & Extra Person Charges (Above 12 Years) 1500/-'
    },
    {
      title: 'Booking Terms',
      content: 'Above Tariff is Not Applicable For New Year vacation & Long Weekends. No Cancellation Policy Will be Applicable For New year vacation & Long Weekends. Group & Corporate Booking Above 20 Adults Call On +91 93711 79888.'
    },
    {
      title: 'Resort Timings',
      content: 'Resort Timing: Check in – 1 PM | Checkout – 11: 00 AM | Breakfast-8:00 to 10AM| Lunch- 1PM To 3PM| Hi-Tea- 4PM to 6PM| Dinner- 07:00 to 10:00PM | Game Zone – 08AM To 10PM| Gym- 07AM To 11AM & Evening- 6PM To 10PM | Swimming Pool – 08 AM To 06 PM'
    },
    {
      title: 'Resort Policy',
      content: 'Breakfast & Buffet Meals Available On Chef Choice Only. Food Service Available Only In Restaurant & Room Service. Jain Food Available Only On Prior Request Before Check in. Rights Of Admission Reserve With RVJ Enterprises.'
    },
    {
      title: 'Reservation & Cancellation Policy',
      content: 'For Booking Confirmation 50% Advance Required. Balance 50% payment At The Time Of Check in Only. 0-30 Days Prior To Stay – No Refund. More Than 30 Days Prior To Stay – 10% Refund From Advance Payment. All Refunds Will Attract a 10% Administrative Charges.'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-800 to-gray-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Room Tariffs
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Transparent pricing for luxury accommodations in the heart of nature
          </p>
        </div>
      </section>

      {/* Tariff Table */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl luxury-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-800/90 text-ivory p-6">
              <h2 className="font-playfair text-3xl font-bold text-center">
                ROOM TARIFF 2024 - 2025
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gold/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">ROOM CATEGORIES</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">MEAL PLAN</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">PERSONS</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">MON-THURS</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-800">FRI-SUN</th>
                  </tr>
                </thead>
                <tbody>
                  {tariffData.map((row, index) => (
                    <tr key={index} className="border-b border-gold/10 hover:bg-gold/5 transition-colors">
                      <td className="px-6 py-6 font-semibold text-gray-800">{row.category}</td>
                      <td className="px-6 py-6 text-center text-gray-800/80">{row.mealPlan}</td>
                      <td className="px-6 py-6 text-center text-gray-800/80">{row.persons}</td>
                      <td className="px-6 py-6 text-center font-bold text-gold">{row.weekday}</td>
                      <td className="px-6 py-6 text-center font-bold text-gold">{row.weekend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {tariffData.map((row, index) => (
                <div key={index} className="bg-gold/5 rounded-2xl p-6 border border-gold/20">
                  <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">{row.category}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-800/80">
                        <Coffee className="h-4 w-4 mr-2" />
                        {row.mealPlan}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-800/80">
                        <Users className="h-4 w-4 mr-2" />
                        {row.persons}
                      </span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gold/20">
                      <div className="text-center">
                        <p className="text-sm text-gray-800/60">MON-THURS</p>
                        <p className="font-bold text-gold text-lg">{row.weekday}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-800/60">FRI-SUN</p>
                        <p className="font-bold text-gold text-lg">{row.weekend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gold/5 border-t border-gold/20">
              <p className="text-center text-gray-800 font-semibold">
                Children Between 5 to 12 Years 1200/- & Extra Person Charges (Above 12 Years) 1500/-
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 text-center mb-12">
            Terms & Policies
          </h2>

          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div key={index} className="bg-ivory/50 rounded-2xl overflow-hidden border border-gold/20">
                <button
                  onClick={() => toggleSection(policy.title)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gold/10 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">{policy.title}</h3>
                  {expandedSection === policy.title ? (
                    <ChevronUp className="h-5 w-5 text-gold" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gold" />
                  )}
                </button>
                {expandedSection === policy.title && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-800/80 leading-relaxed">{policy.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-gray-800/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-ivory/80 mb-8">
            Book your perfect getaway and create unforgettable memories at Vintage Valley Resort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-gray-800 transition-all duration-300">
              Call +91 9371179888
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tariff;
