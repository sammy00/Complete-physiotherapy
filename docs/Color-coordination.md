# 🎨 Dr. Vanita's Complete Physiotherapy

## Official Color Coordination & Design Tokens

**Project:** Dr. Vanita's Complete Physiotherapy\
**Document:** Official Color Coordination\
**Version:** 2.0\
**Status:** Final / Development Source of Truth\
**Prepared By:** Rohit Sanjay\
**Date:** July 2026

------------------------------------------------------------------------

## 1. Purpose

This document defines the official color system for the Complete
Physiotherapy website.

It establishes:

-   Brand colors
-   Supporting colors
-   Background colors
-   Typography colors
-   Button colors
-   Form colors
-   Card colors
-   Navigation colors
-   Footer colors
-   Status colors
-   Social colors
-   Gradients
-   Borders
-   Dividers
-   Shadows
-   Accessibility rules
-   Page-specific color usage
-   CSS design tokens

This document is the **single source of truth for color usage during
development**.

If another project document contains an older color palette, this
document takes precedence.

------------------------------------------------------------------------

# 2. Design Direction

The website follows a:

> **Premium Blue & Emerald Healthcare Design System**

The visual identity should communicate:

-   Trust
-   Professionalism
-   Healing
-   Recovery
-   Wellness
-   Cleanliness
-   Comfort
-   Modern healthcare
-   Reliability

The visual design should feel:

**Clean + Premium + Medical + Friendly + Trustworthy**

It should avoid feeling:

-   Too corporate
-   Too dark
-   Too colorful
-   Too playful
-   Too clinical/hospital-like
-   Overly saturated

------------------------------------------------------------------------

# 3. Core Color Strategy

The website uses three major visual roles:

### 🔵 Blue

Represents:

-   Trust
-   Professionalism
-   Reliability
-   Medical expertise
-   Structure

### 🟢 Emerald

Represents:

-   Healing
-   Recovery
-   Wellness
-   Progress
-   Positive action

### ⚪ White / Light Blue

Represents:

-   Cleanliness
-   Comfort
-   Space
-   Healthcare
-   Simplicity

### 🌑 Navy

Represents:

-   Authority
-   Contrast
-   Footer/navigation structure
-   Important information

------------------------------------------------------------------------

# 4. Official Color Palette

## 4.1 Primary Brand Colors

  --------------------------------------------------------------------------------
  Name              HEX               CSS Variable               Primary Usage
  ----------------- ----------------- -------------------------- -----------------
  Primary Blue      `#0F5CB8`         `--color-primary`          Main buttons,
                                                                 headings, links,
                                                                 icons

  Secondary Blue    `#2E7DE9`         `--color-secondary`        Hover states,
                                                                 accents,
                                                                 decorative
                                                                 elements

  Dark Navy         `#123B74`         `--color-dark-navy`        Main headings,
                                                                 strong text,
                                                                 navigation

  Footer Navy       `#0F2F63`         `--color-footer-navy`      Footer background

  Copyright Navy    `#0A2348`         `--color-copyright-navy`   Copyright section
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

## 4.2 Emerald / Healing Colors

  ------------------------------------------------------------------------------
  Name              HEX               CSS Variable             Usage
  ----------------- ----------------- ------------------------ -----------------
  Emerald           `#4CAF50`         `--color-emerald`        CTA accents,
                                                               highlights,
                                                               active states

  Soft Emerald      `#7BC47F`         `--color-soft-emerald`   Soft backgrounds,
                                                               decorative
                                                               elements
  ------------------------------------------------------------------------------

Emerald should be used as an **accent**, not as the dominant website
color.

------------------------------------------------------------------------

## 4.3 Background Colors

  ----------------------------------------------------------------------------
  Name              HEX               CSS Variable           Usage
  ----------------- ----------------- ---------------------- -----------------
  White             `#FFFFFF`         `--color-white`        Main background,
                                                             cards, forms

  Section           `#F7FAFD`         `--color-section`      Alternate
  Background                                                 sections

  Light Blue        `#EEF6FF`         `--color-light-blue`   Hero areas,
                                                             information
                                                             sections
  ----------------------------------------------------------------------------

