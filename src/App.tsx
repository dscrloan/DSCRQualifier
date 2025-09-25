import React from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { CheckCircle, ArrowRight, Calculator, FileText, TrendingUp, MapPin } from 'lucide-react';

export default function App() {
  React.useEffect(() => {
    // Set document title and meta tags
    document.title = "DSCR Qualifier: See If You May Qualify (Checklist + Tips)";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Use this DSCR qualifier guide to gauge readiness: DSCR ratio, LTV, reserves, credit signals, property type, and steps. Educational overview.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Canonical link
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DSCR Qualifier: See If You May Qualify (Checklist + Tips)');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Use this DSCR qualifier guide to gauge readiness: DSCR ratio, LTV, reserves, credit signals, property type, and steps. Educational overview.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    // Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', 'DSCR Qualifier: See If You May Qualify (Checklist + Tips)');
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Use this DSCR qualifier guide to gauge readiness: DSCR ratio, LTV, reserves, credit signals, property type, and steps. Educational overview.');
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    // JSON-LD Structured Data (placeholders as requested)
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What DSCR is usually needed to qualify?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most lenders look for DSCR ratios of 1.0 to 1.25 or higher, though requirements vary by lender and property type. Higher ratios generally improve qualification odds and may offer better terms."
              }
            },
            {
              "@type": "Question", 
              "name": "Can first-time investors qualify?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, first-time investors can qualify for DSCR loans, though some lenders prefer borrowers with rental property experience. Strong reserves and conservative LTV ratios can help offset limited experience."
              }
            },
            {
              "@type": "Question",
              "name": "How do reserves affect qualification?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lenders typically require 2-6 months of PITIA payments in liquid reserves, with exact requirements varying by loan amount and risk factors. Higher reserves can strengthen borderline applications."
              }
            },
            {
              "@type": "Question",
              "name": "Do STR properties change DSCR requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Short-term rental properties often face higher DSCR requirements (1.2-1.3+) and increased reserve expectations due to income volatility and operational complexity compared to traditional rentals."
              }
            },
            {
              "@type": "Question",
              "name": "Can lower LTV offset DSCR under 1.1?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lower loan-to-value ratios can sometimes help compensate for marginal DSCR ratios, as they reduce lender risk exposure. However, each lender has specific minimum DSCR requirements."
              }
            },
            {
              "@type": "Question",
              "name": "What credit considerations matter most?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Credit scores, payment history, debt-to-income ratios, and previous mortgage performance are key factors. Some DSCR lenders focus more on property cash flow than personal credit, but both remain important."
              }
            },
            {
              "@type": "Question",
              "name": "Are condos treated differently for DSCR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Condominiums may require additional documentation including HOA financial statements and bylaws review. Some lenders have specific condo restrictions or require higher DSCR ratios for condo projects."
              }
            },
            {
              "@type": "Question",
              "name": "What documentation speeds up the process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Having current lease agreements, rent rolls, property management contracts, recent bank statements, and tax returns readily available can accelerate the review process significantly."
              }
            }
          ]
        },
        {
          "@type": "HowTo",
          "name": "How to Pre-Qualify for a DSCR Loan",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Calculate Your DSCR Ratio",
              "text": "Divide monthly rental income by total monthly payment (PITIA) to determine your debt service coverage ratio."
            },
            {
              "@type": "HowToStep", 
              "name": "Assess Your Down Payment",
              "text": "Most DSCR loans require 20-25% down payment, with higher equity potentially offsetting other qualification factors."
            },
            {
              "@type": "HowToStep",
              "name": "Review Documentation Requirements", 
              "text": "Gather rent roll, lease agreements, property details, and financial reserves documentation."
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "/"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Qualifier",
              "item": "/qualifier"
            }
          ]
        },
        {
          "@type": "Organization",
          "name": "DSCR Qualifier",
          "url": window.location.origin,
          "description": "Educational resource for DSCR loan pre-qualification guidance"
        }
      ]
    };

    const script = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(script);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryCTA = () => {
    window.open('https://www.shopdscrloans.com', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="font-semibold">DSCR Qualifier</h2>
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <li>Home</li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 mx-2" />
                    Qualifier
                  </li>
                </ol>
              </nav>
            </div>
            <Button onClick={primaryCTA} className="font-medium" aria-label="See My DSCR Options">
              See My DSCR Options →
            </Button>
          </div>
        </div>
      </header>

      {/* Jump Navigation Menu */}
      <nav className="bg-muted/50 border-b border-border" aria-label="Page sections">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              { id: 'quick-answer', label: 'Quick Answer' },
              { id: 'qualifier-checklist', label: 'Qualifier Checklist' },
              { id: 'dscr-calc', label: 'DSCR Calc' },
              { id: 'states', label: 'States' },
              { id: 'property-types', label: 'Property Types' },
              { id: 'improve-odds', label: 'Improve Odds' },
              { id: 'docs-timeline', label: 'Docs & Timeline' },
              { id: 'faqs', label: 'FAQs' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors underline"
                aria-label={`Jump to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">DSCR Qualifier: Are You Ready to Apply?</h1>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              This readiness guide outlines the key signals lenders review when evaluating DSCR loan applications: debt service coverage ratio, loan-to-value, reserves, credit profile, property type, and documentation requirements. This is an educational overview only and does not constitute lending advice or pre-qualification.
            </p>
            <Button onClick={primaryCTA} size="lg" className="font-medium" aria-label="See My DSCR Options">
              See My DSCR Options →
            </Button>
          </div>
        </section>

        {/* Quick Answer */}
        <section id="quick-answer" className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">What Signals Pre-Qualify an Investor for DSCR?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p>DSCR ≥ 1.0–1.25 is commonly sought by lenders, with higher ratios providing additional cushion and improving qualification prospects.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p>LTV ranges around 70–80% are typical, with more equity potentially offsetting borderline qualification factors.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p>Reserves, credit signals, investor experience, and property type all influence the overall qualification assessment.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifier Checklist */}
        <section id="qualifier-checklist" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">10-Question DSCR Qualifier Checklist</h2>
              <p className="mb-8 text-muted-foreground">
                Answer these questions honestly to gauge your readiness. This checklist is educational only and does not constitute a credit decision or lending commitment.
              </p>
              <div className="space-y-4">
                {[
                  { q: "Do you know your Monthly Rent or Market Rent?", note: "Accurate rental income projection is essential for DSCR calculation" },
                  { q: "Do you know your PITIA estimate (principal, interest, taxes, insurance, HOA)?", note: "Total monthly payment determines debt service in the ratio" },
                  { q: "Is your DSCR (Rent ÷ PITIA) around 1.0–1.25+?", note: "Higher ratios generally indicate stronger qualification potential" },
                  { q: "What LTV are you targeting (e.g., 75–80%)?", note: "Lower loan amounts relative to value can strengthen applications" },
                  { q: "Do you have reserves (months of PITIA) available?", note: "Liquid reserves demonstrate financial stability to lenders" },
                  { q: "What's your credit profile (general band)?", note: "Credit scores and history factor into lending decisions" },
                  { q: "Property type: SFR / 2–4 / Condo / STR?", note: "Different property types may have varying qualification requirements" },
                  { q: "Any investor experience (doors/history, PM plan)?", note: "Previous rental property ownership can be viewed favorably" },
                  { q: "Comfortable with points/buydowns to shape pricing/terms?", note: "Flexibility on pricing can expand available options" },
                  { q: "Ready for appraisal and documentation steps?", note: "Loan process involves property valuation and financial verification" }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge variant="outline" className="mt-1 flex-shrink-0">{index + 1}</Badge>
                      <div>
                        <p className="font-medium mb-2">{item.q}</p>
                        <p className="text-sm text-muted-foreground">{item.note}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button onClick={primaryCTA} className="font-medium" aria-label="See where you stand">
                  See where you stand → shopdscrloans.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DSCR Calculation */}
        <section id="dscr-calc" className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 flex items-center">
                <Calculator className="h-6 w-6 mr-3" />
                Check Your DSCR in 3 Steps
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="mb-3">Step 1: Gather Numbers</h3>
                  <p className="text-muted-foreground">Collect your Monthly Rent (or Market Rent estimate) and total PITIA payment including principal, interest, taxes, insurance, and HOA fees.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="mb-3">Step 2: Calculate DSCR</h3>
                  <p className="text-muted-foreground">Compute your DSCR by dividing Monthly Rent by PITIA. This ratio indicates how well rental income covers debt service.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="mb-3">Step 3: Interpret Results</h3>
                  <p className="text-muted-foreground">Compare your result to typical lender expectations and consider how it might influence your qualification prospects.</p>
                </Card>
              </div>
              
              <h3 className="mb-4">Illustrative DSCR Scenarios</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4 border-l-4 border-l-red-500">
                  <div className="font-medium">DSCR: 0.95</div>
                  <p className="text-sm text-muted-foreground">Below 1.0 typically indicates insufficient rental income to cover debt service. May require higher down payment or property improvements.</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-yellow-500">
                  <div className="font-medium">DSCR: 1.10</div>
                  <p className="text-sm text-muted-foreground">Modest positive cash flow. Generally acceptable to many lenders, though other factors remain important for qualification.</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-green-500">
                  <div className="font-medium">DSCR: 1.25</div>
                  <p className="text-sm text-muted-foreground">Strong coverage ratio providing good cash flow cushion. Often viewed favorably by lenders when combined with other qualifying factors.</p>
                </Card>
              </div>

              <div className="text-center">
                <Button onClick={primaryCTA} className="font-medium" aria-label="Explore scenario options">
                  Explore scenario options → shopdscrloans.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* State Snapshots */}
        <section id="states" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-3" />
                Qualification Nuance by State
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    state: 'Florida', 
                    link: 'https://www.shopdscrloans.com/states/florida',
                    points: ['High investor activity market', 'Hurricane insurance considerations', 'Strong rental demand in key metros']
                  },
                  { 
                    state: 'Texas', 
                    link: 'https://www.shopdscrloans.com/states/texas',
                    points: ['No state income tax benefit', 'Diverse property types available', 'Growing population centers']
                  },
                  { 
                    state: 'Arizona', 
                    link: 'https://www.shopdscrloans.com/states/arizona',
                    points: ['Desert climate considerations', 'Population growth trends', 'Seasonal rental variations']
                  },
                  { 
                    state: 'Tennessee', 
                    link: 'https://www.shopdscrloans.com/states/tennessee',
                    points: ['No state income tax advantage', 'Music City rental market', 'Lower cost of entry']
                  },
                  { 
                    state: 'Michigan', 
                    link: 'https://www.shopdscrloans.com/states/michigan',
                    points: ['Four-season climate factors', 'Rust Belt recovery areas', 'Diverse economic base']
                  },
                  { 
                    state: 'Indiana', 
                    link: 'https://www.shopdscrloans.com/states/indiana',
                    points: ['Affordable property values', 'Stable rental markets', 'Lower property taxes']
                  },
                  { 
                    state: 'North Carolina', 
                    link: 'https://www.shopdscrloans.com/states/north-carolina',
                    points: ['Research Triangle growth', 'Moderate climate appeal', 'Diverse property options']
                  },
                  { 
                    state: 'Georgia', 
                    link: 'https://www.shopdscrloans.com/states/georgia',
                    points: ['Atlanta metro strength', 'Business-friendly environment', 'Growing tech sector']
                  }
                ].map((item) => (
                  <Card key={item.state} className="p-6">
                    <h3 className="mb-3">{item.state}</h3>
                    <ul className="space-y-1 mb-4">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={item.link} 
                      className="text-sm text-primary hover:underline font-medium"
                      aria-label={`Learn more about DSCR loans in ${item.state}`}
                    >
                      Learn more →
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section id="property-types" className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">SFR vs 2–4 Units vs Condos vs STR</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    type: "Single Family Residences (SFR)",
                    description: "Often have the most straightforward qualification requirements with standard DSCR thresholds and reserve expectations."
                  },
                  {
                    type: "2-4 Unit Properties", 
                    description: "May require higher DSCR ratios and additional reserves due to increased complexity and vacancy risk exposure."
                  },
                  {
                    type: "Condominiums",
                    description: "Can involve HOA financial review and additional documentation, with some lenders having specific condo requirements or restrictions."
                  },
                  {
                    type: "Short-Term Rentals (STR)",
                    description: "Often subject to higher DSCR requirements, increased reserve expectations, and additional documentation due to income volatility."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="mb-3">{item.type}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Improve Odds */}
        <section id="improve-odds" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3" />
                5 Ways Investors Boost DSCR Qualification
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Strengthen Rent Evidence",
                    description: "Provide solid documentation of rental income through current leases, rent rolls, or professional market rent analyses to support your DSCR calculation."
                  },
                  {
                    title: "Consider Lower LTV",
                    description: "Increasing your down payment to achieve a lower loan-to-value ratio can help offset other qualification challenges and demonstrate strong financial commitment."
                  },
                  {
                    title: "Build Reserve Position", 
                    description: "Maintaining additional months of PITIA payments in liquid reserves shows lenders your ability to weather rental income fluctuations."
                  },
                  {
                    title: "Explore Rate Buydowns",
                    description: "Purchasing discount points to reduce interest rates can improve your DSCR ratio by lowering the monthly debt service payment."
                  },
                  {
                    title: "Document Experience & Management",
                    description: "Highlight previous rental property ownership and present a clear property management plan to demonstrate operational competency."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge className="mt-1 flex-shrink-0">{index + 1}</Badge>
                      <div>
                        <h3 className="mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button onClick={primaryCTA} className="font-medium" aria-label="Compare realistic options">
                  Compare realistic options → shopdscrloans.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documents & Timeline */}
        <section id="docs-timeline" className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-3" />
                What's Reviewed & Typical Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="mb-4">Common Documentation</h3>
                  <ul className="space-y-2">
                    {[
                      "Rental income verification (leases, rent roll)",
                      "Property details and purchase contract", 
                      "Financial reserves and asset statements",
                      "Credit report and score verification",
                      "Property appraisal and inspection results"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="mb-4">General Process Timeline</h3>
                  <div className="space-y-3">
                    {[
                      { step: "Pre-screen & Application", time: "1-3 days" },
                      { step: "Documentation Review", time: "3-7 days" },
                      { step: "Property Appraisal", time: "7-14 days" }, 
                      { step: "Underwriting Review", time: "5-10 days" },
                      { step: "Closing Preparation", time: "3-7 days" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span>{item.step}</span>
                        <Badge variant="outline">{item.time}</Badge>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Timelines are estimates and may vary based on individual circumstances, property complexity, and lender requirements.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What DSCR is usually needed to qualify?",
                    a: "Most lenders look for DSCR ratios of 1.0 to 1.25 or higher, though requirements vary by lender and property type. Higher ratios generally improve qualification odds and may offer better terms."
                  },
                  {
                    q: "Can first-time investors qualify?",
                    a: "Yes, first-time investors can qualify for DSCR loans, though some lenders prefer borrowers with rental property experience. Strong reserves and conservative LTV ratios can help offset limited experience."
                  },
                  {
                    q: "How do reserves affect qualification?",
                    a: "Lenders typically require 2-6 months of PITIA payments in liquid reserves, with exact requirements varying by loan amount and risk factors. Higher reserves can strengthen borderline applications."
                  },
                  {
                    q: "Do STR properties change DSCR requirements?",
                    a: "Short-term rental properties often face higher DSCR requirements (1.2-1.3+) and increased reserve expectations due to income volatility and operational complexity compared to traditional rentals."
                  },
                  {
                    q: "Can lower LTV offset DSCR under 1.1?",
                    a: "Lower loan-to-value ratios can sometimes help compensate for marginal DSCR ratios, as they reduce lender risk exposure. However, each lender has specific minimum DSCR requirements."
                  },
                  {
                    q: "What credit considerations matter most?",
                    a: "Credit scores, payment history, debt-to-income ratios, and previous mortgage performance are key factors. Some DSCR lenders focus more on property cash flow than personal credit, but both remain important."
                  },
                  {
                    q: "Are condos treated differently for DSCR?",
                    a: "Condominiums may require additional documentation including HOA financial statements and bylaws review. Some lenders have specific condo restrictions or require higher DSCR ratios for condo projects."
                  },
                  {
                    q: "What documentation speeds up the process?",
                    a: "Having current lease agreements, rent rolls, property management contracts, recent bank statements, and tax returns readily available can accelerate the review process significantly."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="mb-3">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "DSCR Loan Approval",
                    url: "https://dscrloanapproval.com",
                    description: "Comprehensive guide to the DSCR loan approval process and requirements."
                  },
                  {
                    title: "DSCR Down Payment",
                    url: "https://dscrloandownpayment.com", 
                    description: "Everything you need to know about down payment requirements for DSCR loans."
                  },
                  {
                    title: "DSCR Loan Requirements",
                    url: "https://dscrloanrequirements.com",
                    description: "Detailed breakdown of qualification criteria and documentation needs."
                  },
                  {
                    title: "DSCR Qualify",
                    url: "https://dscrqualify.com",
                    description: "Additional qualification insights and preparation strategies."
                  },
                  {
                    title: "DSCR Underwriting", 
                    url: "https://dscrunderwriting.com",
                    description: "Understanding the underwriting process for DSCR loan applications."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="mb-2">
                      <a 
                        href={item.url}
                        className="text-primary hover:underline"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.title}`}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <a 
                  href="https://www.shopdscrloans.com"
                  className="text-primary hover:underline font-medium"
                  aria-label="Browse all DSCR topics"
                >
                  All DSCR Topics → shopdscrloans.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Band */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4">Ready to See Your DSCR Options?</h2>
              <p className="mb-6 opacity-90">
                Explore available DSCR loan programs and connect with experienced lenders who understand investment property financing.
              </p>
              <Button 
                onClick={primaryCTA}
                size="lg" 
                variant="secondary"
                className="font-medium"
                aria-label="See My DSCR Options"
              >
                See My DSCR Options →
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>Educational content only. Not lending advice or pre-qualification.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms</a>
              <a href="/sitemap" className="text-muted-foreground hover:text-foreground">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}