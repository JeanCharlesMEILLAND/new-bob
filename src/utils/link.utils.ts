export async function checkUserInStrapi(documentId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[document_id]=${documentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });
    const data = await response.json();
    return data.data.length > 0;
  } catch (error) {
    console.error('Error checking user in Strapi:', error);
    return false;
  }
}

// TypeScript interface for download links
interface DownloadLinks {
  ios: string;
  android: string;
}

// Default fallback links
const DEFAULT_LINKS: DownloadLinks = {
  ios: "https://apps.apple.com/app/id6743935044",
  android: "https://play.google.com/store/apps/details?id=com.bobapp"
};

export async function fetchDownloadLinks(): Promise<DownloadLinks> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/download-link`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // For single-type collections, data is directly in data property (not an array)
    const links = data.data;

    console.log(links)


    return {
      ios: links.ios || DEFAULT_LINKS.ios,
      android: links.android || DEFAULT_LINKS.android
    };
  } catch (error) {
    console.error('Error fetching download links from Strapi:', error);
    return DEFAULT_LINKS;
  }
}

// Legacy function for backward compatibility
export async function fetchAndroidLink(): Promise<string | null> {
  const links = await fetchDownloadLinks();
  return links.android;
}


