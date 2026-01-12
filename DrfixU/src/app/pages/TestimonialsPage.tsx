import { TestimonialsSection } from '../components/TestimonialsSection';

export function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-[#1F4FD8]">Stories</span>
            </h1>
            <p className="text-lg text-gray-600">
              Real experiences from real patients who transformed their lives with DrFixU. 
              Read how we helped them recover and return to their active lives.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Patient Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 mb-12">
              These statistics represent real people who achieved real results
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#1F4FD8] mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#1F4FD8] mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#1F4FD8] mb-2">8 weeks</div>
                <div className="text-gray-600">Avg. Recovery Time</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#1F4FD8] mb-2">10,000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
