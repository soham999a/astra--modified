import { Calendar, UserCheck, Phone, Award, Compass, Star, Home, Calculator, HelpCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import SlideShowServiceCard from '@/components/SlideShowServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import NumerologyCalculator from '@/components/NumerologyCalculator';
import FaqAccordion from '@/components/FaqAccordion';
import ServiceComparisonTable from '@/components/ServiceComparisonTable';
import VedicIconGrid from '@/components/VedicIconGrid';
import { VedicIcon, VedicIconCircle, VedicIconWithTitle } from '@/components/VedicIcons';
import VedicNumerologyHeader from '@/components/VedicNumerologyHeader';
import FloatingMemberCounter from '@/components/MemberCounter';

const Index = () => {
  // Numerology services data for slideshow
  const numerologyServices = [
    {
      title: "Personality Number Analysis",
      description: "Understand your core strengths, challenges, and life purpose through detailed birth number analysis.",
      icon: Calculator
    },
    {
      title: "Name Correction",
      description: "Optimize your name's vibration to align with your birth energy and life path.",
      icon: Calculator
    },
    {
      title: "Compatibility Checking",
      description: "Analyze relationship compatibility based on number vibrations and energy patterns.",
      icon: Calculator
    }
  ];

  // Vastu services data for slideshow
  const vastuServices = [
    {
      title: "Home Vastu",
      description: "Complete analysis and correction recommendations for residential properties.",
      icon: Home
    },
    {
      title: "Office/Business Vastu",
      description: "Optimize workspace energy for better productivity and business growth.",
      icon: Home
    },
    {
      title: "Plot Selection",
      description: "Expert guidance for selecting the most auspicious location for your property.",
      icon: Home
    }
  ];

  // Astrology services data for slideshow
  const astrologyServices = [
    {
      title: "Birth Chart Analysis",
      description: "Comprehensive analysis of your natal chart to reveal your life path and potential.",
      icon: Star
    },
    {
      title: "Compatibility Matching",
      description: "Detailed analysis of relationship compatibility based on astrological factors.",
      icon: Star
    },
    {
      title: "Predictive Astrology",
      description: "Insights into upcoming life phases and guidance for navigating challenges.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />
      <FloatingMemberCounter position="bottom-right" />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative animate-fade-in opacity-0">
              <img
                src="astrologer.webp"
                alt="Spiritual Expert"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-mystic-gold text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">20+ Years</p>
                <p className="text-sm">of Experience</p>
              </div>
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">About <span className="text-mystic-gold">Our Expert</span></h2>
              <p className="text-cool-gray mb-4">
                Welcome to HarmonySeeker, where ancient wisdom meets modern living. Our founder, with over 20 years of experience in Vedic sciences, has helped thousands transform their lives through the power of numbers, spaces, and celestial knowledge.
              </p>
              <p className="text-cool-gray mb-6">
                Trained in traditional Vedic practices and contemporary applications, our expert provides authentic guidance that blends time-tested wisdom with practical solutions for today's challenges.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Certified Expert</p>
                    <p className="text-sm text-cool-gray">Vedic Sciences</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-3">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <p className="font-medium">1000+ Clients</p>
                    <p className="text-sm text-cool-gray">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vedic Numerology Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Vedic <span className="text-mystic-gold">Numerology</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Ancient wisdom for modern life transformation through the power of numbers and spatial harmony.
            </p>
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
            <VedicNumerologyHeader className="mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-mystic-gold">Numerology Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <VedicIconWithTitle
                    icon="nameCorrection"
                    title="Name Correction"
                    link="/numerology"
                    size="md"
                    color="numerology"
                  />
                  <VedicIconWithTitle
                    icon="personalityAnalysis"
                    title="Personality Analysis"
                    link="/numerology"
                    size="md"
                    color="personality"
                  />
                  <VedicIconWithTitle
                    icon="compatibilityChecking"
                    title="Compatibility Checking"
                    link="/numerology"
                    size="md"
                    color="numerology"
                  />
                  <VedicIconWithTitle
                    icon="luckyNumbers"
                    title="Lucky Numbers"
                    link="/numerology"
                    size="md"
                    color="numerology"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-500">Vastu Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <VedicIconWithTitle
                    icon="homeVastu"
                    title="Home Vastu"
                    link="/vastu"
                    size="md"
                    color="vastu"
                  />
                  <VedicIconWithTitle
                    icon="businessVastu"
                    title="Business Vastu"
                    link="/vastu"
                    size="md"
                    color="vastu"
                  />
                  <VedicIconWithTitle
                    icon="plotSelection"
                    title="Plot Selection"
                    link="/vastu"
                    size="md"
                    color="vastu"
                  />
                  <VedicIconWithTitle
                    icon="onSiteVisit"
                    title="On-Site Visits"
                    link="/vastu"
                    size="md"
                    color="vastu"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/numerology" className="btn-primary inline-flex items-center mr-4">
                <Calculator className="mr-2" size={18} />
                Explore Numerology
              </Link>
              <Link to="/vastu" className="btn-primary inline-flex items-center">
                <Home className="mr-2" size={18} />
                Explore Vastu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-celestial-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our <span className="text-mystic-gold">Services</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Discover how ancient sciences can bring clarity, harmony, and positive transformation to your modern life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <SlideShowServiceCard
                services={numerologyServices}
                interval={4000}
                linkText="Explore Numerology"
                contactLink="/numerology"
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <SlideShowServiceCard
                services={vastuServices}
                interval={4000}
                linkText="Explore Vastu"
                contactLink="/vastu"
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <SlideShowServiceCard
                services={astrologyServices}
                interval={4000}
                linkText="Coming Soon"
                contactLink="/astrology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why <span className="text-mystic-gold">Choose Us</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Our approach combines ancient wisdom with modern understanding to provide solutions that truly work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <Award size={24} />
              </div>
              <h3 className="font-medium mb-2">Authentic</h3>
              <p className="text-cool-gray text-sm">Traditional knowledge, authentic practices</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <UserCheck size={24} />
              </div>
              <h3 className="font-medium mb-2">Personalized</h3>
              <p className="text-cool-gray text-sm">Tailored solutions for individual needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <UserCheck size={24} />
              </div>
              <h3 className="font-medium mb-2">1000+ Clients</h3>
              <p className="text-cool-gray text-sm">Trusted by clients worldwide</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <Phone size={24} />
              </div>
              <h3 className="font-medium mb-2">Always Available</h3>
              <p className="text-cool-gray text-sm">Continuous support and follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section bg-dusty-lavender/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Client <span className="text-mystic-gold">Testimonials</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Don't just take our word for it – hear from those whose lives have been transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <TestimonialCarousel
                testimonials={[
                  {
                    name: "Priya Sharma",
                    location: "Delhi, India",
                    rating: 5,
                    text: "The numerology analysis was eye-opening. The name correction suggestions have brought positive changes in my career.",
                    service: "Numerology Consultation"
                  },
                  {
                    name: "Rahul Mehra",
                    location: "Mumbai, India",
                    rating: 5,
                    text: "The Vastu consultation completely transformed our home energy. We feel more peaceful and prosperous.",
                    service: "Vastu Consultation"
                  },
                  {
                    name: "Anjali Patel",
                    location: "Bengaluru, India",
                    rating: 4,
                    text: "I was skeptical at first, but the personal number analysis was incredibly accurate and helpful.",
                    service: "Personality Analysis"
                  }
                ]}
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-mystic-gold">Try Our Free Numerology Calculator</h3>
                <NumerologyCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-celestial-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently <span className="text-mystic-gold">Asked Questions</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Find answers to common questions about our services and ancient sciences.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
            <FaqAccordion
              faqs={[
                {
                  question: "What is Vedic Numerology?",
                  answer: "Vedic Numerology is an ancient Indian science that studies the mystical relationship between numbers and events. It analyzes the influence of numbers on human life and provides insights into personality traits, life path, and potential future outcomes."
                },
                {
                  question: "How can name correction help me?",
                  answer: "Name correction aligns your name's vibration with your birth energy, potentially improving various aspects of life including career, relationships, and overall well-being. It works by balancing the numerical value of your name with your birth number."
                },
                {
                  question: "What is Vastu Shastra?",
                  answer: "Vastu Shastra is the ancient Indian science of architecture and design that aims to create harmony between humans and their living spaces. It provides guidelines for designing and arranging spaces to optimize positive energy flow."
                },
                {
                  question: "How long does a consultation take?",
                  answer: "A standard consultation typically takes 60-90 minutes, depending on the complexity of your questions and the service you choose. Follow-up sessions may be shorter, usually around 30-45 minutes."
                },
                {
                  question: "Do I need to provide my birth details?",
                  answer: "Yes, for numerology and astrological consultations, we require your full birth date, time, and place of birth for accurate analysis. For Vastu consultations, we need details about your property."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section id="service-packages" className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our <span className="text-mystic-gold">Service Packages</span></h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Choose the right package that suits your needs and budget.
            </p>
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
            <ServiceComparisonTable
              serviceType="numerology"
              features={[
                { name: "Personality Number Analysis", basic: true, standard: true, premium: true },
                { name: "Life Path Number Analysis", basic: true, standard: true, premium: true },
                { name: "Name Correction Suggestions", basic: false, standard: true, premium: true },
                { name: "Lucky Numbers & Dates", basic: false, standard: true, premium: true },
                { name: "Detailed Written Report", basic: false, standard: false, premium: true },
                { name: "Follow-up Consultation", basic: false, standard: false, premium: true }
              ]}
              tiers={[
                {
                  name: "Basic",
                  price: "₹1,999",
                  description: "Essential numerology reading",
                  features: ["30-minute consultation", "Core number analysis"],
                  link: "/contact"
                },
                {
                  name: "Standard",
                  price: "₹3,999",
                  description: "Comprehensive analysis with name correction",
                  features: ["60-minute consultation", "Name correction", "Lucky numbers"],
                  recommended: true,
                  link: "/contact"
                },
                {
                  name: "Premium",
                  price: "₹7,999",
                  description: "Complete life guidance package",
                  features: ["90-minute consultation", "Detailed written report", "Follow-up session"],
                  link: "/contact"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section id="quick-contact" className="section bg-mystic-gold text-white text-center">
        <div className="container mx-auto max-w-3xl animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Transform Your Life?</h2>
          <p className="mb-8 text-white/90">
            Take the first step towards harmony and positive transformation with a personalized consultation.
          </p>
          <Link to="/contact" target='_blank' className="px-8 py-3 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
            <Calendar size={20} className="mr-2" />
            Get Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
