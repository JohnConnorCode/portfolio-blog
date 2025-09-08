# Blog Admin Interface

## Access the Admin Panel

Navigate to: `/admin`

**Default Password**: `buildsystems`

(Change this in production by editing `/src/app/admin/page.tsx` line 38)

## Features

### 1. Blog Post Management
- **View all posts** - See drafts and published posts
- **Toggle publish status** - Click the eye icon to publish/unpublish
- **Toggle featured** - Star posts to feature them
- **Delete posts** - Remove posts permanently
- **Quick preview** - See how posts look before publishing

### 2. Create New Posts
- Click "New Post" button
- Fill in:
  - Title (auto-generates slug)
  - Excerpt (short description)
  - Content (HTML format)
  - Category (Philosophy, Leadership, etc.)
  - Tags (comma-separated)
  - Read time
  - Featured image URL
- Toggle "Publish Immediately" or save as draft
- Preview before saving

### 3. Edit Existing Posts
- Click edit icon on any post
- Modify all fields
- Preview changes
- Save or cancel

## HTML Content Guide

Use these tags in your content:

```html
<p>Paragraphs of text</p>

<h2>Major Sections</h2>
<h3>Subsections</h3>

<ul>
  <li>Bullet points</li>
  <li>Lists</li>
</ul>

<ol>
  <li>Numbered lists</li>
  <li>Steps</li>
</ol>

<blockquote>
  <p>"Important quotes"</p>
</blockquote>

<strong>Bold text</strong>
<em>Italic text</em>

<a href="https://example.com">Links</a>
```

## Writing in Your Voice

Remember your style guide:
- **No em dashes** - use periods or colons
- **Short paragraphs** - 2-4 sentences
- **Direct tone** - no hedging
- **Case examples** - reference Accelerate, Super Debate, etc.
- **End with challenge** - provocative question or call to action

## Categories

- Philosophy
- Ecosystem Design
- Leadership
- AI Ethics
- System Design
- Community Building
- Web3
- Product Strategy

## Security Note

This is a basic admin interface with password protection. For production:
1. Implement proper authentication (Supabase Auth)
2. Add role-based access control
3. Use environment variables for credentials
4. Add audit logging

## Quick Tips

1. **Draft first** - Don't publish immediately
2. **Use preview** - Check formatting before saving
3. **SEO slug** - Keep URLs short and readable
4. **Featured posts** - Only feature 2-3 at a time
5. **Tags** - Use consistent tags for better organization

## Troubleshooting

### Can't save posts?
- Check Supabase connection in `.env.local`
- Ensure tables exist (run setup first)

### Lost password?
- Edit `/src/app/admin/page.tsx` line 38
- Change `buildsystems` to your new password

### Posts not showing on blog?
- Make sure "Published" is checked
- Check `published_at` date is set

---

The admin interface gives you full control over your blog content without touching code or Supabase dashboard.