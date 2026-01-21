import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: January 20, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Arkayen Labs ("we", "our", or "us"), we are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our applications and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Account information (email address, username)</li>
                  <li>App-specific data you choose to store</li>
                  <li>Feedback and support communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you updates and notifications (with your consent)</li>
                  <li>Respond to your inquiries and provide support</li>
                  <li>Ensure the security of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. 
                  You may also request a copy of your data or ask us to transfer it to another service. 
                  To exercise these rights, please contact us at privacy@arkayenlabs.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-sunrise-orange mt-4">
                  privacy@arkayenlabs.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
