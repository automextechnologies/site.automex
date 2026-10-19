import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#94A3B8]">
      <Header />
      <div className="container mx-auto px-6 pt-36 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0757C8]">Legal</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl mt-2">
              Privacy Policy
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
            <p>
              At <strong className="text-white">Automex</strong> (a brand owned and operated by{" "}
              <a
                href="https://hypex.automextechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline"
              >
                Hypex - hypex.automextechnologies.com
              </a>
              ), accessible from <a href="https://www.automextechnologies.com" className="text-[#38bdf8] hover:underline">https://www.automextechnologies.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Automex and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Automex. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

            <h2 className="text-2xl font-bold text-white pt-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and marketing</li>
              <li>Send you emails and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">Log Files</h2>
            <p>
              Automex follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Automex uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Third-Party Privacy Policies</h2>
            <p>
              Automex&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
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
              </a>. For any queries regarding our privacy policy, please contact us:
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
