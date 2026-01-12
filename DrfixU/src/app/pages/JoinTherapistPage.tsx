import { CheckCircle, Users, TrendingUp, Heart, Clock, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function JoinTherapistPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1F4FD8]/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team of <span className="text-[#1F4FD8]">Expert Therapists</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a revolutionary platform that's transforming physiotherapy care. 
              Help patients recover while growing your practice.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#1F4FD8] hover:bg-[#1F4FD8]/90 text-white rounded-xl px-8 py-6"
            >
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Join DrFixU?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
                <p className="text-gray-600 text-sm">
                  Work on your own terms. Set your availability and manage your calendar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Growing Patient Base</h3>
                <p className="text-gray-600 text-sm">
                  Access to thousands of patients actively seeking quality physiotherapy care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <Banknote className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Earnings</h3>
                <p className="text-gray-600 text-sm">
                  Earn competitive rates with transparent payment structure and no hidden fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Growth</h3>
                <p className="text-gray-600 text-sm">
                  Continuous learning opportunities and access to latest treatment protocols.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Support System</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated support team and community of fellow therapists to collaborate with.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Platform</h3>
                <p className="text-gray-600 text-sm">
                  User-friendly technology tools for seamless consultation and patient management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Requirements
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Valid physiotherapy license/certification from recognized institution
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Minimum 2 years of clinical experience
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Strong communication skills and patient-centric approach
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comfortable with technology and virtual consultations
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Professional liability insurance (or we can help you get one)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1F4FD8]/10 to-[#F36A21]/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Join our growing community of expert physiotherapists and help transform lives
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#F36A21] hover:bg-[#F36A21]/90 text-white rounded-xl px-8 py-6"
            >
              <Link to="/contact">Apply to Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
