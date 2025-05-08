(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    /* ----------------------------------------------------
       HEADER CAROUSEL – build / rebuild
    ---------------------------------------------------- */
    let headerOwl;                       // holds the live owl instance

    function buildHeaderCarousel() {

        const $carousel = $('.header-carousel');

        /* If an Owl instance already exists, destroy & unwrap it */
        if (headerOwl) {
            headerOwl.trigger('destroy.owl.carousel');
            $carousel.removeClass('owl-loaded owl-hidden');
            $carousel.find('.owl-stage-outer').children().unwrap(); // remove wrappers
        }

        /* Re‑initialise with correct direction */
        headerOwl = $carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            items: 1,
            nav: false,
            dots: false,
            rtl: (document.documentElement.lang === 'ar')   // flip dir
        });
    }

    /* Build once on initial page load */
    $(buildHeaderCarousel);

})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("languageButton");

    const elementsToTranslate = {
        // Navigation
        "homeNav": { en: "Home", ar: "الرئيسية" },
        "homeNav2": { en: "Home", ar: "الرئيسية" },
        "homeNav3": { en: "Home", ar: "الرئيسية" },
        "homeNav4": { en: "Home", ar: "الرئيسية" },
        "homeNav5": { en: "Home", ar: "الرئيسية" },
        "aboutNav": { en: "About", ar: "من نحن" },
        "aboutNav2": { en: "About", ar: "من نحن" },
        "aboutNav3": { en: "About", ar: "من نحن" },
        "aboutNav4": { en: "About us", ar: "من نحن" },
        "aboutNav5": { en: "About", ar: "من نحن" },
        "servicesNav": { en: "Services", ar: "الخدمات" },
        "servicesNav2": { en: "Services", ar: "الخدمات" },
        "servicesNav3": { en: "Services", ar: "الخدمات" },
        "servicesNav4": { en: "Services", ar: "الخدمات" },
        "contactNav": { en: "Contact", ar: "اتصل بنا" },
        "contactNav2": { en: "Contact", ar: "اتصل بنا" },
        "contactNav3": { en: "Contact", ar: "اتصل بنا" },
        "contactNav4": { en: "Contact", ar: "اتصل بنا" },
        "languageButton": { en: "عربي", ar: "English" },

        // Carousel
        "carouselTitle1": { en: "Building Tomorrow’s Infrastructure", ar: "بناء البنية التحتية للمستقبل" },
        "carouselText1": {
            en: "From bridges and highways to residential foundations, I deliver reliable and durable civil engineering solutions across all project scales.",
            ar: "من الجسور والطرق السريعة إلى الأساسات السكنية، أقدم حلول هندسية مدنية موثوقة ومتينة لجميع أحجام المشاريع."
        },
        "carouselButton1": { en: "My Services", ar: "خدماتي" },
        "carouselButton2": { en: "My Services", ar: "خدماتي" },
        "carouselTitle2": { en: "Smart Planning & Design Excellence", ar: "التخطيط الذكي والتميز في التصميم" },
        "carouselText2": {
            en: "I combine engineering precision with smart planning to deliver sustainable, cost-effective, and code-compliant designs.",
            ar: "أجمع بين الدقة الهندسية والتخطيط الذكي لتقديم تصاميم مستدامة وفعالة من حيث التكلفة ومتوافقة مع المعايير."
        },
        "carouselTitle3": { en: "Delivering Engineering Integrity", ar: "تقديم النزاهة الهندسية" },
        "carouselText3": {
            en: "With years of field experience and technical expertise, I manage projects that stand the test of time.",
            ar: "بفضل سنوات من الخبرة الميدانية والخبرة الفنية، أدير مشاريع تصمد أمام اختبار الزمن."
        },
        "carouselButton3": { en: "Get In Touch", ar: "تواصل معي" },

        // Facts
        "factTitle1": { en: "Structural Precision", ar: "الدقة الهيكلية" },
        "factText1": {
            en: "Every design is calculated with safety, material efficiency, and code compliance in mind for long-lasting performance.",
            ar: "يتم حساب كل تصميم مع مراعاة السلامة وكفاءة المواد والامتثال للمعايير لتحقيق أداء طويل الأمد."
        },
        "factTitle2": { en: "Engineering Innovation", ar: "الابتكار الهندسي" },
        "factText2": {
            en: "Modern technologies and smart planning approaches are integrated to meet project goals effectively and sustainably.",
            ar: "يتم دمج التقنيات الحديثة وأساليب التخطيط الذكية لتلبية أهداف المشروع بفعالية واستدامة."
        },
        "factTitle3": { en: "End-to-End Delivery", ar: "التسليم الشامل" },
        "factText3": {
            en: "From concept to completion, I manage timelines, quality, and coordination to deliver results with integrity and precision.",
            ar: "من المفهوم إلى الاكتمال، أدير الجداول الزمنية والجودة والتنسيق لتقديم نتائج بنزاهة ودقة."
        },

        // About
        "aboutTitle": { en: "About Us", ar: "من نحن" },
        "aboutTitle2": { en: "About Us", ar: "من نحن" },
        "aboutHeading": {
            en: "Experienced Civil Engineer Specialized in Structural & Infrastructure Projects",
            ar: "مهندس مدني ذو خبرة متخصص في المشاريع الهيكلية والبنية التحتية"
        },
        "aboutHeading2": {
            en: "Experienced Civil Engineer Specialized in Structural & Infrastructure Projects",
            ar: "مهندس مدني ذو خبرة متخصص في المشاريع الهيكلية والبنية التحتية"
        },
        "aboutText1": {
            en: "With over a decade of hands-on experience in civil engineering, I’ve led the design and execution of a wide range of projects—from residential foundations to large-scale road networks. My work is driven by technical precision, safety compliance, and sustainable practices.",
            ar: "مع أكثر من عقد من الخبرة العملية في الهندسة المدنية، قمت بقيادة تصميم وتنفيذ مجموعة واسعة من المشاريع — من الأساسات السكنية إلى شبكات الطرق واسعة النطاق. عملي مدفوع بالدقة الفنية والامتثال للسلامة والممارسات المستدامة."
        },
        "aboutText1-2": {
            en: "With over a decade of hands-on experience in civil engineering, I’ve led the design and execution of a wide range of projects—from residential foundations to large-scale road networks. My work is driven by technical precision, safety compliance, and sustainable practices.",
            ar: "مع أكثر من عقد من الخبرة العملية في الهندسة المدنية، قمت بقيادة تصميم وتنفيذ مجموعة واسعة من المشاريع — من الأساسات السكنية إلى شبكات الطرق واسعة النطاق. عملي مدفوع بالدقة الفنية والامتثال للسلامة والممارسات المستدامة."
        },
        "aboutText2": {
            en: "I collaborate closely with architects, contractors, and stakeholders to deliver practical, cost-effective solutions that stand the test of time. Whether it’s site supervision, quantity surveying, or full project lifecycle management—I bring clarity and excellence to every step.",
            ar: "أتعاون بشكل وثيق مع المهندسين المعماريين والمقاولين وأصحاب المصلحة لتقديم حلول عملية وفعالة من حيث التكلفة تصمد أمام اختبار الزمن. سواء كانت إشرافًا على الموقع أو حصرًا للكميات أو إدارة دورة حياة المشروع بالكامل — أضفي الوضوح والتميز على كل خطوة."
        },
        "aboutText2-2": {
            en: "I collaborate closely with architects, contractors, and stakeholders to deliver practical, cost-effective solutions that stand the test of time. Whether it’s site supervision, quantity surveying, or full project lifecycle management—I bring clarity and excellence to every step.",
            ar: "أتعاون بشكل وثيق مع المهندسين المعماريين والمقاولين وأصحاب المصلحة لتقديم حلول عملية وفعالة من حيث التكلفة تصمد أمام اختبار الزمن. سواء كانت إشرافًا على الموقع أو حصرًا للكميات أو إدارة دورة حياة المشروع بالكامل — أضفي الوضوح والتميز على كل خطوة."
        },
        "experienceYears": { en: "Years", ar: "سنوات" },
        "experienceYears2": { en: "Years", ar: "سنوات" },
        "experienceField": { en: "of Field", ar: "من الخبرة" },
        "experienceField2": { en: "of Field", ar: "من الخبرة" },
        "experienceText": { en: "Experience", ar: "العملية" },
        "experienceText2": { en: "Experience", ar: "العملية" },
        "aboutButton": { en: "Contact Me", ar: "اتصل بي" },
        "aboutButton2": { en: "Contact Me", ar: "اتصل بي" },

        // Services
        "expertiseTitle": { en: "My Expertise", ar: "خبرتي" },
        "expertiseHeading": { en: "Comprehensive Civil Engineering Services", ar: "خدمات هندسية مدنية شاملة" },
        "serviceTitle1": { en: "Structural Design", ar: "التصميم الهيكلي" },
        "serviceText1": {
            en: "Design and analysis of buildings and structures to ensure safety, durability, and code compliance.",
            ar: "تصميم وتحليل المباني والمنشآت لضمان السلامة والمتانة والامتثال للمعايير."
        },
        "serviceTitle2": { en: "Project Supervision", ar: "الإشراف على المشاريع" },
        "serviceText2": {
            en: "Field supervision and coordination to ensure on-site quality and adherence to engineering plans.",
            ar: "الإشراف الميداني والتنسيق لضمان الجودة في الموقع والالتزام بالخطط الهندسية."
        },
        "serviceTitle3": { en: "Quantity Surveying", ar: "حصر الكميات" },
        "serviceText3": {
            en: "Cost estimation and material quantity take-offs for residential, commercial, and infrastructure projects.",
            ar: "تقدير التكاليف وحصر كميات المواد للمشاريع السكنية والتجارية والبنية التحتية."
        },
        "serviceTitle4": { en: "Infrastructure Design", ar: "تصميم البنية التحتية" },
        "serviceText4": {
            en: "Design and planning of roads, drainage systems, water supply networks, and utilities.",
            ar: "تصميم وتخطيط الطرق وأنظمة الصرف وشبكات إمدادات المياه والمرافق."
        },
        "serviceTitle5": { en: "Quality Assurance", ar: "ضمان الجودة" },
        "serviceText5": {
            en: "Inspection and quality control of materials and construction work to meet specifications.",
            ar: "فحص ومراقبة جودة المواد وأعمال البناء لتلبية المواصفات."
        },
        "serviceTitle6": { en: "Scheduling & Planning", ar: "الجدولة والتخطيط" },
        "serviceText6": {
            en: "Development of Gantt charts, CPM schedules, and resource allocation plans for construction phases.",
            ar: "تطوير مخططات جانت وجداول CPM وخطط تخصيص الموارد لمراحل البناء."
        },

        // Feature
        "whyChooseTitle": { en: "Why Choose Me!", ar: "لماذا تختارني!" },
        "whyChooseTitle2": { en: "Why Choose Me!", ar: "لماذا تختارني!" },
        "whyChooseHeading": {
            en: "Committed to Precision, Practicality, and Performance",
            ar: "ملتزم بالدقة والعملية والأداء"
        },
        "whyChooseHeading2": {
            en: "Committed to Precision, Practicality, and Performance",
            ar: "ملتزم بالدقة والعملية والأداء"
        },
        "whyChooseText": {
            en: "As a civil engineer, I combine technical expertise with a hands-on approach to deliver solutions that are both innovative and grounded in real-world experience. I bring value to every project by balancing efficiency, safety, and durability.",
            ar: "بصفتي مهندسًا مدنيًا، أجمع بين الخبرة الفنية والنهج العملي لتقديم حلول مبتكرة وقائمة على الخبرة الواقعية. أضيف قيمة إلى كل مشروع من خلال تحقيق التوازن بين الكفاءة والسلامة والمتانة."
        },
        "whyChooseText2": {
            en: "As a civil engineer, I combine technical expertise with a hands-on approach to deliver solutions that are both innovative and grounded in real-world experience. I bring value to every project by balancing efficiency, safety, and durability.",
            ar: "بصفتي مهندسًا مدنيًا، أجمع بين الخبرة الفنية والنهج العملي لتقديم حلول مبتكرة وقائمة على الخبرة الواقعية. أضيف قيمة إلى كل مشروع من خلال تحقيق التوازن بين الكفاءة والسلامة والمتانة."
        },
        "featureTitle1": { en: "Engineered Accuracy", ar: "دقة هندسية" },
        "featureTitle1-1": { en: "Engineered Accuracy", ar: "دقة هندسية" },
        "featureText1": {
            en: "Every drawing, calculation, and inspection is executed with a commitment to structural integrity and regulatory compliance.",
            ar: "يتم تنفيذ كل رسم وحساب وفحص مع الالتزام بالسلامة الهيكلية والامتثال التنظيمي."
        },
        "featureText1-2": {
            en: "Every drawing, calculation, and inspection is executed with a commitment to structural integrity and regulatory compliance.",
            ar: "يتم تنفيذ كل رسم وحساب وفحص مع الالتزام بالسلامة الهيكلية والامتثال التنظيمي."
        },
        "featureTitle2": { en: "Smart & Sustainable Solutions", ar: "حلول ذكية ومستدامة" },
        "featureTitle2-2": { en: "Smart & Sustainable Solutions", ar: "حلول ذكية ومستدامة" },
        "featureText2": {
            en: "Whether it’s infrastructure or buildings, I incorporate modern methods and eco-conscious strategies in every stage of the project.",
            ar: "سواء كانت بنية تحتية أو مباني، أقوم بدمج الأساليب الحديثة والاستراتيجيات الصديقة للبيئة في كل مرحلة من مراحل المشروع."
        },
        "featureText2-2": {
            en: "Whether it’s infrastructure or buildings, I incorporate modern methods and eco-conscious strategies in every stage of the project.",
            ar: "سواء كانت بنية تحتية أو مباني، أقوم بدمج الأساليب الحديثة والاستراتيجيات الصديقة للبيئة في كل مرحلة من مراحل المشروع."
        },
        "featureTitle3": { en: "Professional Project Oversight", ar: "إشراف احترافي على المشروع" },
        "featureTitle3-2": { en: "Professional Project Oversight", ar: "إشراف احترافي على المشروع" },
        "featureText3": {
            en: "I manage timelines, quality, and communication across teams to ensure your project is delivered successfully from start to finish.",
            ar: "أقوم بإدارة الجداول الزمنية والجودة والتواصل بين الفرق لضمان تسليم مشروعك بنجاح من البداية إلى النهاية."
        },
        "featureText3-2": {
            en: "I manage timelines, quality, and communication across teams to ensure your project is delivered successfully from start to finish.",
            ar: "أقوم بإدارة الجداول الزمنية والجودة والتواصل بين الفرق لضمان تسليم مشروعك بنجاح من البداية إلى النهاية."
        },

        // Appointment/Contact
        "getInTouchTitle": { en: "Get In Touch", ar: "تواصل معي" },
        "getInTouchTitle2": { en: "Get In Touch", ar: "تواصل معي" },
        "getInTouchHeading": {
            en: "Let’s Discuss Your Project or Engineering Needs",
            ar: "دعنا نناقش مشروعك أو احتياجاتك الهندسية"
        },
        "getInTouchHeading2": {
            en: "Let’s Discuss Your Project or Engineering Needs",
            ar: "دعنا نناقش مشروعك أو احتياجاتك الهندسية"
        },
        "getInTouchText": {
            en: "Whether you're planning a structural development, infrastructure project, or need consultation, I’m available to assist with expert insight and practical solutions.",
            ar: "سواء كنت تخطط لتطوير هيكلي أو مشروع بنية تحتية أو تحتاج إلى استشارة، فأنا متاح للمساعدة برؤى الخبراء وحلول عملية."
        },
        "getInTouchText2": {
            en: "Whether you're planning a structural development, infrastructure project, or need consultation, I’m available to assist with expert insight and practical solutions.",
            ar: "سواء كنت تخطط لتطوير هيكلي أو مشروع بنية تحتية أو تحتاج إلى استشارة، فأنا متاح للمساعدة برؤى الخبراء وحلول عملية."
        },
        "callMe": { en: "Call Me", ar: "اتصل بي" },
        "callMe2": { en: "Call Me", ar: "اتصل بي" },
        "emailMe": { en: "Email Me", ar: "راسلني عبر البريد الإلكتروني" },
        "emailMe2": { en: "Email Me", ar: "راسلني عبر البريد الإلكتروني" },
        "contactMessage": {
            en: "I'm ready to bring your vision to life. Reach out to start your next project with confidence.",
            ar: "أنا على استعداد لتحقيق رؤيتك. تواصل معي لبدء مشروعك التالي بثقة."
        },
        "contactMessage2": {
            en: "I'm ready to bring your vision to life. Reach out to start your next project with confidence.",
            ar: "أنا على استعداد لتحقيق رؤيتك. تواصل معي لبدء مشروعك التالي بثقة."
        },

        // Footer
        "contactFooterTitle": { en: "Contact us", ar: "تواصل بنا" },
        "contactFooterTitle2": { en: "Contact us", ar: "تواصل بنا" },
        "contactFooterTitle3": { en: "Contact us", ar: "تواصل بنا" },
        "addressText": { en: "123 Engineering St, City, Country", ar: "123 شارع الهندسة، المدينة، الدولة" },
        "addressText2": { en: "123 Engineering St, City, Country", ar: "123 شارع الهندسة، المدينة، الدولة" },
        "engineeringServicesTitle": { en: "Engineering Services", ar: "الخدمات الهندسية" },
        "engineeringServicesTitle2": { en: "Engineering Services", ar: "الخدمات الهندسية" },
        "quickLinksTitle": { en: "Quick Links", ar: "روابط سريعة" },
        "quickLinksTitle2": { en: "Quick Links", ar: "روابط سريعة" },
        "aboutMeLink": { en: "About Me", ar: "عني" },
        "aboutMeLink2": { en: "About Me", ar: "عني" },
        "contactLink": { en: "Contact", ar: "اتصل" },
        "contactLink2": { en: "Contact", ar: "اتصل" },
        "servicesLink": { en: "Services", ar: "الخدمات" },
        "servicesLink2": { en: "Services", ar: "الخدمات" },
        "structuralLink": { en: "Structural Design", ar: "التصميم الإنشائي" },
        "structuralLink2": { en: "Structural Design", ar: "التصميم الإنشائي" },
        "supervisionLink": { en: "Project Supervision", ar: "الإشراف على المشروع" },
        "supervisionLink2": { en: "Project Supervision", ar: "الإشراف على المشروع" },
        "infrastructureLink": { en: "Infrastructure Planning", ar: "تخطيط البنية التحتية" },
        "infrastructureLink2": { en: "Infrastructure Planning", ar: "تخطيط البنية التحتية" },
        "qualityLink": { en: "Quality Assurance", ar: "ضمان الجودة" },
        "qualityLink2": { en: "Quality Assurance", ar: "ضمان الجودة" },
        "quantityLink": { en: "Quantity Surveying", ar: "حصر الكميات" },
        "quantityLink2": { en: "Quantity Surveying", ar: "حصر الكميات" },
        "phoneNumber1": { en: "+123 456 7890", ar: "+123 456 7890" },
        "phoneNumber2": { en: "+123 456 7890", ar: "+123 456 7890" },
        "phoneNumber3": { en: "+123 456 7890", ar: "+123 456 7890" },
    };

    let currentLanguage = localStorage.getItem("language") || "ar";

    function updateLanguage() {
        for (const id in elementsToTranslate) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elementsToTranslate[id][currentLanguage];
            }
        }

        // تحديث لغة الصفحة واتجاه النص
        document.documentElement.lang = currentLanguage === "en" ? "en" : "ar";
        // document.style.direction = currentLanguage === "en" ? "ltr" : "rtl";
        document.body.style.textAlign = currentLanguage === "en" ? "left" : "right";
        if (languageButton) {
            languageButton.textContent = elementsToTranslate["languageButton"][currentLanguage];
        }

    }

    languageButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "ar" : "en";
        localStorage.setItem("language", currentLanguage);
        updateLanguage();
        console.log(localStorage.getItem("language"));
    });

    updateLanguage(); // تطبيق اللغة المختارة عند تحميل الصفحة
});