Recommended background hierarchy:

``` text
White
  ↓
F7FAFD
  ↓
EEF6FF
  ↓
Soft Emerald areas
```

Avoid large areas of strong blue or emerald unless specifically required
by the design.

------------------------------------------------------------------------

# 5. Typography Colors

## 5.1 Primary Heading

**HEX:** `#123B74`

Use for:

-   H1
-   Major headings
-   Hero headings
-   Important section headings

------------------------------------------------------------------------

## 5.2 Secondary Heading

**HEX:** `#184D91`

Use for:

-   H2/H3 where variation is needed
-   Supporting section headings
-   Subsection headings

------------------------------------------------------------------------

## 5.3 Body Text

**HEX:** `#5F6F81`

Use for:

-   Paragraphs
-   Descriptions
-   Supporting content
-   Service descriptions
-   Testimonials

------------------------------------------------------------------------

## 5.4 Muted Text

**HEX:** `#8795A5`

Use for:

-   Metadata
-   Secondary information
-   Placeholders
-   Supporting labels

Do not use muted text for important information.

------------------------------------------------------------------------

## 5.5 Placeholder Text

**HEX:** `#9AA7B8`

Use for:

-   Form placeholders
-   Non-essential input hints

------------------------------------------------------------------------

## 5.6 White Text

**HEX:** `#FFFFFF`

Use on:

-   Primary blue buttons
-   Emerald buttons
-   Navy backgrounds
-   Footer
-   Dark CTA sections

------------------------------------------------------------------------

# 6. Primary Blue Usage

### Primary Blue

``` text
#0F5CB8
```

### Use for:

-   Primary buttons
-   Main CTA
-   Navigation active states where appropriate
-   Links
-   Icons
-   Section headings
-   Hero headings where appropriate
-   Form focus borders
-   Important UI elements

### Avoid:

-   Large full-page backgrounds
-   Long paragraphs
-   Excessive decorative usage
-   Using blue for every element

Blue should communicate **trust and structure**.

------------------------------------------------------------------------

# 7. Secondary Blue Usage

### Secondary Blue

``` text
#2E7DE9
```

### Use for:

-   Hover states
-   Small accents
-   Decorative elements
-   Gradient transitions
-   Secondary visual highlights
-   Small UI details

Secondary blue should support the primary blue rather than replace it.

------------------------------------------------------------------------

# 8. Emerald Usage

### Emerald

``` text
#4CAF50
```

### Use for:

-   Book Appointment CTA
-   WhatsApp-related brand accent where appropriate
-   Success states
-   Healing/recovery highlights
-   Statistics
-   Checkmarks
-   Active indicators
-   Small accent lines
-   Feature highlights
-   Positive feedback

### Avoid:

-   Long paragraphs
-   Main body text
-   Large page backgrounds
-   Excessive use across every section

Emerald should communicate:

> **Action + Recovery + Wellness**

------------------------------------------------------------------------

# 9. Soft Emerald Usage

### Soft Emerald

``` text
#7BC47F
```

Use sparingly for:

-   Decorative elements
-   Soft backgrounds
-   Icon backgrounds
-   Healthcare/wellness visual accents
-   Subtle illustrations

Recommended use:

``` css
background: rgba(123, 196, 127, 0.15);
```

rather than using the solid color across large sections.

------------------------------------------------------------------------

# 10. Navy Usage

## Dark Navy

``` text
#123B74
```

Use for:

-   Main headings
-   Strong text
-   Navigation text
-   Important labels

------------------------------------------------------------------------

## Footer Navy

``` text
#0F2F63
```

Use for:

-   Main footer background
-   Large dark information sections

------------------------------------------------------------------------

## Copyright Navy

``` text
#0A2348
```

Use for:

-   Copyright bar
-   Bottom-most footer section

Example:

