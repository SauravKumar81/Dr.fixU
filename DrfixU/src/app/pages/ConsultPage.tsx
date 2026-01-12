import { ConsultationSection } from '../components/ConsultationSection';

export function ConsultPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your <span className="text-[#1F4FD8]">Consultation</span>
            </h1>
            <p className="text-lg text-gray-600">
              Schedule a consultation with our expert physiotherapists. 
              Choose between video consultation or in-person clinic visit.
            </p>
          </div>
        </div>
      </section>

      <ConsultationSection />

      {/* Why Book With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Book With DrFixU?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600 text-sm">
                    Choose from multiple time slots that fit your schedule
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Professional Care</h3>
                  <p className="text-gray-600 text-sm">
                    All our physiotherapists are licensed and experienced
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees, clear pricing for all services
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Easy Rescheduling</h3>
                  <p className="text-gray-600 text-sm">
                    Change your appointment anytime up to 24 hours before
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
