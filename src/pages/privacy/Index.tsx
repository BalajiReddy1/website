import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyIndex = () => {
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
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policies
                        </h1>
                        <p className="text-muted-foreground mb-12">
                            Your privacy is our priority. Learn how we protect your data.
                        </p>

                        <div className="space-y-6">
                            {/* General Privacy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-2xl border border-border bg-card hover:border-sunrise-orange/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunrise-orange/20 to-sunrise-amber/20 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-sunrise-orange" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-foreground mb-2">
                                            Arkayen Labs Website
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            Privacy policy for our website and general services.
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            This website does not collect personal data. We respect your privacy and do not use tracking cookies or analytics.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* FreshTrack Privacy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl border border-border bg-card hover:border-sunrise-orange/50 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunrise-orange/20 to-sunrise-amber/20 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-sunrise-orange" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-foreground mb-2">
                                            FreshTrack App
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            Privacy policy for the FreshTrack expiry tracking app.
                                        </p>
                                        <Link
                                            to="/privacy/freshtrack"
                                            className="inline-flex items-center gap-2 text-sunrise-orange hover:text-sunrise-amber transition-colors font-medium"
                                        >
                                            View Policy
                                            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Future Apps Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl border border-border/50 bg-card/50"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-muted-foreground mb-2">
                                            More Apps Coming Soon
                                        </h2>
                                        <p className="text-muted-foreground/70">
                                            Privacy policies for upcoming apps will be added here.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-16 p-8 rounded-2xl border border-border bg-gradient-to-br from-sunrise-orange/5 to-sunrise-amber/5">
                            <h3 className="text-2xl font-semibold text-foreground mb-4">
                                Questions About Privacy?
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                We're committed to transparency. If you have any questions about our privacy practices,
                                please don't hesitate to reach out.
                            </p>
                            <a
                                href="mailto:privacy@arkayenlabs.com"
                                className="text-sunrise-orange hover:text-sunrise-amber transition-colors font-medium"
                            >
                                privacy@arkayenlabs.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyIndex;
