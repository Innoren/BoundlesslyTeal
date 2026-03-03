#!/usr/bin/env python3
"""Add translation attributes to Contact section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Header
    ('          <div class="section-label">Get In Touch</div>',
     '          <div class="section-label" data-i18n="contact.touch">Get In Touch</div>'),
    
    ('          <h2 class="section-title">Let\'s <em>Connect</em></h2>',
     '          <h2 class="section-title"><span data-i18n="contact.lets">Let\'s</span> <em data-i18n="contact.connect">Connect</em></h2>'),
    
    ('          <p style="color:var(--text-light);line-height:1.8;margin-bottom:2rem;font-size:0.97rem;">Ready to take the next step? Reach out — I\'d be honored to walk that journey with you. You don\'t need to have all the answers before you begin.</p>',
     '          <p style="color:var(--text-light);line-height:1.8;margin-bottom:2rem;font-size:0.97rem;" data-i18n="contact.intro.text">Ready to take the next step? Reach out — I\'d be honored to walk that journey with you. You don\'t need to have all the answers before you begin.</p>'),
    
    # Website label
    ('                <p style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-light);margin-bottom:2px;">Website</p>',
     '                <p style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-light);margin-bottom:2px;" data-i18n="contact.website">Website</p>'),
    
    # Form fields
    ('                <label for="firstName">First Name *</label>',
     '                <label for="firstName" data-i18n="contact.form.firstname">First Name *</label>'),
    
    ('                <input type="text" id="firstName" name="firstName" required placeholder="Your first name" />',
     '                <input type="text" id="firstName" name="firstName" required placeholder="Your first name" data-i18n-placeholder="contact.form.firstname.placeholder" />'),
    
    ('                <label for="lastName">Last Name *</label>',
     '                <label for="lastName" data-i18n="contact.form.lastname">Last Name *</label>'),
    
    ('                <input type="text" id="lastName" name="lastName" required placeholder="Your last name" />',
     '                <input type="text" id="lastName" name="lastName" required placeholder="Your last name" data-i18n-placeholder="contact.form.lastname.placeholder" />'),
    
    ('              <label for="email">Email Address *</label>',
     '              <label for="email" data-i18n="contact.form.email.label">Email Address *</label>'),
    
    ('              <input type="email" id="email" name="email" required placeholder="you@email.com" />',
     '              <input type="email" id="email" name="email" required placeholder="you@email.com" data-i18n-placeholder="contact.form.email.placeholder" />'),
    
    ('              <input type="tel" id="phone" name="phone" placeholder="(Optional)" />',
     '              <input type="tel" id="phone" name="phone" placeholder="(Optional)" data-i18n-placeholder="contact.form.phone.placeholder" />'),
    
    ('              <label for="interest">Area of Interest</label>',
     '              <label for="interest" data-i18n="contact.form.interest">Area of Interest</label>'),
    
    ('                <option value="">Select a coaching area...</option>',
     '                <option value="" data-i18n="contact.form.interest.select">Select a coaching area...</option>'),
    
    ('                <option value="career">Career &amp; Professional Transitions</option>',
     '                <option value="career" data-i18n="contact.form.interest.career">Career &amp; Professional Transitions</option>'),
    
    ('                <option value="growth">Personal Growth &amp; Self-Improvement</option>',
     '                <option value="growth" data-i18n="contact.form.interest.growth">Personal Growth &amp; Self-Improvement</option>'),
    
    ('                <option value="wellness">Wellness &amp; Lifestyle Coaching</option>',
     '                <option value="wellness" data-i18n="contact.form.interest.wellness">Wellness &amp; Lifestyle Coaching</option>'),
    
    ('              <label for="message">Your Message *</label>',
     '              <label for="message" data-i18n="contact.form.message.label">Your Message *</label>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Contact section translation attributes added!")
