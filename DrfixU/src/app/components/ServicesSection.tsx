import { Play } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    title: 'Back Pain Relief',
    description: 'Targeted exercises to strengthen your back and reduce chronic pain',
    duration: '15-20 min',
    sessions: '12 Sessions',
    image: 'https://images.unsplash.com/photo-1758599879927-f60878034fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Knee Pain Exercises',
    description: 'Improve mobility and reduce knee pain with guided exercises',
    duration: '12-15 min',
    sessions: '10 Sessions',
    image: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGh5c2lvdGhlcmFweSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Neck Pain Therapy',
    description: 'Relieve tension and improve neck flexibility with expert guidance',
    duration: '10-12 min',
    sessions: '8 Sessions',
    image: 'https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNrJTIwcGFpbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzY3MjU2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Shoulder Rehabilitation',
    description: 'Restore shoulder strength and range of motion effectively',
    duration: '15-18 min',
    sessions: '14 Sessions',
    image: 'https://images.unsplash.com/photo-1686791789070-90949cfec4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMGV4ZXJjaXNlJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NjcyNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Condition-Based <span className="text-[#1F4FD8]">Video Programs</span>
          </h2>
          <p className="text-lg text-gray-600">
            Expert-led exercise programs designed for specific conditions. Follow along at your own pace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Play className="h-8 w-8 text-[#1F4FD8] fill-[#1F4FD8]" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {service.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-[#1F4FD8] font-medium">{service.sessions}</span>
                  <div className="text-[#F36A21] hover:text-[#F36A21]/80 transition-colors">
                    <Play className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
