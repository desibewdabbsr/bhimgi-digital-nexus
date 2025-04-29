
import React from "react";

const RefundPolicy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bhimgi-blue text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">Refund Policy</h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-bhimgi-blue mb-6">BHIMGI INFO SOLUTIONS PRIVATE LIMITED - Refund Policy</h2>
              
              <p className="text-gray-700 mb-6">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
              
              <p className="text-gray-700 mb-4">
                Thank you for shopping with BHIMGI INFO SOLUTIONS PRIVATE LIMITED. We value your satisfaction and have established the following refund policy to ensure a positive experience with our products and services.
              </p>
              
              <h3 className="text-xl font-semibold text-bhimgi-blue mt-8 mb-4">1. Hardware Products</h3>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">1.1 Return Eligibility</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Products can be returned within 7 days of delivery.</li>
                <li>Items must be in original packaging, unused, and undamaged.</li>
                <li>Original receipt or proof of purchase is required.</li>
                <li>Defective products can be returned for replacement or refund within the warranty period specified for each product.</li>
              </ul>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">1.2 Non-returnable Items</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Products with broken seals or missing packaging.</li>
                <li>Items showing signs of use or damage caused by the customer.</li>
                <li>Custom or specially ordered products.</li>
              </ul>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">1.3 Refund Process</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Refunds will be initiated within 7 business days of receiving and verifying the returned product.</li>
                <li>The refund will be credited back to the original payment method used for the purchase.</li>
                <li>Shipping charges for returns are borne by the customer unless the product is defective or incorrect.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-bhimgi-blue mt-8 mb-4">2. Software Products</h3>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">2.1 Refund Eligibility</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Refunds for software are available within 14 days of purchase if the software has not been activated or installed.</li>
                <li>For defective software that fails to perform as described, refunds will be processed upon verification.</li>
              </ul>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">2.2 Non-refundable Software</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Software that has been activated, installed, or used.</li>
                <li>Software licenses that have been registered or transferred.</li>
                <li>Customized software developed specifically for a client.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-bhimgi-blue mt-8 mb-4">3. IT Services</h3>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">3.1 Custom Software Development and Consulting</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Custom software development and consulting services are governed by individual contracts that specify payment terms, deliverables, and refund conditions.</li>
                <li>Refunds for incomplete work will be calculated based on the percentage of work completed and as specified in the contract.</li>
              </ul>
              
              <h4 className="text-lg font-medium text-bhimgi-blue mb-2">3.2 Support and Maintenance Services</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Subscription-based support services can be canceled at any time, with refunds processed for the unused portion of the service period.</li>
                <li>One-time support services are non-refundable once the service has been provided.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-bhimgi-blue mt-8 mb-4">4. How to Request a Refund</h3>
              <p className="text-gray-700 mb-4">
                To request a refund, please contact our customer service team through one of the following channels:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Email: support@bhimgiinfosolutions.work.gb</li>
                <li>Contact form on our website: <a href="/contact" className="text-bhimgi-accent hover:underline">Contact Us</a></li>
              </ul>
              <p className="text-gray-700 mb-4">
                Please include your order number, purchase date, and reason for the refund request.
              </p>
              
              <h3 className="text-xl font-semibold text-bhimgi-blue mt-8 mb-4">5. Additional Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We reserve the right to modify or update this refund policy at any time. Changes will be posted on this page with an updated "Last Updated" date.</li>
                <li>For products purchased through authorized resellers, the reseller's refund policy will apply.</li>
                <li>In case of any disputes, the decision of BHIMGI INFO SOLUTIONS PRIVATE LIMITED will be final and binding.</li>
              </ul>
              
              <p className="text-gray-700 mt-8">
                If you have any questions about our refund policy, please contact us at support@bhimgiinfosolutions.work.gb.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
