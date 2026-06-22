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
                            Last updated: June 22, 2026
                        </p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            {/* 1. Introduction */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    1. Introduction
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja ("together" in Swahili) is a social group step-tracking
                                    Android application developed and operated by Arkayen Labs
                                    ("we," "us," or "our"). Pamoja lets users form private walking
                                    groups, set shared weekly step goals, and track progress together
                                    through a real-time leaderboard.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    This Privacy Policy explains what information we collect, how we
                                    use it, who can see it, how we protect it, and what choices you
                                    have. By installing or using Pamoja you agree to the practices
                                    described in this policy.
                                </p>
                            </section>

                            {/* 2. Authentication & Account */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    2. Authentication & Account
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja uses <strong>Firebase Anonymous Authentication</strong>.
                                    When you first open the app, a unique anonymous user ID is
                                    generated automatically — no email address, phone number,
                                    password, or social login is required. This anonymous session
                                    persists across app restarts and reinstalls on the same device.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We do <strong>not</strong> collect or store your email address,
                                    phone number, real-world identity documents, or any government-issued
                                    identifiers.
                                </p>
                            </section>

                            {/* 3. Data We Collect */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    3. Data We Collect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    To provide the group step-tracking experience, Pamoja collects and
                                    stores the following categories of information:
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    a) Profile Information
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">
                                    During onboarding you provide:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li><strong>Display name</strong> — shown to members of your groups</li>
                                    <li><strong>Age</strong> — used for personalization</li>
                                    <li><strong>Height and weight</strong> — used for personalization</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-3">
                                    This profile data is stored in Google Cloud Firestore under your
                                    anonymous user ID and is not linked to any real-world identity.
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    b) Step Count Data
                                </h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Your <strong>daily aggregated step count</strong>, read from Google Health Connect</li>
                                    <li>The <strong>date</strong> each step count corresponds to (ISO format, e.g. 2026-06-22)</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-3">
                                    Only the total number of steps per day is read and uploaded.
                                    No heart rate, sleep, nutrition, exercise sessions, or other
                                    health metrics are ever accessed or stored.
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    c) Group & Membership Data
                                </h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Groups you create or join (group name, weekly step target, member cap)</li>
                                    <li>Your role within each group (admin or member)</li>
                                    <li>Invite links generated for your groups</li>
                                    <li>Timestamp of when you joined a group</li>
                                </ul>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    d) Usage & Analytics Data
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">
                                    We use <strong>Firebase Analytics</strong> (provided by Google) to
                                    understand how the app is used and improve the experience. Analytics
                                    events we log include:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Screen views (e.g. welcome screen, home screen, group screen)</li>
                                    <li>Onboarding funnel events (profile setup started/completed, Health Connect permission granted/denied/skipped)</li>
                                    <li>Group lifecycle events (group created, group joined, invite link used, weekly goal reached)</li>
                                    <li>Background step sync events (sync started, succeeded, failed, or skipped)</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-3">
                                    Analytics events may include your anonymous user ID, group ID, step
                                    count, and event timestamp. They do <strong>not</strong> include
                                    your display name, age, height, weight, or any personally
                                    identifiable information.
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    e) Locally Stored Data
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja stores a small amount of data locally on your device using
                                    Android Jetpack DataStore. This includes your user ID, display name,
                                    onboarding status, Health Connect permission status, active group ID,
                                    and step baseline values. This data never leaves your device and is
                                    deleted when you clear app data or uninstall Pamoja.
                                </p>
                            </section>

                            {/* 4. Google Health Connect */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    4. Google Health Connect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja uses{" "}
                                    <a
                                        href="https://developer.android.com/health-and-fitness/guides/health-connect"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Google Health Connect
                                    </a>{" "}
                                    to read your step count data. Health Connect is built into
                                    Android 14 and above, and is available as a separate app from
                                    the Google Play Store on Android 9–13.
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    Permission Requested
                                </h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li><strong>Read Steps</strong> (<code className="text-sm bg-white/5 px-1.5 py-0.5 rounded">android.permission.health.READ_STEPS</code>) — daily step count only</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We request <strong>no other Health Connect permissions</strong>.
                                    We do not read or write heart rate, sleep, blood pressure, nutrition,
                                    exercise sessions, body measurements, or any other health data type.
                                </p>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    How Step Data Flows
                                </h3>
                                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                                    <li>Health Connect stores step records from your device's sensors and connected fitness apps</li>
                                    <li>Pamoja reads your total steps for the current day (midnight to now) from Health Connect locally on your device</li>
                                    <li>Only the aggregated daily step count is uploaded to our cloud database (Google Cloud Firestore) for display in your group's leaderboard</li>
                                    <li>No raw step records, timestamps of individual walking sessions, or source app information is transmitted</li>
                                </ol>

                                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                                    Limited Use Disclosure
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja's use and transfer of information received from Health
                                    Connect to any other app adheres to the{" "}
                                    <a
                                        href="https://developer.android.com/health-and-fitness/guides/health-connect/publish/request-permissions#limited-use"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Health Connect Permissions policy
                                    </a>
                                    , including the Limited Use requirements. Specifically:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                                    <li>Health Connect data is used solely to provide the group step-tracking feature visible to you in the app</li>
                                    <li>Health Connect data is not used for advertising, marketing, or sold to data brokers</li>
                                    <li>Health Connect data is not used to determine creditworthiness or for lending purposes</li>
                                    <li>Health Connect data is not transferred to any third party except as necessary to provide the app's core functionality (i.e. uploading your daily step total to Firestore for leaderboard display) or as required by law</li>
                                    <li>Only human users interact with Health Connect data; it is not used to train machine learning models</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Your use of Health Connect is also governed by{" "}
                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Google's Privacy Policy
                                    </a>
                                    .
                                </p>
                            </section>

                            {/* 5. Background Step Sync */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    5. Background Step Sync
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja uses Android WorkManager to periodically sync your step count
                                    in the background, approximately every 30 minutes. This background
                                    sync only runs when your device has network connectivity and battery
                                    is not low. Each sync cycle reads your current day's total steps from
                                    Health Connect and uploads the single aggregated number to our
                                    cloud database. No foreground service or persistent notification is
                                    required.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    If Health Connect is unavailable or you have revoked step-reading
                                    permission, the background sync silently skips without retrying or
                                    prompting you.
                                </p>
                            </section>

                            {/* 6. How Your Data Is Shared */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    6. How Your Data Is Shared
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja is built on a{" "}
                                    <strong>private, invite-only group model</strong>:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Your display name and step counts are <strong>only visible</strong> to members of groups you have explicitly joined</li>
                                    <li>Groups are accessible only through unique invite links shared by the group admin — there is no public directory of groups</li>
                                    <li>Invite links automatically deactivate when a group reaches its member cap (default: 10 members)</li>
                                    <li>No data is visible publicly or to users outside your groups</li>
                                    <li>We do <strong>not</strong> sell, rent, license, or share your data with any third-party advertisers, data brokers, or marketing platforms</li>
                                    <li>We do <strong>not</strong> display ads in Pamoja</li>
                                </ul>
                            </section>

                            {/* 7. Third-Party Services */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    7. Third-Party Services
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja relies on the following third-party services provided by
                                    Google. Each service has its own privacy policy governing how
                                    data is handled on their infrastructure:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-muted-foreground border border-white/10 rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="text-left px-4 py-3 font-medium text-foreground border-b border-white/10">Service</th>
                                                <th className="text-left px-4 py-3 font-medium text-foreground border-b border-white/10">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3">Firebase Authentication</td>
                                                <td className="px-4 py-3">Anonymous sign-in and session management</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3">Cloud Firestore</td>
                                                <td className="px-4 py-3">Storing user profiles, groups, memberships, and daily step counts</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3">Firebase Analytics</td>
                                                <td className="px-4 py-3">Aggregated usage analytics and onboarding funnel tracking</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3">Firebase Cloud Messaging (FCM)</td>
                                                <td className="px-4 py-3">Push notification infrastructure (currently included in the app's dependencies for future use)</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3">Google Health Connect</td>
                                                <td className="px-4 py-3">Reading daily step count data from your device</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">Google Play In-App Updates</td>
                                                <td className="px-4 py-3">Delivering seamless app version updates</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    For more information, see the{" "}
                                    <a
                                        href="https://firebase.google.com/support/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Firebase Privacy and Security documentation
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sunrise-orange underline underline-offset-4"
                                    >
                                        Google's Privacy Policy
                                    </a>
                                    .
                                </p>
                            </section>

                            {/* 8. Data Storage & Security */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    8. Data Storage & Security
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    All server-side data (profiles, groups, memberships, and step counts)
                                    is stored in Google Cloud Firestore, which encrypts data at rest and
                                    in transit. Firestore security rules restrict each user to their own
                                    data and the groups they belong to.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Local data on your device is stored using Android Jetpack DataStore
                                    in the app's private internal storage, which is sandboxed by the
                                    Android operating system and inaccessible to other apps.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    While we use industry-standard security practices, no method of
                                    electronic transmission or storage is 100% secure. We cannot
                                    guarantee absolute security.
                                </p>
                            </section>

                            {/* 9. Permissions Summary */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    9. Android Permissions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Pamoja requests only the following Android permissions:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-muted-foreground border border-white/10 rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="text-left px-4 py-3 font-medium text-foreground border-b border-white/10">Permission</th>
                                                <th className="text-left px-4 py-3 font-medium text-foreground border-b border-white/10">Why It's Needed</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-white/5">
                                                <td className="px-4 py-3 font-mono text-xs">health.READ_STEPS</td>
                                                <td className="px-4 py-3">Read your daily step count from Health Connect</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-mono text-xs">INTERNET</td>
                                                <td className="px-4 py-3">Sync step data, groups, and profiles with our cloud database</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Pamoja does <strong>not</strong> request access to your camera,
                                    microphone, contacts, location, files, or any other device
                                    sensors beyond step count through Health Connect.
                                </p>
                            </section>

                            {/* 10. Data Retention & Deletion */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    10. Data Retention & Deletion
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We retain your data for as long as your account exists. You can
                                    manage your data in the following ways:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li><strong>Leave a group:</strong> You can leave any group at any time within the app. Your step data will no longer appear in that group's leaderboard</li>
                                    <li><strong>Revoke Health Connect permission:</strong> You can revoke Pamoja's step-reading permission at any time through your device's Health Connect settings. Background sync will stop automatically</li>
                                    <li><strong>Uninstall the app:</strong> Uninstalling Pamoja immediately revokes all Health Connect permissions and deletes all locally stored data (DataStore). Your cloud data will persist until you request deletion</li>
                                    <li><strong>Delete your account:</strong> Pamoja supports in-app account deletion. This permanently removes your Firebase Authentication account. To also delete your profile, step history, and membership data from our cloud database, contact us at the email below</li>
                                    <li><strong>Full data erasure request:</strong> To request complete deletion of all your data from our servers (profile, groups, step entries, and membership records), email us and we will process your request within 30 days</li>
                                </ul>
                            </section>

                            {/* 11. International Data Transfers */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    11. International Data Transfers
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your data is processed and stored on Google Cloud infrastructure,
                                    which may be located in data centers outside your country of
                                    residence. By using Pamoja, you consent to the transfer and
                                    processing of your data in these locations. Google Cloud complies
                                    with applicable data protection frameworks for international
                                    transfers.
                                </p>
                            </section>

                            {/* 12. Children's Privacy */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    12. Children's Privacy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pamoja is not directed at children under the age of 13. We do not
                                    knowingly collect personal data from children under 13. If you are
                                    a parent or guardian and believe your child has provided us with
                                    personal data, please contact us at the email below and we will
                                    promptly delete the data.
                                </p>
                            </section>

                            {/* 13. Your Rights */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    13. Your Rights
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Depending on your jurisdiction, you may have the right to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Access the personal data we hold about you</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to or restrict processing of your data</li>
                                    <li>Data portability</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    To exercise any of these rights, please contact us at the email
                                    address below. We will respond to your request within 30 days.
                                </p>
                            </section>

                            {/* 14. Changes to This Policy */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    14. Changes to This Policy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect
                                    changes in the app, our practices, or legal requirements. When we
                                    make material changes, we will update the "Last updated" date at
                                    the top of this page. We encourage you to review this policy
                                    periodically. Your continued use of Pamoja after changes are
                                    posted constitutes your acceptance of the updated policy.
                                </p>
                            </section>

                            {/* 15. Contact Us */}
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    15. Contact Us
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions about this Privacy Policy, want to
                                    exercise your data rights, or wish to request deletion of your
                                    data, please contact us at:
                                </p>
                                <div className="mt-4 space-y-1">
                                    <p className="text-foreground font-medium">Arkayen Labs</p>
                                    <p className="text-sunrise-orange">
                                        privacy@arkayenlabs.com
                                    </p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PamojaPrivacy;
