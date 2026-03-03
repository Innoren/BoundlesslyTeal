#!/usr/bin/env python3
"""Add translation attributes to About section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Section label
    ('          <div class="section-label">Meet Your Coach</div>',
     '          <div class="section-label" data-i18n="about.meet">Meet Your Coach</div>'),
    
    # Title
    ('          <h2 class="section-title">Hi, I\'m <em>Amarfis</em></h2>',
     '          <h2 class="section-title"><span data-i18n="about.hi">Hi, I\'m</span> <em>Amarfis</em></h2>'),
    
    # Paragraphs
    ('          <p>Welcome to Boundlessly Teal Coaching! I\'m a Certified Professional Life Coach born in the Dominican Republic and raised in New Jersey. As a personal development coach, I\'m passionate about helping individuals unlock their potential and create meaningful, fulfilling lives.</p>',
     '          <p data-i18n="about.welcome">Welcome to Boundlessly Teal Coaching! I\'m a Certified Professional Life Coach born in the Dominican Republic and raised in New Jersey. As a personal development coach, I\'m passionate about helping individuals unlock their potential and create meaningful, fulfilling lives.</p>'),
    
    ('          <p>I work with people standing at the edge of change — those ready for the next chapter, but unsure how to begin. Through personalized coaching sessions, I guide clients to set clear goals, overcome limiting beliefs, and develop habits that lead to lasting success.</p>',
     '          <p data-i18n="about.work">I work with people standing at the edge of change — those ready for the next chapter, but unsure how to begin. Through personalized coaching sessions, I guide clients to set clear goals, overcome limiting beliefs, and develop habits that lead to lasting success.</p>'),
    
    ('          <p>Like many of my clients, I didn\'t set out to become a coach. I became one because I lived through my own seasons of uncertainty — moments where the life I built no longer felt like the life I was meant to live. I know what it feels like to question your path, to outgrow environments, to feel both excited and terrified about what\'s next.</p>',
     '          <p data-i18n="about.journey">Like many of my clients, I didn\'t set out to become a coach. I became one because I lived through my own seasons of uncertainty — moments where the life I built no longer felt like the life I was meant to live. I know what it feels like to question your path, to outgrow environments, to feel both excited and terrified about what\'s next.</p>'),
    
    ('          <p>What I discovered: <strong>Transitions are not breakdowns. They are invitations.</strong> An invitation to realign, to rediscover your voice, to build a life that reflects who you are now — not who you used to be.</p>',
     '          <p data-i18n="about.discovered">What I discovered: <strong>Transitions are not breakdowns. They are invitations.</strong> An invitation to realign, to rediscover your voice, to build a life that reflects who you are now — not who you used to be.</p>'),
    
    # Philosophy quote
    ('            <p>You are not behind. You are not broken. You are not starting over. You are transitioning — and transition is a powerful, sacred space if you allow it to be.</p>',
     '            <p data-i18n="about.quote">You are not behind. You are not broken. You are not starting over. You are transitioning — and transition is a powerful, sacred space if you allow it to be.</p>'),
    
    # What I Help You Do section
    ('            <h3>What I Help You Do</h3>',
     '            <h3 data-i18n="about.help.title">What I Help You Do</h3>'),
    
    ('              <li>Gain clarity when everything feels uncertain</li>',
     '              <li data-i18n="about.help.item1">Gain clarity when everything feels uncertain</li>'),
    
    ('              <li>Rebuild confidence after major life changes</li>',
     '              <li data-i18n="about.help.item2">Rebuild confidence after major life changes</li>'),
    
    ('              <li>Make aligned decisions instead of reactive ones</li>',
     '              <li data-i18n="about.help.item3">Make aligned decisions instead of reactive ones</li>'),
    
    ('              <li>Navigate fear without being ruled by it</li>',
     '              <li data-i18n="about.help.item4">Navigate fear without being ruled by it</li>'),
    
    ('              <li>Design a purposeful next chapter</li>',
     '              <li data-i18n="about.help.item5">Design a purposeful next chapter</li>'),
    
    # What to Expect section
    ('            <h3 style="font-family:\'Cormorant Garamond\',serif;font-size:1.3rem;font-weight:300;margin-bottom:1rem;color:var(--text);">What to Expect</h3>',
     '            <h3 style="font-family:\'Cormorant Garamond\',serif;font-size:1.3rem;font-weight:300;margin-bottom:1rem;color:var(--text);" data-i18n="about.expect.title">What to Expect</h3>'),
    
    ('            <p style="font-size:0.93rem;color:var(--text-light);line-height:1.8;margin-bottom:0.8rem;">Honest conversation. Deep clarity. Thoughtful challenges. Support that empowers rather than rescues.</p>',
     '            <p style="font-size:0.93rem;color:var(--text-light);line-height:1.8;margin-bottom:0.8rem;" data-i18n="about.expect.p1">Honest conversation. Deep clarity. Thoughtful challenges. Support that empowers rather than rescues.</p>'),
    
    ('            <p style="font-size:0.93rem;color:var(--text-light);line-height:1.8;">I won\'t tell you who to become. I\'ll help you uncover who you already are — and give you the structure to move toward it.</p>',
     '            <p style="font-size:0.93rem;color:var(--text-light);line-height:1.8;" data-i18n="about.expect.p2">I won\'t tell you who to become. I\'ll help you uncover who you already are — and give you the structure to move toward it.</p>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ About section translation attributes added!")
