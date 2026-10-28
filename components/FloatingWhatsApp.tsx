"use client";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/918921847262?text=Hi%2C%20I%20would%20like%20to%20know%20more";

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp: Hi, I would like to know more"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] text-white p-3.5 sm:px-5 sm:py-3.5 shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Glowing ring pulse */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:bg-[#25D366]/60 animate-pulse pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <svg
          className="relative h-6 w-6 fill-current text-white shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.087-.176.182-.075.355.101.173.45 0.742.965 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087.159.058 1.011.477 1.184.563.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
        </svg>

        {/* Text pill (visible on sm+) */}
        <span className="relative hidden sm:inline text-xs sm:text-sm font-bold tracking-tight text-white drop-shadow-sm whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
