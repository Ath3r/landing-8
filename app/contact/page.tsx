import { ContactForm } from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nexum Capitals",
  description:
    "Get in touch with our team for any inquiries about our trading services, platforms, or support.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Our dedicated team is here to assist you with any inquiries
                  about our trading services, platforms, or support needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <a
                      href="mailto:support@nexumcapitals.com"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        📧
                      </span>
                      support@nexumcapitals.com
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+442012345678"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        📞
                      </span>
                      +44 74 6228 1389
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      📍
                    </span>
                    <div>
                      <p>Ground Floor, The Sotheby Building</p>
                      <p>Rodney Village, Rodney Bay</p>
                      <p>Gros-Islet, Saint Lucia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 24/7</p>
                  <p>Saturday - Sunday: 24/7</p>
                  <p className="text-sm mt-2">
                    Our support team is available around the clock to assist
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
