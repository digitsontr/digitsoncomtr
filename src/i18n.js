import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
      translation: {
        "Main Page" : "Anasayfa",
        "About Us" : "Hakkımızda",
        "Services" : "Hizmetlerimiz",
        "Projects" : "Projelerimiz",
        "As DIGITSON Team, we are a company that is passionate about technology and undertakes many projects in the field of software." : "DIGITSON Ekibi olarak teknoloji tutkusu ile yanan ve yazılım alanında bir çok proje üstlenen bir şirketiz.",
        "RELIABLE ADDRESS FOR DEVELOPMENT" : "GELİŞİMİN GÜVENİLİR ADRESİ",
        "In the intertwined realms of these technology fields, we envision a software world where innovation, creativity, and quality take center stage. By aiming for excellence in our projects, we aspire to provide solutions to our clients needs. With complementary skill sets, we aim to make a mark in the digital world" : "Bu teknoloji alanlarının iç içe geçmiş alanlarında yenilikçiliğin, yaratıcılığın ve kalitenin ön planda olduğu bir yazılım dünyası hayal ediyoruz. Projelerimizde mükemmelliği hedefleyerek müşterilerimizin ihtiyaçlarına çözüm sunmayı amaçlıyoruz. Tamamlayıcı beceri setleriyle dijital dünyada iz bırakmayı hedefliyoruz.",
        "We create a strong synergy when we come together while researching our areas of expertise. We establish solid infrastructures, offer data analysis and artificial intelligence solutions, design impressive and user-friendly commands, and develop advanced applications in the mobile field." : "Uzmanlık alanlarımızı araştırırken bir araya geldiğimizde güçlü bir sinerji yaratıyoruz.Sağlam altyapılar kuruyor, veri analizi ve yapay zeka çözümleri sunuyor, etkileyici ve kullanıcı dostu komutlar tasarlıyor, mobil alanda gelişmiş uygulamalar geliştiriyoruz.",
        "Services" : "Hizmetlerimiz",
        "EXPERTISE AREAS" : "UZMANLIK ALANLARI",
        "As the Digitson team, we came together to create a strong team by combining our passion for developing technology. Specializing in Python, .Net, React, Android and mobile technologies, each of us brings deep knowledge and experience to our respective fields." : "Biz Digitson ekibi olarak teknoloji geliştiren tutkumuzu birleştirerek güçlü bir ekip oluşturmak için bir araya geldik. Python, .Net, React, Android ve mobil teknolojilerinde uzmanlaşan her birimiz, kendi alanlarımıza derin bilgi ve deneyim kazandırıyoruz.",
        "We offer customized solutions with .NET technology for robust and reliable web applications. We are the right choice for innovative and scalable projects." : "Sağlam ve güvenilir web uygulamaları için .NET teknolojisi ile özelleştirilmiş çözümler sunuyoruz. Yenilikçi ve ölçeklenebilir projeler için doğru tercih biziz.",
        "Leveraging the flexibility and power of Python, we bring your projects to life in areas such as data analysis, artificial intelligence, and machine learning. We're here to turn your problems into data-driven solutions." : "Python'un esnekliğinden ve gücünden yararlanarak veri analizi, yapay zeka ve makine öğrenimi gibi alanlarda projelerinizi hayata geçiriyoruz. Sorunlarınızı veri odaklı çözümlere dönüştürmek için buradayız.",
        "We design modern web applications with React for user-friendly interfaces and impressive user experience. We elevate your brand with interactive and customized solutions." : "Kullanıcı dostu arayüzler ve etkileyici kullanıcı deneyimi için React ile modern web uygulamaları tasarlıyoruz. İnteraktif ve kişiye özel çözümlerle markanızı yükseltiyoruz.",
        "We develop original and innovative Android applications for smartphones and tablets. We support you in maximizing your potential on mobile devices." : "Akıllı telefonlar ve tabletler için özgün ve yenilikçi Android uygulamaları geliştiriyoruz. Mobil cihazlardaki potansiyelinizi en üst düzeye çıkarmanıza destek oluyoruz.",
        "Utilizing the power of SharePoint, we provide customized solutions tailored to your corporate needs in collaboration, document management, and content creation. We're here to increase productivity and optimize your workflows." : "SharePoint'in gücünden yararlanarak işbirliği, belge yönetimi ve içerik oluşturma konularında kurumsal ihtiyaçlarınıza göre özelleştirilmiş çözümler sunuyoruz. Üretkenliği artırmak ve iş akışlarınızı optimize etmek için buradayız.",
        "eCommerce" : "e-Ticaret",
        "We offer customized e-commerce solutions for businesses looking to sell online. By providing a secure and user-friendly shopping experience, we help you increase your online sales." : "Çevrimiçi satış yapmak isteyen işletmeler için özelleştirilmiş e-ticaret çözümleri sunuyoruz. Güvenli ve kullanıcı dostu bir alışveriş deneyimi sunarak online satışlarınızı artırmanıza yardımcı oluyoruz.",
        "Projects" : "Projeler",
        "At our business, we boast an extensive portfolio of projects catering to clients from various sectors. Each project is meticulously planned and executed, designed to meet our clients' needs and exceed their expectations. Our solutions are backed by innovative approaches, reliable technologies, and comprehensive expertise. With a customer-centric approach and a commitment to quality service, we aim to achieve success in every project we undertake.": "İşimizde, çeşitli sektörlerden müşterilere hizmet veren geniş bir proje portföyüne sahibiz. Her proje, müşterilerimizin ihtiyaçlarını karşılamak ve beklentilerini aşmak için titizlikle planlanıp yürütülür. Çözümlerimiz yenilikçi yaklaşımlar, güvenilir teknolojiler ve kapsamlı uzmanlıkla desteklenmektedir. Müşteri odaklı yaklaşımımız ve kaliteli hizmet anlayışımızla üstlendiğimiz her projede başarıya ulaşmayı hedefliyoruz.",
        "All" : "Tümü",
        "Contact Us" : "Bize Ulaşın",
        "Have a question or inquiry? Don't hesitate to get in touch with us! Our team is here to assist you. Whether you're interested in our services, have feedback, or simply want to say hello, we'd love to hear from you. Feel free to reach out through below via the contact information provided. We look forward to connecting with you!" : "Bir sorunuz veya sorunuz mu var? Bizimle iletişime geçmekten çekinmeyin! Ekibimiz size yardımcı olmak için burada. Hizmetlerimizle ilgileniyorsanız, geri bildirimde bulunuyorsanız veya sadece merhaba demek istiyorsanız, sizden haber almaktan memnuniyet duyarız. Aşağıda verilen iletişim bilgileri aracılığıyla bize ulaşmaktan çekinmeyin. Sizinle bağlantı kurmayı sabırsızlıkla bekliyoruz!",
        "Location" : "Lokasyon",
        "Turkey - Ankara" : "Turkiye - Ankara",
        





      }
    },
    en: {
      translation: {
        "Main Page": "Main Page" ,
        "About Us" : "About Us",
        "Services" : "Services",
        "Projects" : "Projects",
        "Contact Us" : "Contact Us",
        "As DIGITSON Team, we are a company that is passionate about technology and undertakes many projects in the field of software." : "As DIGITSON Team, we are a company that is passionate about technology and undertakes many projects in the field of software.",
        "RELIABLE ADDRESS FOR DEVELOPMENT" : "RELIABLE ADDRESS FOR DEVELOPMENT",
        "In the intertwined realms of these technology fields, we envision a software world where innovation, creativity, and quality take center stage. By aiming for excellence in our projects, we aspire to provide solutions to our clients needs. With complementary skill sets, we aim to make a mark in the digital world" : "In the intertwined realms of these technology fields, we envision a software world where innovation, creativity, and quality take center stage. By aiming for excellence in our projects, we aspire to provide solutions to our clients needs. With complementary skill sets, we aim to make a mark in the digital world",
        "We create a strong synergy when we come together while researching our areas of expertise. We establish solid infrastructures, offer data analysis and artificial intelligence solutions, design impressive and user-friendly commands, and develop advanced applications in the mobile field." : "We create a strong synergy when we come together while researching our areas of expertise. We establish solid infrastructures, offer data analysis and artificial intelligence solutions, design impressive and user-friendly commands, and develop advanced applications in the mobile field.",
        "Services" : "Services",
        "EXPERTISE AREAS" : "EXPERTISE AREAS",
        "As the Digitson team, we came together to create a strong team by combining our passion for developing technology. Specializing in Python, .Net, React, Android and mobile technologies, each of us brings deep knowledge and experience to our respective fields." : "As the Digitson team, we came together to create a strong team by combining our passion for developing technology. Specializing in Python, .Net, React, Android and mobile technologies, each of us brings deep knowledge and experience to our respective fields.",
        "We offer customized solutions with .NET technology for robust and reliable web applications. We are the right choice for innovative and scalable projects." : "We offer customized solutions with .NET technology for robust and reliable web applications. We are the right choice for innovative and scalable projects.",
        "Leveraging the flexibility and power of Python, we bring your projects to life in areas such as data analysis, artificial intelligence, and machine learning. We're here to turn your problems into data-driven solutions." : "Leveraging the flexibility and power of Python, we bring your projects to life in areas such as data analysis, artificial intelligence, and machine learning. We're here to turn your problems into data-driven solutions.",
        "We design modern web applications with React for user-friendly interfaces and impressive user experience. We elevate your brand with interactive and customized solutions." : "We design modern web applications with React for user-friendly interfaces and impressive user experience. We elevate your brand with interactive and customized solutions.",
        "We develop original and innovative Android applications for smartphones and tablets. We support you in maximizing your potential on mobile devices." : "We develop original and innovative Android applications for smartphones and tablets. We support you in maximizing your potential on mobile devices.",
        "Utilizing the power of SharePoint, we provide customized solutions tailored to your corporate needs in collaboration, document management, and content creation. We're here to increase productivity and optimize your workflows." : "Utilizing the power of SharePoint, we provide customized solutions tailored to your corporate needs in collaboration, document management, and content creation. We're here to increase productivity and optimize your workflows.",
        "eCommerce": "eCommerce",
        "We offer customized e-commerce solutions for businesses looking to sell online. By providing a secure and user-friendly shopping experience, we help you increase your online sales." : "We offer customized e-commerce solutions for businesses looking to sell online. By providing a secure and user-friendly shopping experience, we help you increase your online sales.",
        "Projects" : "Projects",
        "At our business, we boast an extensive portfolio of projects catering to clients from various sectors. Each project is meticulously planned and executed, designed to meet our clients' needs and exceed their expectations. Our solutions are backed by innovative approaches, reliable technologies, and comprehensive expertise. With a customer-centric approach and a commitment to quality service, we aim to achieve success in every project we undertake." : "At our business, we boast an extensive portfolio of projects catering to clients from various sectors. Each project is meticulously planned and executed, designed to meet our clients' needs and exceed their expectations. Our solutions are backed by innovative approaches, reliable technologies, and comprehensive expertise. With a customer-centric approach and a commitment to quality service, we aim to achieve success in every project we undertake.",
        "All" : "All",
        "Contact Us" : "Contact Us",
        "Have a question or inquiry? Don't hesitate to get in touch with us! Our team is here to assist you. Whether you're interested in our services, have feedback, or simply want to say hello, we'd love to hear from you. Feel free to reach out through below via the contact information provided. We look forward to connecting with you!" : "Have a question or inquiry? Don't hesitate to get in touch with us! Our team is here to assist you. Whether you're interested in our services, have feedback, or simply want to say hello, we'd love to hear from you. Feel free to reach out through below via the contact information provided. We look forward to connecting with you!",
        "Location" : "Location",
        "Turkey - Ankara" : "Turkey - Ankara",
        




      }
    }
  };

  i18n
  .use(initReactI18next)
  .init({
    lng : "en",
    resources
  }) 

  export default i18n
  