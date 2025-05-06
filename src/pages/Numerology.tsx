
import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SlideShowServiceCard from '@/components/SlideShowServiceCard';
import VedicIconGrid from '@/components/VedicIconGrid';
import VedicNumerologyHeader from '@/components/VedicNumerologyHeader';
import { VedicIcon, VedicIconCircle, VedicIconWithTitle } from '@/components/VedicIcons';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3 text-cool-gray">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Numerology = () => {
  const services = [
    {
      title: "Personality Number Analysis",
      description: "Understand your core strengths, challenges, and life purpose through detailed birth number analysis.",
      icon: <Calendar size={28} />
    },
    {
      title: "Destiny Number Reading",
      description: "Discover where your life path is leading you and how to optimize your journey.",
      icon: <Calendar size={28} />
    },
    {
      title: "Grid Analysis (Lo-Shu)",
      description: "In-depth analysis of your energy grid to identify strengths and areas for improvement.",
      icon: <Calendar size={28} />
    },
    {
      title: "Dasha Calculation",
      description: "Period-wise analysis of favorable and challenging times in your journey of life.",
      icon: <Calendar size={28} />
    },
    {
      title: "Name Correction",
      description: "Optimize your name's vibration to align with your birth energy and life path.",
      icon: <Calendar size={28} />
    },
    {
      title: "Number Corrections",
      description: "Harmonize your mobile, bank account, car, and house numbers for positive energy.",
      icon: <Calendar size={28} />
    },
    {
      title: "Compatibility Checking",
      description: "Analyze relationship compatibility based on number vibrations and energy patterns.",
      icon: <Calendar size={28} />
    },
    {
      title: "Remedies",
      description: "Custom remedies to balance unfavorable numbers and enhance positive vibrations.",
      icon: <Calendar size={28} />
    },
  ];

  const faqs = [
    {
      question: "What is the difference between Vedic and Western numerology?",
      answer: "Vedic numerology is rooted in ancient Indian traditions and focuses on the vibration of sounds and names, while Western numerology emphasizes birth dates and life paths. Our practice primarily uses Vedic methods with some complementary Western techniques for a holistic approach."
    },
    {
      question: "How can changing my name actually impact my life?",
      answer: "Names carry vibrations that interact with your birth energy. When they're harmonized, this creates a positive resonance that can remove obstacles and open new opportunities. We've documented numerous cases where name corrections have led to significant positive life changes."
    },
    {
      question: "Is online consultation as effective as in-person?",
      answer: "Absolutely. The calculations and analysis are identical whether done in person or remotely. We've successfully conducted thousands of online consultations with equal effectiveness to in-person sessions."
    },
    {
      question: "How long does it take to see results after numerological changes?",
      answer: "Most clients report noticing subtle changes within 1-3 months, with more significant shifts occurring over 6-12 months. However, this varies depending on individual circumstances and the specific changes implemented."
    },
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section with Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-dusty-lavender/30 to-celestial-blue/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in opacity-0">
            Personalized Vedic & Lo-Shu<br />
            <span className="text-mystic-gold">Numerology Services</span>
          </h1>
          <p className="text-lg text-cool-gray max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Empower your life through numbers. Discover your true potential and align with your destiny.
          </p>
        </div>
      </section>

      {/* Vedic Numerology Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Vedic <span className="text-mystic-gold">Numerology Services</span></h2>

          <div className="animate-fade-in opacity-0 mb-10">
            <VedicNumerologyHeader className="mb-12" />

            {/* Numerology Services */}
            <div className="border-2 border-blue-500/30 rounded-lg p-4 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center text-mystic-gold">Numerology Services</h3>
              <VedicIconGrid
                columns={4}
                iconSize="md"
                filter="numerology"
                gap="lg"
              />
            </div>

            {/* Analysis Services */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <VedicIconWithTitle
                icon="personalityAnalysis"
                title="Personality Analysis"
                link="/numerology"
                size="md"
                color="personality"
              />
              <VedicIconWithTitle
                icon="destinyReading"
                title="Destiny Number Reading"
                link="/numerology"
                size="md"
                color="destiny"
              />
              <VedicIconWithTitle
                icon="gridAnalysis"
                title="Grid Analysis"
                link="/numerology"
                size="md"
                color="grid"
              />
              <VedicIconWithTitle
                icon="onSiteVisit"
                title="On-Site Visits"
                link="/numerology"
                size="md"
                color="vastu"
              />
            </div>

            {/* Remedial Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <VedicIconWithTitle
                icon="dashaCalculation"
                title="Dasha Calculation"
                link="/numerology"
                size="md"
                color="remedial"
              />
              <VedicIconWithTitle
                icon="bankNumbers"
                title="Mobile/Bank/Car Numbers"
                link="/numerology"
                size="md"
                color="remedial"
              />
              <VedicIconWithTitle
                icon="remedialMeasures"
                title="Remedial Measures"
                link="/numerology"
                size="md"
                color="remedial"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Calendar className="mr-2" size={18} />
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Detailed <span className="text-mystic-gold">Service Offerings</span></h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              // Create groups of 2 services for each slideshow
              const serviceGroup = index % 2 === 0 && index + 1 < services.length
                ? [
                    {
                      title: services[index].title,
                      description: services[index].description,
                      icon: Calculator
                    },
                    {
                      title: services[index + 1].title,
                      description: services[index + 1].description,
                      icon: Calculator
                    }
                  ]
                : [
                    {
                      title: services[index].title,
                      description: services[index].description,
                      icon: Calculator
                    }
                  ];

              // Only render on even indices to avoid duplicates
              return index % 2 === 0 ? (
                <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                  <SlideShowServiceCard
                    services={serviceGroup}
                    interval={3500}
                    linkText="Book Now"
                    contactLink="/contact"
                  />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked <span className="text-mystic-gold">Questions</span></h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mystic-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Your Numbers Corrected?</h2>
          <Link to="/contact" target='_blank' className="px-8 py-3 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-colors inline-block">
            Contact Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Numerology;