``` text
Footer
#0F2F63
    ↓
Copyright Bar
#0A2348
```

------------------------------------------------------------------------

# 11. Button System

## 11.1 Primary Button

### Default

``` text
Background: #0F5CB8
Text:       #FFFFFF
```

### Hover

``` text
Background: #0C4EA3
Text:       #FFFFFF
```

### Active

``` text
Background: #093C82
Text:       #FFFFFF
```

### Example Usage

``` text
Learn More
View Services
Contact Us
```

------------------------------------------------------------------------

# 12. Appointment CTA

Appointment actions are high-priority conversion actions.

Recommended:

``` text
Background: #4CAF50
Text:       #FFFFFF
```

Hover:

``` text
Background: #3F9443
Text:       #FFFFFF
```

Use for:

-   Book Appointment
-   Schedule Appointment
-   Request Appointment

Do not use multiple large green CTAs in the same viewport.

------------------------------------------------------------------------

# 13. Secondary Button

### Default

``` text
Background: #FFFFFF
Border:     #0F5CB8
Text:       #0F5CB8
```

### Hover

``` text
Background: #0F5CB8
Text:       #FFFFFF
Border:     #0F5CB8
```

Use for:

-   Learn More
-   View Details
-   Explore Services
-   Secondary navigation actions

------------------------------------------------------------------------

# 14. WhatsApp Button

Use the official WhatsApp green:

``` text
#25D366
```

Recommended:

``` text
Background: #25D366
Text:       #FFFFFF
```

Use for:

-   WhatsApp CTA
-   Floating WhatsApp button
-   Contact actions

Do not replace WhatsApp's official green with the brand emerald.

------------------------------------------------------------------------

# 15. Form Color System

## Input

``` text
Background: #FFFFFF
Border: #DCE6F2
Text: #123B74
```

## Placeholder

``` text
#9AA7B8
```

## Label

``` text
#123B74
```

## Focus

``` text
Border: #0F5CB8
```

## Success

``` text
#4CAF50
```

## Error

``` text
#E53935
```

Inputs should remain visually clean and low-contrast until focused.

------------------------------------------------------------------------

# 16. Card System

## Card

``` text
Background: #FFFFFF
Border: #DCE6F2
Border Radius: 18px
```

Recommended shadow:

``` css
box-shadow: 0 10px 40px rgba(20, 60, 120, 0.08);
```

Cards should feel:

-   Clean
-   Soft
-   Lightweight
-   Premium

Avoid heavy shadows.

------------------------------------------------------------------------

# 17. Icon System

## Standard Icon

``` text
#0F5CB8
```

## Icon Background

``` text
#EEF6FF
```

## Healthcare/Recovery Icon

``` text
#4CAF50
```

## Emerald Icon Background

Use a subtle transparent variation of emerald rather than a strong solid
green.

Example:

``` css
background: rgba(76, 175, 80, 0.12);
```

------------------------------------------------------------------------

# 18. Border System

### Standard Border

``` text
#DCE6F2
```

Use for:

-   Cards
-   Forms
-   Inputs
-   Containers

------------------------------------------------------------------------

# 19. Divider System

### Standard Divider

``` text
#E8EEF5
```

Use for:

-   Section separators
-   Navigation separators
-   Content dividers

### Footer Divider

``` css
rgba(255, 255, 255, 0.12)
```

------------------------------------------------------------------------

# 20. Status Colors

  Status    HEX         Usage
  --------- ----------- --------------------
  Success   `#4CAF50`   Successful actions
  Warning   `#F4B400`   Warnings
  Error     `#E53935`   Errors
  Info      `#0F5CB8`   Information

Status colors should only be used where the status actually needs to be
communicated.

------------------------------------------------------------------------

# 21. Social Colors

## WhatsApp

``` text
#25D366
```

## Instagram

Use official Instagram branding when required.

## Google

Use Google's official colors only where necessary.

Social brand colors should not become part of the site's primary color
system.

------------------------------------------------------------------------

# 22. Gradients

