import { ServicesSection } from '../components/ServicesSection';

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#1F4FD8]">Services</span>
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive physiotherapy programs tailored to your specific needs. 
              Each program is designed by certified physiotherapists to help you recover faster and better.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Programs?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Plans</h3>
                <p className="text-gray-600 text-sm">
                  Each program is customized to your specific condition and recovery goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Led by licensed physiotherapists with years of clinical experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
                <p className="text-gray-600 text-sm">
                  Monitor your recovery journey with detailed progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
