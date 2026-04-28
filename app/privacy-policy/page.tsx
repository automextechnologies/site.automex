import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-primary md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-zinc-500">Last updated: April 28, 2026</p>

          <div className="prose prose-zinc max-w-none space-y-6 text-brand-primary/80">
            <p>
              At <strong>Automex</strong>, accessible from https://www.automextechnologies.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Automex and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Automex. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

            <h2 className="text-2xl font-bold text-brand-primary">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and marketing</li>
              <li>Send you emails and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-primary">Log Files</h2>
            <p>
              Automex follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Automex uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Third-Party Privacy Policies</h2>
            <p>
              Automex's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
            <p>
              For any queries, you can contact us: <strong>automextechnologies@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
