# NCHED Website - Strapi CMS Integration

This is the official website for the National Center for Higher Education Development (NCHED), built with React, TypeScript, and Tailwind CSS, with Strapi CMS integration for content management.

## Features

- **Modern Design**: Professional, responsive design with deep blue, orange, and light blue color scheme
- **Strapi CMS Integration**: Dynamic content management for news, programs, and about sections
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Strapi CMS Setup

### 1. Install and Setup Strapi

```bash
# Create a new Strapi project
npx create-strapi-app@latest nched-cms --quickstart

# Navigate to the Strapi directory
cd nched-cms

# Start Strapi development server
npm run develop
```

### 2. Create Content Types in Strapi Admin Panel

After Strapi starts, go to `http://localhost:1337/admin` and create the following content types:

#### News Article Content Type
- **Collection Name**: `news-article`
- **Fields**:
  - `title` (Text - Short text)
  - `excerpt` (Text - Long text)
  - `content` (Rich Text)
  - `category` (Text - Short text)
  - `featuredImage` (Media - Single media)

#### Program Content Type
- **Collection Name**: `program`
- **Fields**:
  - `title` (Text - Short text)
  - `description` (Text - Long text)
  - `features` (JSON)
  - `icon` (Text - Short text)
  - `color` (Text - Short text)

#### About Content Type
- **Collection Name**: `about-content`
- **Fields**:
  - `mission` (Text - Long text)
  - `description` (Text - Long text)
  - `values` (JSON)

#### Contact Submission Content Type
- **Collection Name**: `contact-submission`
- **Fields**:
  - `firstName` (Text - Short text)
  - `lastName` (Text - Short text)
  - `email` (Email)
  - `subject` (Text - Short text)
  - `message` (Text - Long text)

### 3. Configure API Permissions

In Strapi Admin Panel:
1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Enable the following permissions:
   - **News-article**: `find`, `findOne`
   - **Program**: `find`, `findOne`
   - **About-content**: `find`, `findOne`
   - **Contact-submission**: `create`

### 4. Environment Variables

Create a `.env` file in your React project root:

```env
REACT_APP_STRAPI_URL=http://localhost:1337
```

For production, update this to your deployed Strapi URL.

## Using the CMS Integration

### Dynamic Content Loading

The website automatically fetches content from Strapi:

- **News Section**: Displays latest articles from Strapi
- **Programs Section**: Shows programs configured in CMS
- **About Section**: Loads mission and values from CMS
- **Contact Form**: Submissions are saved to Strapi

### Fallback Content

If Strapi is unavailable, the website falls back to static content to ensure the site remains functional.

### Content Management Workflow

1. **Add News Articles**: Create new articles in Strapi admin with featured images
2. **Manage Programs**: Update program descriptions, features, and styling
3. **Update About Content**: Modify mission statement and organizational values
4. **View Contact Submissions**: Access form submissions through Strapi admin

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Frontend Deployment
Deploy the React app to platforms like Netlify, Vercel, or AWS S3.

### Strapi Deployment
Deploy Strapi to platforms like:
- **Heroku**: Easy deployment with PostgreSQL addon
- **DigitalOcean**: App Platform or Droplets
- **AWS**: EC2 or Elastic Beanstalk
- **Railway**: Simple deployment with database

### Environment Configuration

Update environment variables for production:
- Set `REACT_APP_STRAPI_URL` to your deployed Strapi URL
- Configure database connection in Strapi for production
- Set up media storage (AWS S3, Cloudinary) for Strapi

## Content Structure Examples

### News Article JSON Example
```json
{
  "title": "New Partnership Announcement",
  "excerpt": "NCHED announces strategic partnership...",
  "content": "Full article content here...",
  "category": "Partnership",
  "featuredImage": "uploaded-image-file"
}
```

### Program JSON Example
```json
{
  "title": "Academic Development",
  "description": "Comprehensive programs to enhance...",
  "features": ["Curriculum Design", "Faculty Training", "Assessment Methods"],
  "icon": "BookOpen",
  "color": "bg-blue-600"
}
```

## Support

For technical support or questions about the CMS integration, please contact the development team.