import { Play, Clock, User } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const videoExercises = [
  {
    title: 'Lower Back Strengthening Routine',
    duration: '15 min',
    doctor: 'Dr. Sarah Mitchell',
    views: '12.5K',
    image: 'https://images.unsplash.com/photo-1758599879927-f60878034fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Knee Mobility & Flexibility',
    duration: '12 min',
    doctor: 'Dr. Rajesh Kumar',
    views: '8.2K',
    image: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGh5c2lvdGhlcmFweSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Neck Pain Relief Exercises',
    duration: '10 min',
    doctor: 'Dr. Priya Sharma',
    views: '15.8K',
    image: 'https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNrJTIwcGFpbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzY3MjU2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Shoulder Rehabilitation Program',
    duration: '18 min',
    doctor: 'Dr. Michael Chen',
    views: '9.4K',
    image: 'https://images.unsplash.com/photo-1686791789070-90949cfec4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMGV4ZXJjaXNlJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NjcyNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Posture Correction Workout',
    duration: '14 min',
    doctor: 'Dr. Sarah Mitchell',
    views: '11.2K',
    image: 'https://images.unsplash.com/photo-1758599879927-f60878034fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Hip Flexor Stretching',
    duration: '11 min',
    doctor: 'Dr. Rajesh Kumar',
    views: '7.6K',
    image: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGh5c2lvdGhlcmFweSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzI1NjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function VideoLibrary() {
  return (
    <section id="videos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exercise <span className="text-[#1F4FD8]">Video Library</span>
          </h2>
          <p className="text-lg text-gray-600">
            Follow expert-led video exercises designed for your specific condition. Watch anytime, anywhere.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoExercises.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="h-8 w-8 text-[#1F4FD8] fill-[#1F4FD8]" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {video.views} views
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {video.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{video.doctor}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#1F4FD8] text-[#1F4FD8] hover:bg-[#1F4FD8] hover:text-white rounded-xl group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#1F4FD8] text-[#1F4FD8] hover:bg-[#1F4FD8] hover:text-white rounded-xl px-8"
          >
            Load More Videos
          </Button>
        </div>
      </div>
    </section>
  );
}
