import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'
import { companyName } from '../../../common/variables';

const CodeOfConduct = ({ history }) => (
    <div className="text-page">
        <Navbar history={history}/>
        <Section title="Code of Conduct">
            <h3 className="left-title">Code of Conduct: real estate services</h3>
            <p className="section-text">
                The Office of Fair Trading is committed to ensuring that the market works well for consumers and that all
                businesses engaged in real estate services are prevented from causing significant harm to consumer
                interests.<br /><br />

                This Code is designed to enhance the reputation of real estate service providers and protect consumers
                against misrepresentation and malpractice in this sector.<br /><br />

                This Code has been issued in accordance with the provisions of Section 91(3) of the Fair Trading Act and
                is best practice guidance to estate agents who are required to hold a class B (xi) licence in accordance with
                the provisions of the Fair Trading Act.
            </p>

            <h3 className="left-title">1. Your service</h3>
            <p className="section-text">
                a) You should provide a service to landlords, tenants, purchasers and vendors consistent with fairness,
                integrity and best practice<br /><br />

                b) You should not seek business by methods that are oppressive or involve dishonesty, deceit or
                misrepresentation<br /><br />

                c) You may use and display material promoting this Code as provided by the Office of Fair Trading from
                time to time<br /><br />

                d) You should have available, free of charge, copies of this Code to give to clients on request at your
                offices<br /><br />

                e) You should ensure that all your staff are fully conversant with all aspects of this Code and their legal
                responsibilities, and observe the Code and their legal responsibilities in all their dealings with your clients<br /><br />
                
                f) You should treat all parties involved in transactions fairly and with courtesy; and g) All references in this
                code to communications in “writing” shall include e-mail
            </p>

            <h3 className="left-title">2. Conflicts of interest</h3>
            <p className="section-text">
                a) You should avoid any conflict of interest. You should disclose at the earliest opportunity in writing to your
                client or any relevant third party any existing or potential conflict of interest<br /><br />

                b) If you are dealing with a property that is owned by you, an employee or an associate or in which you, an
                associate or an employee has an interest, you should disclose this interest to all parties in writing, before
                negotiations begin
            </p>

            <h3 className="left-title">3. Instructions, terms of business, fees and charges</h3>
            <p className="section-text">
                a) Your terms of business should be consistent with this Code and be written in plain and intelligible
                language. Your terms of business should also state the duration of your instruction and how it may be
                terminated by either party<br /><br />

                b) You should be clear and transparent with fees and avoid hidden costs<br /><br />

                c) All fees and additional costs should be included in your terms of business. They should be fully explained
                and clearly and unambiguously stated in writing<br /><br />

                d) Where your commission fee is a percentage you should clearly state whether your fee will vary
                depending on whether the agreed price is higher or lower than the asking price<br /><br />

                e) Where you charge a fixed fee you should state the actual amount payable and ensure that your client
                understands that the fee will not vary, irrespective of the final sale price or rent<br /><br />

                f) You should not instruct other agencies to assist you in dealing with any property without your client’s
                written permission. If your client gives you permission, as the instructing agent, you may be held liable for
                the actions of the sub-instructed agent<br /><br />

                g) You should give your client written confirmation of your acceptance of their instructions and written
                details of your terms of business<br /><br />

                h) You should take reasonable steps to satisfy yourself that the vendor is entitled to instruct you on behalf
                of all co-vendors
            </p>

            <h3 className="left-title">4. Deposits</h3>
            <p className="section-text">
                a) You should presume that all deposits made by a consumer are to be held on a ‘subject to contract’ basis
                unless the clients expressly agree otherwise in writing amongst themselves and provide you with a copy of
                their agreement. Subject to any such express agreement between the parties, if for any reason, the parties
                do not proceed to exchange contracts in relation to a sale, purchase, lease or other or enter into a rental or
                tenancy agreement (as the case may be), the deposit should be returned forthwith to the payee in full
                without deduction or set-off<br /><br />

                b) A deposit is entrusted to you for safekeeping as stakeholder and should not be renamed or disguised as
                an introducer’s fee or other brokerage fee
            </p>

            <h3 className="left-title">5. Client accounts</h3>
            <p className="section-text">
                a) It is a legal requirement under section 97 of the Fair Trading Act to hold all deposits from clients and
                client monies in a separate client account<br /><br />

                b) Such client account or accounts should be reconciled regularly and at least monthly to your bank
                statements and clearly identify which client holds which deposit with you. Monies not reconciled must be
                investigated in a timely manner and efforts made to return money to clients where it is no longer necessary
                to hold a deposit<br /><br />

                c) The monies contained in such client account(s) must be segregated from your office account and held to
                the order of the particular client<br /><br />

                d) The account designated as a client account, should contain the word ‘client’ in the account name with
                the bank or building society
            </p>

            <h3 className="left-title">6. Market values</h3>
            <p className="section-text">
                a) When you advise a client or prospective client as to the rental or sale value of their property, your advice
                should be given in good faith. Your advice should also reflect information about the relevant property and
                current market conditions. Your advice should also, where possible, be supported by comparable evidence<br /><br />

                b) You should never deliberately misrepresent the market value of a property.
            </p>

            <h3 className="left-title">7. Viewings and representations</h3>
            <p className="section-text">
                a) You should take instructions from your clients as to their requirements regarding viewings, specifically
                whether or not they should be conducted by you<br /><br />

                b) You should record any viewings that have been arranged for the property and communicate feedback
                from those viewings to your client within agreed timescales<br /><br />

                c) When you know the property has been marketed by another agent you should establish if your client has
                previously viewed the property through that or any other agent<br /><br />

                d) Where possible, you should obtain an inventory before carrying out viewings, so that both parties are
                clear from the outset on what is included in the price or rent (as the case may be)
            </p>

            <h3 className="left-title">8. Access to the property</h3>
            <p className="section-text">
                a) Unless otherwise instructed by your client, if you hold the keys to the property you should be present at
                any viewings of the property. You should not allow a prospective purchaser or tenant (as the case may be)
                to visit the property without your supervision<br /><br />

                b) If you are arranging for someone to view a property that is not vacant, you should agree the
                arrangements with the occupier (including any tenants) beforehand with 24 hours’ notice, where possible<br /><br />

                c) You should make sure that all the keys you have are kept secure<br /><br />

                d) You should maintain records of when you issue keys and to whom, and when they are returned. These
                records should be kept secure and separate from the actual keys. You should only give keys to people
                providing you with satisfactory identification. The keys and their key rings should not identify the property
                address<br /><br />

                e) If access to a property is required by a person on behalf of the purchaser or tenant (e.g. a surveyor,
                builder or tradesman) and you hold the key but are not able to accompany that person, written permission
                should be obtained from the vendor or landlord before you hand over the key<br /><br />

                f) You should exercise reasonable diligence to ensure that, after any visit by you, the relevant property is
                left as secure as you found it
            </p>

            <h3 className="left-title">9. Offers</h3>
            <p className="section-text">
                a) You should notify your client as soon as reasonably possible of all offers that you receive at any time up
                until the point at which contracts have been exchanged or a rental agreement entered into, unless the offer
                is an amount or type which your client has specifically instructed you, in writing, not to inform him of<br /><br />

                b) You should notify your client of each offer or response to an offer that you receive in writing within two
                working days of receipt<br /><br />

                c) Prior to the acceptance of any offer, you should take reasonable steps to ascertain the availability of the
                purchaser’s funds and inform the vendor accordingly. Such information will include whether the prospective
                purchaser is relying on the sale of another property to use towards the relevant purchase and whether they
                require a mortgage or are cash purchasers
            </p>

            <h3 className="left-title">10. Advertising</h3>
            <p className="section-text">
                a) When an offer has been accepted subject to contract you should seek your client’s instructions as to
                whether the property should be withdrawn from the market, or continue to be marketed. In the latter case,
                you should notify the prospective buyer or tenant in writing. The prospective buyer or tenant should also be
                informed in writing should your client later decide to put the property back on the market<br /><br />

                b) You should not advertise any property without permission from the owner<br /><br />

                c) All your adverts should be legal, decent, honest and truthful. Advertised properties should be available at
                the time of advertising.<br /><br />

                d) Your website should be updated at least weekly
            </p>

            <h3 className="left-title">11. Anti-money laundering requirements</h3>
            <p className="section-text">
                You should not market the property without the consent of the owner and without obtaining adequate proof
                of identification of the owner in accordance with the Crime (Money Laundering and Proceeds) Act 2007, the
                Drug Trafficking Act 1995 and the Terrorism Act 2005.
            </p>

            <h3 className="left-title">12. Involvement between offer and exchange of contracts</h3>
            <p className="section-text">
                a) After acceptance of the offer by the vendor, and until exchange of contracts you should not influence the
                legal process or the mortgage lending process. Your obligations to the vendor are:><br />

                i) to monitor progress><br />
                ii) to assist where possible, if asked><br />
                iii) to report information deemed helpful to bringing the transaction to fruition<br /><br />

                b) If your client becomes involved in a contract race, they should be told promptly of the situation and given
                such information which comes to your attention as is consistent with your duty to the other parties
            </p>

            <h3 className="left-title">13. Exchange and completion</h3>
            <p className="section-text">
                After exchange of contracts you should not give the purchaser the keys to the property without the written
                permission from the vendor or landlord (as the case may be) or their lawyer.<br /><br />
                Keys to the property should not be given to the purchaser on completion without the specific permission of
                the vendor or the vendor’s legal representative.
            </p>

            <h3 className="left-title">14. Confidentiality</h3>
            <p className="section-text">
                a) You should treat all transactions and communications with your clients as confidential<br /><br />
                b) You should deal with all correspondence with your clients as promptly as possible and, in any event,
                within the following time limits:<br />
                i) An acknowledgement shall be sent not later than 14 days from the date of receipt of correspondence<br />
                ii) A detailed reply, or a reply containing a detailed explanation for any delay, shall be sent not later than
                28 days from the date of receipt of correspondence
            </p>

            <h3 className="left-title">15. Complaints handling and the Office of Fair Trading’s role</h3>
            <p className="section-text">
                a) You should maintain and operate a complaints procedure. Such procedures should be in writing and
                explain how to make a complaint against your business<br /><br />

                b) All verbal and written complaints should be recorded by you. All written complaints should be
                acknowledged in writing within 14 calendar days of receipt and investigation promptly undertaken. A senior
                member of staff not directly involved in the transaction should deal with the complaint<br /><br />

                c) If the complainant remains dissatisfied, they should be told how their complaint may be pursued further
                within your business. Following the conclusion of your investigation, a written statement of your final view,
                and including any offer made (where relevant), should be sent to the complainant. This letter should also
                tell the complainant how the matter can be referred to the Office of Fair Trading<br /><br />
                
                d) An investigation may be made by the Office of Fair Trading against you. If not resolved, the Office of Fair
                Trading can refer to the matter to the Office of Fair Trading Commission which may, in its discretion issue
                an enforcement order against your business. This order may, amongst other remedies, order you to pay the
                complainant the amount of any such award within a specified period for payment as ordered by the
                Commission<br /><br />

                Remember, Gibraltar is a small jurisdiction and bad consumer practices may result in a loss of business or
                damage to your reputation.<br /><br />

                {companyName} would like to resolve any complaint as soon as possible and many complaints can be resolved
                informally.<br /><br />

                In the first instance contact {companyName}, and, if you feel able to, speak to the member of staff who is working with
                you, who will try to sort the matter out.<br /><br />

                If you make contact in person or by phone, make a note of the name of the person you speak to. If a
                solution is offered at this point, make a note of this as well.
                If you are not satisfied or do not wish for an informal solution, you may pursue a formal complaint. Write
                down your complaint, including all the details you consider pertinent and send it to: stephanie@sk-estates.com
            </p>
        </Section>
        <Footer />
    </div>
)

export default CodeOfConduct