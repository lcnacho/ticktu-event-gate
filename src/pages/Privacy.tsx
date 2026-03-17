const Privacy = () => {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">Last Updated: October 24, 2023</p>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <p>
            Ticktu ("we," "our," or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and share information when you use the Ticktu
            mobile application and website.
          </p>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">1. Information We Collect</h2>
            <p className="mb-4">
              To provide a seamless ticketing experience, we collect the following types of
              information:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Account Information:</strong> Name, email
                address, and phone number provided during registration.
              </li>
              <li>
                <strong className="text-foreground">Transactional Data:</strong> Details of tickets
                purchased, event attendance history, and payment confirmation (note: we do not store
                full credit card numbers).
              </li>
              <li>
                <strong className="text-foreground">Device Information:</strong> IP address, device
                model, operating system, and unique device identifiers.
              </li>
              <li>
                <strong className="text-foreground">Location Data:</strong> With your permission, we
                collect approximate location data to show nearby events.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the collected data to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Facilitate ticket purchases and digital entry to events.</li>
              <li>Send push notifications for order confirmations and event updates.</li>
              <li>Prevent fraudulent transactions and unauthorized ticket reselling.</li>
              <li>Improve app performance and personalize event recommendations.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell your personal data. However, we share information in the following
              contexts:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Event Organizers:</strong> When you purchase a
                ticket, your name and contact info are shared with the organizer for venue entry and
                safety purposes.
              </li>
              <li>
                <strong className="text-foreground">Payment Processors:</strong> We use secure
                third-party services (like Stripe or Apple Pay) to process payments.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> We may disclose
                information if required by law or to protect the safety of our users.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">4. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed
              to provide you services. You may request account deletion at any time via the app
              settings, which will remove your personal identifiers from our active databases within
              30 days.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">5. User Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your
              personal data. You can manage your communication preferences and data sharing directly
              within the Ticktu app settings.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">6. Contact Us</h2>
            <p>
              If you have questions about this policy or our data practices, please contact our
              privacy team at:
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Email:</strong> privacy@ticktu.app
              <br />
              <strong className="text-foreground">Address:</strong> Ticktu Technologies, 123
              Electronic Way, Digital District.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
