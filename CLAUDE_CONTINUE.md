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

**Current Phase:** Mobile Optimization ✅ COMPLETE
**Deployment:** Live on Netlify at `bucolic-quokka-1653ea.netlify.app` and `insta-bar.com` (DNS propagating)
**Repository:** `https://github.com/KodeRacer5/instabar2` - Branch: `main`

### Completed This Session:
- ✅ Partners page SEO backlinks (21 manufacturer/supplier links)
- ✅ BackToTop component with progress ring
- ✅ Component directory documentation updated
- ✅ Print branding (header/footer for guide templates)
- ✅ Navbar hidden on print (`print:hidden`)
- ✅ Copyright added to footer
- ✅ Contact page redesign (removed exposed email, 2/3 + 1/3 layout)
- ✅ Site config updated (removed email link)
- ✅ GitHub push to `instabar2` repo
- ✅ Netlify deployment (Node 20 fix applied)
- ✅ Product CTA email link fix

### Mobile Optimization Complete (Session 4):
- ✅ Mobile navigation - `MobileNav.tsx` hamburger menu + slide panel
- ✅ Hero responsive - Separate desktop/mobile layouts with stacked design
- ✅ Galaxy performance - `ResponsiveGalaxy.tsx` shows static gradient on mobile (no WebGL)
- ✅ SiteNavigationElement schema - JSON-LD in `layout.tsx`
- ✅ Build verified - 45 routes generated successfully

---

## PRIORITIES

**All Mobile Priorities Complete ✅**

**Next Suggested Priorities:**

**Priority 1: Push to GitHub**
- Commit mobile optimization changes
- `git add . && git commit -m "Mobile optimization complete" && git push origin main`

**Priority 2: README Update**
- Replace Launch UI template text with Insta-Bar content
- Document mobile features

**Priority 3: Resend API Integration**
- Add `RESEND_API_KEY` to Netlify environment variables
- Test contact form email delivery

**Priority 4: Cleanup**
- Remove `SETUP.md` (Launch UI setup guide)
- Update `tests/example.test.ts` placeholder

---

## DECISIONS MADE

| Topic | Decision | Rationale |
|-------|----------|-----------|
| Email exposure | Removed all visible emails | Spam prevention |
| Contact layout | 2/3 form, 1/3 info | Form is primary action |
| Location | San Diego, California | Client preference |
| Print branding | Insta-Bar header + copyright footer | Professional printable guides |
| Node version | 20 (in .nvmrc) | Next.js 16 requires Node 20+ |
| Branch strategy | Push to both `main` and `Instabar-version-3` | Keep branches in sync |
| **Mobile nav style** | Hamburger menu, slide-in panel from right | Standard UX, animated |
| **Galaxy on mobile** | Static CSS gradient (no WebGL) | Battery/performance |
| **Hero mobile layout** | Stack vertically (image top, content below) | Mobile-first design |

---

## CODE PATTERNS

### Print-only elements:
```tsx
<div className="hidden print:block">
  {/* Only visible when printing */}
</div>
```

### Screen-only elements:
```tsx
<div className="print:hidden">
  {/* Hidden when printing */}
</div>
```

### BackToTop usage:
```tsx
import BackToTop from '@/components/ui/back-to-top';
<BackToTop threshold={400} showProgress={true} />
```

### Galaxy background:
```tsx
<Galaxy
  hueShift={200}
  saturation={0.8}
  speed={0.3}
  starSpeed={0.3}
  glowIntensity={0.5}
  density={1.2}
  mouseInteraction={false}
  mouseRepulsion={false}
/>
```

### Image mask fade:
```tsx
style={{
  maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)',
  WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)',
}}
```

---

## KEY FILES

| File | Purpose |
|------|---------|
| `components/sections/navbar/DockNavbar.tsx` | Main navigation - needs mobile version |
| `components/sections/hero/default.tsx` | Hero section - needs mobile responsive |
| `src/components/ReactBits/Backgrounds/Galaxy.tsx` | WebGL background |
| `components/ui/back-to-top/index.tsx` | Scroll to top with progress |
| `components/templates/guide-template.tsx` | Resource guides with print branding |
| `app/layout.tsx` | Root layout - BackToTop, potential schema |
| `config/site.ts` | Site configuration |
| `.nvmrc` | Node version (set to 20) |

---

## DEPENDENCIES

**Installed:**
- motion (animations)
- ogl (Galaxy WebGL)
- lucide-react (icons)
- gsap (optional animations)
- resend (contact form email - needs API key)

**Environment Variables Needed:**
- `RESEND_API_KEY` - For contact form emails (optional, logs to console without it)

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

---

## OPTIONAL CLEANUP

- `README.md` - Still shows Launch UI template text, should update with Insta-Bar content
- `SETUP.md` - Launch UI setup guide, can remove or update
- `tests/example.test.ts` - Contains placeholder test

---

## DEPLOYMENT

**Netlify Site:** `bucolic-quokka-1653ea`
**URL:** https://bucolic-quokka-1653ea.netlify.app
**Custom Domain:** insta-bar.com (DNS propagating)
**Build Command:** `npm run build`
**Publish Directory:** `.next`
**Node Version:** 20 (from .nvmrc)

---

## QUICK START

1. Read this file completely
2. Read `D:\Projects\web-master-templates\7-COMPONENT_DIRECTORY.md` for component patterns
3. Run `npm run dev` to start local server
4. Check mobile view in browser DevTools (F12 → toggle device toolbar)
5. Implement Priority 1: Mobile navigation

---

**Ready to continue? Confirm you've read the startup files and state which priority you're starting with.**
