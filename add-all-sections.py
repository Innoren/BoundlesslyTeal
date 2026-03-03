#!/usr/bin/env python3
"""
Add translation attributes to ALL sections
"""
import re

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

# About Section
replacements = [
    # Section labels and titles
    ('ABOUT ME', '<span data-i18n="about.label">ABOUT ME</span>'),
    ('Hi, I\'m <em>Teal</em>', '<span data-i18n="about.title">Hi, I\'m <em>Teal</em></span>'),
    ('I believe everyone has the capacity for growth and transformation.', 
     '<span data-i18n="about.intro">I believe everyone has the capacity for growth and transformation.</span>'),
    
    # About paragraphs
    ('With over a decade of experience in coaching and personal development, I\'ve dedicated my career to helping individuals discover their authentic selves and create meaningful change in their lives.',
     '<span data-i18n="about.p1">With over a decade of experience in coaching and personal development, I\'ve dedicated my career to helping individuals discover their authentic selves and create meaningful change in their lives.</span>'),
    
    ('My approach combines evidence-based techniques with deep compassion and understanding. I believe that <strong>lasting change comes from within</strong>, and my role is to guide you in uncovering your own wisdom and strength.',
     '<span data-i18n="about.p2">My approach combines evidence-based techniques with deep compassion and understanding. I believe that <strong>lasting change comes from within</strong>, and my role is to guide you in uncovering your own wisdom and strength.</span>'),
    
    ('Whether you\'re navigating a major life transition, seeking clarity in your career, or simply wanting to live more authentically, I\'m here to support you every step of the way.',
     '<span data-i18n="about.p3">Whether you\'re navigating a major life transition, seeking clarity in your career, or simply wanting to live more authentically, I\'m here to support you every step of the way.</span>'),
    
    # About callout
    ('>My Approach<', ' data-i18n="about.callout.title">My Approach<'),
    ('Client-centered and compassionate', '<span data-i18n="about.callout.item1">Client-centered and compassionate</span>'),
    ('Evidence-based methodologies', '<span data-i18n="about.callout.item2">Evidence-based methodologies</span>'),
    ('Holistic perspective', '<span data-i18n="about.callout.item3">Holistic perspective</span>'),
    ('Action-oriented strategies', '<span data-i18n="about.callout.item4">Action-oriented strategies</span>'),
    ('Sustainable, lasting results', '<span data-i18n="about.callout.item5">Sustainable, lasting results</span>'),
    
    # Philosophy quote
    ('"True transformation happens when we honor both where we are and where we want to be."',
     '<span data-i18n="about.philosophy">"True transformation happens when we honor both where we are and where we want to be."</span>'),
    
    # Vision/Mission Section
    ('VISION & MISSION', '<span data-i18n="vision.label">VISION & MISSION</span>'),
    ('Guided by <em>Purpose</em>', '<span data-i18n="vision.title">Guided by <em>Purpose</em></span>'),
    ('My work is driven by a deep commitment to empowering individuals.',
     '<span data-i18n="vision.intro">My work is driven by a deep commitment to empowering individuals.</span>'),
    
    ('>VISION<', ' data-i18n="vision.card1.title">VISION<'),
    ('A world where everyone feels empowered to live authentically, pursue their passions, and create positive change in their lives and communities.',
     '<span data-i18n="vision.card1.text">A world where everyone feels empowered to live authentically, pursue their passions, and create positive change in their lives and communities.</span>'),
    
    ('>MISSION<', ' data-i18n="vision.card2.title">MISSION<'),
    ('To provide compassionate, transformative coaching that helps individuals discover their strengths, overcome obstacles, and achieve their most meaningful goals.',
     '<span data-i18n="vision.card2.text">To provide compassionate, transformative coaching that helps individuals discover their strengths, overcome obstacles, and achieve their most meaningful goals.</span>'),
    
    # Services Section
    ('SERVICES', '<span data-i18n="services.label">SERVICES</span>'),
    ('How I Can <em>Help</em>', '<span data-i18n="services.title">How I Can <em>Help</em></span>'),
    ('Personalized coaching services designed to meet you where you are.',
     '<span data-i18n="services.intro">Personalized coaching services designed to meet you where you are.</span>'),
    
    # Service cards
    ('>Life Coaching<', ' data-i18n="services.card1.title">Life Coaching<'),
    ('Navigate life transitions, clarify your values, and create a fulfilling path forward with personalized guidance and support.',
     '<span data-i18n="services.card1.text">Navigate life transitions, clarify your values, and create a fulfilling path forward with personalized guidance and support.</span>'),
    
    ('>Career Coaching<', ' data-i18n="services.card2.title">Career Coaching<'),
    ('Discover your professional purpose, overcome workplace challenges, and build a career that aligns with your authentic self.',
     '<span data-i18n="services.card2.text">Discover your professional purpose, overcome workplace challenges, and build a career that aligns with your authentic self.</span>'),
    
    ('>Wellness Coaching<', ' data-i18n="services.card3.title">Wellness Coaching<'),
    ('Develop sustainable habits, improve work-life balance, and cultivate holistic well-being in all areas of your life.',
     '<span data-i18n="services.card3.text">Develop sustainable habits, improve work-life balance, and cultivate holistic well-being in all areas of your life.</span>'),
    
    # How it works
    ('>How It Works<', ' data-i18n="services.how.title">How It Works<'),
    ('>Discovery Call<', ' data-i18n="services.step1.title">Discovery Call<'),
    ('We start with a free consultation to discuss your goals and see if we\'re a good fit.',
     '<span data-i18n="services.step1.text">We start with a free consultation to discuss your goals and see if we\'re a good fit.</span>'),
    
    ('>Create Your Plan<', ' data-i18n="services.step2.title">Create Your Plan<'),
    ('Together, we design a personalized coaching plan tailored to your unique needs and aspirations.',
     '<span data-i18n="services.step2.text">Together, we design a personalized coaching plan tailored to your unique needs and aspirations.</span>'),
    
    ('>Transform & Grow<', ' data-i18n="services.step3.title">Transform & Grow<'),
    ('Through regular sessions and ongoing support, you\'ll make meaningful progress toward your goals.',
     '<span data-i18n="services.step3.text">Through regular sessions and ongoing support, you\'ll make meaningful progress toward your goals.</span>'),
    
    # Format cards
    ('>One-on-One<', ' data-i18n="services.format1.title">One-on-One<'),
    ('Personalized individual sessions', '<span data-i18n="services.format1.text">Personalized individual sessions</span>'),
    ('>Virtual Sessions<', ' data-i18n="services.format2.title">Virtual Sessions<'),
    ('Convenient online coaching', '<span data-i18n="services.format2.text">Convenient online coaching</span>'),
    ('>Flexible Packages<', ' data-i18n="services.format3.title">Flexible Packages<'),
    ('Options to fit your schedule', '<span data-i18n="services.format3.text">Options to fit your schedule</span>'),
    
    # Why Choose Section
    ('WHY CHOOSE ME', '<span data-i18n="why.label">WHY CHOOSE ME</span>'),
    ('What Makes This <em>Different</em>', '<span data-i18n="why.title">What Makes This <em>Different</em></span>'),
    ('Coaching that truly honors your unique journey.',
     '<span data-i18n="why.intro">Coaching that truly honors your unique journey.</span>'),
    
    # Why cards
    ('>Personalized Approach<', ' data-i18n="why.card1.title">Personalized Approach<'),
    ('No cookie-cutter solutions. Every coaching plan is tailored specifically to your goals, values, and circumstances.',
     '<span data-i18n="why.card1.text">No cookie-cutter solutions. Every coaching plan is tailored specifically to your goals, values, and circumstances.</span>'),
    
    ('>Proven Methods<', ' data-i18n="why.card2.title">Proven Methods<'),
    ('I use evidence-based techniques combined with intuitive guidance to create lasting, meaningful change.',
     '<span data-i18n="why.card2.text">I use evidence-based techniques combined with intuitive guidance to create lasting, meaningful change.</span>'),
    
    ('>Compassionate Support<', ' data-i18n="why.card3.title">Compassionate Support<'),
    ('A safe, non-judgmental space where you can explore, grow, and transform at your own pace.',
     '<span data-i18n="why.card3.text">A safe, non-judgmental space where you can explore, grow, and transform at your own pace.</span>'),
    
    ('>Holistic Perspective<', ' data-i18n="why.card4.title">Holistic Perspective<'),
    ('We address all aspects of your life - mind, body, spirit, and relationships - for comprehensive growth.',
     '<span data-i18n="why.card4.text">We address all aspects of your life - mind, body, spirit, and relationships - for comprehensive growth.</span>'),
    
    ('>Accountability & Action<', ' data-i18n="why.card5.title">Accountability & Action<'),
    ('Gentle yet firm support to help you stay committed to your goals and take meaningful action.',
     '<span data-i18n="why.card5.text">Gentle yet firm support to help you stay committed to your goals and take meaningful action.</span>'),
    
    ('>Lasting Results<', ' data-i18n="why.card6.title">Lasting Results<'),
    ('Focus on sustainable change that continues long after our coaching relationship ends.',
     '<span data-i18n="why.card6.text">Focus on sustainable change that continues long after our coaching relationship ends.</span>'),
    
    # Clients Section
    ('WHO I WORK WITH', '<span data-i18n="clients.label">WHO I WORK WITH</span>'),
    ('Is Coaching <em>Right for You?</em>', '<span data-i18n="clients.title">Is Coaching <em>Right for You?</em></span>'),
    ('I work with individuals who are ready for meaningful change.',
     '<span data-i18n="clients.intro">I work with individuals who are ready for meaningful change.</span>'),
    
    # Client cards
    ('>Career Professionals<', ' data-i18n="clients.card1.title">Career Professionals<'),
    ('Seeking clarity, advancement, or a more fulfilling career path.',
     '<span data-i18n="clients.card1.text">Seeking clarity, advancement, or a more fulfilling career path.</span>'),
    
    ('>Life Transitioners<', ' data-i18n="clients.card2.title">Life Transitioners<'),
    ('Navigating major life changes with grace and confidence.',
     '<span data-i18n="clients.card2.text">Navigating major life changes with grace and confidence.</span>'),
    
    ('>Growth Seekers<', ' data-i18n="clients.card3.title">Growth Seekers<'),
    ('Committed to personal development and living authentically.',
     '<span data-i18n="clients.card3.text">Committed to personal development and living authentically.</span>'),
    
    # CTA
    ('Wondering if coaching is right for you?',
     '<span data-i18n="clients.cta.title">Wondering if coaching is right for you?</span>'),
    ('Feeling stuck or unfulfilled?', '<span data-i18n="clients.q1">Feeling stuck or unfulfilled?</span>'),
    ('Ready for meaningful change?', '<span data-i18n="clients.q2">Ready for meaningful change?</span>'),
    ('Seeking clarity and direction?', '<span data-i18n="clients.q3">Seeking clarity and direction?</span>'),
    ('Want to live more authentically?', '<span data-i18n="clients.q4">Want to live more authentically?</span>'),
    ('Navigating a major transition?', '<span data-i18n="clients.q5">Navigating a major transition?</span>'),
    ('Looking for accountability?', '<span data-i18n="clients.q6">Looking for accountability?</span>'),
    ('>Schedule a Free Consultation</a>', ' data-i18n="clients.cta.btn">Schedule a Free Consultation</a>'),
    
    # Contact Section
    ('LET\'S TALK', '<span data-i18n="contact.label">LET\'S TALK</span>'),
    ('Ready to Begin Your <em>Journey?</em>', '<span data-i18n="contact.title">Ready to Begin Your <em>Journey?</em></span>'),
    ('I\'d love to hear from you. Reach out to schedule your free consultation.',
     '<span data-i18n="contact.intro">I\'d love to hear from you. Reach out to schedule your free consultation.</span>'),
    
    ('>Get in Touch<', ' data-i18n="contact.info.title">Get in Touch<'),
    ('>Email<', ' data-i18n="contact.email">Email<'),
    ('>Phone<', ' data-i18n="contact.phone">Phone<'),
    ('>Location<', ' data-i18n="contact.location">Location<'),
    
    # Contact form
    ('>Send a Message<', ' data-i18n="contact.form.title">Send a Message<'),
    ('>Full Name<', ' data-i18n="contact.form.name">Full Name<'),
    ('>Email Address<', ' data-i18n="contact.form.email">Email Address<'),
    ('>Phone Number<', ' data-i18n="contact.form.phone">Phone Number<'),
    ('>Service Interest<', ' data-i18n="contact.form.service">Service Interest<'),
    ('>Life Coaching</option>', ' data-i18n="contact.form.service.option1">Life Coaching</option>'),
    ('>Career Coaching</option>', ' data-i18n="contact.form.service.option2">Career Coaching</option>'),
    ('>Wellness Coaching</option>', ' data-i18n="contact.form.service.option3">Wellness Coaching</option>'),
    ('>Not Sure Yet</option>', ' data-i18n="contact.form.service.option4">Not Sure Yet</option>'),
    ('>Your Message<', ' data-i18n="contact.form.message">Your Message<'),
    
    # Footer
    ('Empowering growth through compassionate coaching.',
     '<span data-i18n="footer.tagline">Empowering growth through compassionate coaching.</span>'),
    ('>Quick Links<', ' data-i18n="footer.quick.title">Quick Links<'),
    ('>Legal<', ' data-i18n="footer.legal.title">Legal<'),
    ('>Privacy Policy</a>', ' data-i18n="footer.legal.privacy">Privacy Policy</a>'),
    ('>Terms of Service</a>', ' data-i18n="footer.legal.terms">Terms of Service</a>'),
]

# Apply all replacements
for old, new in replacements:
    html = html.replace(old, new)

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ ALL sections now have translation attributes!")
print("🌍 Refresh your browser and click ES to see the entire page in Spanish!")
print(f"📝 Added {len(replacements)} translations")
