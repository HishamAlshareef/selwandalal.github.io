// Translations
const translations = {
    en: {
        nav: { about: 'About', skills: 'Skills', experience: 'Experience', portfolio: 'Portfolio', education: 'Education', contact: 'Contact' },
        hero: { welcome: 'Welcome to my portfolio', name1: 'Selwan Mohammed', name2: 'Ahmed Dalal', typing: ['Architect', 'Interior Designer', 'Exterior Designer', '3D Visualization Expert'], cta: 'View Portfolio', scroll: 'SCROLL' },
        about: { label: 'Introduction', title: 'About Me', text: 'An architect with over four years of experience in architectural design and site supervision. I specialize in 3D visualization, working drawings, and transforming client requirements into creative design solutions. I am currently seeking opportunities to contribute technical expertise and innovation within a creative team.' },
        skills: { label: 'Expertise', title: 'My Skills', items: ['Revit (3D Modeling)', 'Lumion (Realistic Rendering)', 'AutoCAD (Technical Drafting)', '3ds Max (Modeling & Rendering)', 'Site Supervision', 'Client Communication'] },
        experience: { label: 'Career', title: 'Experience', items: [
            { date: 'Late 2024 – Present', title: 'Freelance Architect', company: 'Independent Practice', desc: 'Independent architectural and interior design, 3D modeling, and direct client coordination.' },
            { date: '2021 – 2023', title: 'Architect', company: 'Zaman Engineering Office', desc: 'Full-time architect creating working drawings, designing façades and interiors, and supervising site execution.' },
            { date: '2020', title: 'Architectural Intern', company: 'Zaman Engineering Office', desc: '6-month internship focused on design presentations and real-world workflows.' },
            { date: '2019 – 2020', title: 'Teaching Assistant', company: 'UST University', desc: 'Taught Architectural Drawing and Perspective courses.' }
        ]},
        portfolio: { label: 'Selected Works', title: 'Portfolio', filters: ['All Projects', 'Interior Design', 'Exterior Facades', '3D Rendering'], projects: ['Modern Bedroom', 'Contemporary Villa', 'Luxury Living Room', 'Residential Villa', 'Luxury Bathroom', 'Outdoor Terrace'] },
        education: { label: 'Qualifications', title: 'Education & Certifications', items: [
            { year: '2019', title: "Bachelor's in Architecture", school: 'Science and Technology University (UST), Sana\'a' },
            { year: '2024', title: 'Site Supervision Course', school: 'Including Nabni Insulation Workshop' }
        ]},
        contact: { label: 'Get In Touch', title: 'Contact Me', heading: "Let's Work Together", text: "Have a project in mind? I'd love to hear about it.", email: 'Email', location: 'Location', locationVal: "Sana'a, Yemen", form: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Your Message', send: 'Send Message', sent: 'Message Sent!' } },
        footer: '© 2024 Selwan Mohammed Ahmed Dalal. All Rights Reserved.'
    },
    ar: {
        nav: { about: 'نبذة عني', skills: 'المهارات', experience: 'الخبرات', portfolio: 'الأعمال', education: 'التعليم', contact: 'تواصل' },
        hero: { welcome: 'مرحباً بكم في معرض أعمالي', name1: 'سلوان محمد', name2: 'أحمد دلال', typing: ['مهندس معماري', 'مصمم داخلي', 'مصمم خارجي', 'خبير تصور ثلاثي الأبعاد'], cta: 'عرض الأعمال', scroll: 'تصفح' },
        about: { label: 'مقدمة', title: 'نبذة عني', text: 'مهندس معماري يتمتع بخبرة تزيد عن أربع سنوات في التصميم المعماري والإشراف على المواقع. أتخصص في التصور ثلاثي الأبعاد والرسومات التنفيذية وتحويل متطلبات العملاء إلى حلول تصميم إبداعية. أبحث حالياً عن فرص للمساهمة بخبرتي التقنية والابتكار ضمن فريق إبداعي.' },
        skills: { label: 'الخبرات', title: 'مهاراتي', items: ['ريفيت (النمذجة ثلاثية الأبعاد)', 'لوميون (الواقعية)', 'أوتوكاد (الرسم التقني)', '3ds Max (النمذجة والعرض)', 'إشراف الموقع', 'التواصل مع العملاء'] },
        experience: { label: 'المسيرة المهنية', title: 'الخبرات', items: [
            { date: 'أواخر 2024 – حتى الآن', title: 'مهندس معماري مستقل', company: 'عمل حر', desc: 'تصميم معماري وداخلي مستقل، نمذجة ثلاثية الأبعاد، والتنسيق المباشر مع العملاء.' },
            { date: '2021 – 2023', title: 'مهندس معماري', company: 'مكتب زمان الهندسي', desc: 'مهندس بدوام كامل لإنشاء الرسومات التنفيذية وتصميم الواجهات والديكورات الداخلية والإشراف على التنفيذ.' },
            { date: '2020', title: 'متدرب معماري', company: 'مكتب زمان الهندسي', desc: 'تدريب لمدة 6 أشهر يركز على العروض التقديمية للتصميم وسير العمل الفعلي.' },
            { date: '2019 – 2020', title: 'مساعد تدريس', company: 'جامعة العلوم والتكنولوجيا', desc: 'تدريس مقررات الرسم المعماري والمنظور.' }
        ]},
        portfolio: { label: 'أعمال مختارة', title: 'معرض الأعمال', filters: ['جميع المشاريع', 'تصميم داخلي', 'واجهات خارجية', 'عرض ثلاثي الأبعاد'], projects: ['غرفة نوم عصرية', 'فيلا معاصرة', 'غرفة معيشة فاخرة', 'فيلا سكنية', 'حمام فاخر', 'تراس خارجي'] },
        education: { label: 'المؤهلات', title: 'التعليم والشهادات', items: [
            { year: '2019', title: 'بكالوريوس هندسة معمارية', school: 'جامعة العلوم والتكنولوجيا، صنعاء' },
            { year: '2024', title: 'دورة إشراف المواقع', school: 'بما في ذلك ورشة عزل نبني' }
        ]},
        contact: { label: 'تواصل معي', title: 'اتصل بي', heading: 'لنعمل معاً', text: 'هل لديك مشروع في ذهنك؟ يسعدني سماع ذلك.', email: 'البريد الإلكتروني', location: 'الموقع', locationVal: 'صنعاء، اليمن', form: { name: 'اسمك', email: 'بريدك الإلكتروني', subject: 'الموضوع', message: 'رسالتك', send: 'إرسال الرسالة', sent: 'تم الإرسال!' } },
        footer: '© 2024 سلوان محمد أحمد دلال. جميع الحقوق محفوظة.'
    }
};

let currentLang = 'en';
let typingInterval;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollReveal();
    initMobileMenu();
    initThemeToggle();
    initLangToggle();
    initPortfolioFilter();
    initNavScroll();
    initContactForm();
    initTypingEffect();
    updateContent();
});

