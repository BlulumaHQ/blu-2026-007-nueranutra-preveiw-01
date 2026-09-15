# Reposition the NuEra homepage around advanced quality systems

## What will change
- Replace the homepage opening message with “Built Beyond the Baseline,” the supplied technical supporting copy, two calls to action, and the trust line.
- Add two customer pathways immediately below it for new product development and existing product review.
- Add the supplied NuEra Standard comparison content as four premium, responsive feature blocks.
- Add the brand-protection section with documentation, consistency, and risk-mitigation benefits.
- Move the existing four manufacturing services lower on the page and update their heading and supporting line.
- Reframe the existing certification area around compliance as the foundation, retaining only the seven current certification logos.
- Keep the existing testimonials, then replace the closing prompt with the supplied consultation and product-pathway actions.
- Add a prominent “Start a Project” action and a restrained “Product Review” link to the existing header without changing the navigation structure.
- Add an Inquiry Type selector to the existing contact form. Links from each pathway will preselect the corresponding inquiry type automatically.
- Update homepage title, description, canonical URL, and matching social metadata while preserving existing routes.

## Visual and responsive approach
- Preserve Version A’s logo, green palette, typography, imagery, spacing rhythm, header, footer, and corporate character.
- Use existing semantic color styles and restrained borders, contrast, and typography for a technical B2B presentation.
- Keep comparison content easy to scan on desktop and stack baseline/standard content vertically on smaller screens.
- Preserve existing service images and all current behavior outside the requested homepage, header, contact-form, and metadata changes.

## Technical details
- Reuse the existing `/contact-us` page with an `inquiry` URL parameter rather than creating new routes.
- Read that parameter on the contact page to initialize a required Inquiry Type field with: New Product Development, Existing Product Review, Manufacturing Services, Regulatory & Compliance, and General Inquiry.
- Keep the existing form submission destination and pass the selected inquiry type as part of the submitted form data.
- Retain the existing SPA fallback and route structure.

## Verification
- Check desktop and mobile rendering for hierarchy, readable comparisons, card stacking, and header fit.
- Verify both homepage pathways reach the contact form with the correct inquiry type selected.
- Verify existing page navigation, service links, contact submission behavior, and valid direct URLs remain intact.
