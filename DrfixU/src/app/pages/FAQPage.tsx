import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function FAQPage() {
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What is DrFixU?',
          answer: 'DrFixU is a digital physiotherapy platform that connects patients with licensed physiotherapists for virtual consultations and personalized treatment plans. We make quality physiotherapy care accessible from the comfort of your home.'
        },
        {
          question: 'How does online physiotherapy work?',
          answer: 'Online physiotherapy involves video consultations with licensed physiotherapists who assess your condition, create personalized treatment plans, and guide you through exercises in real-time. You can also access our library of exercise videos and track your progress through our platform.'
        },
        {
          question: 'Is online physiotherapy as effective as in-person sessions?',
          answer: 'Yes! Research shows that online physiotherapy is highly effective for many conditions. Our therapists use proven assessment techniques and provide personalized guidance. For certain conditions requiring hands-on treatment, we can arrange in-person sessions at our partner clinics.'
        }
      ]
    },
    {
      category: 'Bookings & Appointments',
      questions: [
        {
          question: 'How do I book a consultation?',
          answer: 'Simply click on the "Book Consultation" button, select your preferred therapist, choose a convenient time slot, and complete the payment. You\'ll receive a confirmation email with your appointment details and video call link.'
        },
        {
          question: 'Can I reschedule or cancel my appointment?',
          answer: 'Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time without any charges. Please log into your account and manage your bookings from the dashboard.'
        },
        {
          question: 'What if I miss my appointment?',
          answer: 'If you miss your scheduled appointment without prior notice, the consultation fee will not be refunded. We recommend rescheduling if you know you can\'t make it to ensure you don\'t lose your booking fee.'
        }
      ]
    },
    {
      category: 'Payments & Insurance',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          question: 'Do you accept insurance?',
          answer: 'We are working with various insurance providers to offer coverage. Currently, we provide detailed invoices that you can submit to your insurance company for reimbursement. Please check with your insurance provider for coverage details.'
        },
        {
          question: 'What is your refund policy?',
          answer: 'If you cancel your appointment more than 24 hours in advance, you\'ll receive a full refund. Cancellations within 24 hours are subject to a 50% cancellation fee. No-shows are not eligible for refunds.'
        }
      ]
    },
    {
      category: 'Treatment & Programs',
      questions: [
        {
          question: 'What conditions do you treat?',
          answer: 'We treat a wide range of musculoskeletal conditions including back pain, neck pain, knee pain, shoulder problems, sports injuries, post-surgical rehabilitation, and chronic pain conditions. Our therapists specialize in various areas to provide comprehensive care.'
        },
        {
          question: 'How long is each session?',
          answer: 'Initial consultations typically last 45-60 minutes, while follow-up sessions are usually 30-45 minutes. Your therapist will work with you to ensure you get the attention and guidance you need.'
        },
        {
          question: 'How many sessions will I need?',
          answer: 'The number of sessions varies depending on your condition and goals. Your therapist will create a personalized treatment plan and discuss the expected timeline during your initial consultation. Most patients see significant improvement within 4-8 weeks.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What equipment do I need for a video consultation?',
          answer: 'You need a device (smartphone, tablet, or computer) with a camera, microphone, and stable internet connection. We recommend using a laptop or tablet positioned at a distance where your therapist can see your full body during exercises.'
        },
        {
          question: 'What if I have technical issues during my session?',
          answer: 'If you experience technical difficulties, try refreshing your browser or rejoining the video call. If issues persist, contact our support team immediately at support@drfixu.com or call our helpline. We can reschedule your session at no additional cost if technical problems prevent the consultation.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use industry-standard encryption and follow strict HIPAA guidelines to protect your personal and medical information. Your data is stored securely and never shared with third parties without your consent.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#1F4FD8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-[#1F4FD8]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#1F4FD8]">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services, bookings, and treatments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1F4FD8]/10 to-[#F36A21]/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@drfixu.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1F4FD8] text-white rounded-xl hover:bg-[#1F4FD8]/90 transition-colors"
              >
                Email Support
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#F36A21] text-white rounded-xl hover:bg-[#F36A21]/90 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
