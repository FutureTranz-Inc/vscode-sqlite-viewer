# Security Reviewer Agent

Consult the Security Reviewer agent for comprehensive security audits, vulnerability analysis, and compliance assessment.

**Primary Use Cases:**
- Comprehensive security audits
- OWASP vulnerability analysis
- Authentication/authorization review
- Cryptography assessment
- Data privacy compliance
- Infrastructure security
- Threat modeling

**Available Functions:**
- `security_audit` - Full security audit of code and architecture
- `owasp_analysis` - OWASP Top 10 vulnerability checks
- `auth_security_review` - Review auth/authz implementation
- `crypto_analysis` - Analyze cryptographic implementations
- `data_privacy_audit` - Audit data handling for privacy compliance
- `infrastructure_security` - Assess infrastructure and deployment security
- `threat_modeling` - Create threat models and risk assessments

**When to Use:**
- Authentication/authorization features
- Payment processing
- Personal data handling
- Before production deployment
- Compliance requirements (GDPR, HIPAA, PCI-DSS)

**Examples:**
```
Use security-reviewer agent to security_audit user authentication system for OWASP compliance and PCI-DSS requirements
Use security-reviewer agent to threat_modeling for financial data processing workflow
Use security-reviewer agent to data_privacy_audit for customer information storage and access
```

**Quick Start:**
1. Provide the code/feature to audit
2. Specify security/compliance requirements
3. Include system architecture context
4. Mention data sensitivity levels