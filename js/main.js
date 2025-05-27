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
        // Projects section
        "projectsTitle": {
            en: "Our Projects",
            ar: "مشاريعنا"
        },
        "projectsTitle2": {
            "en": "Supervisory and Execution Drawings",
            "ar": "الرسومات الإشرافية والتنفيذية"
        },
        "projectsSubTitle": {
            en: "Supervision and implementation",
            ar: "الإشراف والتنفيذ"
        },
        "projectsHeading": {
            en: "Visit Our Latest Projects And Our Innovative Works",
            ar: "تصفَّح أحدث مشاريعنا وأعمالنا الابتكارية"
        },
        "projectsHeading2": {
            en: "Explore Our Detailed Shop Drawings And Technical Submittals",
            ar: "تصفح رسوماتنا التنفيذية التفصيلية والتقديمات الفنية"
        },
        "project1": {
            "en": "01. French Restaurant",
            "ar": "01. المطعم الفرنسي"
        },
        "project2": {
            "en": "02. AL-Waha Boulevard",
            "ar": "02. الواحة بوليڤارد"
        },
        "project3": {
            en: "01. Boutique Hotel",
            ar: "01. فندق بوتيك"
        },

        "project4": {
            en: "02. Mixed‑Use High‑Rise Building",
            ar: "02. برج متعدد الاستخدامات"
        },
        "project5": {
            en: "03. Villa Complex",
            ar: "03. مجمع الفلل"
        },
        "project6": {
            en: "04. Car Museum",
            ar: "04. متحف السيارات"
        },
        "project7": {
            en: "05. Convention Center",
            ar: "05. مركز المؤتمرات"
        },

        // ===== French Restaurant =====
        "proj1Heading": {
            "en": "French Restaurant – Sophisticated Dining Experience",
            "ar": "المطعم الفرنسي – تجربة طعام راقية"
        },
        "proj1Desc": {
            "en": "An elegant French restaurant featuring intimate table settings, ambient warm lighting, and custom wood partitions that evoke the charm of a Parisian bistro.",
            "ar": "مطعم فرنسي أنيق يتميز بأجواء حميمة على الطاولات، إضاءة دافئة وجذابة، وفواصل خشبية مخصصة تعكس سحر البسترو الباريسي."
        },
        "proj1Point1": {
            "en": "Fine French Cuisine",
            "ar": "مأكولات فرنسية فاخرة"
        },
        "proj1Point2": {
            "en": "Ambient Warm Lighting",
            "ar": "إضاءة دافئة وجذابة"
        },
        "proj1Point3": {
            "en": "Elegant Wood Partitions",
            "ar": "فواصل خشبية أنيقة"
        }
        ,

        // ===== AL-Waha Boulevard =====

        "proj2Heading": {
            en: "AL-Waha Boulevard – Premium Commercial Complex",
            ar: "بوليفارد الواحة – مجمع تجاري متميز"
        },
        "proj2Desc": {
            en: "60,000 m² commercial boulevard featuring spacious retail areas, modern office spaces, and an elegant central plaza designed for optimal visitor experience and business functionality.",
            ar: "بوليفارد تجاري بمساحة 60 ألف م² يضم مناطق تسوق واسعة، ومساحات مكتبية حديثة، وساحة مركزية أنيقة مصممة لتوفير تجربة مثالية للزوار وفعالية عملية للأعمال."
        },
        "proj2Point1": { en: "Sustainable Design", ar: "تصميم مستدام" },
        "proj2Point2": { en: "Premium Finishes", ar: "تشطيبات فاخرة" },
        "proj2Point3": { en: "Integrated Smart Systems", ar: "أنظمة ذكية متكاملة" },

        // ===== Boutique Hotel =====
        "proj3Heading": {
            en: "Boutique Hotel – Elegant Urban Retreat",
            ar: "فندق بوتيك – ملاذ حضري أنيق"
        },
        "proj3Desc": {
            en: "A 70‑room boutique hotel blending contemporary design with local heritage. Focus on smart space planning, daylight optimisation and LEED‑Gold sustainability.",
            ar: "فندق يضم 70 غرفة يمزج بين التصميم العصري والتراث المحلي، مع تركيز على التخطيط الذكي للإضاءة الطبيعية ومعايير الاستدامة (شهادة LEED‑Gold)."
        },
        "proj3Point1": { en: "Context‑Sensitive Façade", ar: "واجهة منسجمة مع السياق" },
        "proj3Point2": { en: "Energy‑Efficient MEP", ar: "أنظمة كهروميكانيكية موفرة للطاقة" },
        "proj3Point3": { en: "Turn‑key Delivery", ar: "تسليم مفتاح" },


        // ===== Mixed‑Use High‑Rise =====
        "proj4Heading": {
            "en": "Mixed-Use Complex & High-Rise – Coastal Landmark",
            "ar": "مجمع متعدد الاستخدامات وبرج مرتفع – معلم ساحلي"
        },
        "proj4Desc": {
            "en": "A dynamic mixed-use complex with a curving retail podium and promenade, capped by two high-rise towers housing residential and office spaces. Sky-bridges, rooftop gardens, and panoramic sea views define its coastal identity.",
            "ar": "مجمع ديناميكي متعدد الاستخدامات بمنصة تجزئة منحنية وممشى بحري، تتوج به برجتان مرتفعتان يضمان وحدات سكنية ومكاتب. جسور سماء وحدائق على الأسطح وإطلالات بانورامية على البحر تميز الهوية الساحلية للمشروع."
        },
        "proj4Point1": {
            "en": "Curved Podium & Promenade",
            "ar": "منصة منحنية وممشى بحري"
        },
        "proj4Point2": {
            "en": "Interconnected Sky-Bridges",
            "ar": "جسور سماء متصلة"
        },
        "proj4Point3": {
            "en": "Rooftop Gardens & Sea Views",
            "ar": "حدائق على الأسطح وإطلالات بحرية"
        }
        ,
        // ===== Villa Complex =====
        "proj5Heading": {
            "en": "Villa Complex – Modern Terrace Residences",
            "ar": "مجمع الفلل – مساكن تراس عصرية"
        },
        "proj5Desc": {
            "en": "A contemporary villa complex featuring clean-lined façades with warm wood accents, private garages, landscaped front yards, and rooftop terraces. Designed for family comfort with integrated security and shared green spaces.",
            "ar": "مجمع فلل معاصرة يتميز بواجهات نظيفة مع لمسات خشبية دافئة، مداخل ومرائب خاصة، حدائق أمامية منسقة، وتراسات على الأسطح. صُمّم لراحة العائلة مع تكامل الأمان ومساحات خضراء مشتركة."
        },
        "proj5Point1": {
            "en": "Private Garages & Entrances",
            "ar": "مداخل ومرائب خاصة"
        },
        "proj5Point2": {
            "en": "Rooftop Terraces & Balconies",
            "ar": "تراسات وشرفات خاصة"
        },
        "proj5Point3": {
            "en": "Landscaped Front Yards",
            "ar": "حدائق أمامية منسقة"
        }
        ,

        // ===== Car Museum =====
        "proj6Heading": {
            "en": "Car Museum – Innovative Exhibition Pavilion",
            "ar": "متحف السيارات – جناح عرض مبتكر"
        },
        "proj6Desc": {
            "en": "This car museum features an angular, pavilion-style roof geometry and integrated pathways set against a dramatic cliff backdrop. The design includes flexible galleries, covered outdoor exhibits, and seamless visitor circulation.",
            "ar": "يتميز هذا المتحف بعناصر سقفية هندسية زاويّة على شكل جناح ومسارات متكاملة أمام واجهة صخرية درامية. يتضمن التصميم صالات عرض مرنة، ومعارض خارجية مغطاة، وتنقل سلس للزوار."
        },
        "proj6Point1": {
            "en": "Pavilion-Style Roof Geometry",
            "ar": "هندسة سقوف على هيئة جناح"
        },
        "proj6Point2": {
            "en": "Seamless Visitor Circulation",
            "ar": "تنقل سلس للزوار"
        },
        "proj6Point3": {
            "en": "Flexible Exhibition Spaces",
            "ar": "مساحات عرض مرنة"
        },

        // ===== Convention Center =====
        "proj7Heading": {
            "en": "Convention Center – Geodesic Dome Complex",
            "ar": "مركز المؤتمرات – مجمع القباب الجيوديسية"
        },
        "proj7Desc": {
            "en": "A dynamic convention center formed of interconnected geodesic domes beneath a sweeping curved roof, nestled against the hillside. Features include flexible multi-level halls, an integrated rainwater collection basin, and seamless indoor-outdoor circulation.",
            "ar": "مركز مؤتمرات ديناميكي يتألف من قبب جيوديسية متصلة تحت سقف منحني انسيابي، مدموج مع التضاريس الجبلية. يضم صالات مرنة متعددة المستويات، حوضًا لتجميع مياه الأمطار، وتنقّلًا سلسًا بين المساحات الداخلية والخارجية."
        },
        "proj7Point1": {
            "en": "Interconnected Geodesic Domes",
            "ar": "قبب جيوديسية متصلة"
        },
        "proj7Point2": {
            "en": "Rainwater Collection Basin",
            "ar": "حوض لتجميع مياه الأمطار"
        },
        "proj7Point3": {
            "en": "Multi-Level Flexible Halls",
            "ar": "صالات مرنة متعددة المستويات"
        }
        ,
        //INTERIOR DESIGN
        "interiorDesign": {
            "en": "Int. Des.",
            "ar": "التصميم الداخلي"
        },
        "interiorDesign2": {
            "en": "Interior Design",
            "ar": "التصميم الداخلي"
        }
        ,
        "interiorDesignSubTitle": {
            "en": "Designing Beautiful, Practical Interiors",
            "ar": "تصميم مساحات جميلة وعملية"
        }
        ,
        "interiorGalleryTitle": {
            "en": "Our Pro Interior Designs",
            "ar": "مشاريع التصميم الداخلي الاحترافية"
        }
        ,
        "interiorGalleryHeading": {
            "en": "Gallery",
            "ar": "المعرض"
        }
        ,
        // Gallery Section
        "gallerySectionTitle": { en: "Our Pro Interior Designs", ar: "تصاميمنا الداخلية الاحترافية" },
        "galleryMainHeading": { en: "Gallery", ar: "المعرض" },
        "filterAll": { en: "All", ar: "الكل" },
        // Shop Drawings
        "shopDrawing": {
            en: "Supv. & Impl.",
            ar: "الإشراف والتنفيذ"
        }
        ,
        "shopDrawing1-2": {
            "en": "Supv. & Impl.",
            "ar": "الإشراف والتنفيذ"
        }
        ,
        "shopDrawing2": {
            "en": "Supervisory and Execution Drawings",
            "ar": "الرسومات الإشرافية والتنفيذية"
        }
        ,
        // Brand
        "brand": { en: "Arch.Aya Alsaadi", ar: "م.آية السعدي" },
        // Navigation
        "homeNav": { en: "Home", ar: "الرئيسية" },
        "homeNav2": { en: "Home", ar: "الرئيسية" },
        "homeNav3": { en: "Home", ar: "الرئيسية" },
        "homeNav4": { en: "Home", ar: "الرئيسية" },
        "homeNav5": { en: "Home", ar: "الرئيسية" },
        "aboutNav": { en: "About", ar: "من أنا" },
        "aboutNav2": { en: "About", ar: "من أنا" },
        "aboutNav3": { en: "About", ar: "من أنا" },
        "aboutNav4": { en: "About", ar: "من أنا" },
        "aboutNav5": { en: "About", ar: "من أنا" },
        "projects": { en: "Projects", ar: "المشاريع" },
        "projects2": { en: "Projects", ar: "المشاريع" },
        "projects3": { en: "Projects", ar: "المشاريع" },
        "projects4": { en: "Projects", ar: "المشاريع" },
        "servicesNav": { en: "We offer", ar: "نقدم" },
        "servicesNav2": { en: "We offer", ar: "نقدم" },
        "servicesNav3": { en: "We offer", ar: "نقدم" },
        "servicesNav4": { en: "We offer", ar: "نقدم" },
        "contactNav": { en: "Contact", ar: "اتصل" },
        "contactNav2": { en: "Contact", ar: "اتصل" },
        "contactNav3": { en: "Contact", ar: "اتصل" },
        "contactNav4": { en: "Contact", ar: "اتصل" },
        "contactNav5": { en: "Contact", ar: "اتصل" },
        "contactNav6": { en: "Contact", ar: "اتصل" },
        "contactNav7": { en: "Contact", ar: "اتصل" },
        "contactNav8": { en: "Contact", ar: "اتصل" },
        "languageButton": { en: "عربي", ar: "English" },

        // Carousel
        "carouselTitle1": { en: "Building Tomorrow’s Infrastructure", ar: "بناء البنية التحتية للمستقبل" },
        "carouselText1": {
            en: "From innovative building designs to sustainable urban planning, I deliver creative and functional architectural engineering solutions across various project types.",
            ar: "من تصاميم المباني المبتكرة إلى التخطيط الحضري المستدام، أقدم حلول هندسية معمارية إبداعية وعملية لمختلف أنواع المشاريع."
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
        "carouselButton3": { en: "Get In Touch", ar: "للتواصل" },

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
        // ─── Facts (new) ──────────────────────────────────────────
        "factTitle4": { en: "Functional Design", ar: "التصميم الوظيفي" },
        "factText4": {
            en: "Layouts that optimise space utilisation, circulation and building performance.",
            ar: "مخططات توظِّف المساحات وتدفق الحركة لتحسين أداء المبنى."
        },

        "factTitle5": { en: "Aesthetic Appeal", ar: "الجاذبية الجمالية" },
        "factText5": {
            en: "Harmonising form, colour, texture and proportion to create visual impact.",
            ar: "تناغم الشكل واللون والملمس والنِّسب لإضفاء تأثير بصري جذّاب."
        },

        "factTitle6": { en: "Sustainable Practices", ar: "الممارسات المستدامة" },
        "factText6": {
            en: "Eco‑friendly materials, energy efficiency and lifecycle conscious solutions.",
            ar: "مواد صديقة للبيئة وكفاءة طاقة وحلول تراعي دورة الحياة."
        },

        "factTitle7": { en: "User Experience", ar: "تجربة المستخدم" },
        "factText7": {
            en: "Designs that enhance comfort, accessibility and overall satisfaction.",
            ar: "تصميمات تعزّز الراحة وسهولة الوصول ورضا المستخدم بشكل عام."
        },

        "factTitle8": { en: "Cultural Context", ar: "السياق الثقافي" },
        "factText8": {
            en: "Reflecting local identity and heritage while embracing modern needs.",
            ar: "تعكس الهوية والتراث المحلي مع تلبية الاحتياجات العصرية."
        },


        // About
        "aboutTitle": { en: "About", ar: "من أنا" },
        "aboutTitle2": { en: "About", ar: "من أنا" },
        "aboutHeading": {
            "en": "Passionate Architectural Engineer & Interior Design Specialist",
            "ar": "مهندسة معمارية ومتخصصة في التصميم الداخلي"
        },
        "aboutHeading2": {
            "en": "Passionate Architectural Engineer & Interior Design Specialist",
            "ar": "مهندسة معمارية ومتخصصة في التصميم الداخلي"
        },
        "aboutText1": {
            "en": "I am a dedicated architectural engineer and interior design professional specializing in architectural design, structural considerations, and interior projects. From initial concepts to detailed interior spaces, I deliver innovative, functional, and aesthetically pleasing designs that meet client needs and stand the test of time.",
            "ar": "أنا مهندسة معمارية ومصممة داخلية متمكنة في التصميم المعماري والجوانب الإنشائية والمشاريع الداخلية. بدءًا من المفاهيم الأولية وصولًا إلى المساحات الداخلية المفصلة، أقدم تصاميم مبتكرة وعملية وجمالية تلبي احتياجات العملاء وتصمد بمرور الوقت."
        },
        "aboutText1-2": {
            "en": "I am a dedicated architectural engineer and interior design professional specializing in architectural design, structural considerations, and interior projects. From initial concepts to detailed interior spaces, I deliver innovative, functional, and aesthetically pleasing designs that meet client needs and stand the test of time.",
            "ar": "أنا مهندسة معمارية ومصممة داخلية متمكنة في التصميم المعماري والجوانب الإنشائية والمشاريع الداخلية. بدءًا من المفاهيم الأولية وصولًا إلى المساحات الداخلية المفصلة، أقدم تصاميم مبتكرة وعملية وجمالية تلبي احتياجات العملاء وتصمد بمرور الوقت."
        },
        "aboutText2": {
            "en": "I collaborate closely with architects, contractors, interior designers, and stakeholders to ensure every project runs smoothly, on time, and within budget. My expertise spans site supervision, interior space planning, quantity surveying, and full project lifecycle management—bringing clarity and excellence to every phase.",
            "ar": "أتعاون بشكل وثيق مع المهندسين المعماريين والمصممين الداخليين والمقاولين وأصحاب المصلحة لضمان سير المشاريع بسلاسة وفي الموعد وضمن الميزانية. تشمل خبرتي الإشراف الموقعي وتخطيط المساحات الداخلية وحصر الكميات وإدارة دورة حياة المشروع كاملة، مما يضفي وضوحًا وتميّزًا في كل مرحلة."
        },
        "aboutText2-2": {
            "en": "I collaborate closely with architects, contractors, interior designers, and stakeholders to ensure every project runs smoothly, on time, and within budget. My expertise spans site supervision, interior space planning, quantity surveying, and full project lifecycle management—bringing clarity and excellence to every phase.",
            "ar": "أتعاون بشكل وثيق مع المهندسين المعماريين والمصممين الداخليين والمقاولين وأصحاب المصلحة لضمان سير المشاريع بسلاسة وفي الموعد وضمن الميزانية. تشمل خبرتي الإشراف الموقعي وتخطيط المساحات الداخلية وحصر الكميات وإدارة دورة حياة المشروع كاملة، مما يضفي وضوحًا وتميّزًا في كل مرحلة."
        }
        ,
        "aboutButton": { en: "Contact Me", ar: "اتصل بي" },
        "aboutButton2": { en: "Contact Me", ar: "اتصل بي" },
        // "experienceYears": { en: "Years", ar: "سنوات" },
        // "experienceYears2": { en: "Years", ar: "سنوات" },
        // "experienceField": { en: "of Field", ar: "من الخبرة" },
        // "experienceField2": { en: "of Field", ar: "من الخبرة" },
        // "experienceText": { en: "Experience", ar: "العملية" },
        // "experienceText2": { en: "Experience", ar: "العملية" },

        // Services
        "expertiseTitle": { en: "My Expertise", ar: "خبرتي" },
        "expertiseHeading": { en: "Comprehensive Architectural Engineering Services", ar: "خدمات هندسية معمارية شاملة" },
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
        "serviceTitle-3d": {
            en: "3D Modeling & Printing",
            ar: "النمذجة والطباعة ثلاثية الأبعاد"
        },
        "serviceText-3d": {
            en: "We create accurate 3D models and prototypes using advanced 3D printing technology.",
            ar: "نقوم بإنشاء نماذج ثلاثية الأبعاد ونماذج أولية دقيقة باستخدام تقنية الطباعة ثلاثية الأبعاد المتقدمة."
        },

        // ─── Services ─────────────────────────────────────────────
        "serviceTitle7": { en: "Architectural Design", ar: "التصميم المعماري" },
        "serviceTitle7-1": { en: "Architectural Design", ar: "التصميم المعماري" },
        "serviceText7": {
            en: "Comprehensive & advanced architectural designs for residential, administrative and commercial buildings, including structural, electrical‑plumbing planning, façade and fencing design.",
            ar: "تصميمات معمارية متكاملة ومتطورة للمباني السكنية والإدارية والتجارية، تشمل المخططات الإنشائية والكهربائية والصحية، إلى جانب تصميم الواجهات والأسوار."
        },

        "serviceTitle8": { en: "Interior Design", ar: "التصميم الداخلي" },
        "serviceTitle8-1": { en: "Interior Design", ar: "التصميم الداخلي" },
        "serviceText8": {
            en: "Innovative interior design solutions for residential, commercial and hospitality spaces: layout, furniture, lighting, colour schemes and décor.",
            ar: "حلول تصميم داخلي مبتكرة للمساحات السكنية والتجارية والفندقية تشمل تنسيق الفراغات، اختيار الأثاث، تصميم الإضاءة، الألوان والعناصر الزخرفية."
        },

        "serviceTitle9": { en: "Engineering Supervision", ar: "الإشراف الهندسي" },
        "serviceTitle9-1": { en: "Engineering Supervision", ar: "الإشراف الهندسي" },
        "serviceText9": {
            en: "Execution supervision, quality management, performance evaluation, reporting, problem‑resolution, communication and coordination among stakeholders.",
            ar: "إشراف على التنفيذ، إدارة الجودة، تقييم الأداء، إعداد التقارير، حل المشكلات، والتواصل والتنسيق بين جميع الأطراف المعنية."
        },

        "serviceTitle10": {
            "en": "Report Preparation & Editing",
            "ar": "إعداد وتحرير التقارير"
        },
        "serviceTitle10-1": {
            "en": "Report Preparation & Editing",
            "ar": "إعداد وتحرير التقارير"
        },
        "serviceText10": {
            "en": "Preparing comprehensive engineering reports, including data analysis, design documentation, and editorial review to ensure accuracy, clarity, and compliance.",
            "ar": "إعداد تقارير هندسية شاملة تتضمن تحليل البيانات، توثيق التصميم، ومراجعة تحريرية لضمان الدقة والوضوح والامتثال."
        }
        ,
        "project03": {
            "en": "03. Report Preparation",
            "ar": "03. تحضير التقارير"
        },
        "project04": {
            "en": "04. Different Shop Drawings",
            "ar": "04. مخططات ورشة عمل متنوعة"
        },

        // Feature
        "whyChooseTitle": { en: "Why Choose Me!", ar: "لماذا تختارني!" },
        "whyChooseTitle2": { en: "Why Choose Me!", ar: "لماذا تختارني!" },
        "whyChooseHeading": {
            "en": "Committed to Precision, Practicality, and Performance",
            "ar": "ملتزمة بالدقة والعملية والأداء"
        },
        "whyChooseHeading2": {
            "en": "Committed to Precision, Practicality, and Performance",
            "ar": "ملتزمة بالدقة والعملية والأداء"
        },
        "whyChooseText": {
            "en": "As an architectural engineer, I combine technical expertise with a creative and practical approach to design innovative and functional spaces. I bring value to every project by harmonizing aesthetics, efficiency, and structural integrity.",
            "ar": "بصفتي مهندسة معمارية، أجمع بين الخبرة الفنية والنهج الإبداعي والعملي لتصميم مساحات مبتكرة وعملية. أضيف قيمة لكل مشروع من خلال تحقيق الانسجام بين الجماليات والكفاءة والسلامة الإنشائية."
        },
        "whyChooseText2": {
            "en": "As an architectural engineer, I combine technical expertise with a creative and practical approach to design innovative and functional spaces. I bring value to every project by harmonizing aesthetics, efficiency, and structural integrity.",
            "ar": "بصفتي مهندسة معمارية، أجمع بين الخبرة الفنية والنهج الإبداعي والعملي لتصميم مساحات مبتكرة وعملية. أضيف قيمة لكل مشروع من خلال تحقيق الانسجام بين الجماليات والكفاءة والسلامة الإنشائية."
        },
        "featureTitle1": {
            "en": "Engineered Accuracy",
            "ar": "دقة هندسية"
        },
        "featureTitle1-1": {
            "en": "Engineered Accuracy",
            "ar": "دقة هندسية"
        },
        "featureText1": {
            "en": "Every drawing, calculation, and inspection is executed with a commitment to structural integrity and regulatory compliance.",
            "ar": "يتم تنفيذ كل رسم وحساب وفحص بالتزامٍ تام بالسلامة الهيكلية والامتثال للمعايير التنظيمية."
        },
        "featureText1-2": {
            "en": "Every drawing, calculation, and inspection is executed with a commitment to structural integrity and regulatory compliance.",
            "ar": "يتم تنفيذ كل رسم وحساب وفحص بالتزامٍ تام بالسلامة الهيكلية والامتثال للمعايير التنظيمية."
        },
        "featureTitle2": {
            "en": "Smart & Sustainable Solutions",
            "ar": "حلول ذكية ومستدامة"
        },
        "featureTitle2-2": {
            "en": "Smart & Sustainable Solutions",
            "ar": "حلول ذكية ومستدامة"
        },
        "featureText2": {
            "en": "Whether it’s infrastructure or buildings, I incorporate modern methods and eco-conscious strategies in every stage of the project.",
            "ar": "سواء كانت بنية تحتية أو مبانٍ، أدمج الأساليب الحديثة والاستراتيجيات الصديقة للبيئة في كل مرحلة من مراحل المشروع."
        },
        "featureText2-2": {
            "en": "Whether it’s infrastructure or buildings, I incorporate modern methods and eco-conscious strategies in every stage of the project.",
            "ar": "سواء كانت بنية تحتية أو مبانٍ، أدمج الأساليب الحديثة والاستراتيجيات الصديقة للبيئة في كل مرحلة من مراحل المشروع."
        },
        "featureTitle3": {
            "en": "Professional Project Oversight",
            "ar": "إشراف احترافي على المشروع"
        },
        "featureTitle3-2": {
            "en": "Professional Project Oversight",
            "ar": "إشراف احترافي على المشروع"
        },
        "featureText3": {
            "en": "I manage timelines, quality, and communication across teams to ensure your project is delivered successfully from start to finish.",
            "ar": "أدير الجداول الزمنية والجودة والتواصل بين الفرق لضمان تسليم مشروعك بنجاح من البداية إلى النهاية."
        },
        "featureText3-2": {
            "en": "I manage timelines, quality, and communication across teams to ensure your project is delivered successfully from start to finish.",
            "ar": "أدير الجداول الزمنية والجودة والتواصل بين الفرق لضمان تسليم مشروعك بنجاح من البداية إلى النهاية."
        }
        ,

        // Appointment/Contact
        "getInTouchTitle": { en: "Get In Touch", ar: "للتواصل" },
        "getInTouchTitle2": { en: "Get In Touch", ar: "للتواصل" },
        "getInTouchHeading": {
            "en": "Let’s Discuss Your Project & Design Needs",
            "ar": "دعنا نناقش مشروعك واحتياجاتك الهندسية والتصميمية"
        },
        "getInTouchHeading2": {
            "en": "Let’s Discuss Your Project & Design Needs",
            "ar": "دعنا نناقش مشروعك واحتياجاتك الهندسية والتصميمية"
        }
        ,
        "getInTouchText": {
            en: "Whether you're planning a structural development, infrastructure project, or seeking to transform your interior space, I'm available to assist with expert insight and practical solutions tailored to your needs.",
            ar: "سواء كنت تخطط لتطوير هيكلي، مشروع بنية تحتية، أو ترغب في تحويل مساحتك الداخلية، فأنا متاح للمساعدة بخبرة متخصصة وحلول عملية مصممة خصيصًا لتلبية احتياجاتك."
        },
        "getInTouchText2": {
            en: "From structural engineering challenges to creating aesthetically pleasing and functional interior environments, my combined expertise in Architectural engineering and interior design offers a unique perspective for your project's success.",
            ar: "من تحديات الهندسة الإنشائية إلى إنشاء بيئات داخلية جمالية وعملية، توفر خبرتي المشتركة في الهندسة المدنية والتصميم الداخلي منظورًا فريدًا لنجاح مشروعك."
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
        "contactFooterTitle": { en: "Contact", ar: "تواصل" },
        "contactFooterTitle2": { en: "Contact", ar: "تواصل" },
        "contactFooterTitle3": { en: "Contact", ar: "تواصل" },
        "addressText": { en: "123 Engineering St, City, Country", ar: "123 شارع الهندسة، المدينة، الدولة" },
        "addressText2": { en: "123 Engineering St, City, Country", ar: "123 شارع الهندسة، المدينة، الدولة" },
        "engineeringServicesTitle": { en: "Engineering Services", ar: "أعمالنا الهندسية" },
        "engineeringServicesTitle2": { en: "Engineering Services", ar: "أعمالنا الهندسية" },
        "quickLinksTitle": { en: "Quick Links", ar: "روابط سريعة" },
        "quickLinksTitle2": { en: "Quick Links", ar: "روابط سريعة" },
        "aboutMeLink": { en: "About Me", ar: "عني" },
        "aboutMeLink2": { en: "About Me", ar: "عني" },
        "contactLink": { en: "Contact", ar: "اتصل" },
        "contactLink2": { en: "Contact", ar: "اتصل" },
        "servicesLink": { en: "We offer", ar: "نقدم" },
        "servicesLink2": { en: "We offer", ar: "نقدم" },
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

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
    // Reset all carousels when switching tabs
    let tabEls = document.querySelectorAll('button[data-bs-toggle="pill"]');

    tabEls.forEach(function (tabEl) {
        tabEl.addEventListener('shown.bs.tab', function (event) {
            // Get the target tab pane ID
            const targetId = event.target.getAttribute('data-bs-target');

            // Find the carousel in the target tab pane
            const targetCarousel = document.querySelector(targetId + ' .carousel');

            // If carousel exists, reset it to first slide
            if (targetCarousel) {
                const carousel = bootstrap.Carousel.getInstance(targetCarousel);
                if (carousel) {
                    carousel.to(0);
                }
            }
        });
    });
});

