import { useState } from 'react';
import { Video, MapPin, Calendar, Clock, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { toast } from 'sonner';

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

const dates = [
  { day: 'Mon', date: '20' },
  { day: 'Tue', date: '21' },
  { day: 'Wed', date: '22' },
  { day: 'Thu', date: '23' },
  { day: 'Fri', date: '24' },
  { day: 'Sat', date: '25' },
];

export function ConsultationSection() {
  const [selectedConsultationType, setSelectedConsultationType] = useState<'video' | 'clinic'>('video');
  const [selectedDate, setSelectedDate] = useState(dates[2].date);
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    if (!selectedTime) {
      toast.error('Please select a time slot');
      return;
    }
    toast.success('Booking confirmed! You will receive a confirmation email shortly.');
  };

  return (
    <section id="consult" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-[#1F4FD8]">Consultation</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose your preferred consultation method and schedule an appointment with our expert physiotherapists
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Doctor Profile Card */}
          <Card className="p-6 md:p-8 rounded-2xl shadow-lg border-0">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Doctor Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXBpc3QlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MjU2MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Sarah Mitchell"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#1F4FD8]/20"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Doctor Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Mitchell</h3>
                <p className="text-[#1F4FD8] font-medium">PT, MSc (Physiotherapy)</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1F4FD8]">10+</div>
                  <div className="text-sm text-gray-600">Years Exp.</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1F4FD8]">5000+</div>
                  <div className="text-sm text-gray-600">Patients</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1F4FD8]">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* Specializations */}
              <div className="w-full pt-4">
                <p className="text-sm text-gray-600 mb-3">Specializations:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-[#1F4FD8] rounded-full text-sm">Sports Injury</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#1F4FD8] rounded-full text-sm">Back Pain</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#1F4FD8] rounded-full text-sm">Joint Pain</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking Form */}
          <Card className="p-6 md:p-8 rounded-2xl shadow-lg border-0">
            <div className="space-y-6">
              {/* Consultation Type */}
              <div>
                <label className="block mb-3 text-gray-700">Select Consultation Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedConsultationType('video')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedConsultationType === 'video'
                        ? 'border-[#1F4FD8] bg-[#1F4FD8]/5'
                        : 'border-gray-200 hover:border-[#1F4FD8]/50'
                    }`}
                  >
                    <Video className={`h-6 w-6 mx-auto mb-2 ${
                      selectedConsultationType === 'video' ? 'text-[#1F4FD8]' : 'text-gray-600'
                    }`} />
                    <div className="font-semibold text-gray-900">Video Call</div>
                    <div className="text-sm text-gray-600">₹650</div>
                    <div className="text-xs text-gray-500">30 minutes</div>
                  </button>
                  <button
                    onClick={() => setSelectedConsultationType('clinic')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedConsultationType === 'clinic'
                        ? 'border-[#1F4FD8] bg-[#1F4FD8]/5'
                        : 'border-gray-200 hover:border-[#1F4FD8]/50'
                    }`}
                  >
                    <MapPin className={`h-6 w-6 mx-auto mb-2 ${
                      selectedConsultationType === 'clinic' ? 'text-[#1F4FD8]' : 'text-gray-600'
                    }`} />
                    <div className="font-semibold text-gray-900">Clinic Visit</div>
                    <div className="text-sm text-gray-600">₹800</div>
                    <div className="text-xs text-gray-500">45 minutes</div>
                  </button>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block mb-3 text-gray-700 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Select Date
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {dates.map((dateObj) => (
                    <button
                      key={dateObj.date}
                      onClick={() => setSelectedDate(dateObj.date)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedDate === dateObj.date
                          ? 'border-[#1F4FD8] bg-[#1F4FD8] text-white'
                          : 'border-gray-200 hover:border-[#1F4FD8]/50'
                      }`}
                    >
                      <div className="text-xs">{dateObj.day}</div>
                      <div className="font-semibold">{dateObj.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block mb-3 text-gray-700 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border-2 transition-all text-sm ${
                        selectedTime === time
                          ? 'border-[#1F4FD8] bg-[#1F4FD8] text-white'
                          : 'border-gray-200 hover:border-[#1F4FD8]/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                size="lg"
                className="w-full bg-[#F36A21] hover:bg-[#F36A21]/90 text-white rounded-xl py-6"
                onClick={handleBooking}
              >
                <Check className="mr-2 h-5 w-5" />
                Confirm Booking
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
