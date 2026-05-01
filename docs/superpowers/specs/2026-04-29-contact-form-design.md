---
name: contact-form-design
description: Design for adding phone number visibility and third‑party email handling to the contact page and footer.
type: project
---

# Contact Form Design (2026‑04‑29)

## Goal
Add a visible phone number to the **Contact** page and the site **footer**, and replace the simulated API call with a real email submission using a third‑party service (Getform). The email should be sent as an HTML‑formatted message.

## Components

1. **Phone number visibility**
   - **Contact page** (`src/modules/contact/index.tsx`)
     - Add a new info block after the existing email block:
       ```tsx
       <div className="flex items-start gap-4">
         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
           <Phone className="text-primary w-6 h-6" />
         </div>
         <div>
           <h3 className="font-bold text-secondary text-lg mb-1">Phone</h3>
           <a href="tel:+61430944615" className="text-secondary/80 hover:text-primary transition-colors">+61 4 3094 4615</a>
         </div>
       </div>
       ```
   - **Footer** (`src/components/layout/Footer.tsx`)
     - Extend the `<address>` block with a phone line matching the styling of the email line:
       ```tsx
       <a href="tel:+61430944615" className="hover:text-primary transition-colors">+61 4 3094 4615</a>
       ```

2. **Form submission**
   - Replace the simulated `await new Promise…` with a POST to **Getform**.
   - Add hidden fields for subject, reply‑to, and redirect:
     ```tsx
     <form onSubmit={handleSubmit(onSubmit)} action="https://getform.io/f/<YOUR_FORM_ID>" method="POST">
       <input type="hidden" name="_subject" value="New Contact Form Submission – Saanvi Services" />
       <input type="hidden" name="_replyto" value="{{email}}" />
       <input type="hidden" name="_next" value="https://saanviservices.com.au/thanks" />
       …
     </form>
     ```
   - Keep existing `react‑hook‑form` validation; the library will still call `handleSubmit` which ultimately triggers the native form submit.
   - Remove the `alert`/`console.log` placeholder.

3. **HTML email template** (new file `public/email/contact-template.html`)
   ```html
   <!DOCTYPE html>
   <html>
   <head><meta charset="UTF-8"><style>body{font-family:sans-serif;color:#333}</style></head>
   <body>
     <h2>New Contact Form Submission</h2>
     <table cellpadding="4" cellspacing="0" border="1" style="border-collapse:collapse; width:100%; max-width:600px;">
       <tr><th align="left">Name</th><td>{{name}}</td></tr>
       <tr><th align="left">Email</th><td>{{email}}</td></tr>
       <tr><th align="left">Phone</th><td>{{phone}}</td></tr>
       <tr><th align="left">Service</th><td>{{service}}</td></tr>
       <tr><th align="left">Message</th><td>{{message}}</td></tr>
     </table>
   </body>
   </html>
   ```
   - Upload this template in the Getform dashboard under **Email Template**.
   - Placeholder variables (`{{name}}`, etc.) are automatically replaced by Getform.

4. **Thank‑you page** (optional but required for the `_next` redirect)
   - Create a new route `/thanks` that displays a simple thank‑you message.
   - Minimal component, e.g., `src/pages/Thanks.tsx` returning a centered message.

## Data Flow
1. User fills the form → `react‑hook‑form` validates client‑side.
2. On submit, the native form posts to Getform endpoint.
3. Getform receives the payload, renders the HTML template, and sends an email to `info@saanviservices.com.au`.
4. After email dispatch, Getform redirects the user to `/thanks`.

## Testing
- **Unit**: Verify that hidden fields are present in the rendered form.
- **Integration**: Submit the form in a dev environment, check the email inbox for correctly formatted HTML.
- **Visual**: Ensure the phone number appears correctly on both pages and is clickable on mobile devices.

## Risks & Mitigations
- **Spam submissions** – Enable Getform’s built‑in reCAPTCHA or honeypot option.
- **Email deliverability** – Use a verified sender email (info@saanviservices.com.au) in the Getform account.
- **Missing Getform ID** – Placeholder `<YOUR_FORM_ID>` must be replaced before deployment.

---

**Next steps**
1. Review this spec. Let me know if any section needs clarification or adjustment.
2. Once approved, I will run the self‑review, then invoke the `writing-plans` skill to create the implementation plan.
