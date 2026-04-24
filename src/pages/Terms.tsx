import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Scope of Services</h2>
                <p className="text-muted-foreground mb-4">We will provide the following services:</p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Liquor Licensing Advice:</strong> We will advise you on the relevant licensing requirements for your premises, including applying for new liquor licenses, renewals, and any amendments or variations.
                  </li>
                  <li>
                    <strong className="text-foreground">Liquor Licensing applications:</strong> We will prepare and submit the applications for a broad spectrum of licenses including but not limited to: On-license, Off-license & temporary authorities; ensuring your application is completed effectively & to the highest quality.
                  </li>
                  <li>
                    <strong className="text-foreground">Manager's Certificate Applications:</strong> We will assist in applying for and renewing manager's certificates.
                  </li>
                  <li>
                    <strong className="text-foreground">Preparation and Submission of Documents:</strong> We will prepare and submit all necessary forms, documentation, and applications to the relevant District Licensing Committee (DLC) and authorities.
                  </li>
                  <li>
                    <strong className="text-foreground">Communication with Authorities:</strong> We will liaise with the DLC, local authorities, and other relevant parties to ensure that your licensing matters are handled in a timely and effective manner.
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  If additional services are required beyond the scope outlined above, we will discuss these with you and agree on any necessary adjustments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Our Fees</h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Our fees for the services provided will be based on the complexity of the work involved and the time spent on your case. A detailed fee structure will be provided separately or upon request.</li>
                  <li>Any disbursements, such as filing fees or travel expenses, will be charged in addition to the fees for our services.</li>
                  <li>We will provide you with an estimate of costs prior to undertaking any work and will keep you informed of any significant changes to the estimate as the work progresses.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Payment for our services is due prior to the lodgement of the application. We will send an invoice to you outlining the fees and any applicable disbursements. Payment is required before we proceed with lodging the application or submitting any documents to the authorities.</li>
                  <li>If payments are not made within the agreed terms, we reserve the right to suspend or delay the application process until payment is received.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Responsibilities</h2>
                <p className="text-muted-foreground mb-4">To ensure we can provide the best possible service, we ask that you:</p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Provide us with accurate and timely information related to your liquor licensing application.</li>
                  <li>Notify us immediately of ANY changes in your business operations, including any change of management within the business, as this may impact your liquor licensing requirements.</li>
                  <li>Notify us of ANY changes in your business premises or activities that may affect your liquor license or manager's certificate.</li>
                  <li>Respond promptly to our communications and requests for information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>We are committed to maintaining the confidentiality of your business and personal information. All information provided to us will be kept strictly confidential and will not be shared with third parties without your prior consent, unless required by law.</li>
                  <li>All information acquired pertaining to your business and/or self, including digital information, will be kept confidential in accordance with the Privacy Act 2020.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Duration of Engagement</h2>
                <p className="text-muted-foreground">
                  This engagement will remain in effect until the completion of the services outlined above, unless terminated earlier by either party. Either party may terminate this engagement with written notice at any time. If you choose to terminate our services, you will be required to pay for any work already undertaken up until the date of termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  While we will use reasonable care and skill in providing our services, we do not accept liability for any loss, damage, or delay resulting from any errors or omissions in the application process that are beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  In the event of any dispute arising from this engagement, both parties agree to attempt to resolve the matter amicably through mediation. If mediation is unsuccessful, the dispute may be referred to arbitration or a relevant legal authority.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
