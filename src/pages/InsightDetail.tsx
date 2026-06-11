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
      id: 13,
      slug: "bar-managers-certificate-nz-step-by-step-guide",
      type: "blog",
      title: "Bar Manager's Certificate NZ: Step-by-Step Guide",
      excerpt: "Learn how to get your bar manager's certificate in NZ. Step-by-step guide covering LCQ, eligibility, and application. Get expert help from Liquor Concepts today.",
      content: `<article style="max-width: 860px; margin: 48px auto; padding: 48px 56px; background: #ffffff; box-shadow: 0 2px 24px rgba(0,0,0,0.07); border-radius: 4px;"><p style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 40px;">
      Getting your bar manager&apos;s licence in NZ involves completing the Licence Controller Qualification (LCQ), meeting eligibility requirements, and lodging a Manager&apos;s Certificate application with your local District Licensing Committee. This guide walks you through every step clearly, so you know exactly what to expect and how to avoid common delays.
    </p><p style="font-size: 16px; margin-bottom: 16px;">If you&apos;re working in a bar, restaurant, or any licensed venue in New Zealand, there&apos;s one qualification that unlocks your ability to legally manage the floor: the Manager&apos;s Certificate. It&apos;s a legal requirement under the <a href="https://www.legislation.govt.nz/act/public/2012/0120/latest/DLM3339333.html" style="color: #b8860b; text-decoration: underline;">Sale and Supply of Alcohol Act 2012</a>, and without it, you cannot act as a duty manager — no matter how much experience you have.</p><p style="font-size: 16px; margin-bottom: 16px;">The good news? The process is straightforward when you know what&apos;s involved. This guide breaks it down step by step, so whether you&apos;re a hospitality professional ready to step up or a business owner helping your team get certified, you&apos;ll know exactly what to do.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">What Is a Bar Manager&apos;s Certificate in NZ?</h2><p style="font-size: 16px; margin-bottom: 16px;">A Manager&apos;s Certificate — commonly referred to as a bar manager&apos;s certificate NZ or duty manager certificate — is the official authorisation that allows a person to manage licensed premises in New Zealand. It is issued by your local District Licensing Committee (DLC) and is legally required under the Sale and Supply of Alcohol Act 2012.</p><p style="font-size: 16px; margin-bottom: 16px;">Under the Act, every licensed premises — whether it&apos;s an on-licence bar, off-licence bottle store, or club licence — must have a certified manager on duty at all times when alcohol is being sold. The manager&apos;s name must also be displayed prominently inside the premises while they&apos;re on duty.</p><p style="font-size: 16px; margin-bottom: 16px;">A Manager&apos;s Certificate is fully portable. Once issued, it allows you to work as a duty manager at any licensed venue across New Zealand — not just the premises where you gained your experience.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Who Needs a Bar Manager&apos;s Licence in NZ?</h2><p style="font-size: 16px; margin-bottom: 16px;">You need a Manager&apos;s Certificate if you are:</p><ul style="font-size: 16px; padding-left: 24px; margin-bottom: 20px; line-height: 2;"><li style="margin-bottom: 6px;">Working as a duty manager at a bar, pub, restaurant, hotel, or club</li><li style="margin-bottom: 6px;">Managing a bottle store or off-licence premises</li><li style="margin-bottom: 6px;">Stepping into a management role at any venue where alcohol is sold or supplied to the public</li><li style="margin-bottom: 6px;">A business owner who will personally manage their own licensed premises</li></ul><p style="font-size: 16px; margin-bottom: 16px;">If you&apos;re a licensee or business owner, you don&apos;t automatically have the right to manage your own premises — you still need to hold a valid Manager&apos;s Certificate or appoint someone who does. This is a common misconception that catches new operators off guard.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Step-by-Step: How to Get Your Manager&apos;s Certificate NZ</h2><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 1: Meet the Basic Eligibility Requirements</h3><p style="font-size: 16px; margin-bottom: 14px;">Before you begin the application process, you must meet the following criteria:</p><ul style="font-size: 16px; padding-left: 24px; margin-bottom: 20px; line-height: 2;"><li style="margin-bottom: 6px;">Be 20 years of age or older</li><li style="margin-bottom: 6px;">Have no relevant criminal convictions (check the Clean Slate Act for guidance)</li><li style="margin-bottom: 6px;">Be currently employed at, or have an offer of employment from, a licensed premises</li><li style="margin-bottom: 6px;">Have at least 6 months of relevant experience working in a licensed premises in New Zealand (some councils may accept less in limited circumstances)</li></ul><p style="font-size: 16px; margin-bottom: 16px;">If you don&apos;t yet have 6 months of experience, you can still begin your LCQ training — you just won&apos;t be able to lodge your Manager&apos;s Certificate application until you&apos;ve met the experience threshold.</p><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 2: Complete Your <a href="https://liquorconcepts.co.nz/courses/" style="color: #b8860b; text-decoration: underline;">Licence Controller Qualification NZ</a> (LCQ)</h3><p style="font-size: 16px; margin-bottom: 14px;">This is the mandatory training requirement. The Licence Controller Qualification NZ — known as the LCQ — is a nationally recognised qualification issued by ServiceIQ. It is made up of two NZQA unit standards:</p><ul style="font-size: 16px; padding-left: 24px; margin-bottom: 16px; line-height: 2;"><li style="margin-bottom: 6px;"><strong>Unit Standard 4646</strong> — Demonstrate knowledge of the Sale and Supply of Alcohol Act 2012</li><li style="margin-bottom: 6px;"><strong>Unit Standard 16705</strong> — Demonstrate knowledge of host responsibility requirements as a duty manager of licensed premises</li></ul><p style="font-size: 16px; margin-bottom: 16px;">The LCQ can be completed online at your own pace or through an in-person course with an accredited training provider. Most people complete it in approximately 8 hours, though you may take longer depending on your existing knowledge of the Act.</p><p style="font-size: 16px; margin-bottom: 16px;">Once you&apos;ve passed both unit standards, your training provider reports your results to NZQA. You then apply to ServiceIQ for your LCQ certificate — this is the physical document you&apos;ll need when lodging your Manager&apos;s Certificate application.</p><p style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 24px;"><strong>Important:</strong> Keep your LCQ certificate safe. Councils will not issue your Manager&apos;s Certificate until they receive a copy of it.</p><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 3: Gather Your Supporting Documents</h3><p style="font-size: 16px; margin-bottom: 20px;">Before lodging your managers certificate application NZ, you&apos;ll need to prepare the following:</p><div style="overflow-x: auto; margin-bottom: 28px;"><table style="width: 100%; border-collapse: collapse; font-family: Helvetica Neue, Arial, sans-serif; font-size: 14px; box-shadow: 0 1px 8px rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;"><thead><tr style="background-color: #2c2c2c; color: #ffffff;"><th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Document</th><th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Details</th></tr></thead><tbody><tr style="background-color: #fff;"><td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Completed application form</td><td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Available from your local council or downloadable online</td></tr><tr style="background-color: #fafaf8;"><td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Copy of your LCQ certificate</td><td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Issued by ServiceIQ upon completion of unit standards 4646 &amp; 16705</td></tr><tr style="background-color: #fff;"><td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Photo ID</td><td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Passport, driver&apos;s licence, or HANZ 18+ card</td></tr><tr style="background-color: #fafaf8;"><td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Employer reference letter</td><td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">From your current licensee confirming your employment, training, experience, and character</td></tr><tr style="background-color: #fff;"><td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Police questionnaire</td><td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Standard form included with the application</td></tr><tr style="background-color: #fafaf8;"><td style="padding: 13px 18px; font-weight: 600; color: #b8860b;">Work visa (if applicable)</td><td style="padding: 13px 18px; color: #444;">Required for non-NZ residents</td></tr></tbody></table></div><p style="font-size: 16px; margin-bottom: 16px;">Make sure your employer reference letter is specific — it should outline your dates of employment, the nature of your role, and confirmation that you&apos;ve been involved in the sale and supply of alcohol.</p><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 4: Lodge Your Application with the District Licensing Committee</h3><p style="font-size: 16px; margin-bottom: 16px;">Once your documents are in order, you submit your application — along with the relevant fee — to your local District Licensing Committee (DLC). The DLC then forwards your application to the NZ Police and a Licensing Inspector for their reports.</p><p style="font-size: 16px; margin-bottom: 16px;">The police have 15 working days to respond. If there are no objections, your certificate is typically issued without the need for a formal hearing.</p><p style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 24px;"><strong>One key thing to watch:</strong> The DLC will not process applications during the Christmas and New Year period. If you need your certificate approved before the holiday season, submit well in advance — ideally by early November.</p><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 5: Attend Your Licensing Inspector Interview</h3><p style="font-size: 16px; margin-bottom: 16px;">In most regions, the Licensing Inspector will invite you to a formal interview to assess your knowledge of the Sale and Supply of Alcohol Act 2012 and the specific conditions of your licensed premises. Some councils send written questions instead — but either way, you should revise your LCQ knowledge before this stage.</p><p style="font-size: 16px; margin-bottom: 16px;">This is where thorough preparation really pays off. Knowing your premises&apos; licence conditions and being able to speak confidently about host responsibility will make a strong impression.</p><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 32px; margin-bottom: 12px;">Step 6: Receive Your Manager&apos;s Certificate</h3><p style="font-size: 16px; margin-bottom: 16px;">Your first Manager&apos;s Certificate is issued for a <strong>12-month period</strong>. This initial period exists to allow the DLC to assess how you perform in the role before granting a longer-term certificate.</p><p style="font-size: 16px; margin-bottom: 16px;">At renewal — provided there are no objections from Police or the Licensing Inspector — your certificate is renewed for a <strong>three-year period</strong>. Renewals must be submitted before your certificate expires. If it lapses, you&apos;ll be required to apply as a new applicant, not a renewal.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">What Happens If Your Certified Manager Is Unavailable?</h2><p style="font-size: 16px; margin-bottom: 16px;">Life happens — managers get sick, resign, or take leave. Under the Act, a licensee can appoint a temporary or acting manager for short periods. However, the DLC and Police must be notified within 48 hours of the appointment. The temporary manager must also apply for their own Manager&apos;s Certificate within 2 working days if they intend to continue in the role.</p><p style="font-size: 16px; margin-bottom: 16px;">This is an area where many licensees get caught out. Having a second certified manager on your team is strongly recommended to avoid compliance issues during unexpected absences.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Do I Need a Separate Licence to Own a Bar in NZ?</h2><p style="font-size: 16px; margin-bottom: 16px;">Yes. The Manager&apos;s Certificate and the liquor licence for the premises are two separate things. If you&apos;re opening a bar, restaurant, or any venue where alcohol will be sold, you&apos;ll need to apply for the appropriate licence — whether that&apos;s an on-licence, off-licence, club licence, or special licence — in addition to having a certified manager in place.</p><p style="font-size: 16px; margin-bottom: 16px;">In fact, most councils require that at least one person holds a Manager&apos;s Certificate before a liquor licence application can be lodged for new premises. Getting your team certified early is one of the smartest moves you can make as a new operator.</p><p style="font-size: 16px; margin-bottom: 16px;">For full guidance on <a href="https://liquorconcepts.co.nz/services/" style="color: #b8860b; text-decoration: underline;">liquor licence types and applications in New Zealand</a>, the team at <a href="https://liquorconcepts.co.nz/" style="color: #b8860b; text-decoration: underline;">Liquor Concepts</a> can walk you through every requirement from start to finish.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">How Long Does It Take to Get a Bar Manager&apos;s Certificate in NZ?</h2><p style="font-size: 16px; margin-bottom: 16px;">The timeline depends on a few variables:</p><ul style="font-size: 16px; padding-left: 24px; margin-bottom: 20px; line-height: 2;"><li style="margin-bottom: 6px;"><strong>LCQ training:</strong> Typically 1 day in-person or up to 45 days online at your own pace</li><li style="margin-bottom: 6px;"><strong>LCQ certificate processing:</strong> A few days once NZQA records your unit standards</li><li style="margin-bottom: 6px;"><strong>DLC processing time:</strong> Approximately 15–25 working days (depending on the region and whether Police raise any concerns)</li><li style="margin-bottom: 6px;"><strong>Total realistic timeline:</strong> 4–8 weeks from starting your LCQ to holding your certificate</li></ul><p style="font-size: 16px; margin-bottom: 16px;">Planning ahead is essential — especially if you need to be operational by a specific date or if your current certified manager is leaving.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">How <a href="https://liquorconcepts.co.nz/" style="color: #b8860b; text-decoration: underline;">Liquor Concepts</a> Can Help</h2><p style="font-size: 16px; margin-bottom: 16px;">Navigating the licensing process is manageable — but mistakes, missing documents, or poorly worded employer references can cause frustrating delays. That&apos;s where having an experienced consultant in your corner makes a real difference.</p><p style="font-size: 16px; margin-bottom: 16px;">Liquor Concepts has been helping New Zealand businesses navigate liquor licensing for over 24 years. With a 98% application success rate and more than 500 licences approved, the team brings deep knowledge of both the legal requirements and the practical realities of working with District Licensing Committees across New Zealand.</p><p style="font-size: 16px; margin-bottom: 16px;">Whether you need help completing your managers certificate application NZ, understanding what documents are required, or ensuring your employer reference is worded correctly — Liquor Concepts provides step-by-step guidance that takes the stress out of the process.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Ready to Get Your Bar Manager&apos;s Licence NZ Sorted?</h2><p style="font-size: 16px; margin-bottom: 16px;">The path to your Manager&apos;s Certificate is clear — complete your LCQ NZ, meet the eligibility requirements, pull together your documents, and lodge your application with confidence.</p><p style="font-size: 16px; margin-bottom: 16px;">If you&apos;d like expert support at any stage of the process — from understanding the requirements through to lodging a complete, well-prepared application — <a href="https://liquorconcepts.co.nz/contact/" style="color: #b8860b; text-decoration: underline;">contact Liquor Concepts today for a free consultation</a>. With decades of experience and a genuine commitment to helping New Zealand operators succeed, the team is ready to guide you through every step.</p><h2 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 24px;">Frequently Asked Questions</h2><div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;"><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">1. How do I get a bar manager&apos;s licence in NZ?</h3><p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">To get a bar manager&apos;s licence in NZ, you must first complete the Licence Controller Qualification (LCQ) by passing NZQA unit standards 4646 and 16705 through an accredited training provider. Once you hold your LCQ certificate, have at least 6 months of relevant experience in a licensed premises, and meet the age requirement of 20 years or older, you can lodge a Manager&apos;s Certificate application with your local District Licensing Committee. The application requires photo ID, an employer reference letter, a police questionnaire, and the relevant fee.</p></div><div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;"><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">2. What is the LCQ and do I need it before applying for a Manager&apos;s Certificate?</h3><p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Yes — the LCQ (Licence Controller Qualification) is a mandatory prerequisite for anyone applying for a Manager&apos;s Certificate in New Zealand. It is a nationally recognised qualification issued by ServiceIQ, covering the Sale and Supply of Alcohol Act 2012 and host responsibility requirements. You cannot lodge a Manager&apos;s Certificate application without it. The LCQ can be completed online or in-person through approved training providers across New Zealand.</p></div><div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;"><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">3. How long is a bar manager&apos;s certificate valid for in NZ?</h3><p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Your first Manager&apos;s Certificate is valid for 12 months. At renewal — provided there are no objections from the Police or Licensing Inspector — the certificate is renewed for a three-year period. It is your responsibility to apply for renewal before your certificate expires. If it lapses, you will need to apply as a new applicant rather than simply renewing, which takes considerably more time and effort.</p></div><div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;"><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">4. Can I manage any bar in NZ with one Manager&apos;s Certificate?</h3><p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Yes. A Manager&apos;s Certificate issued in New Zealand is fully portable, meaning it allows you to work as a duty manager at any licensed premises across the country — not just the venue where you originally applied. However, when you take on a new role, your employer (the licensee) must notify the District Licensing Committee and Police of the management change within 48 hours.</p></div><div style="margin-bottom: 8px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;"><h3 style="font-family: Helvetica Neue, Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">5. What happens if my licensed premises doesn&apos;t have a certified manager on duty?</h3><p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Under the Sale and Supply of Alcohol Act 2012, it is a legal requirement for a certified manager to be on duty at all times when alcohol is being sold or supplied to the public. Operating without one is a serious compliance breach that can result in fines and put your liquor licence at risk. In genuine emergencies, a licensee can appoint a temporary manager for up to 2 working days, but the DLC and Police must be notified and the appointee must apply for their own certificate within that window if they intend to continue managing.</p></div></article>`,
      author: "Liquor Concepts Team",
      date: "2026-06-11",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1643297500887-929d40b1f047?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

  {
      id: 12,
      slug: "bar-licence-nz",
      type: "blog",
      title: "Bar Licence NZ: Everything You Need to Know About Getting Licensed",
      keywords: "",
      excerpt: "Need a bar licence NZ? We guide bars, restaurants & all business types through applications, renewals & manager certificates. Contact Liquor Concepts today.",
      content: `

  <article style="max-width: 860px; margin: 48px auto; padding: 48px 56px; background: #ffffff; box-shadow: 0 2px 24px rgba(0,0,0,0.07); border-radius: 4px;">

    <!-- Summary -->
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 40px;">
      Whether you are opening a bar, running a restaurant, or launching a new hospitality venue, getting a bar licence in NZ is a legal requirement before you serve a single drink. This guide walks you through everything — the types of licences available, what you need to apply, how much it costs, and how working with the right experts makes the whole process significantly easier.
    </p>

    <!-- Section 1 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">What Is a Bar Licence in NZ and Who Needs One?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">In New Zealand, any business that sells or supplies alcohol to the public must hold a valid liquor licence. This applies whether you run a bar, pub, tavern, restaurant, café, bottle store, entertainment venue, or sports club. Operating without a licence is a serious offence under the Sale and Supply of Alcohol Act 2012, and the penalties are significant.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">A bar licence — formally known as an <strong>on-licence</strong> — allows the sale or supply of alcohol for consumption on the premises. It is the most common licence type for bars, pubs, restaurants, and hospitality venues throughout New Zealand.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">If you are unsure which type of licence your business needs, Liquor Concepts can help you identify the right path from the very start, saving you time and avoiding a costly mistake.</p>

    <!-- Section 2 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Types of Licences Available in New Zealand</h2>
    <p style="font-size: 16px; margin-bottom: 20px;">Understanding the four licence types is the first step in any bar licence application. Choosing the wrong one can delay or derail your entire process.</p>

    <div style="overflow-x: auto; margin-bottom: 28px;">
      <table style="width: 100%; border-collapse: collapse; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; box-shadow: 0 1px 8px rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;">
        <thead>
          <tr style="background-color: #2c2c2c; color: #ffffff;">
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Licence Type</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Best For</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Where Alcohol Is Consumed</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">On-licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Bars, pubs, restaurants, cafés, hotels, entertainment venues</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">On the premises</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Off-licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Bottle stores, supermarkets, online/remote sellers</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Off the premises</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Club licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Sports clubs, RSAs, members-only clubs</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">On club premises, members only</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; font-weight: 600; color: #b8860b;">Special licence</td>
            <td style="padding: 13px 18px; color: #444;">One-off events, weddings, festivals, functions</td>
            <td style="padding: 13px 18px; color: #444;">On or off-site</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size: 16px; margin-bottom: 16px;">An on-licence, off-licence, or club licence is initially granted for one year, and can then be renewed every three years. A special licence covers one-off or short-duration events and has its own separate application process.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">For most bar and restaurant operators, an on-licence is the correct choice. However, if your business model involves selling alcohol for takeaway or delivery — such as a bottle store or online retail — you will need an off-licence instead.</p>

    <!-- Section 3 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Bar Licence NZ: Key Requirements Before You Apply</h2>
    <p style="font-size: 16px; margin-bottom: 20px;">One of the most common reasons bar licence applications are delayed or declined is incomplete documentation. Getting this right from day one is critical.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 12px;">Applicant Requirements</h3>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Licence holders must be aged 20 years or over</li>
      <li style="margin-bottom: 6px;">Must demonstrate suitability as an applicant — character, background, and relevant experience</li>
      <li style="margin-bottom: 6px;">A licence is issued to a person, company, or legal entity in relation to a specific premises</li>
      <li style="margin-bottom: 6px;">A licence cannot be transferred from one person to another, or from one premises to another</li>
    </ul>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 12px;">Documentation Checklist</h3>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Completed application form (available from your local council)</li>
      <li style="margin-bottom: 6px;">Building Act and District Plan compliance certificates</li>
      <li style="margin-bottom: 6px;">At least one person holding a current Manager's Certificate (issued by a District Licensing Committee)</li>
      <li style="margin-bottom: 6px;">Host responsibility policy and alcohol management plan</li>
      <li style="margin-bottom: 6px;">Food menu (food must be available at all times when alcohol is served)</li>
      <li style="margin-bottom: 6px;">Separate food premise registration</li>
      <li style="margin-bottom: 6px;">Proposed trading hours</li>
      <li style="margin-bottom: 6px;">Public notification (placed on the building for the required period)</li>
      <li style="margin-bottom: 6px;">Police check form</li>
    </ul>

    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 32px;">
      <strong>Important:</strong> Even if you are taking over an existing licensed premises, you cannot simply assume the previous owner's licence. You will need to apply for a new licence in your name and obtain fresh building and planning certificates. A temporary authority can allow you to continue trading during the transition period.
    </p>

    <!-- Section 4 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Step-by-Step: How to Get a Bar Licence in NZ</h2>
    <p style="font-size: 16px; margin-bottom: 24px;">The bar licence application process involves multiple agencies and several distinct steps. Here is a clear breakdown of what to expect.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 1 — Choose the Right Licence Type</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Confirm whether an on-licence, off-licence, or another licence type applies to your business model and how you intend to sell alcohol.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 2 — Check Zoning and Location Rules</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">District Plan consent requirements must be met before applying. Some councils have restrictions around premises located near schools, places of worship, or residential areas. Check your local council's requirements early — certain locations may face higher scrutiny or restrictions.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 3 — Obtain Building and Planning Certificates</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Before lodging your main application, you need building and planning compliance certificates from your local council. This applies even if you are taking over existing licensed premises.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 4 — Appoint a Certified Manager</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">At least one person on your team must hold a current Manager's Certificate before your application can proceed. All duty managers are also required to hold a valid Licence Controller Qualification (LCQ) from a Licensing Control Authority-approved training course.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 5 — Prepare Your Full Application</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Compile all documentation, including your host responsibility policy, alcohol management plan, food menu, proposed trading hours, and supporting evidence of your suitability as an applicant. Incomplete applications are a leading cause of delays — missing even one document can pause the entire process.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 6 — Lodge Your Application and Pay the Fee</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Submit your completed application to your local council along with the applicable fee. All application fees must be paid upfront at the time of lodgement.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 7 — Public Notification</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Your council will publicly notify your application — on its website or in a newspaper — within 20 working days of lodgement. You must also place a notice on the building for the notification period. Members of the public have the right to object if they can demonstrate a special interest in the application.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 8 — Agency Reviews</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">The application is referred to the NZ Police, a licensing inspector, and the Medical Officer of Health for review. Each agency may raise matters in support of or in opposition to the application.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 9 — District Licensing Committee Decision</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">The District Licensing Committee (DLC) makes the final decision. If there are no objections and reports from agencies raise no concerns, the application may be granted without a public hearing. If objections are raised, a public hearing will be held.</p>

    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #b8860b; margin-top: 28px; margin-bottom: 8px;">Step 10 — Renewal</h3>
    <p style="font-size: 16px; margin-bottom: 20px;">Once approved, your licence is valid for the first year. After that, it must be renewed every three years. Renewal applications must be lodged at least 20 working days before the expiry date.</p>

    <!-- Section 5 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">How Much Does a Bar Licence Cost in NZ?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">This is one of the most common questions from business owners — and the honest answer is: it depends.</p>
    <p style="font-size: 16px; margin-bottom: 20px;">Under the Sale and Supply of Alcohol Act 2012, licensing fees are structured around a <strong>risk-based fee system</strong>. There are five fee categories, and your business is assessed based on a combination of factors:</p>

    <div style="overflow-x: auto; margin-bottom: 28px;">
      <table style="width: 100%; border-collapse: collapse; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; box-shadow: 0 1px 8px rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;">
        <thead>
          <tr style="background-color: #2c2c2c; color: #ffffff;">
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Factor</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">How It Affects Your Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Type of premises</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Bars and taverns typically attract higher fees than cafés</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Trading hours</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Later closing times increase your risk rating</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Previous compliance history</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Prior fines or prosecutions increase your cost/risk score</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; font-weight: 600; color: #b8860b;">Location and nature of business</td>
            <td style="padding: 13px 18px; color: #444;">High-volume or late-night venues sit in higher brackets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size: 16px; margin-bottom: 16px;">Every licence holder pays two types of fees: an <strong>application fee</strong> (paid when lodging) and an <strong>annual fee</strong> (paid each year on the anniversary of your licence). Your council may also set its own fee bylaw, which means costs can vary between regions.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">The most practical approach is to use your local council's online fee calculator before applying — this gives you a reliable estimate of your likely cost category. A licensing consultant can also help you understand your risk rating and budget accordingly.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">For restaurant liquor licence costs in NZ, the same risk-based framework applies. A restaurant that serves alcohol only to the table — without a separate bar area — often falls into a lower fee category than a full-service bar. Understanding how your premises is classified can make a meaningful difference to what you pay.</p>

    <!-- Section 6 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Do Restaurants Need a Separate Liquor Licence in NZ?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Yes. Any restaurant, café, or BYO venue that sells or supplies alcohol must hold a current liquor licence for restaurant in NZ — there are no exceptions.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">For most dining establishments, this means applying for an on-licence. How your restaurant is classified within the on-licence system depends on the nature of your operation:</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 16px; line-height: 2;">
      <li style="margin-bottom: 6px;"><strong>Class 1 restaurant:</strong> Has a significant separate bar area that operates in the nature of a tavern at least one night per week</li>
      <li style="margin-bottom: 6px;"><strong>Class 2 restaurant:</strong> Has a bar area but does not operate it in the nature of a tavern</li>
      <li style="margin-bottom: 6px;"><strong>Class 3 restaurant:</strong> Serves alcohol only to the table, with no separate bar area</li>
    </ul>
    <p style="font-size: 16px; margin-bottom: 16px;">This classification directly affects your alcohol licence restaurant cost and the conditions applied to your licence. If you are setting up a new restaurant and want to understand where your venue sits, the team at Liquor Concepts can provide clear, practical guidance tailored to your specific setup.</p>

    <!-- Section 7 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">What Are Your Trading Hours as a Bar or Restaurant?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">The national maximum trading hours for on-licences are between <strong>8:00am and 4:00am the following day</strong>. For off-licences, the standard maximum is <strong>7:00am to 11:00pm</strong>.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">However, your local council's alcohol policy may impose tighter restrictions depending on your location. Always check your local council's current Local Alcohol Policy before confirming proposed trading hours in your application — listing hours you cannot legally operate will flag your application.</p>

    <!-- Section 8 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Why Do Applications Get Declined or Delayed?</h2>
    <p style="font-size: 16px; margin-bottom: 20px;">Understanding the common pitfalls can save weeks — or months — of frustration.</p>

    <div style="overflow-x: auto; margin-bottom: 28px;">
      <table style="width: 100%; border-collapse: collapse; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; box-shadow: 0 1px 8px rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;">
        <thead>
          <tr style="background-color: #2c2c2c; color: #ffffff;">
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Common Issue</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Incomplete documentation</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Processing halted until resolved</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">No Manager's Certificate holder</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Application cannot proceed</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Zoning or location restrictions</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Licence cannot be issued</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Police or health agency objections</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Triggers public hearing, adds months</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Poor host responsibility policy</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Raises red flags with the DLC</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Location near schools or churches</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Lower approval likelihood without strong mitigation</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; font-weight: 600; color: #b8860b;">Previous compliance breaches</td>
            <td style="padding: 13px 18px; color: #444;">Higher risk rating and fees; possible refusal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size: 16px; margin-bottom: 16px;">The most effective way to avoid these issues is to prepare thoroughly before you apply — and to work with someone who knows exactly what the DLC is looking for.</p>

    <!-- Section 9 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">How Long Does the Process Take?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">For on-licences, off-licences, and club licences, the application process can take <strong>up to ten weeks</strong> from lodgement to decision. This assumes your application is complete and no objections are raised.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">If a public hearing is required, the timeline can extend considerably — sometimes several months. Starting the process well in advance of your planned opening date is not just recommended; for many businesses, it is the difference between opening on time and not opening at all.</p>

    <!-- Section 10 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Why Work With a Liquor Licensing Consultancy?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">The bar licence application process in NZ involves multiple government agencies, strict documentation requirements, public notification, and legal compliance obligations. For first-time applicants especially, navigating this alone is a significant undertaking.</p>
    <p style="font-size: 16px; margin-bottom: 16px;"><a href="https://liquorconcepts.co.nz/" style="color:#b8860b;">Liquor Concepts</a> is a New Zealand-based consultancy that manages the entire licensing process for businesses of every size and type — bars, restaurants, bottle stores, clubs, event venues, and more. The team brings hands-on experience with what councils, licensing inspectors, and District Licensing Committees actually need to see in a successful application.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">What clients consistently value is the practical, step-by-step guidance and genuine commitment to getting the job done right. From the initial consultation through to lodgement and approval, every aspect of the process is handled with care, accuracy, and clear communication — so business owners can stay focused on building their venue rather than drowning in paperwork.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">To explore the full range of licensing services available, visit <a href="https://liquorconcepts.co.nz/services" style="color:#b8860b;">liquorconcepts.co.nz/services</a>.</p>

    <!-- CTA -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Ready to Get Your Bar Licence in NZ?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Getting a bar licence in NZ is easier with the right experts. Whether you are applying for the first time, renewing an existing licence, or navigating a complex situation involving objections or compliance history, Liquor Concepts has the knowledge and experience to guide you through every step.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">Contact Liquor Concepts today to schedule a consultation and discuss your bar licence application — the sooner you start, the smoother your path to opening.</p>

    <!-- FAQ -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 24px;">Frequently Asked Questions</h2>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">How long does a bar licence application take in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">A bar licence application in NZ typically takes up to ten weeks from lodgement to decision, provided the application is complete and no objections are raised by the public or reporting agencies. If a public hearing is required, the timeline can extend significantly — sometimes to several months. The best way to avoid delays is to have all documentation fully prepared before lodging, and to start the process well in advance of your planned opening date.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">What are the requirements to get a bar licence in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">To get a bar licence in NZ, you need to be aged 20 or over and demonstrate suitability as an applicant. You will need building and planning compliance certificates, at least one person holding a current Manager's Certificate, a host responsibility policy, an alcohol management plan, a food menu, food premise registration, and completed application forms. Your application will be assessed by the NZ Police, a licensing inspector, and the Medical Officer of Health before the District Licensing Committee makes its final decision.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">How much does a bar licence cost in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">The cost of a bar licence in NZ is calculated using a risk-based fee system with five categories. Your fee depends on the type of premises, your trading hours, and your compliance history. Lower-risk premises with standard hours pay less; high-volume late-night venues fall into higher brackets. Both an application fee (paid at lodgement) and an annual fee apply. Your local council may also have its own fee bylaw. Using your council's fee calculator before applying gives you a reliable estimate of your likely costs.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">Do I need a liquor licence for a restaurant in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Yes. Any restaurant, café, or dining venue that sells or supplies alcohol must hold a valid liquor licence for restaurant in NZ. This is typically an on-licence. Your restaurant's classification — based on whether it has a separate bar area and how it operates — affects your fee category and the conditions placed on your licence. Even BYO venues that also sell alcohol need an appropriate licence. Applying early is important, as the process can take up to ten weeks.</p>
    </div>

    <div style="margin-bottom: 8px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">Can I transfer a bar licence when purchasing an existing venue in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">No. A licence cannot be transferred from one person to another or from one premises to another. When you purchase an existing bar or restaurant, you must apply for a new licence in your own name — including obtaining fresh building and planning certificates. However, you can apply for a temporary authority to continue trading under the previous licence while your new application is being processed. This must be arranged before settlement to avoid any gap in your legal authority to sell alcohol. A licensing consultant can manage this transition smoothly on your behalf.</p>
    </div>

  </article>

`,
      author: "Liquor Concepts Team",
      date: "2026-05-20",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    slug: "liquor-licence-renewal-checklist-nz",
    type: "blog",
    title:
      "Liquor Licence Renewal Checklist NZ: Bars & Restaurants",
    keywords: "",
    excerpt:
      "Get your NZ liquor licence renewal right the first time. Our checklist for restaurants, bars & bottle stores covers every step. Talk to Liquor Concepts today.",
    content: `
  <article style="max-width: 860px; margin: 48px auto; padding: 48px 56px; background: #ffffff; box-shadow: 0 2px 24px rgba(0,0,0,0.07); border-radius: 4px;">

    <!-- Summary -->
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #555; border-left: 4px solid #b8860b; padding: 16px 20px; background: #fdf8ee; border-radius: 0 4px 4px 0; margin-bottom: 40px;">
      Renewing your liquor licence in New Zealand doesn't have to be stressful — but only if you're prepared. Whether you operate a restaurant, bar, or bottle store, your liquor licence renewal comes with specific legal requirements under the Sale and Supply of Alcohol Act 2012. Miss a document, misunderstand your timeline, or let your licence lapse, and the consequences can be severe. This practical checklist walks New Zealand business owners through every step of the alcohol licence renewal process, so you can approach your renewal with confidence and keep trading without interruption.
    </p>

    <!-- Section 1 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Why Getting Your Liquor Licence Renewal Right Matters</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Running a licensed premises in New Zealand is a privilege, not a given. The Sale and Supply of Alcohol Act 2012 places clear obligations on every licensee — and the renewal process is your opportunity to demonstrate that you continue to meet those obligations.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">A smooth renewal protects your business, your staff, and your customers. A failed or lapsed renewal, on the other hand, means you must immediately stop selling alcohol, remove it from display, and apply for an entirely new licence — a process that is more expensive, more time-consuming, and open to a wider range of public objections.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">The good news? With the right preparation and a clear checklist, renewing your liquor licence on time is entirely achievable for any New Zealand hospitality business.</p>

    <!-- Section 2 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">How Often Do You Have to Renew a Liquor Licence in NZ?</h2>
    <p style="font-size: 16px; margin-bottom: 20px;">Under New Zealand law, on-licences (restaurants, bars, cafes), off-licences (bottle stores, supermarkets), and club licences are granted initially for one year and can then be renewed every three years. In addition to the three-year renewal cycle, an annual fee is payable on the anniversary of your licence's issue date each year.</p>
    <p style="font-size: 16px; margin-bottom: 20px;">Here's a clear overview:</p>

    <div style="overflow-x: auto; margin-bottom: 32px;">
      <table style="width: 100%; border-collapse: collapse; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; box-shadow: 0 1px 8px rgba(0,0,0,0.08); border-radius: 6px; overflow: hidden;">
        <thead>
          <tr style="background-color: #2c2c2c; color: #ffffff;">
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Licence Type</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Typical Premises</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Initial Term</th>
            <th style="padding: 14px 18px; text-align: left; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px;">Renewal Cycle</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">On-licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Restaurants, bars, cafes</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">1 year</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Every 3 years</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Off-licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Bottle stores, supermarkets</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">1 year</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Every 3 years</td>
          </tr>
          <tr style="background-color: #fff;">
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; font-weight: 600; color: #b8860b;">Club licence</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Sports clubs, RSAs</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">1 year</td>
            <td style="padding: 13px 18px; border-bottom: 1px solid #eee; color: #444;">Every 3 years</td>
          </tr>
          <tr style="background-color: #fafaf8;">
            <td style="padding: 13px 18px; font-weight: 600; color: #b8860b;">Special licence</td>
            <td style="padding: 13px 18px; color: #444;">Events, functions</td>
            <td style="padding: 13px 18px; color: #444;">Per event</td>
            <td style="padding: 13px 18px; color: #444;">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size: 16px; margin-bottom: 16px;">The legal deadline for filing a liquor licence renewal application is at least <strong>20 working days before your licence expires</strong>. However, most licensing professionals — and every District Licensing Committee (DLC) in the country — strongly recommend applying well before that minimum. Three months ahead is a sensible target, particularly if your licence expires near the Christmas/New Year shutdown period (20 December to 15 January), when no applications are processed.</p>

    <!-- Section 3 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">The Complete Liquor Licence Renewal Checklist for NZ Businesses</h2>
    <p style="font-size: 16px; margin-bottom: 24px;">Use this checklist as your step-by-step guide to ensure your renewal application is complete and lodge-ready. Requirements can vary slightly between territorial authorities, so always check with your local DLC — but this covers the core requirements across New Zealand.</p>

    <!-- Step 1 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 1: Know Your Expiry Date and Timeline</h3>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Confirm your licence expiry date from your current licence document</li>
      <li style="margin-bottom: 6px;">Count back at least 20 working days — note this excludes weekends, public holidays, and the 20 Dec–15 Jan shutdown</li>
      <li style="margin-bottom: 6px;">Set your target lodgement date at least 10–12 weeks before expiry for safety</li>
      <li style="margin-bottom: 6px;">Mark your annual fee due date separately (payable every year, not just renewal years)</li>
    </ul>

    <!-- Step 2 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 2: Obtain and Complete the Correct Renewal Form</h3>
    <p style="font-size: 16px; margin-bottom: 14px;">The liquor license renewal form you need depends on your licence type. Each licence type — on-licence, off-licence, and club licence — has its own prescribed form under the Sale and Supply of Alcohol Act 2012.</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Download the correct renewal application form from your DLC's website or pick it up in person</li>
      <li style="margin-bottom: 6px;">Complete all sections in full — incomplete forms are returned, which can cost you weeks</li>
      <li style="margin-bottom: 6px;">Have the form signed by the correct authorised person (e.g. company director if the applicant is a company)</li>
      <li style="margin-bottom: 6px;">If you are using a licensing consultant, include a signed letter of authorisation</li>
    </ul>

    <!-- Step 3 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 3: Gather Your Supporting Documents</h3>
    <p style="font-size: 16px; margin-bottom: 14px;">This is where most applications run into trouble. Missing or outdated supporting documents are the most common reason renewal applications are returned or delayed.</p>

    <p style="font-size: 15px; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 700; color: #444; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">For all licence types (on-, off-, and club licence):</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 20px; line-height: 2;">
      <li style="margin-bottom: 6px;">Current floor plan of the premises, clearly showing the licensed area, principal entrance, and any restricted or supervised areas</li>
      <li style="margin-bottom: 6px;">Host Responsibility Policy — this must be current and reflect how you actually manage responsible service at your premises. For on-licences and club licences, this should also include your implementation plan</li>
      <li style="margin-bottom: 6px;">Valid Manager's Certificate(s) — copies for each manager nominated to manage the premises. Note that a Manager's Certificate is initially issued for 12 months and then renewed every three years; ensure yours hasn't lapsed</li>
      <li style="margin-bottom: 6px;">Certificate of Incorporation (if the applicant is a company)</li>
      <li style="margin-bottom: 6px;">Photo of the main entrance to the premises</li>
    </ul>

    <p style="font-size: 15px; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 700; color: #444; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Additional documents for on-licences (restaurants, bars, cafes):</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 20px; line-height: 2;">
      <li style="margin-bottom: 6px;">A copy of your current food menu</li>
      <li style="margin-bottom: 6px;">Details of how free drinking water is provided to customers</li>
      <li style="margin-bottom: 6px;">Planning and building certificates (required if changes have been made to the premises)</li>
      <li style="margin-bottom: 6px;">Written permission from the building owner if the premises are council-owned or leased</li>
    </ul>

    <p style="font-size: 15px; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 700; color: #444; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Additional documents for off-licences (bottle stores):</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Details of steps taken to prevent sale of alcohol to minors and intoxicated persons</li>
      <li style="margin-bottom: 6px;">If applicable, a statement of annual sales revenue (for grocery/supermarket premises)</li>
    </ul>

    <!-- Step 4 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 4: Calculate and Pay the Renewal Fee</h3>
    <p style="font-size: 16px; margin-bottom: 14px;">The liquor license renewal fee in New Zealand is based on a cost/risk rating system set by the Sale and Supply of Alcohol (Fees) Regulations 2013. Your fee is determined by:</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 16px; line-height: 2;">
      <li style="margin-bottom: 6px;">Your licence type (on-, off-, or club licence)</li>
      <li style="margin-bottom: 6px;">Your trading hours</li>
      <li style="margin-bottom: 6px;">Any enforcement actions taken against your premises in the last 18 months</li>
    </ul>
    <p style="font-size: 16px; margin-bottom: 14px;">Higher-risk premises such as nightclubs and late-trading bars pay more. Lower-risk premises such as small clubs and daytime cafes pay less. Your territorial authority may also apply its own fee schedule via a local bylaw.</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Use your council's fee calculator or check the fee schedule for your district</li>
      <li style="margin-bottom: 6px;">Include the correct fee payment with your application — fees are non-refundable once lodged</li>
      <li style="margin-bottom: 6px;">Ensure your most recent annual fee payments are also up to date</li>
    </ul>

    <!-- Step 5 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 5: Post Your Public Notice</h3>
    <p style="font-size: 16px; margin-bottom: 14px;">New Zealand's liquor licensing process requires public notification of renewal applications. This gives members of the public, NZ Police, and the Medical Officer of Health the opportunity to file a report or objection.</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Display a public notice in a conspicuous location at your premises (at the street frontage or main entrance) within 10 working days of submitting your application</li>
      <li style="margin-bottom: 6px;">Confirm with your DLC whether the council will post the online notification, or whether you need to arrange newspaper publication</li>
      <li style="margin-bottom: 6px;">Be aware that the public has 25 working days from the date of the online notice to file an objection</li>
    </ul>

    <!-- Step 6 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 6: Prepare for the Inspector Visit</h3>
    <p style="font-size: 16px; margin-bottom: 14px;">Once your application is lodged, an alcohol licensing inspector will visit your premises to review your operation and host responsibility practices.</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Ensure your Host Responsibility Policy is displayed and accessible to staff</li>
      <li style="margin-bottom: 6px;">Confirm that the duty manager's name is prominently displayed inside the premises at all times</li>
      <li style="margin-bottom: 6px;">Check that age verification procedures are in place and understood by all staff</li>
      <li style="margin-bottom: 6px;">Make sure free drinking water is available to customers (mandatory for on-licence premises)</li>
    </ul>

    <!-- Step 7 -->
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 19px; font-weight: 700; color: #b8860b; margin-top: 36px; margin-bottom: 12px;">Step 7: Lodge Your Application</h3>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 24px; line-height: 2;">
      <li style="margin-bottom: 6px;">Double-check the application against your DLC's checklist before submitting</li>
      <li style="margin-bottom: 6px;">Submit your completed application form, all supporting documents, and your fee payment together</li>
      <li style="margin-bottom: 6px;">Submit in person, by post, or online (depending on your council's accepted methods)</li>
      <li style="margin-bottom: 6px;">Retain a copy of everything you submit for your own records</li>
    </ul>

    <!-- Section 4 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">What Happens After You Lodge Your Liquor Licence Renewal Application?</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Once your application is received, the following process unfolds:</p>
    <ol style="font-size: 16px; padding-left: 24px; margin-bottom: 16px; line-height: 2;">
      <li style="margin-bottom: 8px;"><strong>Completeness check</strong> — the DLC checks your application is complete. Incomplete applications are returned.</li>
      <li style="margin-bottom: 8px;"><strong>Agency reports</strong> — NZ Police and the Medical Officer of Health review your application. Police have 15 working days to file a report.</li>
      <li style="margin-bottom: 8px;"><strong>Public objection period</strong> — the public has 25 working days from notification to file any objections.</li>
      <li style="margin-bottom: 8px;"><strong>Inspection</strong> — a licensing inspector visits your premises.</li>
      <li style="margin-bottom: 8px;"><strong>DLC decision</strong> — if there are no objections or opposition, the DLC processes the renewal. If objections are received, a public hearing may be scheduled.</li>
      <li style="margin-bottom: 8px;"><strong>Licence issued</strong> — once approved, your renewed licence is posted to you.</li>
    </ol>
    <p style="font-size: 16px; margin-bottom: 16px;">Provided your application is complete and uncontested, most councils indicate a processing time of four to eight weeks. Your existing licence remains valid while your application is being processed, provided it was lodged before the expiry date.</p>

    <!-- Section 5 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Common Mistakes That Delay Licence Renewals in New Zealand</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Learning from what goes wrong for others is one of the fastest ways to protect your own renewal. Common pitfalls include:</p>
    <ul style="font-size: 16px; padding-left: 24px; margin-bottom: 16px; line-height: 2;">
      <li style="margin-bottom: 6px;">Lodging the application too close to the expiry date, leaving no buffer for delays</li>
      <li style="margin-bottom: 6px;">Submitting an outdated or inadequate Host Responsibility Policy</li>
      <li style="margin-bottom: 6px;">Forgetting to check that Manager's Certificates haven't lapsed</li>
      <li style="margin-bottom: 6px;">Missing the public notice requirement</li>
      <li style="margin-bottom: 6px;">Not accounting for the Christmas/New Year shutdown period when counting working days</li>
      <li style="margin-bottom: 6px;">Submitting an incorrect fee or forgetting to include payment</li>
    </ul>
    <p style="font-size: 16px; margin-bottom: 16px;">A licensing consultant can review your application before you submit it, catching these issues before they cost you time or, worse, put your licence at risk. For a full overview of professional support available to New Zealand businesses, visit the <a href="https://liquorconcepts.co.nz/services" style="color:#b8860b;">Liquor Concepts services page.</a></p>

    <!-- Section 6 -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 20px;">Liquor Licensing Services New Zealand — Renew with Confidence</h2>
    <p style="font-size: 16px; margin-bottom: 16px;">Whether you're a bar owner in Auckland, a restaurant operator in Wellington, or a bottle store licensee in Christchurch, the liquor license renewal NZ process is the same — and the stakes are equally high wherever you are.</p>
    <p style="font-size: 16px; margin-bottom: 16px;"><a href="https://liquorconcepts.co.nz/" style="color:#b8860b;">Liquor Concepts</a> is a New Zealand-based liquor licensing consultancy dedicated to helping hospitality businesses navigate the renewal process efficiently and accurately. The team provides step-by-step guidance, reviews your application for completeness before lodgement, and helps you understand your obligations under the Sale and Supply of Alcohol Act 2012 — so you can focus on running your business rather than worrying about your paperwork.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">From first-year renewals through to three-year renewals and beyond, Liquor Concepts brings practical expertise and a genuine commitment to client outcomes. If you're coming up to a renewal, there's no better time to get professional support in place.</p>
    <p style="font-size: 16px; margin-bottom: 16px;">Contact Liquor Concepts today to schedule a consultation and get clear, practical guidance on your liquor licence renewal — before your expiry date catches you off guard.</p>

    <!-- FAQ Section -->
    <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #e8e0d0; padding-bottom: 10px; margin-top: 48px; margin-bottom: 24px;">Frequently Asked Questions: Liquor Licence Renewal Checklist NZ</h2>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">1. What documents do I need to renew my liquor licence in New Zealand?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">To complete a liquor licence renewal application in New Zealand, you will typically need: the completed renewal form for your licence type (on-, off-, or club licence); the applicable renewal fee; a current floor plan of your premises; an up-to-date Host Responsibility Policy; copies of valid Manager's Certificates for all nominated managers; a Certificate of Incorporation (if the applicant is a company); and a photo of the main entrance. Restaurants and bars on an on-licence will also need a current food menu and details of how free drinking water is provided. Requirements can vary slightly between territorial authorities, so always check with your local District Licensing Committee.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">2. How do I renew my liquor licence for a restaurant or bar in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">To renew a liquor licence for a restaurant or bar (on-licence) in New Zealand, start by confirming your expiry date and counting back at least 10–12 weeks to set your lodgement target. Download the correct renewal form from your local District Licensing Committee's website. Gather your supporting documents — including a current floor plan, Host Responsibility Policy, and Manager's Certificates — then calculate and pay your renewal fee. Post your public notice at the premises once your application is submitted. Your application will be reviewed by NZ Police and a licensing inspector before the DLC makes a final decision. If lodged before the expiry date, your existing licence remains valid throughout the process.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">3. How long does a liquor licence renewal take to process in NZ?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Most New Zealand councils indicate that an alcohol licence renewal takes a minimum of four to eight weeks to process once a complete application is received. However, if a public objection is filed or NZ Police or the Medical Officer of Health raise concerns, the process can take considerably longer as a public hearing may be required. To avoid any gap in your ability to trade, it's strongly recommended to lodge your liquor licence renewal application at least 10–12 weeks before your expiry date — not just the 20 working days minimum required by law.</p>
    </div>

    <div style="margin-bottom: 28px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">4. What happens if I forget to renew my liquor licence in New Zealand?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">If you fail to lodge a liquor licence renewal application before your licence expiry date in New Zealand, your licence lapses immediately. You must stop selling alcohol, remove it from display, and apply for an entirely new licence rather than a renewal. This is a more complex, more expensive process and opens your application to a broader range of public objections. NZ Police may also visit your premises to verify compliance. Under Section 235 of the Sale and Supply of Alcohol Act 2012, operating without a valid licence carries penalties of up to $20,000. There is no grace period, which is why early preparation is essential.</p>
    </div>

    <div style="margin-bottom: 8px; border: 1px solid #e8e0d0; border-radius: 6px; padding: 24px 28px;">
      <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 17px; font-weight: 700; color: #2c2c2c; margin-top: 0; margin-bottom: 12px;">5. Do I need to renew my Manager's Certificate at the same time as my liquor licence renewal?</h3>
      <p style="font-size: 15px; margin: 0; color: #444; line-height: 1.8;">Not necessarily at the same time, but you do need to ensure all Manager's Certificates are current when you lodge your renewal application. A Manager's Certificate in New Zealand is initially issued for 12 months and is then renewed every three years — a separate process from the premises licence renewal. When completing your liquor licence renewal checklist, check the expiry dates of all Manager's Certificates for your nominated managers and arrange renewals if needed. An expired Manager's Certificate could create compliance issues during the inspector visit that forms part of your licence renewal process.</p>
    </div>

  </article>
`,
    author: "Liquor Concepts Team",
    date: "2026-05-19",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
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
