import { VideoLibrary } from '../components/VideoLibrary';

export function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exercise <span className="text-[#1F4FD8]">Video Library</span>
            </h1>
            <p className="text-lg text-gray-600">
              Access our comprehensive library of expert-led exercise videos. 
              Watch, learn, and practice at your own pace from anywhere.
            </p>
          </div>
        </div>
      </section>

      <VideoLibrary />

      {/* Video Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Video Categories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">🔙</div>
                <h3 className="font-semibold text-gray-900 mb-1">Back Pain</h3>
                <p className="text-sm text-gray-600">24 videos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">🦵</div>
                <h3 className="font-semibold text-gray-900 mb-1">Knee Issues</h3>
                <p className="text-sm text-gray-600">18 videos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900 mb-1">Shoulder</h3>
                <p className="text-sm text-gray-600">15 videos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">🏃</div>
                <h3 className="font-semibold text-gray-900 mb-1">Sports Injury</h3>
                <p className="text-sm text-gray-600">20 videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
