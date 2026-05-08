import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PamojaPrivacy = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: "rgba(9,9,15,0.85)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
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
                            Pamoja Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mb-12">
                            Last updated: May 8, 2026
                        </p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    1. Introduction
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja is a social group step-tracking app developed by Arkayen Labs.
                                    This policy explains what data we collect, how it is used, and how it is
                                    protected when you use Pamoja.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    2. Data We Collect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    To provide the group step-tracking functionality, Pamoja collects and stores:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Your daily step count, synced via Google Health Connect</li>
                                    <li>Your display name within a group</li>
                                    <li>Group membership information (groups you have created or joined)</li>
                                    <li>Group step goals and weekly progress data</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We do <strong>not</strong> collect your real name, email address, phone number,
                                    or any other personal identifiers beyond what you choose to display within a group.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    3. Google Health Connect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja uses <strong>Google Health Connect</strong> to read your step count data.
                                    Specifically, we request read access to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Steps — daily step count only</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Health Connect data is read locally on your device. Only your aggregated daily
                                    step count is uploaded to our servers for display in group leaderboards.
                                    No other health metrics are accessed or stored.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Your use of Health Connect is also governed by{" "}
                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Google's Privacy Policy
                                    </a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    4. How Your Data Is Shared
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja is built on a <strong>private, invite-only group model</strong>:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Your step data is only visible to members of groups you have explicitly joined</li>
                                    <li>No data is visible publicly or to users outside your group</li>
                                    <li>We do not sell, rent, or share your data with any third-party advertisers</li>
                                    <li>Groups are accessible only via unique invite links shared by group admins</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    5. Data Storage & Security
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Group and step data is stored on secure servers. Step counts are uploaded
                                    only for the purpose of displaying leaderboards within your private group.
                                    We use industry-standard security practices to protect your data from
                                    unauthorized access.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    6. Data Deletion
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You can leave or delete a group at any time within the app. Uninstalling
                                    Pamoja will revoke Health Connect permissions immediately. To request
                                    permanent deletion of all your account and step data from our servers,
                                    contact us at the address below.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    7. Children's Privacy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja is not directed at children under 13. We do not knowingly collect
                                    personal data from children under 13. If you believe a child has provided
                                    us with personal data, please contact us and we will delete it promptly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    8. Changes to This Policy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this privacy policy from time to time. Any changes will be
                                    posted on this page with an updated revision date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    9. Contact Us
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions about this privacy policy or want to request
                                    data deletion, please contact us at:
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

export default PamojaPrivacy;
