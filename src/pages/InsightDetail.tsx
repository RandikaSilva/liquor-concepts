import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  ArrowLeft,
  BookOpen,
  Mail,
  Clock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Sample data - in production, this would come from the database
const sampleInsights = [
  {
    id: 10,
    slug: "auckland-liquor-licensing-guide",
    type: "blog",
    title:
      "Auckland Liquor Licensing: Everything You Need to Know Before You Apply",
    keywords:
      "liquor licence Auckland, how to get liquor licence NZ, Auckland Council liquor licensing, liquor licence application NZ, LCQ qualification NZ, alcohol licence types Auckland",
    excerpt:
      "Need a liquor licence in Auckland? A complete guide covering licence types, the step-by-step application process, costs, timelines, and ongoing compliance obligations.",
    content: `
      <p><strong>Obtaining a liquor licence in Auckland requires navigating New Zealand's comprehensive alcohol licensing framework.</strong> Whether you're opening a new bar, restaurant, café, or retail outlet, understanding the application process, legal requirements, and compliance obligations is essential for success.</p>

      <h2>Understanding Liquor Licensing in Auckland</h2>
      <p>Auckland's liquor licensing system operates under the Sale and Supply of Alcohol Act 2012, which governs how businesses can sell and serve alcohol throughout New Zealand. The framework balances commercial opportunities with community safety, requiring applicants to demonstrate responsible practices and genuine suitability.</p>
      <p>Obtaining a liquor licence involves coordination between several agencies: Auckland Council (through local District Licensing Committees), the New Zealand Police, Medical Officers of Health, and licensing inspectors. Each plays a specific role in evaluating applications and ensuring compliance with liquor licensing laws in New Zealand.</p>

      <h2>Types of Liquor Licences Available in Auckland</h2>
      <p>Auckland liquor licensing offers several licence categories, each designed for specific business operations:</p>
      <ul>
        <li><strong>On-Licence:</strong> Allows customers to consume alcohol on your premises. Suits restaurants, bars, cafés, nightclubs, and hotels. Different endorsements are available depending on your service style and operating hours.</li>
        <li><strong>Off-Licence:</strong> Permits the sale of alcohol for consumption elsewhere. Bottle shops, supermarkets, grocery stores, and wine retailers typically operate under off-licences. Remote sales endorsements enable online alcohol sales with delivery services.</li>
        <li><strong>Club Licence:</strong> Designed for chartered clubs and member-based organizations where alcohol is sold or supplied to members and guests. Sports clubs, RSAs, and social clubs commonly hold this licence type.</li>
        <li><strong>Special Licence:</strong> Temporary authorization for one-off events like weddings, festivals, fundraisers, or corporate functions. Shorter application timeframes but still require proper planning and documentation.</li>
      </ul>

      <h2>How to Get a Liquor Licence in Auckland: Step-by-Step</h2>
      <p><strong>1. Determine Your Licence Type</strong><br/>Assess your business operations carefully — your venue type, target customers, trading hours, and whether you'll serve alcohol for on-site consumption or takeaway sales.</p>
      <p><strong>2. Complete Mandatory Training</strong><br/>All managers designated on your licence application must hold a valid Licence Controller Qualification (LCQ). Training providers throughout Auckland offer LCQ courses, typically completed within one or two days.</p>
      <p><strong>3. Prepare Your Application Documentation</strong><br/>A complete application requires:</p>
      <ul>
        <li>Detailed floor plans showing the licensed area</li>
        <li>Evidence of your legal right to occupy the premises</li>
        <li>Host responsibility policy outlining how you'll minimize alcohol-related harm</li>
        <li>Details of all managers with LCQ certification</li>
        <li>Information about intended operating hours and conditions</li>
      </ul>
      <p><strong>4. Submit to Auckland Council</strong><br/>Lodge your application through Auckland Council's online portal or in person at a council service center. Pay the required application fee, which varies depending on licence type and your premises' rateable value.</p>
      <p><strong>5. Public Notification Period</strong><br/>Most licence applications require public notification, allowing community members to submit objections. This typically involves advertising in local newspapers and posting notices at your premises for at least ten working days.</p>
      <p><strong>6. Agency Reports and Inspections</strong><br/>The Police, Medical Officer of Health, and licensing inspectors will assess your application. Inspectors visit your premises to verify compliance with building codes, fire safety requirements, and operational suitability.</p>
      <p><strong>7. District Licensing Committee Hearing (If Required)</strong><br/>If no objections arise and agencies support your application, the DLC may grant your licence without a formal hearing. If objections are filed, you'll need to attend a hearing to address these matters.</p>
      <p><strong>8. Licence Issuance</strong><br/>Once approved, Auckland Council issues your liquor licence with specific conditions. Review these carefully to ensure full compliance from day one of trading.</p>

      <h2>What Does a Liquor Licence Cost in Auckland?</h2>
      <p>Application fees for Auckland liquor licensing typically range from several hundred to over a thousand dollars, with annual renewal fees following a similar structure. Beyond council fees, budget for:</p>
      <ul>
        <li>LCQ training courses for managers ($200–$400 per person)</li>
        <li>Professional consultation services</li>
        <li>Public notification advertising ($200–$500)</li>
        <li>Potential building or premises modifications to meet compliance standards</li>
        <li>Legal advice if complications arise</li>
      </ul>
      <p>Special licences for events cost considerably less, typically $63 to $300 depending on event scale.</p>

      <h2>How Long Does the Application Take?</h2>
      <p>Straightforward applications without opposition typically process within 30 to 60 working days. Applications requiring hearings may extend to three or four months. Special licences usually process within 10 to 15 working days.</p>
      <p>To minimize delays: submit complete, accurate documentation from the outset; respond promptly to agency queries; ensure your premises meets all compliance standards before inspection; and engage with your local community proactively if sensitive issues might arise.</p>

      <h2>Common Challenges in Auckland Liquor Licensing</h2>
      <p>The application process demands attention to detail and thorough understanding of regulatory requirements. Common challenges include:</p>
      <ul>
        <li><strong>Documentation Requirements:</strong> Incomplete applications cause the most frequent delays. Each document must be current, accurate, and formatted correctly.</li>
        <li><strong>Premises Compliance:</strong> Buildings must meet specific standards for fire safety, accessibility, sanitation, and structural integrity. Older Auckland venues sometimes require modifications.</li>
        <li><strong>Community Concerns:</strong> Applications in residential areas or locations with existing alcohol-related issues may face community opposition.</li>
        <li><strong>Understanding Regulations:</strong> Misinterpreting complex licensing rules can derail applications or create ongoing compliance problems.</li>
      </ul>
      <p>If your application is declined, you can request detailed reasons, address identified concerns and reapply, or appeal the decision to the Alcohol Regulatory and Licensing Authority (ARLA). Most declines result from correctable issues rather than fundamental unsuitability.</p>

      <h2>Ongoing Compliance and Licence Renewals</h2>
      <p>Obtaining your licence is just the beginning. Key ongoing obligations include:</p>
      <ul>
        <li><strong>Manager Certification:</strong> Ensure all duty managers maintain current LCQ qualifications, renewed every three years.</li>
        <li><strong>Host Responsibility:</strong> Implement and follow your approved host responsibility policy consistently and train all staff in responsible service practices.</li>
        <li><strong>Licence Conditions:</strong> Operate strictly within your approved hours and conditions. Any changes require formal variation applications.</li>
        <li><strong>Record Keeping:</strong> Maintain accurate records of managers, staff training, incident reports, and compliance activities.</li>
        <li><strong>Licence Renewals:</strong> On-licences and off-licences require renewal every one to three years depending on your licence class. Plan renewal applications well ahead of expiry dates.</li>
      </ul>

      <h2>Why Choose Professional Liquor Licensing Support?</h2>
      <p>Professional assistance offers substantial benefits including time efficiency, comprehensive regulatory expertise, higher success rates, and ongoing support for renewals, variations, and compliance matters.</p>
      <p>Liquor Concepts brings years of specialized experience helping Auckland businesses secure and maintain their alcohol licences. Our client-focused approach ensures personalized service tailored to your unique circumstances, whether you're launching your first venue or managing an established operation.</p>
      <p>Contact Liquor Concepts today to schedule a consultation and discuss your specific liquor licensing requirements. We're here to make the process as smooth and straightforward as possible.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    slug: "why-liquor-licenses-get-rejected-auckland",
    type: "blog",
    title: "Common Reasons Liquor Licenses Get Rejected by Auckland Council",
    keywords:
      "liquor licence rejected Auckland, liquor licence declined NZ, alcohol licence refusal reasons, Auckland Council liquor licence, liquor licence application mistakes NZ",
    excerpt:
      "Avoid costly delays! Learn why Auckland Council rejects liquor license applications — from incomplete documentation to community opposition — and how to get approval first time.",
    content: `
      <p><strong>Understanding why liquor license applications get rejected by Auckland Council can save New Zealand business owners significant time, money, and frustration.</strong> Common rejection reasons include incomplete documentation, inadequate host responsibility policies, premises compliance failures, and unsuitable applicants. Most refusal reasons are entirely avoidable with thorough preparation and professional support.</p>

      <h2>Incomplete or Inaccurate Application Documentation</h2>
      <p>The single most frequent reason for alcohol license refusals is submitting incomplete or inaccurate documentation. Auckland Council requires extensive paperwork demonstrating your legal right to operate, management qualifications, premises suitability, and operational plans. Common documentation errors include:</p>
      <ul>
        <li><strong>Missing Floor Plans:</strong> Applications must include detailed, to-scale floor plans showing the exact licensed area, entry and exit points, bar locations, and outdoor areas. Hand-drawn sketches or incomplete plans are insufficient.</li>
        <li><strong>Inadequate Evidence of Right to Occupy:</strong> You must prove legal authority to occupy the premises through lease agreements or landlord consent. Expired leases or missing signatures cause immediate problems.</li>
        <li><strong>Incomplete Manager Information:</strong> All designated managers require current Licence Controller Qualification (LCQ) certificates. Forgetting to include LCQ documentation results in application deficiencies.</li>
        <li><strong>Incorrect or Outdated Forms:</strong> Using old application forms or failing to complete all required fields leads to processing delays and potential rejection.</li>
      </ul>
      <p>Work systematically through Auckland Council's application checklist and allow adequate time for gathering documents. Consider engaging professional licensing consultants who can review your documentation before submission.</p>

      <h2>Inadequate or Non-Compliant Host Responsibility Policy</h2>
      <p>Every liquor license application must include a comprehensive host responsibility policy outlining how your business will minimize alcohol-related harm. Generic, copy-pasted policies that don't reflect your specific business operations raise immediate red flags. Common failures include:</p>
      <ul>
        <li><strong>Generic Templates Without Customization:</strong> Downloading a standard template without adapting it to your venue type and clientele suggests you haven't seriously considered harm minimization.</li>
        <li><strong>Insufficient Detail:</strong> Vague statements like "we will serve alcohol responsibly" lack the concrete procedures councils expect.</li>
        <li><strong>No Intoxication Management Procedures:</strong> Failing to explain how you'll identify, refuse service to, and manage intoxicated patrons demonstrates inadequate planning.</li>
        <li><strong>Missing Staff Training Protocols:</strong> Not explaining how you'll train staff in responsible service practices weakens your application considerably.</li>
      </ul>
      <p>Your host responsibility policy NZ should address staff training, age verification, intoxication management, service refusal protocols, food and non-alcoholic beverage availability, patron transportation options, and incident recording. A nightclub's policy will differ significantly from a family restaurant's approach — demonstrating this understanding shows genuine commitment to harm reduction.</p>

      <h2>Premises Compliance and Safety Failures</h2>
      <p>Your premises must meet stringent building code requirements, fire safety standards, and accessibility regulations. Inspectors physically visit your venue to verify compliance. Common premises-related rejection reasons include:</p>
      <ul>
        <li><strong>Fire Safety Deficiencies:</strong> Inadequate fire exits, blocked emergency egress, or missing fire suppression systems cause immediate compliance failures.</li>
        <li><strong>Building Code Violations:</strong> Structural issues, unsafe electrical installations, or unauthorized building modifications require rectification before approval.</li>
        <li><strong>Accessibility Problems:</strong> Venues must comply with accessibility standards for people with disabilities.</li>
        <li><strong>Inadequate Security Measures:</strong> High-risk venues like nightclubs need appropriate CCTV systems, adequate lighting, and trained security personnel.</li>
      </ul>
      <p>Schedule a pre-application inspection with Auckland Council's licensing inspector to identify potential issues early. Document all compliance measures thoroughly, including certificates, inspection reports, and professional assessments.</p>

      <h2>Unsuitable Applicants and Management Concerns</h2>
      <p>Auckland Council assesses whether applicants and designated managers are suitable to hold alcohol licenses. What makes an applicant unsuitable:</p>
      <ul>
        <li><strong>Criminal Convictions:</strong> Previous convictions for violence, dishonesty, drug offenses, or alcohol-related crimes raise serious concerns. While not automatic disqualifiers, such histories require careful explanation.</li>
        <li><strong>Previous Licensing Violations:</strong> Histories of breaching liquor license compliance obligations, such as serving minors or operating outside approved conditions, face heightened scrutiny.</li>
        <li><strong>Lack of Required Qualifications:</strong> Applicants and managers without LCQ certification cannot legally manage licensed premises — missing this fundamental requirement guarantees rejection.</li>
        <li><strong>Poor Track Record:</strong> Evidence of previous management failures or community harm associated with venues you've operated damages suitability assessments.</li>
      </ul>
      <p>Be transparent about any matters that might raise concerns, providing context and evidence of changed circumstances. Hiding problematic history typically worsens outcomes when information surfaces during background checks.</p>

      <h2>Community Opposition and Objections</h2>
      <p>During the public notification period, community members can file objections to your application. Sustained, evidence-based opposition creates significant hurdles and often triggers formal hearings. Common grounds for opposition include:</p>
      <ul>
        <li><strong>Proximity to Schools or Community Facilities:</strong> Applications near schools or churches often attract objections based on protecting vulnerable populations.</li>
        <li><strong>Existing Alcohol-Related Issues:</strong> If your proposed location already experiences alcohol-related crime or antisocial behavior, community groups may oppose additional licensed venues.</li>
        <li><strong>Operating Hours and Noise Concerns:</strong> Late-night trading hours in residential areas frequently trigger neighborhood opposition.</li>
        <li><strong>Density of Licensed Premises:</strong> Areas with high concentrations of existing licensed premises may face opposition to further licenses based on cumulative harm concerns.</li>
      </ul>
      <p>Engage proactively with your local community before applying. Attending community board meetings and addressing concerns early builds goodwill and reduces formal opposition. If objections arise, work constructively with objectors — many concerns can be resolved through good-faith negotiation before hearings.</p>

      <h2>Insufficient Regard for Local Alcohol Policies</h2>
      <p>Auckland Council operates under a Local Alcohol Policy (LAP) that establishes specific rules within different areas — restricting trading hours, limiting new off-licences in certain neighborhoods, or imposing additional conditions on high-risk premises. Applications inconsistent with the LAP face rejection or require compelling justification.</p>
      <p>Research Auckland's Local Alcohol Policy thoroughly before designing your business model. If your proposed operations conflict with LAP provisions, prepare robust arguments explaining why an exception serves the licensing objectives. Professional liquor licensing consultants Auckland bring detailed knowledge of local policies across different areas.</p>

      <h2>Poor Understanding of Licensing Objectives</h2>
      <p>New Zealand's alcohol legislation prioritizes four key objectives: safe and responsible sale and supply of alcohol; minimizing harm from excessive consumption; ensuring licensed premises operate appropriately for their character and location; and ensuring only suitable persons hold licenses.</p>
      <p>Throughout your application, explicitly reference how your proposed operations support each objective. Don't assume councils will infer this — make the connections clear and specific. This framework should inform your entire application approach, from your host responsibility policy to your condition proposals.</p>

      <h2>What Happens If Your Application Gets Rejected?</h2>
      <p>If Auckland Council rejects your application, several options exist:</p>
      <ul>
        <li><strong>Request Detailed Reasons:</strong> Understanding specific rejection grounds is essential for addressing issues.</li>
        <li><strong>Appeal to ARLA:</strong> The Alcohol Regulatory and Licensing Authority hears appeals against District Licensing Committee decisions within specific timeframes.</li>
        <li><strong>Revise and Reapply:</strong> Address identified concerns and submit a new application incorporating improvements.</li>
        <li><strong>Seek Professional Assistance:</strong> Engage experienced consultants to strengthen your position and improve approval prospects.</li>
      </ul>
      <p>While disappointing, rejections often identify genuine issues requiring attention. Addressing these properly strengthens both your application and your overall compliance framework.</p>

      <h2>How Liquor Concepts Prevents Rejections</h2>
      <p>Liquor Concepts specializes in helping Auckland businesses navigate the licensing process and avoid common pitfalls. Our services include complete application review and preparation, customized host responsibility policy development, premises compliance guidance, community engagement support, and formal hearing representation when necessary.</p>
      <p>Contact Liquor Concepts today to schedule a consultation and discuss how we can help you avoid rejection pitfalls while securing your liquor license efficiently.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    slug: "types-of-alcohol-licences-auckland",
    type: "blog",
    title: "Types of Alcohol Licences in Auckland: Which One Do You Need?",
    keywords:
      "types of alcohol licences NZ, on-licence off-licence Auckland, club licence NZ, special licence NZ, liquor licence types New Zealand, which liquor licence do I need",
    excerpt:
      "Confused about alcohol licence types in Auckland? Learn the difference between on-licences, off-licences, club licences, and special licences — and which one suits your business.",
    content: `
      <p><strong>Choosing the right alcohol licence is crucial for legal compliance and business success in Auckland.</strong> New Zealand's licensing framework offers several distinct licence types—on-licences, off-licences, club licences, and special licences—each designed for specific business models and operational requirements.</p>

      <h2>Understanding New Zealand's Alcohol Licensing Framework</h2>
      <p>New Zealand's alcohol licensing system operates under the Sale and Supply of Alcohol Act 2012, which establishes clear categories for different business operations. The framework balances commercial opportunities with community safety, ensuring businesses can operate profitably while minimizing alcohol-related harm.</p>
      <p>For Auckland business owners, selecting the correct liquor licence type from the outset prevents costly mistakes, operational restrictions, and potential compliance issues. Each licence category carries specific permissions, limitations, and obligations that fundamentally shape how you can serve or sell alcohol.</p>
      <p>The District Licensing Committee Auckland evaluates all applications based on licensing objectives, community considerations, and your ability to operate responsibly within the chosen licence framework.</p>

      <h2>On-Licence: For Venues Serving Alcohol On-Premises</h2>
      <p>An on-licence NZ authorizes businesses to sell alcohol for consumption on the licensed premises. This licence type suits restaurants, bars, cafés, pubs, hotels, nightclubs, and any venue where customers enjoy drinks on-site.</p>
      <p>On-licences offer flexibility through various endorsements and conditions that customize operations to your specific business model. Common on-licence operations include:</p>
      <ul>
        <li><strong>Restaurants and Cafés:</strong> Typically emphasize responsible service alongside food. Many operate under conditions requiring alcohol to be served primarily with meals.</li>
        <li><strong>Bars and Pubs:</strong> Traditional drinking establishments where alcohol is the primary focus. These venues require robust host responsibility measures.</li>
        <li><strong>Hotels and Accommodation:</strong> May cover restaurants, bars, room service, and mini-bars, with each area potentially requiring separate licensing considerations.</li>
        <li><strong>Entertainment Venues:</strong> Nightclubs and music venues face heightened scrutiny due to higher-risk operating environments.</li>
        <li><strong>BYO Endorsements:</strong> Some on-licences include "bring your own" endorsements allowing customers to bring their own alcohol for on-premises consumption.</li>
      </ul>
      <p>Obtaining an on-licence requires designated managers holding current Licence Controller Qualifications (LCQ), a comprehensive host responsibility policy, premises meeting building code and fire safety standards, detailed floor plans, and a public notification process.</p>

      <h2>Off-Licence: For Takeaway Alcohol Sales</h2>
      <p>An off-licence permits businesses to sell alcohol for consumption off the premises. This licence type covers bottle shops, supermarkets, grocery stores, wine retailers, breweries with retail operations, and online alcohol retailers.</p>
      <p>Off-licence categories include:</p>
      <ul>
        <li><strong>Remote Sales Off-Licences:</strong> Enable online alcohol sales with home delivery services. These require robust age verification systems and responsible delivery protocols.</li>
        <li><strong>Retail Off-Licences:</strong> Traditional bottle shops and liquor stores operating from physical premises.</li>
        <li><strong>Supermarket and Grocery Off-Licences:</strong> Large retailers selling alcohol alongside general groceries, operating under specific restrictions around alcohol display and placement.</li>
        <li><strong>Brewery, Winery, and Distillery Off-Licences:</strong> Producers selling their own products directly to consumers, often complementing on-site tasting rooms.</li>
      </ul>
      <p>Auckland's Local Alcohol Policy may restrict new off-licence Auckland applications in certain areas. Off-licence applications require at least one LCQ-certified manager on duty, a host responsibility policy focused on retail concerns, and age verification systems and staff training.</p>

      <h2>Club Licence: For Members' Organizations</h2>
      <p>Club licences authorize chartered clubs and member-based organizations to sell or supply alcohol to members and authorized guests. This licence category serves sports clubs, RSAs, social clubs, golf clubs, and other member-focused organizations.</p>
      <p>Key characteristics of club licences:</p>
      <ul>
        <li><strong>Membership Requirements:</strong> Only genuine members and their guests can purchase or consume alcohol. Clubs must maintain proper membership records.</li>
        <li><strong>Non-Commercial Nature:</strong> Clubs operate fundamentally as non-profit community organizations rather than commercial businesses.</li>
        <li><strong>Varied Operations:</strong> Club licences accommodate diverse operating models from sports clubs with bar facilities to social clubs hosting regular events.</li>
      </ul>
      <p>While club licences may seem simpler than commercial licences, they require careful attention to membership management and appropriate controls preventing misuse.</p>

      <h2>Special Licence: For Temporary Events and Functions</h2>
      <p>A special licence provides temporary authorization to sell or supply alcohol at one-off events such as weddings, festivals, fundraisers, corporate functions, concerts, community celebrations, and markets. These short-term licences enable alcohol service for specific occasions without requiring permanent licensing.</p>
      <p>You need a special licence for:</p>
      <ul>
        <li><strong>Private Functions:</strong> Weddings, birthday parties, and anniversary celebrations held at unlicensed venues where alcohol will be sold.</li>
        <li><strong>Public Events:</strong> Festivals, concerts, markets, and community gatherings where alcohol sales occur.</li>
        <li><strong>Fundraising Events:</strong> Community groups, charities, and sports clubs hosting fundraisers with alcohol sales.</li>
        <li><strong>Corporate Events:</strong> Business functions, product launches, and corporate celebrations at unlicensed venues.</li>
      </ul>
      <p>Applications should be submitted at least 20 working days before the event. Special liquor licence NZ applications cost significantly less than permanent licences, typically ranging from $63 to $300 depending on event scale and duration.</p>

      <h2>Which Licence Type Do You Need?</h2>
      <p>Selecting the right types of liquor licence depends on several key factors:</p>
      <ul>
        <li><strong>Primary Business Activity:</strong> Are you primarily serving meals, running a bar, operating retail sales, or hosting events?</li>
        <li><strong>Consumption Location:</strong> Will customers consume alcohol on your premises or take it away? This single factor differentiates on-licences from off-licences.</li>
        <li><strong>Operational Timeline:</strong> Do you need permanent authorization or temporary coverage for specific events?</li>
        <li><strong>Organizational Structure:</strong> Are you a commercial business or a member-based organization?</li>
      </ul>
      <p>Common business scenarios:</p>
      <ul>
        <li><strong>Opening a Restaurant:</strong> You'll need an on-licence, potentially with BYO authorization.</li>
        <li><strong>Launching a Bottle Shop:</strong> An off-licence is essential, with potential remote sales endorsement for delivery services.</li>
        <li><strong>Operating a Brewery or Winery:</strong> You'll likely need both an on-licence for tasting room operations and an off-licence for retail product sales.</li>
        <li><strong>Running a Sports Club:</strong> A club licence suits member-based operations, with special licences for public fundraising events.</li>
        <li><strong>Hotel or Accommodation:</strong> Complex operations may require multiple on-licences covering different areas.</li>
      </ul>

      <h2>Application Process and Costs</h2>
      <p>All liquor licence Auckland applications share common elements: manager LCQ qualifications, a host responsibility policy, premises compliance, public notification, and review by Police, Medical Officers of Health, and licensing inspectors.</p>
      <p>Permanent licences (on-licences, off-licences, club licences) typically process within 30–60 working days for unopposed applications. Special licences process faster, usually within 10–15 working days. Application fees for permanent licences range from several hundred to over one thousand dollars, while special licences typically cost $63–$300.</p>
      <p>Beyond council fees, budget for LCQ training ($200–$400 per person), public notification advertising ($200–$500), and professional consultation services.</p>

      <h2>Need Expert Help?</h2>
      <p>Choosing the correct licence type and navigating the application process requires careful consideration and detailed regulatory knowledge. Liquor Concepts specializes in helping Auckland businesses select appropriate licence types and secure approvals efficiently.</p>
      <p>Whether you're opening your first licensed premises, expanding existing operations, or planning special events, our team brings the expertise necessary to navigate Auckland's licensing environment confidently. Contact Liquor Concepts today to discuss which licence type suits your business needs.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    slug: "new-year-compliance-checklist-licensed-premises",
    type: "blog",
    title: "New Year Compliance Checklist for Licensed Premises",
    keywords:
      "liquor licence compliance NZ, licensed premises checklist, duty manager certificate renewal NZ, host responsibility policy NZ, alcohol licensing obligations",
    excerpt:
      "Start the year strong: key liquor licensing tasks every venue should review. A practical checklist every hospitality business should complete.",
    content: `
      <p><strong>Start the year strong: key liquor licensing tasks every venue should review</strong></p>
      <p>Running a licensed premises in New Zealand means staying on top of multiple compliance obligations under the Sale and Supply of Alcohol Act 2012. January is the perfect time to reset, refresh, and ensure your venue is legally aligned for the year ahead.</p>
      <p>Here's a practical start-of-year liquor licensing checklist every hospitality business should complete:</p>

      <b><h2>1. Review your liquor licence conditions</h2></b>
      <p>Check your on-licence or off-licence conditions and make sure your operations still align with them — especially layout, designated areas, hours, noise controls, CCTV, and outdoor dining setups.</p>

      <b><h2>2. Confirm duty manager certificates are up to date</h2></b>
      <p>Expired Manager's Certificates (MCs) can put your business at risk. Review expiry dates, renew early, and ensure you always have an appointed and on-duty manager with a valid certificate.</p>

      <b><h2>3. Refresh host responsibility practices</h2></b>
      <p>Update your Host Responsibility Policy, check low-alcohol and non-alcoholic options, review water accessibility, and ensure all staff understand intoxication indicators.</p>

      <b><h2>4. Audit signage and training</h2></b>
      <p>Make sure all required signage (licence summary, minors, intoxication, host responsibility) is current and clearly visible. Reinforce training for new staff who may be unfamiliar with NZ liquor laws.</p>

      <b><h2>5. Check your incident register & staff briefings</h2></b>
      <p>Ensure all incidents have been recorded and that staff understand when entries are required.</p>

      <p>Starting the year organised protects your licence, reduces risk during summer events, and ensures you're fully compliant with New Zealand's alcohol licensing requirements.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2025-01-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    slug: "special-licences-what-you-need-to-know-event-season",
    type: "blog",
    title: "Special Licences: What You Need to Know This Event Season",
    keywords:
      "special licence NZ, event alcohol licence Auckland, temporary liquor licence NZ, special licence application, one-off event alcohol licence",
    excerpt:
      "Avoid delays and mistakes when planning events that involve alcohol. Here's everything you need to know about special licence applications.",
    content: `
      <p><strong>Avoid delays and mistakes when planning events that involve alcohol</strong></p>

      <p>February is packed with festivals, concerts, weddings, and community events — and that means navigating special licences. Many organisers get caught out on timeframes or misunderstand when a special licence is actually required.</p>

      <p>Here's everything you need to know:</p>

      <b><h2>When you need a special licence</h2></b>
      <p>You must apply if:</p>
      <ul>
        <li>your event is outside normal trading hours</li>
        <li>alcohol will be sold somewhere that doesn't hold a licence</li>
        <li>a private venue is hosting a ticketed event</li>
        <li>you want to extend licensed hours for a one-off occasion</li>
      </ul>

      <b><h2>Key timelines</h2></b>
      <p>Most councils require at least 20 working days' notice. Many require up to 25–30 days during peak season. Late applications are often declined.</p>

      <b><h2>Common mistakes:</h2></b>
      <ul>
        <li>Incorrect venue plans</li>
        <li>No certified duty manager for larger events</li>
        <li>Failing to meet host responsibility requirements</li>
        <li>Not providing security details or alcohol management plans</li>
      </ul>

      <p>A well-prepared special licence application ensures smooth approval and compliance with NZ alcohol laws — especially during the busiest events month of the year.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2025-02-01",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 1,
    slug: "understanding-new-zealand-liquor-licensing-framework",
    type: "blog",
    title: "Understanding the New Zealand Liquor Licensing Framework",
    keywords:
      "NZ liquor licensing framework, Sale and Supply of Alcohol Act 2012, liquor licensing New Zealand, liquor licence types NZ, District Licensing Committee NZ",
    excerpt:
      "A comprehensive guide to understanding how liquor licensing works in New Zealand, including the different types of licenses and when you need them.",
    content: `
      <h2>Introduction to Liquor Licensing in New Zealand</h2>
      <p>New Zealand's liquor licensing system is governed by the Sale and Supply of Alcohol Act 2012. This legislation sets out the framework for how alcohol can be sold and supplied in New Zealand, with the aim of minimising alcohol-related harm while also recognising the legitimate interests of businesses.</p>
      
      <h2>Types of Licenses</h2>
      <p>There are several types of liquor licenses available in New Zealand:</p>
      <ul>
        <li><strong>On-License:</strong> Allows the sale and consumption of alcohol on the licensed premises (e.g., restaurants, bars, hotels)</li>
        <li><strong>Off-License:</strong> Allows the sale of alcohol for consumption off the premises (e.g., bottle stores, supermarkets)</li>
        <li><strong>Club License:</strong> For clubs where alcohol is sold to members and guests</li>
        <li><strong>Special License:</strong> For one-off events or occasions</li>
      </ul>
      
      <h2>The Application Process</h2>
      <p>Applying for a liquor license involves several steps:</p>
      <ol>
        <li>Determining the appropriate license type for your business</li>
        <li>Ensuring you meet all eligibility requirements</li>
        <li>Completing the application forms</li>
        <li>Paying the required fees</li>
        <li>Public notification of your application</li>
        <li>Assessment by the District Licensing Committee</li>
      </ol>
      
      <h2>How We Can Help</h2>
      <p>At Liquor Concepts, we've been helping businesses navigate the liquor licensing process since 2000. Our experienced consultants can guide you through every step of the process, ensuring your application has the best chance of success.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    slug: "january-2024-newsletter-industry-updates",
    type: "newsletter",
    title: "January 2024 Newsletter: Industry Updates",
    keywords:
      "liquor licensing news NZ 2024, liquor licence newsletter, NZ licensing updates, liquor licence renewal dates, licensing compliance tips",
    excerpt:
      "Stay up to date with the latest changes in liquor licensing regulations, upcoming deadlines, and tips for maintaining compliance.",
    content: `
      <h2>Welcome to Our January 2024 Newsletter</h2>
      <p>Happy New Year from the Liquor Concepts team! We hope you had a restful holiday season. As we kick off 2024, we wanted to share some important updates and reminders for the year ahead.</p>
      
      <h2>Key Dates to Remember</h2>
      <p>Make sure to mark these important dates in your calendar:</p>
      <ul>
        <li>License renewal applications should be submitted at least 20 working days before expiry</li>
        <li>Manager's Certificate renewals are due every three years</li>
        <li>Annual fee payments are due on your anniversary date</li>
      </ul>
      
      <h2>Regulatory Updates</h2>
      <p>There have been some changes to licensing requirements that you should be aware of. Contact us if you have any questions about how these changes might affect your business.</p>
      
      <h2>Compliance Tips</h2>
      <p>Start the year right by reviewing your:</p>
      <ul>
        <li>Host responsibility policies</li>
        <li>Staff training records</li>
        <li>Signage requirements</li>
        <li>Incident register</li>
      </ul>
      
      <h2>Get in Touch</h2>
      <p>If you have any questions or need assistance with your licensing matters, don't hesitate to contact us. We're here to help!</p>
    `,
    author: "Liquor Concepts Team",
    date: "2024-01-01",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    slug: "how-to-prepare-for-your-license-renewal",
    type: "blog",
    title: "How to Prepare for Your License Renewal",
    keywords:
      "liquor licence renewal NZ, how to renew liquor licence, Auckland licence renewal, liquor licence renewal documents, licence renewal preparation NZ",
    excerpt:
      "License renewals don't have to be stressful. Here's our step-by-step guide to preparing for your renewal application.",
    content: `
      <h2>Planning Ahead for Your License Renewal</h2>
      <p>Your liquor license renewal is an important process that requires careful preparation. By planning ahead and gathering the necessary documentation, you can ensure a smooth renewal process.</p>
      
      <h2>When to Start</h2>
      <p>We recommend starting your renewal preparation at least 3 months before your license expiry date. This gives you plenty of time to:</p>
      <ul>
        <li>Gather all required documents</li>
        <li>Address any compliance issues</li>
        <li>Complete any necessary training updates</li>
        <li>Prepare your application</li>
      </ul>
      
      <h2>Documents You'll Need</h2>
      <p>Make sure you have the following ready:</p>
      <ul>
        <li>Current license details</li>
        <li>Updated floor plans (if there have been any changes)</li>
        <li>Staff training records</li>
        <li>Host responsibility policy</li>
        <li>Building compliance documentation</li>
      </ul>
      
      <h2>Common Issues to Address</h2>
      <p>Before submitting your renewal, check that you have:</p>
      <ul>
        <li>No outstanding fees or infringements</li>
        <li>All required signage displayed correctly</li>
        <li>Up-to-date manager's certificates for duty managers</li>
        <li>Current food safety records (if applicable)</li>
      </ul>
      
      <h2>Let Us Help</h2>
      <p>At Liquor Concepts, we can manage your entire renewal process, ensuring nothing is missed and your application is submitted on time.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2023-12-20",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    slug: "managers-certificate-what-you-need-to-know",
    type: "blog",
    title: "Manager's Certificate: What You Need to Know",
    keywords:
      "managers certificate NZ, LCQ qualification New Zealand, duty manager certificate NZ, how to get managers certificate NZ, Licence Controller Qualification",
    excerpt:
      "Everything you need to know about obtaining and maintaining your Manager's Certificate in New Zealand.",
    content: `
      <h2>What is a Manager's Certificate?</h2>
      <p>A Manager's Certificate is a qualification required for anyone who wants to be a duty manager at licensed premises in New Zealand. It demonstrates that the holder has the knowledge and skills necessary to manage the sale and supply of alcohol responsibly.</p>
      
      <h2>Who Needs One?</h2>
      <p>You need a Manager's Certificate if you want to:</p>
      <ul>
        <li>Be a duty manager at a licensed premises</li>
        <li>Supervise the sale of alcohol</li>
        <li>Make decisions about serving alcohol</li>
      </ul>
      
      <h2>Requirements</h2>
      <p>To obtain a Manager's Certificate, you must:</p>
      <ul>
        <li>Be at least 20 years old</li>
        <li>Pass the Licence Controller Qualification (LCQ)</li>
        <li>Demonstrate experience in the hospitality industry</li>
        <li>Be of good character</li>
      </ul>
      
      <h2>The LCQ Qualification</h2>
      <p>The Licence Controller Qualification is a nationally recognised qualification that covers:</p>
      <ul>
        <li>New Zealand liquor laws</li>
        <li>Host responsibility</li>
        <li>Identifying intoxication</li>
        <li>Managing difficult situations</li>
      </ul>
      
      <h2>Renewal Requirements</h2>
      <p>Manager's Certificates are valid for 3 years. To renew, you need to demonstrate ongoing training and compliance with licensing requirements.</p>
      
      <h2>How We Can Help</h2>
      <p>We can guide you through the Manager's Certificate application process and help ensure your application is successful.</p>
    `,
    author: "Liquor Concepts Team",
    date: "2023-12-10",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    slug: "december-2023-newsletter-year-in-review",
    type: "newsletter",
    title: "December 2023 Newsletter: Year in Review",
    keywords:
      "liquor licensing 2023 NZ, liquor licence newsletter, NZ licensing year in review, alcohol licensing changes NZ, liquor licence compliance updates",
    excerpt:
      "Looking back at the key changes and developments in liquor licensing throughout 2023.",
    content: `
      <h2>2023 Year in Review</h2>
      <p>As we come to the end of another year, we wanted to take a moment to reflect on the key developments in liquor licensing throughout 2023.</p>
      
      <h2>Industry Changes</h2>
      <p>This year has seen several important developments in the liquor licensing landscape:</p>
      <ul>
        <li>Updated compliance requirements for licensed premises</li>
        <li>Changes to application processes in some regions</li>
        <li>New guidelines for special license events</li>
        <li>Enhanced focus on harm minimisation</li>
      </ul>
      
      <h2>Our Achievements</h2>
      <p>At Liquor Concepts, we're proud of what we've accomplished this year:</p>
      <ul>
        <li>Successfully processed hundreds of license applications</li>
        <li>Helped numerous businesses achieve compliance</li>
        <li>Expanded our range of consulting services</li>
        <li>Continued to provide expert guidance to our clients</li>
      </ul>
      
      <h2>Looking Ahead to 2024</h2>
      <p>As we move into the new year, we're excited about the opportunities ahead. We'll continue to stay on top of any regulatory changes and keep you informed about developments that may affect your business.</p>
      
      <h2>Thank You</h2>
      <p>Thank you for your continued trust in Liquor Concepts. We look forward to working with you in 2024!</p>
    `,
    author: "Liquor Concepts Team",
    date: "2023-12-01",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60",
  },
];

const InsightDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const insight = sampleInsights.find((item) => item.slug === slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-NZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!insight) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-6 py-32 text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/insights")}
              className="bg-gradient-gold hover:opacity-90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${insight.title} | Liquor Concepts NZ`}
        description={insight.excerpt}
        keywords={insight.keywords}
        canonicalUrl={`/insights/${insight.slug}`}
        ogImage={insight.image}
        ogType={insight.type === "blog" ? "article" : "website"}
        article={
          insight.type === "blog"
            ? {
                publishedTime: insight.date,
                author: insight.author,
                section: "Liquor Licensing",
              }
            : undefined
        }
        structuredData={{
          "@context": "https://schema.org",
          "@type": insight.type === "blog" ? "BlogPosting" : "Article",
          headline: insight.title,
          description: insight.excerpt,
          image: insight.image,
          datePublished: insight.date,
          author: {
            "@type": "Organization",
            name: insight.author,
            url: "https://liquorconcepts.co.nz",
          },
          publisher: {
            "@type": "Organization",
            name: "Liquor Concepts",
            url: "https://liquorconcepts.co.nz",
            logo: {
              "@type": "ImageObject",
              url: "https://liquorconcepts.co.nz/logo.png",
            },
          },
          url: `https://liquorconcepts.co.nz/insights/${insight.slug}`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://liquorconcepts.co.nz/insights/${insight.slug}`,
          },
        }}
      />
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <Button
              variant="outline"
              onClick={() => navigate("/insights")}
              className="mb-8 border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>

            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge
                className={`mb-6 px-4 py-1.5 text-sm ${
                  insight.type === "blog"
                    ? "bg-gradient-gold text-primary-foreground border-0"
                    : "bg-secondary/90 text-secondary-foreground border-0"
                }`}
              >
                {insight.type === "blog" ? (
                  <>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Blog Post
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Newsletter
                  </>
                )}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                {insight.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  {formatDate(insight.date)}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  {insight.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  {insight.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <article
              className="max-w-4xl mx-auto prose prose-lg
                prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: insight.content }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <CardContent className="relative p-10 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Expert Assistance
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Help with Your Liquor License?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Our experienced consultants are here to help you navigate the
                  licensing process with confidence.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightDetail;
