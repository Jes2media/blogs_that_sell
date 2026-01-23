/**
 * Site configuration
 * Update these values to customize your site
 */

export const siteConfig = {
  // Site info
  name: 'Blogs That Sell',
  description: 'A direct-response system for freelancers, consultants, and marketers who want blog traffic that actually converts into sales.',
  url: 'https://blogsthatsell.com',

  // Email marketing (Kit/ConvertKit)
  // Get your form UID from your Kit form URL: https://YOURNAME.kit.com/FORM_UID
  kit: {
    formUid: '852fa36c75', // Your Kit form UID
    // Optional: Redirect URL after signup (leave empty for default Kit success message)
    successRedirect: '/thank-you',
  },

  // Social links (update with your actual profiles)
  social: {
    twitter: '',
    youtube: '',
    linkedin: '',
  },
};

/**
 * Check if Kit is configured
 */
export function isKitConfigured(): boolean {
  return siteConfig.kit.formUid !== '';
}
