/**
 * Fetch a random image from Unsplash based on a keyword
 * Falls back to placeholder if API fails or key is missing
 */
export async function getUnsplashImage(keyword: string): Promise<string> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
    
    if (!apiKey) {
      console.warn('[v0] Unsplash API key not configured, using placeholder')
      return getPlaceholderImage(keyword)
    }

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(keyword)}&w=800&h=600&fit=crop&client_id=${apiKey}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      console.warn(`[v0] Unsplash API error: ${response.status}`)
      return getPlaceholderImage(keyword)
    }

    const data = await response.json()
    return data.urls.regular
  } catch (error) {
    console.error('[v0] Error fetching Unsplash image:', error)
    return getPlaceholderImage(keyword)
  }
}

/**
 * Generate a placeholder image URL using placeholder service
 * Useful for development or when API is unavailable
 */
function getPlaceholderImage(keyword: string): string {
  const placeholders: Record<string, string> = {
    'healthcare technology elderly care': 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop',
    'warehouse management logistics': 'https://images.unsplash.com/photo-1553531088-189a835cf17f?w=800&h=600&fit=crop',
    'productivity dashboard analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  }

  return placeholders[keyword] || 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop'
}
