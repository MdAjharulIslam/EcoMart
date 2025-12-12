import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    setStatus('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative mt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-24 h-24 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-8 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-xl blur-2xl animate-float-slow" />
      </div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent tracking-tight">
              Never Miss a Deal!
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              Subscribe for latest offers, new arrivals & exclusive discounts
            </p>
          </div>

          <form onSubmit={handleSubmit} className="group relative">
            <div className="relative flex bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl hover:shadow-emerald-500/10 transition-all duration-500 group-hover:scale-[1.02]">
              <input
                className="w-full px-6 py-4 text-lg bg-transparent outline-none border-0 placeholder-gray-500 peer text-gray-900 font-medium focus:placeholder-transparent"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || status === 'success'}
                className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:from-primary-dull hover:to-emerald-700 active:scale-95 transform transition-all duration-300 whitespace-nowrap group-hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div className={`mt-4 flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {status === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Successfully subscribed to our newsletter!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-2 0v4a1 1 0 102 0V5z" clipRule="evenodd" />
                    </svg>
                    Something went wrong. Please try again.
                  </>
                )}
              </div>
            )}

            {/* Decorative underline */}
            <div className="w-24 h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-sm" />
          </form>

          <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default NewsLetter;
