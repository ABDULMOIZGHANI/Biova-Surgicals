import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <section className='w-[95%] m-auto max-w-[1300px] pb-[50px]'>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[30px] mb-[10px]'>Privacy Policy</h1>


            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                At <b>Biova Surgicals</b>, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.
            </p>

            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                By accessing our website, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our services.
            </p>

            <div className='h-[2px] mt-[20px] bg-[#00605f]'></div>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>1. Information We Collect</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We collect personal and non-personal information to improve our services and process your orders efficiently. The types of data we collect include:
            </p>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>1.1 Personal Information</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We may collect the following personal details when you interact with our website: <br />
                - <b>Name</b> <br />
                - <b>Email address</b> <br />
                - <b>Phone number</b> <br />
                - <b>Billing and shipping address</b> <br />
                - <b>Payment details</b><br />
                - <b>Order history</b>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>2. How We Use Your Information</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We use your information strictly for the following purposes: <br />
                - <b>Order Processing:</b> To fulfill, confirm, and ship your purchases. <br />
                - <b>Customer Support:</b> To respond to inquiries and resolve issues. <br />
                - <b>Personalized Experience:</b> To offer relevant products, recommendations, and promotions. <br />
                - <b>Website Optimization:</b> To improve user experience and website performance. <br />
                - <b>Legal Compliance:</b> To meet regulatory and legal obligations.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>3. How We Protect Your Information</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We take reasonable security measures to prevent unauthorized access, alteration, or disclosure of your data, including: <br />
                - <b>SSL Encryption:</b> Protects data during transactions. <br />
                - <b>Restricted Access:</b> Only authorized personnel have access to sensitive data. <br />
                - <b>Secure Payment Processing:</b> We do not store or process payment details directly. Transactions are handled securely by third-party payment providers.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>4. Sharing of Information</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We do <b>not</b> sell, rent, or trade your personal information. However, we may share your data in the following cases: <br />
                - <b>Service Providers:</b> We work with trusted third-party logistics and payment processors to fulfill orders. <br />
                - <b>Legal Compliance:</b> If required by law, we may disclose data to regulatory authorities. <br />
                - <b>Business Transfers:</b> In case of a merger or acquisition, your data may be transferred to the new entity under the same privacy guidelines.
            </p>


            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>5. Your Rights and Choices</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                You have the right to: <br />
                - <b>Access Your Data:</b> Request a copy of the personal data we store. <br />
                - <b>Correct Your Data:</b> Update inaccurate or incomplete information. <br />
                - <b>Delete Your Data:</b> Request deletion of your data, subject to legal obligations. <br />
                - <b>Opt-Out of Marketing:</b> Unsubscribe from promotional emails at any time. <br /><br />
                To exercise these rights, contact us at <b>biovasurgicals@gmail.com</b>.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>6. Data Retention</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We retain your personal information as long as necessary for order processing, legal compliance, and business operations. When no longer needed, we securely delete or anonymize the data.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>7. Third-Party Links</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                Our website may contain links to external websites. We are not responsible for the privacy practices of these third parties. Please review their privacy policies before sharing any personal information.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>8. Updates to This Privacy Policy</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                We may update this Privacy Policy periodically. Any changes will be posted on this page. Continued use of our website constitutes acceptance of the revised policy.
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>9. Contact Us</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[50px]'>
                If you have any questions or concerns about this Privacy Policy, you can contact us at: <br /><br />
                <b>Biova Surgicals</b> <br />
                [Your Business Address] <br />
                Email:  <Link to="mailto:biovasurgicals@gmail.com">
                    <p className="mt-1 text-lg font-medium inline lato">biovasurgicals@gmail.com</p>
                </Link> <br />
                Phone: <Link to="https://wa.me/03054440378">
                    <p className="mt-6 text-lg font-medium inline  lato"> +92305-4440378, </p>
                </Link>
                <Link to="https://wa.me/03001086684">
                    <p className="mt-1 text-lg font-medium inline lato"> +92300-1086684</p>
                </Link>
            </p>
        </section>
    )
}

export default PrivacyPolicy