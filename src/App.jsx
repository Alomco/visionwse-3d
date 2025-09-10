import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          🕶️ 3D Eyewear Virtual Try-On Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to the future of eyewear shopping! This platform uses advanced 3D technology 
          and AI to let you virtually try on glasses and sunglasses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Real-time Try-On</h3>
            <p className="text-gray-600">Use your camera to see how glasses look on your face in real-time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Perfect Fit</h3>
            <p className="text-gray-600">AI-powered face analysis ensures the best fit and style recommendations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-lg font-semibold mb-2">Easy Shopping</h3>
            <p className="text-gray-600">Browse thousands of frames and find your perfect pair instantly</p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Start Virtual Try-On
          </button>
        </div>
      </div>
    </div>
  )
}

export default App