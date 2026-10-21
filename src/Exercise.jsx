import React from 'react'
import UserCard from './UserCard.jsx' 
function Exercise() {
  return (
  <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Nabil  Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard
        name="Ficky"
        email="ficky@gmail.com"
        street="Jl.Ngaliyan 45"
        city="Semarang"
    />
        <UserCard
          name="Ucup"
          email="ucup@gmail.com"
          street="Jl. Sudirman"
          city="Jakarta"
        />
        <UserCard
          name="Bima"
          email="bima@gmail.com"
          street="Jl. Diponegoro"
          city="Yogyakarta"
        />
      </div>
    </div>
  </>
);
}

export default Exercise