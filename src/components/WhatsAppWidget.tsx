import React, { useState, useEffect } from 'react';
import { X, Send, Smile, CheckCheck, Lock } from 'lucide-react';
import portraitImg from '../assets/images/portrait_sohan_editorial_1791052423736.jpg';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('10:46 AM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      setCurrentTime(`${hours}:${minutesStr} ${ampm}`);
    };
    updateTime();
  }, []);

  // Listen for Escape key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanText = message.trim() || 'আসসালামু আলাইকুম Sohan ভাই, আপনার ওয়েবসাইটের মাধ্যমে যোগাযোগ করছি।';
    const whatsappUrl = `https://wa.me/8801312815029?text=${encodeURIComponent(cleanText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
  };

  return (
    <div 
      className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-40 font-sans flex flex-col items-end"
      aria-label="WhatsApp Chat Support"
    >
      
      {/* WhatsApp Popup Window (Positioned directly ABOVE the pinned button) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden bg-white animate-in slide-in-from-bottom-5 fade-in duration-200 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-[#008069] px-4 py-3.5 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              {/* Profile Image with Online Dot */}
              <div className="relative">
                <img
                  src={portraitImg}
                  alt="N B N Sohan Chowdhury"
                  className="w-11 h-11 rounded-full object-cover border border-white/40 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#008069] rounded-full" />
              </div>

              {/* Title & Online Status */}
              <div>
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="font-bold text-sm tracking-tight text-white">@nbn.sohan</span>
                  {/* Verified Badge */}
                  <svg className="w-4 h-4 fill-[#20A090] text-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#38BDF8" />
                    <path
                      d="M9 12l2 2 4-4"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-white/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>অনলাইন</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Canvas (WhatsApp subtle dotted background) */}
          <div 
            className="p-4 bg-[#EFEAE2] min-h-[190px] flex flex-col justify-between relative"
            style={{
              backgroundImage: 'radial-gradient(#d1c7b7 0.85px, transparent 0.85px)',
              backgroundSize: '16px 16px'
            }}
          >
            {/* Date Pill Badge */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-0.5 bg-white/90 shadow-2xs rounded-md text-[11px] font-medium text-stone-600">
                আজ
              </span>
            </div>

            {/* Inbound Message Bubble */}
            <div className="relative max-w-[88%] bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-stone-900 text-xs sm:text-[13px] leading-relaxed mb-3">
              <p>
                আসসালামু আলাইকুম। শুভ দিন। কোন প্রয়োজন হলে মেসেজ করুন।
              </p>
              
              {/* Message Timestamp & Double Blue Ticks */}
              <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-stone-400 font-mono">
                <span>{currentTime}</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
              </div>
            </div>

            {/* End-to-End Encrypted Notice */}
            <div className="flex justify-center my-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#FFF4CD] border border-[#FFE8A1] rounded-md text-[11px] text-[#856404] shadow-2xs">
                <Lock className="w-3 h-3 text-[#B78103]" />
                <span>এন্ড-টু-এন্ড এনক্রিপ্টেড চ্যাট</span>
              </div>
            </div>
          </div>

          {/* Message Input Footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-stone-100 border-t border-stone-200 flex items-center gap-2"
          >
            {/* Smile / Emoji Icon */}
            <button
              type="button"
              onClick={() => setMessage(prev => prev + ' 👋 ')}
              className="text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
              title="Add greeting"
            >
              <Smile className="w-5 h-5" />
            </button>

            {/* Input Field */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="একটি মেসেজ লিখুন..."
              className="flex-1 bg-white border border-stone-300 rounded-full px-4 py-2 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-[#008069] focus:ring-1 focus:ring-[#008069]"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#00A884] hover:bg-[#008f6f] active:scale-95 text-white flex items-center justify-center transition-all shadow-md shrink-0 cursor-pointer"
              title="Send to WhatsApp (+8801312815029)"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>

        </div>
      )}

      {/* Permanently Pinned WhatsApp Floating Button (Exact design from user screenshot) */}
      <div className="relative flex items-center justify-center">
        
        {/* Soft Glowing Green Circular Halo / Aura matching reference */}
        <div 
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-400/35 blur-md pointer-events-none transition-all duration-300 animate-pulse" 
          aria-hidden="true"
        />

        {/* Outer radial glow disk */}
        <div 
          className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-300/40 pointer-events-none"
          aria-hidden="true"
        />

        {/* Core Vibrant Green WhatsApp Button */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.55)] flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isOpen 
              ? 'bg-stone-900 text-white hover:bg-stone-800 scale-100 rotate-90' 
              : 'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-108 active:scale-95'
          }`}
          aria-label={isOpen ? "Close WhatsApp chat" : "Chat on WhatsApp"}
          title="WhatsApp: +8801312815029"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <>
              {/* WhatsApp Chat Bubble Outline Icon (Exact match to screenshot) */}
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-white"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                {/* Speech bubble contour with pointer */}
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>

              {/* Top-Right Notification Ring/Dot (As shown in screenshot) */}
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full shadow-xs" />
            </>
          )}
        </button>

      </div>

    </div>
  );
};
