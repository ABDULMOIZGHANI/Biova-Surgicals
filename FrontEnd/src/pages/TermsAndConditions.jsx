import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
    return (
        <section className='w-[95%] m-auto max-w-[1300px] pb-[50px]'>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[30px] mb-[10px]'>Terms and Conditions</h1>
            {/* <p className='text-[#00807b] text-center lato text-[20px] mb-[20px]'>
                <em>Effective Date:</em> [Insert Date] <br />
                <em>Last Updated:</em> [Insert Date]
            </p> */}

            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                Welcome to <b>Biova Surgicals</b>! These Terms and Conditions govern your use of our website and services. By accessing or purchasing from <b>Biova Surgicals</b>, you agree to comply with these terms. If you do not agree, please refrain from using our services.
            </p>

            <div className='h-[2px] mt-[20px] bg-[#00605f]'></div>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>1. General Terms</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li> These Terms apply to all users, including <b>visitors, customers, and businesses</b> purchasing from our website.</li>
                    <li>We reserve the right to update, modify, or remove any part of these Terms at our discretion.</li>
                    <li>Continued use of the website after updates means acceptance of the revised Terms.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>2. Products and Availability</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>All products listed on our website are subject to <b>availability</b>. We do not guarantee that a product will always be in stock.</li>
                    <li>Product descriptions, specifications, and images are provided for reference only. While we strive for accuracy, slight variations may occur.</li>
                    <li>We reserve the right to <b>discontinue or modify</b> any product without prior notice.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>3. Orders and Payments</h2>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>3.1 Order Process</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>Placing an order on our website constitutes an <b>offer to purchase</b>. We reserve the right to accept or decline any order.</li>
                    <li> An order is confirmed only after full payment is received.</li>
                    <li>If an item is out of stock after an order is placed, we will inform you and provide a refund or alternative option.</li>
                </ul>
            </p>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>3.2 Pricing and Payment</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>Prices displayed on our website are in <b>PKR</b> and are subject to change without notice.</li>
                    <li> We accept various <b>secure payment methods</b>, including credit/debit cards, bank transfers, and digital payment gateways.</li>
                    <li><b>Taxes, shipping fees, and additional charges</b> (if applicable) will be displayed at checkout.</li>
                    <li>If a payment is declined or fraudulent, we reserve the right to <b>cancel the order</b></li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>4. Shipping and Delivery</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>We aim to process and ship orders within <b>3 - 5 business days</b>, but delivery times may vary based on location.</li>
                    <li> Delays due to external factors (e.g., customs, courier issues, natural disasters) are <b>beyond our control</b>, and we are not liable for late deliveries. </li>
                    <li>Customers must provide <b>accurate shipping details</b>. We are not responsible for non-delivery due to incorrect information. </li>
                    <li>Shipping fees and estimated delivery times will be displayed at checkout.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>5. Returns, Refunds, and Cancellations</h2>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>5.1 Return Policy</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>Returns are accepted within <b>2 days</b> of delivery, provided the item is <b>unused, undamaged, and in original packaging</b>. (Returns are not applicable for all items). </li>
                    <li> Some products, such as sterile medical supplies or personalized items, are <b>non-returnable</b> for safety reasons. </li>
                </ul>
            </p>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>5.2 Refund Policy</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>Refunds will be processed once the returned item is inspected and approved.</li>
                    <li>Refunds are issued via the original payment method and may take <b>2 business days</b> to reflect. </li>
                    <li> <b>Shipping fees are non-refundable</b> unless the return is due to our error.</li>
                </ul>
            </p>

            <h3 className='text-[#00605f] playfair font-bold text-[20px] md:text-[25px] tracking-[1.5px] mt-[15px]'>5.3 Order Cancellations</h3>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>Orders can only be canceled before they are shipped. Once dispatched, cancellations are <b>not possible</b>. </li>
                    <li>If an order is canceled before shipment, a <b>full refund</b> will be issued.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>6. Warranty and Liability</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li><b>Biova Surgicals</b> guarantees that all products meet <b>quality and safety standards</b>. </li>
                    <li>We are not liable for <b>misuse, improper handling, or modifications</b> made to our products after purchase. </li>
                    <li>Customers must follow the <b>manufacturer's guidelines</b> for product use.</li>
                    <li>In no event shall <b>Biova Surgicals</b> be responsible for any <b>indirect, incidental, or consequential damages</b> arising from product use.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>7. Intellectual Property</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>All content on our website, including <b>logos, product descriptions, images, and graphics</b>, is the <b>intellectual property of Biova Surgicals</b>. </li>
                    <li>Unauthorized use, reproduction, or distribution of our content is strictly prohibited.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>8. Privacy and Data Protection</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>We collect, store, and process personal information as outlined in our <Link to="/privacy-policy" className="text-[#00605f] underline">Privacy Policy</Link>. </li>
                    <li>Customer data is used only for order processing, customer service, and website improvements.</li>
                    <li>We do not sell or share customer data with third parties without consent.</li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>9. Dispute Resolution</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[20px]'>
                <ul className='list-disc ml-5'>
                    <li>In the event of a dispute, we encourage customers to <b>first contact us</b> to resolve the issue amicably. </li>
                    <li>If a resolution cannot be reached, disputes shall be handled under the laws of <b>PAKISTAN/KARCHI</b>. </li>
                </ul>
            </p>

            <h2 className='text-[#00605f] playfair font-bold text-[25px] md:text-[35px] tracking-[1.5px] mt-[20px]'>10. Contact Us</h2>
            <p className='text-[#00807b] lato text-[17px] md:text-[20px] mb-[50px]'>
                If you have any questions or concerns about this Privacy Policy, you can contact us at: <br /><br />
                <b>Biova Surgicals</b> <br />
                {/* [Your Business Address] <br /> */}
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

export default TermsAndConditions