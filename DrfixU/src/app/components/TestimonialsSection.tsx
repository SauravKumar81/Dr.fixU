import { Star, Play } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: 'Rahul Sharma',
    condition: 'Chronic Back Pain Recovery',
    image: 'https://images.unsplash.com/photo-1606618742136-4424143d71fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjByZWNvdmVyeXxlbnwxfHx8fDE3NjcyNTYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    testimonial: 'After 6 months of chronic back pain, DrFixU helped me recover completely. The personalized exercises and expert guidance made all the difference.',
    rating: 5,
    location: 'Mumbai, India',
  },
  {
    name: 'Meera Patel',
    condition: 'Post-Surgery Knee Recovery',
    image: 'https://images.unsplash.com/photo-1607756196359-bfe2f3a335b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGVsZGVybHklMjBwYXRpZW50fGVufDF8fHx8MTc2NzI1NjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    testimonial: 'The online consultation was convenient and professional. My physiotherapist helped me regain full mobility after my knee surgery. Highly recommended!',
    rating: 5,
    location: 'Delhi, India',
  },
  {
    name: 'Anjali Singh',
    condition: 'Shoulder Pain Relief',
    image: 'https://images.unsplash.com/photo-1593204075264-0b7994458bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjByZWNvdmVyeXxlbnwxfHx8fDE3NjcyNTYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    testimonial: 'Amazing service! The video exercises were easy to follow and I saw improvement within weeks. The team is supportive and knowledgeable.',
    rating: 5,
    location: 'Bangalore, India',
  },
];

const videoTestimonial = {
  name: 'Vikram Desai',
  condition: 'Full Recovery Story',
  image: 'https://images.unsplash.com/photo-1606618742136-4424143d71fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjByZWNvdmVyeXxlbnwxfHx8fDE3NjcyNTYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  duration: '3:24',
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient <span className="text-[#1F4FD8]">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real people who transformed their lives with DrFixU
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1F4FD8]/20"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#1F4FD8]">{testimonial.condition}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F36A21] text-[#F36A21]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Card */}
        <Card className="overflow-hidden rounded-2xl shadow-lg border-0 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Video Thumbnail */}
            <div className="relative group cursor-pointer bg-gray-100">
              <img
                src={videoTestimonial.image}
                alt={videoTestimonial.name}
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-12 w-12 text-[#1F4FD8] fill-[#1F4FD8]" />
                </div>
                <div className="mt-4 text-white font-semibold">Watch Full Story</div>
                <div className="text-white/80 text-sm">{videoTestimonial.duration}</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center bg-white">
              <div className="inline-block px-4 py-2 bg-[#F36A21]/10 rounded-full mb-4 self-start">
                <span className="text-[#F36A21] font-medium text-sm">Featured Story</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                From Pain to Performance
              </h3>
              
              <p className="text-[#1F4FD8] font-medium mb-4">
                {videoTestimonial.name} • {videoTestimonial.condition}
              </p>
              
              <p className="text-gray-600 mb-6">
                Watch how Vikram overcame a severe sports injury and returned to competitive athletics with the help of DrFixU's comprehensive rehabilitation program.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <div className="text-xl font-bold text-[#1F4FD8]">8 weeks</div>
                  <div className="text-xs text-gray-600">Recovery Time</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#1F4FD8]">100%</div>
                  <div className="text-xs text-gray-600">Mobility Restored</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#1F4FD8]">5.0</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1F4FD8]">10,000+</div>
            <div className="text-sm text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1F4FD8]">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1F4FD8]">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1F4FD8]">50+</div>
            <div className="text-sm text-gray-600">Expert Physios</div>
          </div>
        </div>
      </div>
    </section>
  );
}
