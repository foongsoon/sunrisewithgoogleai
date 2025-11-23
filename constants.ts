import { ContentData, Language } from './types';

export const CONTACT_INFO = {
  phone: "+6 012-425 1556",
  whatsapp: "+60124251556",
  email: "LOVE@sun.edu.my",
  website: "www.sun.edu.my",
  address: "No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia",
  facebook: "https://www.facebook.com/SunriseResourceCentre"
};

export const CONTENT: Record<Language, ContentData> = {
  en: {
    nav: {
      home: "Home",
      syllabus: "Syllabus",
      about: "About Us",
      contact: "Contact",
      chat: "Ask AI"
    },
    hero: {
      title: "Shining a Light on Your Child's Future",
      subtitle: "Cambridge IGCSE Syllabus (Primary & Secondary) | Holistic Education",
      cta: "Explore Our Programs"
    },
    about: {
      title: "About Sunrise Education",
      desc: "Sunrise Education is a premier learning centre in Klang, dedicated to providing high-quality education based on the Cambridge IGCSE curriculum. We believe in nurturing not just students, but future leaders.",
      philosophyTitle: "Our Philosophy",
      philosophyDesc: "We provide a happy, safe, and conducive environment where learning becomes a joyful journey. Our approach blends academic rigour with character building."
    },
    syllabus: {
      title: "Our Curriculum",
      subtitle: "World-Class Cambridge IGCSE Education",
      primaryTitle: "Cambridge Primary",
      primaryDesc: "Building a strong foundation in English, Mathematics, and Science. We focus on developing creativity, expression, and personal well-being for students aged 5-11.",
      secondaryTitle: "Cambridge Lower Secondary & IGCSE",
      secondaryDesc: "Preparing students for the world's most popular international qualification for 14 to 16 year olds. Our comprehensive program ensures readiness for universities worldwide.",
      subjects: "Key Subjects: English, Mathematics, Science (Physics, Chemistry, Biology), ICT, Business Studies, and more."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Visit us or drop a message.",
      addressLabel: "Address",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Message",
      formSubmit: "Send Message"
    }
  },
  cn: {
    nav: {
      home: "首页",
      syllabus: "课程大纲",
      about: "关于我们",
      contact: "联系我们",
      chat: "AI 助手"
    },
    hero: {
      title: "照亮孩子的未来",
      subtitle: "剑桥 IGCSE 课程 (小学与中学) | 更多丰富快乐内容",
      cta: "探索我们的课程"
    },
    about: {
      title: "关于 Sunrise Education",
      desc: "Sunrise Education 是位于巴生的一流学习中心，致力于提供基于剑桥 IGCSE 课程的高质量教育。我们坚信，不仅要培养学生，更要培养未来的领导者。",
      philosophyTitle: "我们的教育理念",
      philosophyDesc: "我们提供一个快乐、安全且有利于学习的环境，让学习成为一段充满喜悦的旅程。我们的方法融合了学术严谨性与品格塑造。"
    },
    syllabus: {
      title: "课程设置",
      subtitle: "世界级剑桥 IGCSE 教育",
      primaryTitle: "剑桥小学课程",
      primaryDesc: "在英语、数学和科学方面打下坚实基础。我们专注于培养 5-11 岁学生的创造力、表达能力和个人身心健康。",
      secondaryTitle: "剑桥初中与 IGCSE",
      secondaryDesc: "为 14 至 16 岁学生准备全球最受欢迎的国际资格证书。我们全面的课程确保学生为进入世界各地的大学做好准备。",
      subjects: "主要科目：英语、数学、科学（物理、化学、生物）、信息通信技术、商业研究等。"
    },
    contact: {
      title: "联系我们",
      subtitle: "我们期待您的来信。欢迎来访或留言。",
      addressLabel: "地址",
      phoneLabel: "电话 / WhatsApp",
      emailLabel: "电子邮件",
      formName: "您的姓名",
      formEmail: "您的邮箱",
      formMessage: "留言内容",
      formSubmit: "发送信息"
    }
  }
};
