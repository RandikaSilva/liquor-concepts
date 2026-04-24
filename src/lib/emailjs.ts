import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
const TEMPLATE_ID_REFERRAL = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REFERRAL;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
}

export interface ReferralFormData {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  const templateParams = {
    name: data.name,
    email: data.email,
    business: data.businessName,
    message: data.message,
    submittedAt: new Date().toLocaleString('en-NZ', {
      timeZone: 'Pacific/Auckland',
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    sourceUrl: window.location.href,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, templateParams, PUBLIC_KEY);
};

export const sendReferralEmail = async (data: ReferralFormData) => {
  const templateParams = {
    referrerName: data.referrerName,
    referrerEmail: data.referrerEmail,
    referrerPhone: data.referrerPhone,
    businessName: data.businessName,
    contactName: data.contactName,
    contactEmail: data.contactEmail,
    contactPhone: data.contactPhone,
    notes: data.notes,
    submittedAt: new Date().toLocaleString('en-NZ', {
      timeZone: 'Pacific/Auckland',
      dateStyle: 'medium',
      timeStyle: 'short'
    }),
    sourceUrl: window.location.href,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_REFERRAL, templateParams, PUBLIC_KEY);
};