Gradients should be used **sparingly**.

The website should primarily rely on clean solid colors and whitespace.

------------------------------------------------------------------------

## Primary Gradient

``` css
linear-gradient(
  135deg,
  #0F5CB8 0%,
  #2E7DE9 100%
);
```

Use for:

-   Special CTA elements
-   Decorative accents
-   Selected hero treatments

------------------------------------------------------------------------

## Recovery Gradient

``` css
linear-gradient(
  135deg,
  #4CAF50 0%,
  #3F9443 100%
);
```

Use sparingly.

------------------------------------------------------------------------

## Soft Section Gradient

``` css
linear-gradient(
  180deg,
  #FFFFFF 0%,
  #F7FAFD 100%
);
```

Recommended for:

-   Hero backgrounds
-   Large subtle sections

------------------------------------------------------------------------

## Hero Light Gradient

``` css
linear-gradient(
  180deg,
  #FFFFFF 0%,
  #EEF6FF 100%
);
```

This is preferred over strong saturated gradients for the main website
hero.

------------------------------------------------------------------------

# 23. Decorative Elements

## Leaves / Wellness Elements

Use:

``` text
#7BC47F
```

with approximately:

``` text
15%–35% opacity
```

------------------------------------------------------------------------

## Decorative Blue Dots

Use:

``` text
#C9DDF7
```

with low opacity.

------------------------------------------------------------------------

## Abstract Shapes

Use:

``` text
#EEF6FF
```

or:

``` text
#EAF4FF
```

with low opacity.

Decorations should never compete with the content.

------------------------------------------------------------------------

# 24. Recommended Color Ratio

The approximate visual ratio should be:

``` text
70% — White / Off-White / Light Backgrounds
20% — Blue / Navy
10% — Emerald / Green Accents
```

This is a visual guideline, not a mathematical requirement.

------------------------------------------------------------------------

# 25. Page-by-Page Color Usage

## 🏠 Home

### Hero

``` text
Background:
#FFFFFF → #EEF6FF

Heading:
#123B74

Supporting Text:
#5F6F81

Primary CTA:
#0F5CB8

Appointment CTA:
#4CAF50
```

### Why Choose Us

``` text
Background:
#F7FAFD

Heading:
#123B74

Icons:
#0F5CB8 / #4CAF50
```

### About

``` text
Background:
#FFFFFF

Heading:
#123B74

Body:
#5F6F81

Accent:
#4CAF50
```

### Services

``` text
Background:
#F7FAFD

Cards:
#FFFFFF

Icons:
#0F5CB8

Icon Background:
#EEF6FF

Hover Accent:
#4CAF50
```

### Testimonials

``` text
Background:
#EEF6FF

Cards:
#FFFFFF

Quote/Icon:
#0F5CB8

Rating:
#F4B400

Positive Accent:
#4CAF50
```

### Appointment CTA

``` text
Background:
#0F5CB8 or #123B74

Heading:
#FFFFFF

Text:
#FFFFFF

Button:
#4CAF50
```

### Contact

``` text
Background:
#FFFFFF

Heading:
#123B74

Icons:
#0F5CB8

CTA:
#4CAF50
```

------------------------------------------------------------------------

# 26. About Page

Recommended:

``` text
Hero:
#FFFFFF / #EEF6FF

Doctor Section:
#FFFFFF

Credentials:
#F7FAFD

Highlights:
#EEF6FF / subtle green

CTA:
#0F5CB8 / #4CAF50
```

Avoid making the entire About page blue or green.

------------------------------------------------------------------------

# 27. Services Page

Recommended:

``` text
Hero:
#EEF6FF

Service Section:
#F7FAFD

Service Cards:
#FFFFFF

Service Icons:
#0F5CB8

Service Icon Background:
#EEF6FF

Hover:
Subtle Emerald Accent
```

------------------------------------------------------------------------

# 28. Reviews Page

Recommended:

