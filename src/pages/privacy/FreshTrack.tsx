import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FreshTrackPrivacy = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center">
                    <Link
                        to="/privacy"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Privacy Policies</span>
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
                            FreshTrack Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mb-12">
                            Last updated: January 23, 2026
                        </p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    1. Introduction
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    FreshTrack is a privacy-first expiry tracking app developed by Arkayen Labs.
                                    This policy explains how we handle your data when you use FreshTrack.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    2. Data We Collect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    FreshTrack is designed to be completely offline and private. We collect and store:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Product names and descriptions you enter</li>
                                    <li>Expiry dates and purchase dates</li>
                                    <li>Product quantities and categories</li>
                                    <li>Barcode scan data (processed locally, not uploaded)</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    <strong>Important:</strong> All data is stored locally on your device only. We do not
                                    collect, transmit, or upload any of your data to our servers or any third party.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    3. Permissions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    FreshTrack requires the following permissions:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li><strong>Camera:</strong> To scan product barcodes for quick entry</li>
                                    <li><strong>Storage:</strong> To save your product data locally on your device</li>
                                    <li><strong>Notifications:</strong> To send reminders about expiring products</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    These permissions are used solely for app functionality and no data leaves your device.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    4. Data Storage & Security
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    All your data is stored in your device's local database using Android's Room database.
                                    The data is private to the app and cannot be accessed by other apps on your device.
                                    We do not sync your data to cloud services, and we have no access to your information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    5. Data Sharing
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We do not share, sell, rent, or transmit any of your data to third parties.
                                    FreshTrack is a completely offline app with no analytics, no tracking, and no data collection.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    6. Data Deletion
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You can delete individual products at any time using the app's delete function.
                                    To delete all your data, simply uninstall the app - all locally stored data will be
                                    permanently removed from your device.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    7. Children's Privacy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    FreshTrack does not collect any personal information and can be safely used by users of all ages.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    8. Changes to This Policy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this privacy policy from time to time. Any changes will be posted on this page
                                    with an updated revision date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    9. Contact Us
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions about this privacy policy, please contact us at:
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

export default FreshTrackPrivacy;
