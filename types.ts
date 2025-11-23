export type Language = 'en' | 'cn';

export interface ContentData {
  nav: {
    home: string;
    syllabus: string;
    about: string;
    contact: string;
    chat: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    desc: string;
    philosophyTitle: string;
    philosophyDesc: string;
  };
  syllabus: {
    title: string;
    subtitle: string;
    primaryTitle: string;
    primaryDesc: string;
    secondaryTitle: string;
    secondaryDesc: string;
    subjects: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