``` text
Hero:
#EEF6FF

Review Section:
#F7FAFD

Review Cards:
#FFFFFF

Quote Icon:
#0F5CB8

Rating:
#F4B400

Verified/Positive Accent:
#4CAF50
```

------------------------------------------------------------------------

# 29. Contact Page

Recommended:

``` text
Hero:
#EEF6FF

Contact Information:
#FFFFFF

Form:
#FFFFFF

Form Border:
#DCE6F2

Form Focus:
#0F5CB8

Appointment CTA:
#4CAF50

Map Section:
#F7FAFD
```

------------------------------------------------------------------------

# 30. Header

## Top Bar

Recommended background:

``` text
#F7FAFD
```

Text:

``` text
#5F6F81
```

Icons:

``` text
#0F5CB8
```

------------------------------------------------------------------------

## Navigation

Background:

``` text
#FFFFFF
```

Navigation text:

``` text
#123B74
```

Hover:

``` text
#0F5CB8
```

Active:

``` text
#4CAF50
```

Appointment button:

``` text
#4CAF50
```

------------------------------------------------------------------------

# 31. Footer

## Main Footer

``` text
Background:
#0F2F63

Heading:
#FFFFFF

Body:
#FFFFFF

Secondary Text:
#C8D6E8

Links:
#FFFFFF

Link Hover:
#4CAF50

Divider:
rgba(255,255,255,0.12)
```

## Copyright

``` text
Background:
#0A2348

Text:
#FFFFFF
```

------------------------------------------------------------------------

# 32. Accessibility Rules

Accessibility should always take priority over visual preference.

## Recommended

Use dark text on:

``` text
#FFFFFF
#F7FAFD
#EEF6FF
```

Use white text on:

``` text
#0F5CB8
#123B74
#0F2F63
#0A2348
#4CAF50
```

For all final UI components, verify contrast against the actual font
size and weight.

------------------------------------------------------------------------

## Avoid

Do not use:

``` text
#7BC47F
```

as normal body text on white.

Do not use light gray text for important information.

Do not use green text on pale green backgrounds for normal-sized text
unless sufficient contrast is verified.

Do not communicate meaning through color alone.

For example:

``` text
❌ Red = error only

✅ Red + error icon + clear message
```

------------------------------------------------------------------------

# 33. Color Usage Rules

### Rule 1

**Blue = Trust / Structure**

### Rule 2

**Emerald = Action / Recovery**

### Rule 3

**White = Cleanliness / Space**

### Rule 4

**Navy = Authority / Contrast**

### Rule 5

**Light Blue = Healthcare / Information**

### Rule 6

**Soft Green = Wellness / Positive Support**

------------------------------------------------------------------------

# 34. Do's

### ✅ Do

-   Use generous white space.
-   Use blue for primary structure.
-   Use emerald for actions and highlights.
-   Keep backgrounds mostly white/off-white.
-   Use navy for footer and strong contrast.
-   Keep shadows subtle.
-   Maintain consistent colors across all pages.
-   Check contrast before finalizing components.
-   Use the same tokens in Figma and React.

------------------------------------------------------------------------

# 35. Don'ts

### ❌ Don't

-   Use multiple shades of blue without a purpose.
-   Introduce random green shades.
-   Use emerald as the dominant page background.
-   Use saturated gradients everywhere.
-   Use heavy shadows.
-   Use light gray text for important information.
-   Use different button colors on every page.
-   Add colors that are not part of this design system without
    documenting them.

------------------------------------------------------------------------

# 36. CSS Design Tokens

Use the following as the development source of truth.

