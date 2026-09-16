---
name: cohort-report
description: Analyze Search Console performance data and report by content batch/version. Identifies prune candidates.
---

# GSC Cohort Performance Report

Analyze Google Search Console export data and join it to post frontmatter to evaluate content performance by production batch and prompt version.

## Your Task

Analyze the GSC export at: **$ARGUMENTS**

## Process

### Step 1: Extract and Parse GSC Data

1. Unzip the GSC export file
2. Look for the Pages report (usually `Pages.csv` or similar)
3. Parse the CSV with columns typically including:
   - Page URL
   - Clicks
   - Impressions
   - CTR
   - Position

### Step 2: Read Post Frontmatter

1. Glob all MDX files in `src/content/blog/`
2. Parse frontmatter from each file
3. Extract: filename (slug), pubDate, batch, prompt_version, post_type, audience

### Step 3: Join Data

Match GSC URLs to post slugs:
- GSC URL format: `https://blogsthatsell.com/blog/[slug]`
- Post filename: `[slug].mdx`

Create a joined dataset with:
- slug
- pubDate
- batch
- prompt_version
- post_type
- audience
- clicks
- impressions
- position
- days_live (today - pubDate)

### Step 4: Generate Report

#### Summary by Batch
Group by `batch` and calculate:
- Post count
- Total clicks
- Total impressions
- Avg position (weighted by impressions)
- Posts with position < 20
- Posts with position > 40

Format as markdown table.

#### Summary by Prompt Version
Group by `prompt_version` and calculate same metrics.

#### Prune Candidates
Flag posts meeting ALL criteria:
- Position > 40
- Days live > 60
- Impressions > 0 (so they're being crawled)

Output as a list with:
- Slug
- Current position
- Days live
- Batch
- Recommendation: "Review for pruning"

#### High Performers
Flag posts with:
- Position < 20
- Clicks > 10

These validate what's working.

### Step 5: Output Report

Create report in this format:

```markdown
# GSC Cohort Performance Report

**Generated:** [timestamp]
**Data range:** [from GSC export]
**Posts analyzed:** [count]

## Performance by Batch

| Batch | Posts | Clicks | Impressions | Avg Position | Under 20 | Over 40 |
|-------|-------|--------|-------------|--------------|----------|---------|
| ...   | ...   | ...    | ...         | ...          | ...      | ...     |

## Performance by Prompt Version

| Version | Posts | Clicks | Impressions | Avg Position | Under 20 | Over 40 |
|---------|-------|--------|-------------|--------------|----------|---------|
| ...     | ...   | ...    | ...         | ...          | ...      | ...     |

## Prune Candidates

Posts below position 40 after 60+ days:

| Slug | Position | Days Live | Batch | Action |
|------|----------|-----------|-------|--------|
| ...  | ...      | ...       | ...   | Review |

## High Performers

Posts validating what works:

| Slug | Position | Clicks | Post Type | Audience |
|------|----------|--------|-----------|----------|
| ...  | ...      | ...    | ...       | ...      |

## Recommendations

[Summary of findings:
- Which batches are performing?
- Which prompt versions are working?
- How many posts should be reviewed for pruning?
- What patterns emerge?]
```

## Important Notes

1. **Do not delete anything.** This report identifies candidates only.
2. Posts without `batch` or `prompt_version` fields should be grouped as "legacy" or "untagged"
3. If a post exists in MDX but not in GSC data, note it separately (may be draft, new, or noindexed)
4. Weight average position by impressions to avoid outliers skewing results
5. Save the report to `reports/gsc-cohort-[date].md`

## Handling Missing Data

If the GSC export structure differs from expected:
1. Describe what you found
2. Ask for clarification on column mapping
3. Do not guess at column meanings

If posts lack extended frontmatter fields:
1. Group them under "legacy" in batch reports
2. Note the count of untagged posts
3. These posts predate the content system

## Error Handling

If the file cannot be read or parsed:
```
<!-- ERROR: [description of issue] -->
```

If the join produces no matches:
```
<!-- WARNING: No URL matches found. Check URL format:
GSC URLs look like: [example]
Post slugs look like: [example]
-->
```
