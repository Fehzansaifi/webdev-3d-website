'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://my-blogs.info/${src}?w=${width}&q=${quality || 75}`
}