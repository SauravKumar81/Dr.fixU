import { Target, Heart, Users, Award } from 'lucide-react';

export function VisionPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#1F4FD8]">Vision</span>
            </h1>
            <p className="text-xl text-gray-600">
              Making quality physiotherapy accessible to everyone, everywhere
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#1F4FD8]/5 to-[#1F4FD8]/10 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#1F4FD8] rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To revolutionize physiotherapy care by leveraging technology and expertise, 
                making professional treatment accessible to everyone regardless of location or circumstances. 
                We believe in empowering patients with knowledge and personalized care.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F36A21]/5 to-[#F36A21]/10 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#F36A21] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading digital physiotherapy platform globally, 
                setting new standards in patient care, recovery outcomes, and healthcare accessibility. 
                We envision a future where quality physiotherapy is just a click away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#1F4FD8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Patient First</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make prioritizes patient well-being and recovery
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#1F4FD8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards in treatment and care delivery
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#1F4FD8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Making quality healthcare available to everyone, everywhere
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#1F4FD8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#1F4FD8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Continuously improving through technology and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Making a difference in people's lives, one patient at a time
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#1F4FD8] mb-2">10,000+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#1F4FD8] mb-2">50+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#1F4FD8] mb-2">95%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
