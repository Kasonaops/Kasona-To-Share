# SaaS Quality Metrics

Standard valuation lenses (P/E, book value, simple revenue multiples) miss what actually
matters for a software or SaaS company: whether revenue is sticky, how efficiently it's being
acquired, and whether the growth rate justifies the cash being burned to get it. This
reference collects the metrics that matter specifically for evaluating a software holding,
and a glossary of the public filings that are the primary source for the underlying numbers.

## Public filing glossary

A quick reference for where the underlying disclosure actually lives. Useful when you're
digging past a headline number into the filing that backs it.

| Filing | What it tells you | Category |
|---|---|---|
| 10-K | Annual report | Core report |
| 10-Q | Quarterly report | Core report |
| 8-K | Current report, discloses a "material" event | Core report |
| S-1, S-1A | Registration before/after an IPO | IPO |
| Form 424B4, 424B7 | Prospectus | IPO |
| S-4 | Merger or acquisition details | M&A |
| Form 425 | Merger or acquisition communications | M&A |
| DEF 14A | Proxy statement, insider ownership | Ownership |
| 13F | Quarterly disclosure of institutional fund holdings | Ownership |
| SC 13G, SC 13D | Disclosure that an investor now owns more than 5% of the stock | Ownership |
| Form 3, 4, 5 | Insider ownership: initial (3), change (4), annual (5) | Ownership |
| F-1, F-1A | Pre-IPO registration for a foreign private issuer | Foreign issuer |
| 20-F, 40-F (Canadian) | Annual report for a foreign private issuer | Foreign issuer |
| 6-K | Interim report for a foreign private issuer | Foreign issuer |
| 424B3 | De-SPAC transaction details | SPAC |

## Core SaaS KPI set

The metrics that actually distinguish a healthy software business from one burning cash to
show a growth number:

| Metric | What it measures |
|---|---|
| Revenue growth (YoY, MoM) | Top-line trajectory |
| MRR / ARR | Monthly / annual recurring revenue, and their growth rates |
| Net revenue retention (NRR) | Revenue from existing customers this period vs. the same cohort last period, including expansion and contraction |
| Gross margin | What's left after the direct cost of serving a customer |
| CAC payback period | How many months of gross profit it takes to recover the cost of acquiring a customer |
| Rule of 40 | Growth rate plus profit margin; a rough health check for growth-stage software companies |
| Burn multiple | Net cash burned divided by net new ARR added, a measure of growth efficiency |
| ARR per employee | A rough efficiency proxy |

### The MRR bridge

A standard way to decompose recurring revenue movement over a period, useful for spotting
whether growth is coming from new logos or from expanding existing accounts, and whether churn
is quietly eating into both:

```
Opening MRR
  + New
  + Expansion
  − Contraction
  − Churn
= Closing MRR
```

### The logo bridge

The same idea applied to customer count rather than revenue:

```
Opening Logos
  + New
  − Churn
= Closing Logos
```

Watching the MRR bridge and the logo bridge side by side is more informative than either
alone: a company can grow MRR while losing logos (expansion-driven growth, often healthier
long-term) or grow logos while MRR growth lags (a sign that new customers are smaller or
pricing is under pressure).

### Net revenue retention by cohort

NRR is most informative measured per cohort, not as a single blended number. A worked example
of the shape this takes:

| Customer cohort | NRR | Customer lifetime value |
|---|---|---|
| Cohort 1 | 100% | High |
| Cohort 2 | 32% | Low |
| Cohort 3 | 4% | Very low |
| Cohort 4 | 280% | Very high |
| Cohort 5 | 6% | Low |

A blended NRR of, say, 105% across these five cohorts would look healthy and completely hide
that most of the retention is coming from one expansion outlier while several cohorts are
churning hard. Always check the distribution, not just the average.

## Rule of 40

A quick health check for a growth-stage software company: growth rate plus profit margin
should add up to roughly 40% or more. A company growing 60% with a negative 30% margin (net
30) is arguably less healthy than one growing 25% at a 20% margin (net 45), even though the
first one's headline growth number looks more exciting. This isn't a precise valuation tool,
it's a fast filter for whether growth is being bought at a reasonable cost.

## Lifetime value to acquisition cost ratio

The foundational unit economics ratio for any subscription or recurring-revenue business:
lifetime gross profit per customer, divided by the cost of acquiring that customer.

**Lifetime gross profit, not lifetime revenue.** Subtract the direct cost of delivering the
service (the true cost of goods sold, including the labor cost of servicing that customer) to
get the actual gross profit that can be reinvested or distributed. This distinction gets
missed constantly, especially in service-heavy businesses where the labor cost of delivery is
easy to leave out of the calculation.

A simple version of the math, using a subscription example:

| Step | Input | Formula |
|---|---|---|
| Monthly price | e.g. $2,000 | What the customer pays per month |
| Monthly cost to serve | e.g. $1,000 | Direct delivery cost, including allocated labor |
| Monthly gross profit | $1,000 | Price minus cost to serve |
| Churn rate | e.g. 20% per month | Fraction of customers who leave in a given period |
| Average customer lifetime | 5 months | 1 divided by the churn rate |
| Lifetime gross profit | $5,000 | Monthly gross profit times average lifetime |

If the business also has a reliable upsell or cross-sell path, that adds on top: an upsell
priced at $15,000 converting at 20% of the base adds $3,000 of expected additional gross
profit per customer, bringing total lifetime gross profit in this example to $8,000.

**The ratio, and what it implies:**

| LTV : CAC | Interpretation |
|---|---|
| Near or below 1:1 | The business is losing money on acquisition and can't scale this way. |
| Roughly 3:1 | A commonly cited minimum for a defensible unit economics story. |
| 5:1 to 10:1 | Solid to good scalability; the business can absorb inefficient marketing spend and still come out ahead. |
| 30:1 and above | Very high scalability, the kind of ratio that lets a company meaningfully outbid competitors for customer acquisition. |

Be skeptical of headline ratios reported without the gross-profit adjustment. A widely cited
cautionary example: a reported "5:1 return" that was actually unprofitable once the lifetime
gross profit was correctly calculated (the cost of delivery had been left out of the
numerator). The ratio is only as trustworthy as the gross profit calculation underneath it.

## CAC payback period

How many months of gross profit from a customer it takes to recover what was spent acquiring
them. Shorter is better for cash flow and for the ability to reinvest and grow faster without
external capital. A payback period of a month or less is exceptional; anything stretching past
12 to 18 months puts real strain on a growth-stage company's cash position, even if the
eventual LTV:CAC ratio looks fine on paper.

## Reading these metrics together

No single metric here tells the whole story on its own. A company can show strong revenue
growth while NRR is quietly deteriorating in the cohorts that matter most. A company can show
an excellent blended LTV:CAC while its CAC payback period is long enough to create a real
liquidity problem before that lifetime value is ever realized. When evaluating a software
holding, look at the combination: growth, retention by cohort, payback period, and Rule of 40,
rather than picking the one number that happens to look best.
