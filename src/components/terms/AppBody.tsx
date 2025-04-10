import Link from "next/link";
import React from "react";

const AppBody = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 my-10">
      <h1 className="text-3xl font-bold mb-8">Colitas Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-bold mr-1">Effective Date:</span> December 9, 2024
      </p>
      <p className=" mb-6">
        Welcome to Colitas Care Group Hub. Protecting your privacy is our
        priority. This document explains how we collect, use, store, and protect
        your personal information when using our mobile app and services.
      </p>
      <p className=" mb-6">
        By registering or using Colitas, you agree to the terms of this policy.
        If you do not agree, please do not use our services.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
        1. Information We Collect
      </h2>
      <p className="font-bold">a) Information Provided Directly:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">When registering as a user:</span> Full
          name, email address, phone number, location, photos, and details about
          your pet (name, breed, age, etc.).
        </li>
        <li>
          <span className="font-bold">When registering as a professional:</span>{" "}
          Additional information such as business name, tax identification,
          business registration documents, banking details, service
          descriptions, rates, and promotional photos.
        </li>
      </ul>

      <p className="font-bold">b) Information Collected Automatically:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Technical details:</span> IP address,
          device type, operating system, browser used, language settings, date,
          and time of access.
        </li>
        <li>
          <span className="font-bold">Geolocation:</span> Used to display nearby
          services (you can disable this in your device settings).
        </li>
        <li>
          <span className="font-bold">Usage information:</span> Frequency of
          access, interactions with other users, and transactions made in the
          app.
        </li>
      </ul>

      <p className="font-bold">c) Third-Party Information:</p>
      <p className="mb-4">
        Details related to transactions processed by Square. Note: We do not
        store full credit or debit card information.
      </p>

      <p className="font-bold">d) Content Information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Photos, videos, and comments posted on our Discover social network.
        </li>
        <li>
          Additional data related to adoptions, donations, and marketplace
          preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="font-bold">a) Service Provision:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Manage user and professional accounts and profiles.</li>
        <li>Connect users with professionals and pet-friendly services.</li>
        <li>
          Facilitate adoptions, donations, and purchases through the
          marketplace.
        </li>
      </ul>

      <p className="font-bold">b) Communication:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Send you notifications related to your account, transactions, updates,
          and promotions, with your prior consent.
        </li>
      </ul>

      <p className="font-bold">c) Security and Compliance:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Prevent fraudulent or unauthorized activities.</li>
        <li>Verify the authenticity of data provided by professionals.</li>
        <li>
          Monitor and moderate content on Discover to ensure compliance with our
          policies.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        3. Data Sharing
      </h2>
      <p className="mb-4">
        We share your information only in the following cases:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">With registered professionals:</span> To
          complete transactions requested by users.
        </li>
        <li>
          <span className="font-bold">With external providers:</span> Such as
          Square, to process payments securely.
        </li>
        <li>
          <span className="font-bold">Legal compliance:</span> If required by
          legal authorities or to protect our rights in legal disputes.
        </li>
        <li>
          <span className="font-bold">With explicit consent:</span> If you
          authorize the sharing of your data for specific cases.
        </li>
      </ul>

      <p className="mb-4">
        We do not sell or rent your personal information to third parties.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        4. Data Storage and Retention
      </h2>
      <p className="mb-4">
        Your information is securely stored on servers located in regions with
        adequate data protection laws.
        <br />
        We retain your data while your account remains active or as required by
        law.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        5. User Rights
      </h2>
      <p className="mb-4">
        You have the following rights regarding your personal information:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Access your personal data and request corrections for incorrect
          information.
        </li>
        <li>Delete your account and personal data unless required by law.</li>
        <li>Request details about how we process your data.</li>
      </ul>

      <p className="mb-4">
        You can exercise these rights by contacting us at{" "}
        <Link href="mailto:info@colitas.io" className="font-bold">
          info@colitas.io
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        6. Information Security
      </h2>
      <p className="mb-4">
        We implement technical, administrative, and physical measures to protect
        your information from unauthorized access, loss, alteration, or improper
        disclosure. While we strive to protect your data, no digital
        transmission or storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        7. Policies for Minors
      </h2>
      <p className="mb-4">
        Our services are not intended for individuals under 18 years of age. If
        we discover that a minor has provided us with personal data without
        parental consent, we will delete that information immediately.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        8. Changes to This Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update this policy at any time. We will notify
        you of significant changes at least 30 days in advance via email.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        9. Contact
      </h2>
      <p className="mb-4">
        If you have any questions or comments about this policy, you can contact
        us at:
      </p>
      <p className="mb-4">
        <span className="font-bold">Email:</span>{" "}
        <Link href="mailto:info@colitas.io" className="text-blue-600">
          info@colitas.io
        </Link>
      </p>

      <div className="my-10">
        <h1 className="text-3xl font-bold mb-8">
          Terms and Conditions for Professionals
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-bold mr-1">Effective Date:</span> December 9,
          2024
        </p>
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-bold">Contact Email:</span> info@colitas.io
        </p>
        <p className="mb-6">
          These Terms and Conditions {`"Terms"`} govern the use of the
          Professionals section in the Colitas mobile app, owned by Colitas Care
          Group Hub. By registering as a Professional and/or creating profiles
          or services on the platform, you agree to these Terms in full.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          1. Definitions
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <span className="font-bold">Professional:</span> A registered user
            who offers pet-related services through the Colitas platform.
          </li>
          <li>
            <span className="font-bold">User:</span> A person using the services
            provided by Professionals.
          </li>
          <li>
            <span className="font-bold">Shelter:</span> A nonprofit promoting
            pet adoption and welfare.
          </li>
          <li>
            <span className="font-bold">Platform:</span> The Colitas mobile app
            and its functionalities.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          2. Registration and Eligibility
        </h2>
        <p className="mb-4">
          Only registered Users on Colitas can access the Professionals section
          and offer services through the platform. <br />
          Professionals must complete the service registration form, providing
          accurate and up-to-date information, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Business name</li>
          <li>Personal information</li>
          <li>Bank details for payments and transactions</li>
          <li>Licenses, legal documents, and necessary registrations</li>
          <li>Business name</li>
          <li>Service descriptions and promotional photos</li>
        </ul>
        <p className="mb-6">
          Colitas reserves the right to verify the authenticity of the provided
          information and reject applications that do not meet legal or ethical
          requirements.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          3. Permitted Services
        </h2>
        <p>Professionals may offer the following services through Colitas:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Veterinary consultations (in-person and online)</li>
          <li>Sale of pet products in the Marketplace</li>
          <li>Registration of veterinary clinics and doctor profiles</li>
          <li>
            Publication of pet-friendly areas such as parks, hotels, and
            restaurants
          </li>
        </ul>
        <p className="mb-6">
          Services must comply with local laws and align with Colitas&apos; ethical
          values, such as respect and animal welfare. <br />
          It is prohibited to publish content that violates laws, promotes
          animal cruelty, or encourages illegal activities.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          4. Professional Verification and Responsibility
        </h2>
        <p>
          Colitas requires verifiable documents to confirm the legitimacy of
          Professionals and their services, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Business registration</li>
          <li>Professional certifications</li>
          <li>Legal identification</li>
          <li>Other relevant legal documents</li>
        </ul>

        <p>
          Professionals must ensure the accuracy and timeliness of their profile
          information. <br />
          They are responsible for providing safe, legal, and high-quality
          services as described on the platform. <br />
          Professionals must honor their commitments, including service
          schedules, descriptions, and pricing. <br />
          Colitas is not responsible for the quality, safety, or results of the
          services offered by Professionals.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          5. Payments and Commissions
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Payments are processed through Square, with applicable commissions
            automatically deducted.
          </li>
          <li>
            Colitas charges a commission on transactions except for shelters
            (adoptions and donations), where only Square&apos;s fees apply.
          </li>
          <li>
            Colitas ensures transparent payment processing for shelters without
            additional platform fees.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          6. Intellectual Property
        </h2>
        <p className="mb-3">
          Professionals retain ownership of their content, including images,
          text, logos, and promotional materials.
        </p>
        <p className="mb-3">
          By providing content, Professionals grant Colitas a limited,
          non-exclusive, worldwide, royalty-free, and revocable license to use,
          reproduce, and distribute the content within the platform and
          marketing materials.
        </p>
        <p className="mb-6">
          Professionals are responsible for ensuring their content does not
          infringe third-party intellectual property rights.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          7. Cancellations and Dispute Resolution
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Professionals must clearly state cancellation and refund policies,
            compliant with local laws.
          </li>
          <li>
            Colitas acts as a mediator but does not assume liability for
            disputes.
          </li>
          <li>
            Legal disputes must be handled in the country where the professional
            account is registered.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          8. Specific Conditions for Shelters
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Shelters must provide proof of official registration and legal
            status.
          </li>
          <li>
            They are responsible for verifying adopters and ensuring transparent
            information about available animals.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          9. Specific Conditions for Veterinary Clinics
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Veterinary clinics can register individual doctor profiles with
            verified credentials.
          </li>
          <li>
            They must ensure all listed professionals meet legal and ethical
            standards.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          10. Specific Conditions for the Marketplace
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Professionals must provide accurate descriptions and comply with
            local regulations.
          </li>
          <li>
            Colitas retains a commission per transaction, except for shelters.
          </li>
          <li>
            Sellers are responsible for maintaining inventory accuracy and
            handling customer disputes.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          11. Termination of Relationship with Colitas
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Professionals may request account deletion via the app or by email.
          </li>
          <li>Colitas may suspend accounts that violate these Terms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          12. Limitation of Liability
        </h2>
        <p className="mb-6">
          Colitas acts solely as an intermediary and is not liable for service
          outcomes.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          13. Governing Law and Jurisdiction
        </h2>
        <p className="mb-6">
          These Terms are governed by the laws of Colombia, Mexico, Costa Rica,
          Venezuela, and Spain.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          14. Modifications to the Terms and Conditions
        </h2>
        <p className="mb-6">
          Colitas reserves the right to modify these Terms at any time, with
          email notifications for major changes.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          15. Contact and Technical Support
        </h2>
        <p className="mb-6">
          For inquiries or technical support, please email {"  "}
          <Link href="mailto:info@colitas.io" className="text-blue-600">
            info@colitas.io
          </Link>
        </p>

        <h1 className="text-3xl font-bold mb-8 mt-20">
          Terms and Conditions of Use
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-bold mr-1">Effective Date:</span> December 9,
          2024
        </p>
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-bold">Company Name:</span> Colitas Care Group
          Hub
        </p>
        <p className="text-sm text-gray-600 mb-6">
          <span className="font-bold">Contact Email:</span> info@colitas.io
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          1. Introduction and Acceptance of Terms
        </h2>
        <p className="mb-6">
          Welcome to Colitas, a platform designed to connect pet owners with
          services, products, and communities that promote animal welfare. These
          Terms and Conditions govern the use of our mobile application. By
          registering and using Colitas, you declare that you have read,
          understood, and accepted these Terms and our Privacy Policy.
        </p>
        <p className="mb-6">
          If you do not agree with any provisions, we recommend that you do not
          use the application or its services.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          2. Available Services in the App
        </h2>
        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Pet Registration
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can register their pets in the app by providing relevant
            information such as name, age, breed, weight, medical history,
            photos, and other necessary details.
          </li>
          <li>
            All information provided must be truthful, complete, and updated.
            Colitas is not responsible for errors caused by incorrect data.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Discover (Internal Social Network)
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can upload content such as photos, videos, or posts related to
            their pets, interact with other users through comments, likes, and
            share experiences.
          </li>
          <li>
            Colitas reserves the right to remove inappropriate, offensive, or
            illegal content that does not comply with our principles of respect
            for animals.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Veterinary Consultations and Online Appointments
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can access a list of registered veterinary professionals and
            schedule online or in-person consultations.
          </li>
          <li>
            Scheduling, pricing, and specific consultation conditions are the
            direct responsibility of the veterinary professional.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">Marketplace</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            The marketplace allows users to purchase pet care-related products,
            including food, toys, and complementary services.
          </li>
          <li>
            Payments are processed through Square, and each transaction is
            subject to the return and warranty policies specified for the
            product or service.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">Adoptions</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can explore animals available for adoption and complete a form
            to start the process.
          </li>
          <li>
            Before submitting the form, users must accept additional terms
            specific to adoption (detailed in section 6).
          </li>
          <li>
            Colitas does not participate in the final approval of adoptions, as
            they are managed directly by the corresponding shelter.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">Donations</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can make direct donations to shelters and causes related to
            animal welfare.
          </li>
          <li>
            Colitas does not charge fees for these transactions, ensuring that
            100% of the funds reach the designated destination.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Pet-Friendly Areas
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Colitas provides information about pet-friendly spaces such as
            restaurants, parks, beaches, and hotels.
          </li>
          <li>
            While we strive to provide accurate data, Colitas does not guarantee
            the availability or exact conditions of the listed locations.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">Quiz Game</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            An interactive game that allows users to learn more about pets in a
            fun and educational way.
          </li>
          <li>
            Participation does not generate legal rights or monetary benefits.
          </li>
        </ul>

        <p className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Reviews and Ratings
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Users can rate and review products, services, and professionals
            available on the app.
          </li>
          <li>
            Reviews must be respectful and based on real experiences. Colitas
            reserves the right to remove false, defamatory, or inappropriate
            comments.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          3. User-Generated Content
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            By uploading content, users guarantee they have the legal rights to
            do so and that the content complies with our policies.
          </li>
          <li>
            Colitas is not responsible for third-party rights violations
            resulting from user-uploaded content.
          </li>
          <li>
            Users grant Colitas a limited, free, non-exclusive, worldwide
            license to use, modify, distribute, and promote their content within
            the platform.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          4. User Conduct Rules
        </h2>
        <p className="mb-6">
          To maintain a respectful and safe community, users must:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Avoid posting illegal, offensive, violent, or abusive content.
          </li>
          <li>Not harass, defame, or insult other users.</li>
          <li>
            Respect intellectual property rights and not use the platform for
            unauthorized commercial activities.
          </li>
          <li>
            Report suspicious activity or violations of these rules to Colitas.
          </li>
        </ul>
        <p className="mb-6">
          Colitas reserves the right to suspend or delete accounts that violate
          these rules.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          5. Payments and Fees
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            All transactions are processed through Square, a secure third-party
            service.
          </li>
          <li>
            Colitas charges a commission for transactions made on the
            marketplace.
          </li>
          <li>
            Transactions related to shelters (adoptions and donations) are
            exempt from commissions.
          </li>
          <li>
            Price, fee, and return policy details will be visible before
            confirming any transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          6. Specific Terms for Adoptions
        </h2>
        <p className="mb-6">Before submitting the adoption form, users must:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Declare that they have the necessary conditions for responsible pet
            ownership (space, time, and resources).
          </li>
          <li>
            Accept that the shelter has the final decision on adoption approval.
          </li>
          <li>
            Release Colitas from any responsibility regarding shelter decisions
            or issues arising from the adoption.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
        7. Colitas&apos; Responsibility as an Intermediary
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
          Colitas is an intermediary that facilitates connections between users, professionals, and shelters.
          </li>
          <li>We strive to provide a functional, secure, and reliable platform but do not guarantee the quality or availability of third-party services.</li>
          <li>
          If disputes arise, Colitas will attempt to mediate and provide solutions, but the final resolution is the responsibility of the involved parties.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
        8. Modifications and Notifications
        </h2>
        <p className="mb-6">
        Colitas may update these terms at any time. Changes will be notified at least 15 days in advance via the registered email.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          9. Contact
        </h2>
        <p className="mb-6">
        For any inquiries, please email us at {"  "}
           <Link href="mailto:info@colitas.io" className="text-blue-600">
            info@colitas.io
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AppBody;
