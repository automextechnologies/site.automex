import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-primary md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-zinc-500">Last updated: April 28, 2026</p>

          <div className="prose prose-zinc max-w-none space-y-6 text-brand-primary/80">
            <p>Welcome to <strong>Automex Technologies</strong></p>
            <p>
              These terms and conditions outline the rules and regulations for the use of Automex's Website. 
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Automex 
              if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">License</h2>
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

            <h2 className="text-2xl font-bold text-brand-primary">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing Automex, you agreed to use cookies in agreement with the 
              Automex's Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Content Liability</h2>
            <p>
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and 
              defend us against all claims that is rising on your Website.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Refund Policy</h2>
            <p>
              Unless mandated by law or agreed otherwise in writing, paid Subscriptions are non-cancellable and 
              non-refundable. No refunds or credits will be issued for partial periods of Service or unused portions.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Governing Law</h2>
            <p>
              These Terms and Conditions will be construed and enforced in all respects in accordance with the laws of 
              India. Your use of this website and any dispute arising out of such use of the website is subject to the 
              laws of India.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary">Contact Information</h2>
            <p>
              For any queries regarding our terms, please contact us at: <br />
              Email: <strong>automextechnologies@gmail.com</strong> <br />
              Phone: <strong>+91 884 892 7464</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
