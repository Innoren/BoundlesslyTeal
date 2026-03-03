#!/usr/bin/env python3
"""Add translation attributes to Clients section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Header
    ('        <div class="section-label">Who I Serve</div>',
     '        <div class="section-label" data-i18n="clients.serve">Who I Serve</div>'),
    
    ('        <h2 class="section-title">My <em>Clients</em></h2>',
     '        <h2 class="section-title"><span data-i18n="clients.my">My</span> <em data-i18n="clients.clients">Clients</em></h2>'),
    
    ('        <p class="section-intro">No matter your situation or where you are in life, I am here to help you walk towards the right direction to a meaningful life.</p>',
     '        <p class="section-intro" data-i18n="clients.intro">No matter your situation or where you are in life, I am here to help you walk towards the right direction to a meaningful life.</p>'),
    
    # Client cards
    ('          <p>Those navigating career pivots, industry shifts, leadership roles, or any professional change that calls for a mindset breakthrough.</p>',
     '          <p data-i18n="clients.career.text">Those navigating career pivots, industry shifts, leadership roles, or any professional change that calls for a mindset breakthrough.</p>'),
    
    ('          <p>Individuals ready to overcome limiting beliefs, build deeper confidence, and step into the best version of themselves.</p>',
     '          <p data-i18n="clients.growth.text">Individuals ready to overcome limiting beliefs, build deeper confidence, and step into the best version of themselves.</p>'),
    
    ('          <h3>Wellness &amp; Lifestyle Focus</h3>',
     '          <h3 data-i18n="clients.wellness.title">Wellness &amp; Lifestyle Focus</h3>'),
    
    ('          <p>People who want to create healthy habits, find balance, and live with greater energy, intention, and fulfillment.</p>',
     '          <p data-i18n="clients.wellness.text">People who want to create healthy habits, find balance, and live with greater energy, intention, and fulfillment.</p>'),
    
    # CTA section
    ('        <h3>Are you ready?</h3>',
     '        <h3 data-i18n="clients.ready.title">Are you ready?</h3>'),
    
    ('          <div class="q-item">Ready for clarity, confidence, and real change?</div>',
     '          <div class="q-item" data-i18n="clients.ready.q1">Ready for clarity, confidence, and real change?</div>'),
    
    ('          <div class="q-item">Ready to stop second-guessing yourself?</div>',
     '          <div class="q-item" data-i18n="clients.ready.q2">Ready to stop second-guessing yourself?</div>'),
    
    ('          <div class="q-item">Ready to trust yourself again and build what\'s next?</div>',
     '          <div class="q-item" data-i18n="clients.ready.q3">Ready to trust yourself again and build what\'s next?</div>'),
    
    ('          <div class="q-item">Ready to stop waiting and start becoming?</div>',
     '          <div class="q-item" data-i18n="clients.ready.q4">Ready to stop waiting and start becoming?</div>'),
    
    ('        <p style="color:var(--text-light);margin-bottom:1.5rem;font-size:0.95rem;">If you\'re ready to shift your mindset and step into your next chapter, let\'s talk.</p>',
     '        <p style="color:var(--text-light);margin-bottom:1.5rem;font-size:0.95rem;" data-i18n="clients.ready.text">If you\'re ready to shift your mindset and step into your next chapter, let\'s talk.</p>'),
    
    ('        <a href="#contact" class="btn-primary">Start Your Journey Today</a>',
     '        <a href="#contact" class="btn-primary" data-i18n="clients.ready.btn">Start Your Journey Today</a>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Clients section translation attributes added!")