``` css
:root {
  /* ========================================
     BRAND
     ======================================== */

  --color-primary: #0F5CB8;
  --color-primary-hover: #0C4EA3;
  --color-primary-active: #093C82;

  --color-secondary: #2E7DE9;

  /* ========================================
     NAVY
     ======================================== */

  --color-dark-navy: #123B74;
  --color-footer-navy: #0F2F63;
  --color-copyright-navy: #0A2348;

  /* ========================================
     EMERALD
     ======================================== */

  --color-emerald: #4CAF50;
  --color-soft-emerald: #7BC47F;

  /* ========================================
     BACKGROUNDS
     ======================================== */

  --color-white: #FFFFFF;
  --color-section: #F7FAFD;
  --color-light-blue: #EEF6FF;

  /* ========================================
     TEXT
     ======================================== */

  --color-heading: #123B74;
  --color-heading-secondary: #184D91;
  --color-body: #5F6F81;
  --color-muted: #8795A5;
  --color-placeholder: #9AA7B8;

  /* ========================================
     UI
     ======================================== */

  --color-border: #DCE6F2;
  --color-divider: #E8EEF5;

  /* ========================================
     STATUS
     ======================================== */

  --color-success: #4CAF50;
  --color-warning: #F4B400;
  --color-error: #E53935;
  --color-info: #0F5CB8;

  /* ========================================
     SOCIAL
     ======================================== */

  --color-whatsapp: #25D366;

  /* ========================================
     RATING
     ======================================== */

  --color-rating: #F4B400;

  /* ========================================
     RADIUS
     ======================================== */

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  /* ========================================
     SHADOWS
     ======================================== */

  --shadow-card:
    0 10px 40px rgba(20, 60, 120, 0.08);

  --shadow-button:
    0 10px 24px rgba(15, 92, 184, 0.15);

  /* ========================================
     GRADIENTS
     ======================================== */

  --gradient-primary:
    linear-gradient(
      135deg,
      #0F5CB8 0%,
      #2E7DE9 100%
    );

  --gradient-recovery:
    linear-gradient(
      135deg,
      #4CAF50 0%,
      #3F9443 100%
    );

  --gradient-soft-section:
    linear-gradient(
      180deg,
      #FFFFFF 0%,
      #F7FAFD 100%
    );

  --gradient-hero:
    linear-gradient(
      180deg,
      #FFFFFF 0%,
      #EEF6FF 100%
    );
}
```

------------------------------------------------------------------------

# 37. Quick Reference

## Primary

  Purpose          HEX
  ---------------- -----------
  Primary Blue     `#0F5CB8`
  Secondary Blue   `#2E7DE9`
  Dark Navy        `#123B74`
  Footer Navy      `#0F2F63`
  Copyright Navy   `#0A2348`

## Green

  Purpose        HEX
  -------------- -----------
  Emerald        `#4CAF50`
  Soft Emerald   `#7BC47F`
  WhatsApp       `#25D366`

## Background

  Purpose              HEX
  -------------------- -----------
  White                `#FFFFFF`
  Section Background   `#F7FAFD`
  Light Blue           `#EEF6FF`

## Text

  Purpose             HEX
  ------------------- -----------
  Heading             `#123B74`
  Secondary Heading   `#184D91`
  Body                `#5F6F81`
  Muted               `#8795A5`
  Placeholder         `#9AA7B8`

## UI

  Purpose   HEX
  --------- -----------
  Border    `#DCE6F2`
  Divider   `#E8EEF5`

## Status

  Purpose   HEX
  --------- -----------
  Success   `#4CAF50`
  Warning   `#F4B400`
  Error     `#E53935`
  Info      `#0F5CB8`

------------------------------------------------------------------------

# 38. Final Design Principle

The website should visually communicate:

> **Trust through Blue.\
> Recovery through Emerald.\
> Cleanliness through White.\
> Authority through Navy.**

The overall visual balance should remain:

**Clean → Professional → Trustworthy → Warm → Premium**

The color system should support the content and user journey rather than
overpower it.

------------------------------------------------------------------------

# 39. Source of Truth

This document is the official color source for:

-   Figma
-   React
-   CSS
-   Tailwind configuration
-   Buttons
-   Navigation
-   Cards
-   Forms
-   Footer
-   CTAs
-   Icons
-   Illustrations
-   Marketing assets

### Official palette version

**Premium Blue & Emerald --- Version 2.0**

Older palettes should be considered **deprecated** and should not be
used for new design or development work.
