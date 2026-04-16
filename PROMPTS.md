# Professional AI-Agent Prompts: Build & Launch SampleAIStore

Use these prompts in Cursor + Claude (or similar coding agents) in order.

---

## 1) Project Setup Prompt

**Prompt to AI Agent**

```text
You are a senior full-stack engineer. Create a production-ready Next.js 14 + TypeScript e-commerce project named "SampleAIStore" using App Router and Tailwind CSS.

Requirements:
1) Initialize package dependencies for Next.js, Tailwind, Stripe, @react-three/fiber, @react-three/drei, three.
2) Add strict TypeScript config and path alias @/*.
3) Create clear folder structure: app/, app/components/, app/api/checkout/, lib/, public/.
4) Build scripts: dev, build, start, lint.
5) Add .env.example with Stripe variables.
6) Ensure project runs with npm install && npm run dev.

Output:
- Show created files and key code blocks.
- Explain why each dependency is included.
```

## 2) UX + Responsive Landing Prompt

```text
Act as a principal UI engineer. Build a fully responsive homepage for SampleAIStore.

Deliver:
- Hero section with strong product value proposition.
- Product grid with 3 premium devices.
- Mobile-first design with accessible typography, semantic HTML, and clean spacing.
- Reusable utility classes and maintainable component patterns.

Constraints:
- Keep Lighthouse performance and accessibility in mind.
- Use next/image for product images.
- Add polished button states and readable contrast.

Output:
- Provide updated TSX and CSS files.
- Include rationale for responsive breakpoints and accessibility choices.
```

## 3) 3D Product Viewer Prompt

```text
You are a 3D web specialist. Implement an interactive 3D product viewer for SampleAIStore using react-three-fiber and drei.

Requirements:
- Build a client component <ModelViewer />.
- Include lighting, shadows, orbit controls, and an attractive procedural 3D object as placeholder for product model.
- Ensure component degrades gracefully if WebGL fails.
- Keep code modular so model asset can later be swapped for glTF.

Output:
- Provide component code.
- Explain camera and lighting settings.
- Add notes for replacing the placeholder with real glTF assets.
```

## 4) AR Try-On Prompt

```text
Act as an AR product engineer. Add AR try-on entrypoint to SampleAIStore.

Requirements:
- Implement <ArTryOnButton /> client component.
- Detect navigator.xr availability.
- If XR available: guide user to start AR session.
- If not available: fallback to platform documentation or alternative AR path.
- Keep implementation production-safe and user-friendly.

Output:
- Provide TypeScript component code.
- List browser/device limitations and practical production alternatives (WebXR, USDZ, Scene Viewer).
```

## 5) Stripe Checkout Prompt

```text
You are a payments engineer. Integrate Stripe Checkout into SampleAIStore.

Requirements:
- Add server route app/api/checkout/route.ts.
- Securely read STRIPE_SECRET_KEY from env.
- Map product IDs to Stripe Price IDs via environment variables.
- Create checkout session and return session id.
- Build client <CheckoutButton /> component using @stripe/stripe-js.
- Handle common failure states.

Security:
- Never expose secret key client-side.
- Validate product IDs before creating session.

Output:
- Provide API route and client component.
- Include an env variable checklist.
```

## 6) QA + Testing Prompt

```text
You are a release QA engineer. Validate SampleAIStore before deployment.

Tasks:
- Run npm run lint and npm run build.
- Verify responsive behavior for mobile/tablet/desktop.
- Test checkout flow in Stripe test mode.
- Confirm fallback behavior for AR button on non-XR devices.
- List all issues by severity with clear fixes.

Output:
- Structured QA report with Pass/Fail/Needs Fix.
- Deployment go/no-go recommendation.
```

## 7) Deployment Prompt (Live URL)

```text
Act as a DevOps engineer. Deploy SampleAIStore to a live production URL on Vercel.

Tasks:
1) Push code to GitHub.
2) Import project in Vercel.
3) Configure all environment variables.
4) Run production deployment.
5) Verify the live URL works end-to-end.

Output format:
- Live URL
- Build summary
- Environment variables configured
- Post-deploy smoke test results
- Rollback plan
```

## 8) Launch-Ready Prompt (Final Polish)

```text
You are a technical product lead. Prepare SampleAIStore for launch.

Deliverables:
- Concise README with local setup, env config, and deployment steps.
- Production checklist (security, performance, monitoring, analytics).
- Backlog for phase 2 enhancements (auth, inventory, order history, reviews, CMS integration).
- Suggested AI-agent workflow for ongoing maintenance.

Output:
- Final launch memo in professional tone suitable for stakeholders.
```
