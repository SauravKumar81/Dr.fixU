import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { VideosPage } from './pages/VideosPage';
import { ConsultPage } from './pages/ConsultPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { VisionPage } from './pages/VisionPage';
import { JoinTherapistPage } from './pages/JoinTherapistPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/join-therapist" element={<JoinTherapistPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}
