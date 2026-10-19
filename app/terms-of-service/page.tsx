import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#94A3B8]">
      <Header />
      <div className="container mx-auto px-6 pt-36 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0757C8]">Legal</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl mt-2">
              Terms of Service
            </h1>
            <p className="text-sm text-[#94A3B8]/70 mt-2">Last updated: April 28, 2026</p>
            <p className="text-sm font-medium text-white/90 mt-3 rounded-lg border border-white/10 bg-[#1A1F2B]/60 px-4 py-2.5 inline-block">
              Automex is a brand owned and operated by{" "}
              <a
                href="https://hypex.automextechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline font-semibold"
              >
                Hypex (hypex.automextechnologies.com)
              </a>.
            </p>
          </div>

          <div className="space-y-6 text-[#94A3B8] leading-relaxed">
            <p>Welcome to <strong className="text-white">Automex Technologies</strong>.</p>
            <p>
              These terms and conditions outline the rules and regulations for the use of Automex&apos;s Website and services.
              Automex is a brand owned and operated by{" "}
              <a
                href="https://hypex.automextechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline font-medium"
              >
                Hypex (hypex.automextechnologies.com)
              </a>. By accessing this website we assume you accept these terms and conditions. Do not continue to use Automex
              if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">License</h2>
            <p>
              Unless otherwise stated, Automex and/or its licensors own the intellectual property rights for all material on
              Automex. All intellectual property rights are reserved. You may access this from Automex for your own
              personal use subjected to restrictions set in these terms and conditions.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Republish material from Automex</li>
              <li>Sell, rent or sub-license material from Automex</li>
              <li>Reproduce, duplicate or copy material from Automex</li>
              <li>Redistribute content from Automex</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing Automex, you agreed to use cookies in agreement with the
              Automex&apos;s Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Content Liability</h2>
            <p>
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and
              defend us against all claims that is rising on your Website.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Refund Policy</h2>
            <p>
              Unless mandated by law or agreed otherwise in writing, paid Subscriptions are non-cancellable and
              non-refundable. No refunds or credits will be issued for partial periods of Service or unused portions.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Governing Law</h2>
            <p>
              These Terms and Conditions will be construed and enforced in all respects in accordance with the laws of
              India. Your use of this website and any dispute arising out of such use of the website is subject to the
              laws of India.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Contact Information</h2>
            <p>
              Automex is a brand owned and operated by{" "}
              <a
                href="https://hypex.automextechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline font-medium"
              >
                Hypex (hypex.automextechnologies.com)
              </a>. For any queries regarding our terms, please contact us:
            </p>
            <div className="rounded-2xl border border-white/10 bg-[#1A1F2B]/60 p-6 space-y-2.5">
              <p>
                <strong className="text-white">Parent Brand:</strong>{" "}
                <a
                  href="https://hypex.automextechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline"
                >
                  hypex.automextechnologies.com
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:connect@automextechnologies.com" className="text-[#38bdf8] hover:underline">
                  connect@automextechnologies.com
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href="tel:+918848927464" className="text-white hover:text-[#38bdf8] transition-colors">
                  +91 884 892 7464
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong>{" "}
                <span className="text-white/90">
                  Omkaar tower, Thali Road, near Mariyamman Kovil, Palayam, Kozhikode, Keralam 673002
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
