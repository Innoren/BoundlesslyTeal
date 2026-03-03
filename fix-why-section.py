#!/usr/bin/env python3
"""Add missing translation attributes to Why section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Why section
    ('<div class="section-label">Why Work With Me</div>',
     '<div class="section-label" data-i18n="why.label">Why Work With Me</div>'),
    
    ('<h2 class="section-title">The <em>Difference</em></h2>',
     '<h2 class="section-title" data-i18n="why.title">The <em>Difference</em></h2>'),
    
    ('<p class="section-intro">This is not surface-level motivation. I blend reflection with action, insight with accountability, and emotional awareness with practical momentum.</p>',
     '<p class="section-intro" data-i18n="why.intro">This is not surface-level motivation. I blend reflection with action, insight with accountability, and emotional awareness with practical momentum.</p>'),
    
    # Card 1 already has title, add description
    ('          <p>Every session is designed around your unique circumstances and objectives — crafted to align with your specific challenges and aspirations.</p>\n        </div>\n        <div class="why-card">',
     '          <p data-i18n="why.card1.desc">Every session is designed around your unique circumstances and objectives — crafted to align with your specific challenges and aspirations.</p>\n        </div>\n        <div class="why-card">'),
    
    # Card 2
    ('          <h3>Accountability &amp; Support</h3>',
     '          <h3 data-i18n="why.card2.title">Accountability &amp; Support</h3>'),
    
    ('          <p>Through organized check-ins and goal monitoring, I ensure you stay motivated and focused on your growth every step of the way.</p>\n        </div>\n        <div class="why-card">',
     '          <p data-i18n="why.card2.desc">Through organized check-ins and goal monitoring, I ensure you stay motivated and focused on your growth every step of the way.</p>\n        </div>\n        <div class="why-card">'),
    
    # Card 3
    ('          <h3>Flexible Session Options</h3>',
     '          <h3 data-i18n="why.card3.title">Flexible Session Options</h3>'),
    
    ('          <p>In-person, virtual, and group coaching options — all tailored to work around your schedule and availability.</p>',
     '          <p data-i18n="why.card3.desc">In-person, virtual, and group coaching options — all tailored to work around your schedule and availability.</p>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:50]}...")
    else:
        print(f"❌ NOT FOUND: {old[:50]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Why section translations added!")
