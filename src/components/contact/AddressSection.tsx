import React from 'react';

const AddressSection = () => {
  return (
    <section className="contact-info-area style3 py-12" id="address">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md">
            <span className="icon-envelope text-3xl text-blue-600"></span>
            <div className="title mt-4">
              <h3 className="text-xl font-semibold">Email address<span className="dotted"></span></h3>
            </div>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="mailto:info@colitas.io" className="text-blue-600 hover:underline">info@colitas.io</a>
              </li>
              <li className="invisible">
                <a href="mailto:jobs@colitas.io" className="text-blue-600 hover:underline">jobs@colitas.io</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md" data-wow-delay="200ms">
            <span className="icon-call text-3xl text-green-600"></span>
            <div className="title mt-4">
              <h3 className="text-xl font-semibold">Phone Number<span className="dotted"></span></h3>
            </div>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="tel:+8618958020517" className="text-green-600 hover:underline">+86 189 5802 0517</a>
              </li>
              <li>
                <a href="tel:+8615395837112" className="text-green-600 hover:underline">+86 153 9583 7112</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md" data-wow-delay="400ms">
            <span className="icon-pin-2 text-3xl text-red-600"></span>
            <div className="title mt-4">
              <h3 className="text-xl font-semibold">Office Address<span className="dotted"></span></h3>
            </div>
            <p className="mt-2">651 N Broad St, Middletown<br />State of Delaware, USA</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AddressSection;
