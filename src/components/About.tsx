import React from 'react';

import texas from '../assets/austin-texas.jpg';
import mariana from '../assets/mariana.jpg';

function About() {
  return (
  <div className='mx-5 md:mx-40 max-w-10'>
    <section>
      <article>
          <h1 className='text-2xl font-bold pt-1 pb-2'>About us</h1>
          <p className='text-justify pt-2'>
            Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, 
            weddings and anniversaries. The jewelry company primarily operates online and has a small storefront 
            in Austin, Texas with an atelier attached for browsing. Mangata & Gallo's selection of jewelry is known 
            for its high-quality and classic look. The owner, an Austin local, is well known for her jewelry designs.
          </p><br/>
      </article>
      <article>
          <div className='md:grid grid-cols-3'>
              <img className='md:col-span-2' src={texas}/>
              <img className='md:cols-span-1' src={mariana}/>
          </div>
          <div>
              <p className='text-justify pt-5'>
                Mariana is the owner and the lead designer of Mangata and Gallo. After graduating from design 
                school with a specialization in diamond cutting and metal smithing, Mariana opened a store in her 
                hometown, Austin and started to grow her business online. Mariana has always managed every aspect 
                of the business, from jewelry design to marketing to e-commerce. However, she recently hired several 
                artisans to help craft her designs and a young employee to help manage the company website and social 
                media accounts.
              </p>
          </div>
      </article>
    </section>
    <section>
      <article>
          <h1 className='text-2xl font-bold py-3 md:mt-5'>Contact info</h1>
          <table className='w-full mb-3 md:my-5'>
            <tbody>
              <tr className='border-b-2 border-gray-300'>
                <td className='w-1/3 h-10'>Phone number</td>
                <td>+1 100-200-3000</td>
              </tr>
              <tr className='border-b-2 border-gray-300'>
                <td className='w-1/3 h-10'>Email address</td>
                <td>info@mangatagallo.com</td>
              </tr>
              <tr>
                <td className='w-1/3 h-10'>Address</td>
                <td>111 Colorado St, Austin, Texas 78701, United States of America</td>
              </tr>
            </tbody>
          </table>
      </article>
      <article>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.9681747386735!2d-97.74759102364166!3d30.26648797481256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50618b3d543%3A0x7aa226820747bde6!2s111%20Colorado%20St%2C%20Austin%2C%20TX%2078701%2C%20Egyes%C3%BClt%20%C3%81llamok!5e0!3m2!1shu!2shu!4v1713536913266!5m2!1shu!2shu"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts"
              className='w-full'
          ></iframe>
      </article>
    </section>
    </div>
  );
}

export default About;