// Particles
function createParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                animateSkillBars(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));
}

function animateSkillBars(element) {
    const skillBars = element.querySelectorAll ? element.querySelectorAll('.skill-progress') : [];
    if (element.classList.contains('skill-card')) {
        const bar = element.querySelector('.skill-progress');
        if (bar) bar.style.width = bar.dataset.width + '%';
    }
    skillBars.forEach(bar => bar.style.width = bar.dataset.width + '%');
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-center');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.dataset.theme = saved;
    updateThemeIcon(saved);
    btn.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme;
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark' 
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg><span>Dark</span>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg><span>Light</span>';
}

// Language Toggle
function initLangToggle() {
    const btn = document.querySelector('.lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        updateContent();
        initTypingEffect();
    });
}

// Update Content
function updateContent() {
    const t = translations[currentLang];
    const btn = document.querySelector('.lang-toggle');
    if (btn) btn.innerHTML = currentLang === 'en' ? '🌐 <span>العربية</span>' : '🌐 <span>English</span>';
    
    // Navigation
    document.querySelectorAll('[data-nav]').forEach(el => {
        const key = el.dataset.nav;
        if (t.nav[key]) el.textContent = t.nav[key];
    });
    
    // Hero
    const heroSub = document.querySelector('.hero-subtitle');
    const heroTitle = document.querySelector('.hero-title');
    const heroBtn = document.querySelector('.hero .btn');
    const scrollText = document.querySelector('.scroll-indicator span:last-child');
    if (heroSub) heroSub.textContent = t.hero.welcome;
    if (heroTitle) heroTitle.innerHTML = `<span>${t.hero.name1}</span><br>${t.hero.name2}`;
    if (heroBtn) heroBtn.textContent = t.hero.cta;
    if (scrollText) scrollText.textContent = t.hero.scroll;
    
    // About
    updateSection('about', t.about);
    
    // Skills
    updateSection('skills', t.skills);
    document.querySelectorAll('.skill-name').forEach((el, i) => {
        if (t.skills.items[i]) el.textContent = t.skills.items[i];
    });
    
    // Experience
    updateSection('experience', t.experience);
    document.querySelectorAll('.timeline-item').forEach((item, i) => {
        const data = t.experience.items[i];
        if (data) {
            item.querySelector('.timeline-date').textContent = data.date;
            item.querySelector('.timeline-title').textContent = data.title;
            item.querySelector('.timeline-company').textContent = data.company;
            item.querySelector('.timeline-desc').textContent = data.desc;
        }
    });
    
    // Portfolio
    updateSection('portfolio', t.portfolio);
    document.querySelectorAll('.filter-btn').forEach((btn, i) => {
        if (t.portfolio.filters[i]) btn.textContent = t.portfolio.filters[i];
    });
    document.querySelectorAll('.project-title').forEach((el, i) => {
        if (t.portfolio.projects[i]) el.textContent = t.portfolio.projects[i];
    });
    
    // Education
    updateSection('education', t.education);
    document.querySelectorAll('.education-card').forEach((card, i) => {
        const data = t.education.items[i];
        if (data) {
            card.querySelector('.education-year').textContent = data.year;
            card.querySelector('.education-title').textContent = data.title;
            card.querySelector('.education-school').textContent = data.school;
        }
    });
    
    // Contact
    updateSection('contact', t.contact);
    const contactH3 = document.querySelector('.contact-info h3');
    const contactP = document.querySelector('.contact-info > p');
    if (contactH3) contactH3.textContent = t.contact.heading;
    if (contactP) contactP.textContent = t.contact.text;
    document.querySelectorAll('.contact-text span').forEach((el, i) => {
        el.textContent = i === 0 ? t.contact.email : t.contact.location;
    });
    const locP = document.querySelectorAll('.contact-text p')[0];
    if (locP && locP.parentElement.querySelector('span').textContent === t.contact.location) {
        locP.textContent = t.contact.locationVal;
    }
    document.querySelectorAll('.form-group label').forEach((label, i) => {
        const keys = ['name', 'email', 'subject', 'message'];
        if (t.contact.form[keys[i]]) label.textContent = t.contact.form[keys[i]];
    });
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn && !submitBtn.classList.contains('sent')) submitBtn.textContent = t.contact.form.send;
    
    // Footer
    const footer = document.querySelector('footer p');
    if (footer) footer.innerHTML = t.footer.replace('Selwan Mohammed Ahmed Dalal', '<span>Selwan Mohammed Ahmed Dalal</span>').replace('سلوان محمد أحمد دلال', '<span>سلوان محمد أحمد دلال</span>');
}

