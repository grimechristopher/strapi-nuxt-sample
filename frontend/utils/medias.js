export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    // return `${process.env.strapiBaseUri}${url}`;
    return `http://127.0.0.1:1337${url}`;
  }
  // Otherwise return full URL
  // return url;
  return `http://127.0.0.1:1337/${url}`;;
}
