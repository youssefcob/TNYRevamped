<script setup lang="ts">
const emit = defineEmits(['close']);
const close = () => {
    emit('close');
};
</script>

<template>
    <div class="privacy-container">
        <div class="head">
            <h3 @click="close()">X</h3>
        </div>

        <pre>
Privacy Policy for PT of the City
Last Updated: [4/9/2025]

1. Introduction
PT of the City ("we," "us," or "our") respects your privacy. This policy explains how we collect, use, and
protect non-medical information when you visit our website ([ptofthecity.com](https://www.ptofthecity.com))
or interact with us online. For health-related data, see our [HIPAA Notice of Privacy Practices](#) (PDF).

---

2. Information We Collect
We may collect:
- Personal Information: Name, email, phone number (e.g., via contact forms or appointment requests).
- Automated Data: IP address, browser type, cookies (see Section 4).
- Third-Party Tools: Google Analytics (anonymous usage data).

---

3. How We Use Your Information
- Respond to inquiries or schedule appointments.
- Improve website performance and user experience.
- Send email updates about your requests

---

4. Cookies and Tracking
We use cookies to:
- Analyze website traffic (Google Analytics).
- Remember user preferences.
You can disable cookies via browser settings or our cookie banner.

---

5. Sharing and Disclosure
We do not sell your data. Limited sharing may occur with:
- Service providers (e.g., website hosts) under confidentiality agreements.
- Legal authorities if required by law.

---

6. Your Rights (FTC Compliance)
- Opt-Out: Unsubscribe from emails (via link in emails) or disable cookies.
- Access/Delete: Request deletion of non-HIPAA data by contacting us.
- Do Not Track: We honor browser "Do Not Track" signals.

---

7. Security
We use industry-standard measures (SSL encryption, secure servers) to protect your data.

---

8. Changes to This Policy
Updates will be posted here with a revised "Last Updated" date.

---

9. Contact Us
For questions or requests:
- Email: [info@ptofthecity.com](mailto:info@ptofthecity.com)
- Phone: [(718) 648-0888](tel:7186480888)
- Address: 8746 20th Ave L, Brooklyn, NY 11214

        </pre>
    </div>

</template>

<style scoped lang="scss">
.privacy-container {
    background-color: rgba(200,200,200, 0.40);
    padding: 1rem;
    padding-right: 0rem;

    h3 {
        font-weight: 900;
        text-align: right;
        padding: 0 2rem;
        cursor: pointer;
    }

    pre {
        @extend p;
        height: 80vh;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 2rem;
    }
}
</style>