function updateSection(id, data) {
    const section = document.getElementById(id);
    if (!section) return;
    const label = section.querySelector('.section-label');
    const title = section.querySelector('.section-title');
    if (label && data.label) label.textContent = data.label;
    if (title && data.title) title.textContent = data.title;
    if (data.text) {
        const text = section.querySelector('.about-text');
        if (text) text.textContent = data.text;
    }
}

// Typing Effect
function initTypingEffect() {
    if (typingInterval) clearInterval(typingInterval);
    const el = document.querySelector('.typing-text');
    if (!el) return;
    const texts = translations[currentLang].hero.typing;
    let textIdx = 0, charIdx = 0, isDeleting = false;
    
    function type() {
        const current = texts[textIdx];
        if (isDeleting) {
            el.innerHTML = current.substring(0, charIdx - 1) + '<span class="cursor">|</span>';
            charIdx--;
        } else {
            el.innerHTML = current.substring(0, charIdx + 1) + '<span class="cursor">|</span>';
            charIdx++;
        }
        
        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIdx === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            textIdx = (textIdx + 1) % texts.length;
            speed = 500;
        }
        typingInterval = setTimeout(type, speed);
    }
    type();
}

// Portfolio Filter
function initPortfolioFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    const filters = ['all', 'interior', 'exterior', 'rendering'];
    
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = filters[i];
            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.opacity = match ? '1' : '0';
                card.style.transform = match ? 'scale(1)' : 'scale(0.8)';
                setTimeout(() => card.style.display = match ? 'block' : 'none', match ? 0 : 300);
            });
        });
    });
}

// Nav scroll effect
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.padding = '1.5rem 5%';
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const t = translations[currentLang].contact.form;
        btn.textContent = t.sent;
        btn.classList.add('sent');
        btn.style.background = '#4CAF50';
        setTimeout(() => {
            btn.textContent = t.send;
            btn.classList.remove('sent');
            btn.style.background = '';
            form.reset();
        }, 3000);
    });
}
