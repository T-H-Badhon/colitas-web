import React from 'react';

const AppBody = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Colitas Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-4">
        Effective Date: December 9, 2024
      </p>
      <p className="text-lg mb-6">
        Welcome to Colitas Care Group Hub. Protecting your privacy is our priority. This document explains how we collect, use, store, and protect your personal information when using our mobile app and services.
      </p>
      <p className="text-lg mb-6">
        By registering or using Colitas, you agree to the terms of this policy. If you do not agree, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information We Collect</h2>
      <p className="font-bold">a) Information Provided Directly:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>When registering as a user: Full name, email address, phone number, location, photos, and details about your pet (name, breed, age, etc.).</li>
        <li>When registering as a professional: Additional information such as business name, tax identification, business registration documents, banking details, service descriptions, rates, and promotional photos.</li>
      </ul>

      <p className="font-bold">b) Information Collected Automatically:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Technical details: IP address, device type, operating system, browser used, language settings, date, and time of access.</li>
        <li>Geolocation: Used to display nearby services (you can disable this in your device settings).</li>
        <li>Usage information: Frequency of access, interactions with other users, and transactions made in the app.</li>
      </ul>

      <p className="font-bold">c) Third-Party Information:</p>
      <p className="mb-4">Details related to transactions processed by Square. Note: We do not store full credit or debit card information.</p>

      <p className="font-bold">d) Content Information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Photos, videos, and comments posted on our Discover social network.</li>
        <li>Additional data related to adoptions, donations, and marketplace preferences.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. How We Use Your Information</h2>
      <p className="font-bold">a) Service Provision:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Manage user and professional accounts and profiles.</li>
        <li>Connect users with professionals and pet-friendly services.</li>
        <li>Facilitate adoptions, donations, and purchases through the marketplace.</li>
      </ul>

      <p className="font-bold">b) Communication:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Send you notifications related to your account, transactions, updates, and promotions, with your prior consent.</li>
      </ul>

      <p className="font-bold">c) Security and Compliance:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Prevent fraudulent or unauthorized activities.</li>
        <li>Verify the authenticity of data provided by professionals.</li>
        <li>Monitor and moderate content on Discover to ensure compliance with our policies.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Data Sharing</h2>
      <p className="mb-4">
        We share your information only in the following cases:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>With registered professionals: To complete transactions requested by users.</li>
        <li>With external providers: Such as Square, to process payments securely.</li>
        <li>Legal compliance: If required by legal authorities or to protect our rights in legal disputes.</li>
        <li>With explicit consent: If you authorize the sharing of your data for specific cases.</li>
      </ul>

      <p className="mb-4">We do not sell or rent your personal information to third parties.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Data Storage and Retention</h2>
      <p className="mb-4">
        Your information is securely stored on servers located in regions with adequate data protection laws. We retain your data while your account remains active or as required by law.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. User Rights</h2>
      <p className="mb-4">
        You have the following rights regarding your personal information:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access your personal data and request corrections for incorrect information.</li>
        <li>Delete your account and personal data unless required by law.</li>
        <li>Request details about how we process your data.</li>
      </ul>

      <p className="mb-4">You can exercise these rights by contacting us at info@colitas.io.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Information Security</h2>
      <p className="mb-4">
        We implement technical, administrative, and physical measures to protect your information from unauthorized access, loss, alteration, or improper disclosure. While we strive to protect your data, no digital transmission or storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Policies for Minors</h2>
      <p className="mb-4">
        Our services are not intended for individuals under 18 years of age. If we discover that a minor has provided us with personal data without parental consent, we will delete that information immediately.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update this policy at any time. We will notify you of significant changes at least 30 days in advance via email.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. Contact</h2>
      <p className="mb-4">
        If you have any questions or comments about this policy, you can contact us at:
      </p>
      <p className="mb-4">
        Email: info@colitas.io
      </p>
    </div>
  );
};

export default AppBody;
