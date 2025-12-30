# CLAUDE_CONTINUE.md - Insta-Bar Website

**PROJECT PATH:** `D:\Projects\Web-Templates\In-Producttion\insta-bar-new`

**PROJECT NAME:** Insta-Bar Dental Implant Verification Website

**STARTUP FILES TO READ:**
1. `D:\Projects\Web-Templates\In-Producttion\insta-bar-new\CLAUDE_CONTINUE.md` (this file)
2. `D:\Projects\Web-Templates\In-Producttion\insta-bar-new\README.md`
3. `D:\Projects\Web-Templates\In-Producttion\insta-bar-new\config\site.ts`
4. `D:\Projects\web-master-templates\7-COMPONENT_DIRECTORY.md`

---

## PROJECT STATUS

**Current Phase:** Mobile Optimization & Polish
**Deployment:** Live on Netlify at `insta-bar.netlify.app`
**Repository:** `https://github.com/KodeRacer5/instabar2` - Branch: `main` and `Instabar-version-3`

### Completed This Session:
- ✅ JSON-LD schema injection fix (SiteNavigationElement + Organization)
- ✅ Mobile hero gap fix (removed min-h-screen)
- ✅ Product hero mobile layout + working scroll arrow
- ✅ Replaced hamburger menu with mini dock at top (Apple-style icons with labels)
- ✅ Hidden oversized product image on mobile (What It Is section)
- ✅ Resend API key configured in Netlify (`RESEND_API_KEY` env var)
- ✅ DNS records added in Netlify for Resend domain verification (pending)

### Pending/In Progress:
- ⏳ Resend domain verification (DNS propagating)
- ⏳ Hostinger nameserver change to Netlify (user locked out of Hostinger)
- ⏳ SSL certificate renewal (blocked by DNS propagation)

---

## PRIORITIES

**Priority 1: Add smaller mobile image to "What It Is" section**
- Currently image is hidden on mobile
- Option: Add scaled-down version (250px height) above the cards
- User needs to decide: keep hidden or add smaller image

**Priority 2: Mobile cleanup - hide unnecessary sections**
- Candidates to hide on mobile: Gallery, Compatibility table, Comparison table
- Use `hidden md:block` pattern to remove without leaving gaps

**Priority 3: Test contact form email delivery**
- Resend API key is configured
- Test at `https://insta-bar.netlify.app/contact`
- Emails sent from `onboarding@resend.dev` until domain verified

**Priority 4: Update Resend sender to custom domain**
- Once DNS verifies, update `from:` field in `/app/api/contact/route.ts`
- Change from `onboarding@resend.dev` to `contact@insta-bar.com`

**Priority 5: README update**
- Replace Launch UI template text with Insta-Bar content

---

## DECISIONS MADE

| Topic | Decision | Rationale |
|-------|----------|-----------|
| Mobile navigation | Mini dock at top with icons + labels | Matches desktop style, user preference over hamburger |
| Product image mobile | Hidden on mobile | 850x750px image too large, cards display properly without it |
| Email exposure | Removed all visible emails | Spam prevention |
| Contact layout | 2/3 form, 1/3 info | Form is primary action |
| Location | San Diego, California | Client preference |
| Print branding | Insta-Bar header + copyright footer | Professional printable guides |
| Node version | 20 (in .nvmrc) | Next.js 16 requires Node 20+ |
| Resend sender | `onboarding@resend.dev` temporarily | Custom domain pending DNS verification |

---

## PENDING DECISIONS

| Topic | Options | Notes |
|-------|---------|-------|
| Product mobile image | A) Keep hidden, B) Add smaller version | User asked about options, no final decision |
| Mobile sections to hide | Gallery, Compatibility, Comparison | Discuss with user which to remove |

---

## CODE PATTERNS

### Hide on mobile, show on desktop:
```tsx
<div className="hidden md:block">
  {/* Desktop only content */}
</div>
```

### Show on mobile, hide on desktop:
```tsx
<div className="md:hidden">
  {/* Mobile only content */}
</div>
```

### Mini dock navigation (mobile):
```tsx
<nav className="flex items-start gap-3">
  {navItems.map((item) => (
    <button className="flex flex-col items-center gap-1">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/50 bg-gray-800/90">
        <Icon className="size-4" />
      </div>
      <span className="text-[10px] font-medium text-white/70">{label}</span>
    </button>
  ))}
</nav>
```

### Responsive Galaxy (mobile performance):
```tsx
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';
// Shows static gradient on mobile, WebGL on desktop
```

---

## KEY FILES

| File | Purpose |
|------|---------|
| `components/sections/navbar/DockNavbar.tsx` | Main navigation with mini dock for mobile |
| `components/sections/product/overview.tsx` | "What It Is" section - image hidden on mobile |
| `components/sections/hero/default.tsx` | Home hero with mobile layout |
| `components/sections/product/hero.tsx` | Product hero with mobile layout |
| `app/api/contact/route.ts` | Contact form API (Resend integration) |
| `app/layout.tsx` | Root layout with JSON-LD schemas |
| `src/components/ReactBits/Backgrounds/ResponsiveGalaxy.tsx` | Mobile-optimized background |
| `config/site.ts` | Site configuration |

---

## ENVIRONMENT VARIABLES

**Configured in Netlify:**
- `RESEND_API_KEY` - For contact form emails (set, working)

---

## DNS STATUS

**Netlify DNS records added for Resend:**
- TXT: `resend._domainkey` (DKIM)
- MX: `send` → `feedback-smtp.us-east-1.amazonses.com`
- TXT: `send` → `v=spf1 include:amazonses.com ~all`

**Blocking issue:** 
- Domain `insta-bar.com` still points to Hostinger (`dns-parking.com`)
- User locked out of Hostinger account
- Site accessible at `https://insta-bar.netlify.app` in the meantime

---

## MCP TOOLS

- `reactbits:get_component` - Get ReactBits components
- `reactbits:search_components` - Search available components
- `desktop-commander` - File operations, process execution
- `kb-memory` - Knowledge base storage

---

## DO NOT

- ❌ Expose email addresses (spam risk)
- ❌ Use `siteConfig.links.email` (removed)
- ❌ Forget `print:hidden` on nav elements
- ❌ Use Node 18 (requires Node 20+)
- ❌ Push without testing build locally first (`npm run build`)
- ❌ Make large layout changes without testing on mobile first

---

## DEPLOYMENT

**Netlify Site:** `insta-bar`
**URL:** https://insta-bar.netlify.app
**Custom Domain:** insta-bar.com (DNS not yet pointed to Netlify)
**Build Command:** `npm run build`
**Publish Directory:** `.next`
**Node Version:** 20 (from .nvmrc)
**GitHub Repo:** https://github.com/KodeRacer5/instabar2

---

## QUICK START

1. Read this file completely
2. Read `D:\Projects\Web-Templates\In-Producttion\insta-bar-new\README.md`
3. Read `D:\Projects\Web-Templates\In-Producttion\insta-bar-new\config\site.ts`
4. Run `npm run dev` to start local server
5. Check mobile view in browser DevTools (F12 → toggle device toolbar)
6. Implement Priority 1 based on user's decision

---

**Ready to continue? Confirm you've read the startup files and ask user about Priority 1 (mobile image decision).**
