#!/usr/bin/env python3
"""Add translation attributes to Services/Coaching Programs section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Header
    ('        <div class="section-label">What I Offer</div>',
     '        <div class="section-label" data-i18n="services.offer">What I Offer</div>'),
    
    ('        <h2 class="section-title">Coaching <em>Programs</em></h2>',
     '        <h2 class="section-title"><span data-i18n="services.coaching">Coaching</span> <em data-i18n="services.programs">Programs</em></h2>'),
    
    ('        <p class="section-intro">I offer programs designed to help you strengthen your mindset, build emotional resilience, and move forward with clarity and confidence — especially during seasons of transition.</p>',
     '        <p class="section-intro" data-i18n="services.intro.text">I offer programs designed to help you strengthen your mindset, build emotional resilience, and move forward with clarity and confidence — especially during seasons of transition.</p>'),
    
    # Service cards
    ('          <h3>Career &amp; Professional Transitions</h3>',
     '          <h3 data-i18n="services.career.title">Career &amp; Professional Transitions</h3>'),
    
    ('          <p>Navigating a career change or professional shift can feel overwhelming. This coaching helps you gain clarity, build confidence, and take decisive steps toward your next opportunity. Whether you\'re pivoting industries, stepping into leadership, or exploring new possibilities, you\'ll leave with a clear direction and a mindset ready for success.</p>',
     '          <p data-i18n="services.career.text">Navigating a career change or professional shift can feel overwhelming. This coaching helps you gain clarity, build confidence, and take decisive steps toward your next opportunity. Whether you\'re pivoting industries, stepping into leadership, or exploring new possibilities, you\'ll leave with a clear direction and a mindset ready for success.</p>'),
    
    ('          <h3>Personal Growth &amp; Self-Improvement</h3>',
     '          <h3 data-i18n="services.growth.title">Personal Growth &amp; Self-Improvement</h3>'),
    
    ('          <p>Ready to step into the best version of yourself? This coaching helps you overcome limiting beliefs, build confidence, and develop the mindset and habits to create lasting change. You\'ll gain clarity, motivation, and practical tools to grow and thrive.</p>',
     '          <p data-i18n="services.growth.text">Ready to step into the best version of yourself? This coaching helps you overcome limiting beliefs, build confidence, and develop the mindset and habits to create lasting change. You\'ll gain clarity, motivation, and practical tools to grow and thrive.</p>'),
    
    ('          <h3>Wellness &amp; Lifestyle Coaching</h3>',
     '          <h3 data-i18n="services.wellness.title">Wellness &amp; Lifestyle Coaching</h3>'),
    
    ('          <p>Want to feel more balanced, energized, and in control of your life? This coaching helps you build healthy habits, reduce stress, and create routines that support your physical, mental, and emotional well-being. You\'ll gain clarity, accountability, and practical tools to live a healthier, more fulfilling lifestyle.</p>',
     '          <p data-i18n="services.wellness.text">Want to feel more balanced, energized, and in control of your life? This coaching helps you build healthy habits, reduce stress, and create routines that support your physical, mental, and emotional well-being. You\'ll gain clarity, accountability, and practical tools to live a healthier, more fulfilling lifestyle.</p>'),
    
    # How it works
    ('        <h3>How Development Coaching Works</h3>',
     '        <h3 data-i18n="services.how.title">How Development Coaching Works</h3>'),
    
    ('            <h4>Understand You</h4>',
     '            <h4 data-i18n="services.how.step1.title">Understand You</h4>'),
    
    ('            <p>We spend time understanding your specific needs, challenges, and goals before we begin.</p>',
     '            <p data-i18n="services.how.step1.text">We spend time understanding your specific needs, challenges, and goals before we begin.</p>'),
    
    ('            <h4>Build a Plan</h4>',
     '            <h4 data-i18n="services.how.step2.title">Build a Plan</h4>'),
    
    ('            <p>Together, we create a structured plan with weekly guidance, actionable steps, and milestones.</p>',
     '            <p data-i18n="services.how.step2.text">Together, we create a structured plan with weekly guidance, actionable steps, and milestones.</p>'),
    
    ('            <h4>Grow Together</h4>',
     '            <h4 data-i18n="services.how.step3.title">Grow Together</h4>'),
    
    ('            <p>Ongoing motivation, accountability, and encouragement to keep you moving forward.</p>',
     '            <p data-i18n="services.how.step3.text">Ongoing motivation, accountability, and encouragement to keep you moving forward.</p>'),
    
    # Session formats
    ('        <h3 style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:300;color:var(--text);text-align:center;margin-bottom:1.5rem;">Session Formats</h3>',
     '        <h3 style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:300;color:var(--text);text-align:center;margin-bottom:1.5rem;" data-i18n="services.formats.title">Session Formats</h3>'),
    
    ('            <p>Personalized coaching sessions tailored entirely to your goals and journey.</p>',
     '            <p data-i18n="services.formats.one.text">Personalized coaching sessions tailored entirely to your goals and journey.</p>'),
    
    ('            <h4>Online Coaching</h4>',
     '            <h4 data-i18n="services.formats.online.title">Online Coaching</h4>'),
    
    ('            <p>Flexible virtual sessions to assist you regardless of your location.</p>',
     '            <p data-i18n="services.formats.online.text">Flexible virtual sessions to assist you regardless of your location.</p>'),
    
    ('            <h4>Group Sessions</h4>',
     '            <h4 data-i18n="services.formats.group.title">Group Sessions</h4>'),
    
    ('            <p>Virtual and in-person group sessions for shared growth and community.</p>',
     '            <p data-i18n="services.formats.group.text">Virtual and in-person group sessions for shared growth and community.</p>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Services/Coaching Programs section translation attributes added!")
