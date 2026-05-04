import React from "react";

const ExtraSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">

      {/* ========== Qurbani Tips ========== */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          🕌 কোরবানির টিপস
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">✅ সুস্থ পশু বাছাই করুন</h3>
            <p className="text-gray-600">
              কোরবানির পশু অবশ্যই সুস্থ, সবল এবং নিখুঁত হতে হবে। অসুস্থ বা আহত পশু দিয়ে কোরবানি হয় না।
            </p>
          </div>

          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">💉 ভ্যাকসিন নিশ্চিত করুন</h3>
            <p className="text-gray-600">
              পশু কেনার আগে অবশ্যই ভ্যাকসিনেশন সার্টিফিকেট যাচাই করুন। ভ্যাকসিনেটেড পশু নিরাপদ।
            </p>
          </div>

          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">⚖️ ওজন যাচাই করুন</h3>
            <p className="text-gray-600">
              পশুর সঠিক ওজন জেনে কিনুন। ওজন অনুযায়ী মাংসের পরিমাণ নির্ধারণ করুন।
            </p>
          </div>

          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">🎂 বয়স যাচাই করুন</h3>
            <p className="text-gray-600">
              গরু কমপক্ষে ২ বছর এবং ছাগল কমপক্ষে ১ বছর বয়সী হতে হবে কোরবানির জন্য।
            </p>
          </div>

          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">🏠 আগে থেকে কিনুন</h3>
            <p className="text-gray-600">
              ঈদের আগেই পশু কিনে রাখুন। শেষ মুহূর্তে কিনলে দাম বেশি এবং ভালো পশু পাওয়া কঠিন হয়।
            </p>
          </div>

          <div className="card bg-green-50 shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">📋 কাগজপত্র রাখুন</h3>
            <p className="text-gray-600">
              পশু কেনার রসিদ ও ভ্যাকসিন কার্ড সংরক্ষণ করুন। প্রয়োজনে কাজে আসবে।
            </p>
          </div>

        </div>
      </div>

      {/* ========== Top Breeds ========== */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          🐄 টপ ব্রিড
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card bg-base-100 shadow-md border-t-4 border-green-500">
            <div className="card-body text-center">
              <h3 className="text-4xl mb-2">🐄</h3>
              <h3 className="text-xl font-bold text-gray-800">Brahman</h3>
              <p className="text-gray-500 text-sm">বড় আকার, শক্তিশালী শরীর। কোরবানির জন্য আদর্শ।</p>
              <span className="badge badge-success text-white mt-2">Large Animal</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border-t-4 border-green-500">
            <div className="card-body text-center">
              <h3 className="text-4xl mb-2">🐄</h3>
              <h3 className="text-xl font-bold text-gray-800">Sahiwal</h3>
              <p className="text-gray-500 text-sm">দুধ ও মাংস উভয়ের জন্য জনপ্রিয়। সুস্থ ও শান্ত।</p>
              <span className="badge badge-success text-white mt-2">Large Animal</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border-t-4 border-yellow-500">
            <div className="card-body text-center">
              <h3 className="text-4xl mb-2">🐐</h3>
              <h3 className="text-xl font-bold text-gray-800">Black Bengal</h3>
              <p className="text-gray-500 text-sm">সুস্বাদু মাংসের জন্য বিখ্যাত। দেশীয় জনপ্রিয় ছাগল।</p>
              <span className="badge badge-warning text-white mt-2">Small Animal</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border-t-4 border-yellow-500">
            <div className="card-body text-center">
              <h3 className="text-4xl mb-2">🐐</h3>
              <h3 className="text-xl font-bold text-gray-800">Boer</h3>
              <p className="text-gray-500 text-sm">উচ্চমানের মাংস উৎপাদনকারী ছাগল। ভারী ওজন।</p>
              <span className="badge badge-warning text-white mt-2">Small Animal</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ExtraSection;