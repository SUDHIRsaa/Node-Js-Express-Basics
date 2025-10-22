import React from 'react'

export default function Task2() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            A
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Analytics</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Track and visualize your business growth with responsive charts and insights.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Learn More-y
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            B
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Billing</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Manage invoices, track payments, and automate your subscription plans.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Learn More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            C
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Customers</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Keep track of your users, preferences, and feedback with smooth UI controls.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
