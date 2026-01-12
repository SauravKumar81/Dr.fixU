import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[#1F4FD8]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1F4FD8] hover:bg-[#1F4FD8]/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#1F4FD8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#1F4FD8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">support@drfixu.com</p>
                      <p className="text-gray-600">info@drfixu.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#1F4FD8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Healthcare Avenue<br />
                        Medical District<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1F4FD8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#1F4FD8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-[#1F4FD8]/5 to-[#F36A21]/5 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For urgent medical concerns, please call our 24/7 helpline or visit the nearest emergency room.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#1F4FD8] text-[#1F4FD8] hover:bg-[#1F4FD8]/10"
                >
                  Call Emergency Helpline
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
            <div className="bg-gray-200 h-96 rounded-2xl overflow-hidden">
              {/* Placeholder for map - you can integrate Google Maps or similar */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Map will be integrated here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
