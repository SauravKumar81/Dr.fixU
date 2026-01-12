# Healthcare SaaS Background Video Resources

## 🎥 Curated Video Collection

This document contains professionally curated stock videos perfect for healthcare/wellness SaaS hero sections.

---

## 📋 Video Requirements Checklist

✅ **Visual Style:**
- Warm natural lighting
- Soft shadows
- Shallow depth of field
- Neutral color palette (whites, beiges, soft blues)
- Clean modern interiors
- Minimal motion
- Static or slow camera movement

✅ **Technical Requirements:**
- Resolution: Minimum 1920x1080 (Full HD), Recommended 2560x1440 (2K) or 3840x2160 (4K)
- Format: MP4 (H.264 codec)
- Frame rate: 24-30 fps
- Duration: 10-30 seconds for seamless looping
- File size: Optimized for web (under 10MB if possible)
- Aspect ratio: 16:9

✅ **Content Guidelines:**
- Text-safe (action in center/right, leaving space for text overlay)
- Loopable (smooth start/end transition)
- No distracting elements
- Professional but approachable
- Diverse representation

---

## 🔍 Recommended Free Stock Video Platforms

### 1. **Pexels Videos** (Primary Source)
- URL: https://www.pexels.com/videos/
- License: Free for commercial use, no attribution required
- Quality: Excellent, professional-grade footage
- Search terms to use:
  - "physiotherapy home"
  - "wellness app mobile"
  - "stretching modern interior"
  - "healthcare technology"
  - "meditation home"
  - "telehealth consultation"

### 2. **Pixabay Videos**
- URL: https://pixabay.com/videos/
- License: Free for commercial use
- Quality: Good variety, mixed quality
- Search terms: Same as Pexels

### 3. **Coverr**
- URL: https://coverr.co/
- License: Free for commercial use
- Quality: Curated collection, high quality
- Category: Health & Fitness, Technology

### 4. **Videvo**
- URL: https://www.videvo.net/
- License: Mix of free and paid (check individual licenses)
- Quality: Professional-grade options available

---

## 🎬 Currently Implemented Videos

### Video 1: Physiotherapy Session
```
URL: https://videos.pexels.com/video-files/6111610/6111610-uhd_2560_1440_25fps.mp4
Description: Professional physiotherapy consultation scene
Resolution: 2560x1440 (2K UHD)
Duration: ~15 seconds
Style: Medical professional setting, warm lighting
```

### Video 2: Home Stretching
```
URL: https://videos.pexels.com/video-files/6942097/6942097-uhd_2560_1440_25fps.mp4
Description: Person doing gentle stretching exercises at home
Resolution: 2560x1440 (2K UHD)
Style: Natural lighting, modern home interior
```

### Video 3: Mobile Health App
```
URL: https://videos.pexels.com/video-files/7551844/7551844-uhd_2560_1440_24fps.mp4
Description: Close-up of using health app on smartphone
Resolution: 2560x1440 (2K UHD)
Style: Shallow depth of field, focused on device
```

### Video 4: Yoga Practice
```
URL: https://videos.pexels.com/video-files/6787168/6787168-uhd_2560_1440_25fps.mp4
Description: Calm yoga/wellness practice in modern setting
Resolution: 2560x1440 (2K UHD)
Style: Minimalist, peaceful, soft natural light
```

### Video 5: Wellness Routine
```
URL: https://videos.pexels.com/video-files/7187730/7187730-uhd_2560_1440_25fps.mp4
Description: Morning wellness routine at home
Resolution: 2560x1440 (2K UHD)
Style: Bright, clean, modern interior
```

---

## 🔧 How to Add More Videos

### Step 1: Find Your Video
1. Visit Pexels.com/videos
2. Search using recommended terms
3. Preview videos that match the style guide
4. Check video is loopable (smooth transitions)
5. Ensure text-safe composition

### Step 2: Get the Video URL
```javascript
// On Pexels, click Download and copy the URL for the quality you want
// Example formats:
// - 1920x1080: file-name-hd_1920_1080_30fps.mp4
// - 2560x1440: file-name-uhd_2560_1440_25fps.mp4
// - 3840x2160: file-name-uhd_3840_2160_24fps.mp4
```

### Step 3: Add to HeroSection.tsx
```typescript
const BACKGROUND_VIDEOS = [
  // ... existing videos
  {
    id: 6,
    name: 'Your Video Name',
    url: 'https://videos.pexels.com/video-files/YOUR-VIDEO-ID/YOUR-VIDEO-ID-uhd_2560_1440_25fps.mp4',
    description: 'Brief description of the video scene'
  }
];
```

---

## 🎨 Alternative Search Queries for Pexels

### Healthcare & Wellness
- "telehealth consultation home"
- "physical therapy exercises"
- "woman using fitness app"
- "home workout stretching"
- "healthcare professional video call"
- "wellness technology"
- "meditation calm interior"
- "physiotherapy appointment"

### Technology & Mobile
- "person using health app"
- "smartphone health tracker"
- "mobile wellness app"
- "digital healthcare"
- "telemedicine patient"

### Lifestyle & Wellness
- "morning stretch routine"
- "home yoga practice"
- "wellness lifestyle"
- "healthy living home"
- "self care routine"
- "mobility exercises"

---

## ⚡ Performance Optimization Tips

### 1. **Video Compression**
Use tools like HandBrake or FFmpeg to optimize videos:
```bash
# FFmpeg example for web optimization
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

### 2. **Lazy Loading**
The current implementation loads videos on demand with proper `onLoadedData` handling.

### 3. **Multiple Quality Options**
For production, consider providing multiple resolutions:
```html
<video>
  <source src="video-4k.mp4" type="video/mp4" media="(min-width: 2560px)">
  <source src="video-2k.mp4" type="video/mp4" media="(min-width: 1920px)">
  <source src="video-hd.mp4" type="video/mp4">
</video>
```

### 4. **CDN Hosting**
For production, upload videos to a CDN:
- Cloudflare R2
- AWS S3 + CloudFront
- Azure Blob Storage
- Google Cloud Storage

---

## 🎯 Brand Guidelines Alignment

### Color Overlay Settings
Current implementation uses:
```css
/* Primary overlay - Medical Blue */
background: linear-gradient(to right, 
  rgba(31, 79, 216, 0.85),  /* #1F4FD8 at 85% */
  rgba(31, 79, 216, 0.75),  /* #1F4FD8 at 75% */
  rgba(31, 79, 216, 0.70)   /* #1F4FD8 at 70% */
);

/* Secondary overlay - Depth and readability */
background: linear-gradient(to bottom,
  rgba(0, 0, 0, 0.20),      /* Top darkening */
  transparent,               /* Middle clear */
  rgba(0, 0, 0, 0.30)       /* Bottom darkening */
);
```

### Typography Contrast
- Text color: `white` with drop shadows for depth
- Accent color: `#F36A21` (Trust Orange) for CTAs
- Background opacity ensures 4.5:1 contrast ratio (WCAG AA)

---

## 📱 Mobile Considerations

1. **Aspect Ratio**: Videos are `object-cover` so they fill the container
2. **Performance**: Consider using poster images on mobile
3. **Data Usage**: Provide option to pause/disable videos on mobile
4. **Touch Optimization**: Video selector dots are hidden on mobile

---

## 🔄 Auto-Rotation Feature

The hero section automatically cycles through videos every 30 seconds:
```typescript
// Adjust timing in HeroSection.tsx
const interval = setInterval(() => {
  setCurrentVideoIndex((prev) => (prev + 1) % BACKGROUND_VIDEOS.length);
}, 30000); // Change to desired milliseconds
```

To disable auto-rotation, remove the `useEffect` hook.

---

## 📊 Video Analytics (Optional)

Track video engagement:
```typescript
const handleVideoPlay = (videoId) => {
  // Analytics tracking
  gtag('event', 'video_play', {
    video_id: videoId,
    video_name: currentVideo.name
  });
};
```

---

## ⚠️ Important Notes

1. **Always verify licenses** before using stock videos commercially
2. **Test video playback** across different browsers and devices
3. **Provide fallback images** for browsers that don't support video
4. **Monitor page load times** and optimize video file sizes
5. **Consider accessibility** - videos are decorative, no captions needed

---

## 🆘 Troubleshooting

### Video Not Playing
- Check video URL is accessible
- Verify CORS headers if self-hosting
- Test video codec compatibility
- Ensure `autoplay muted` attributes are present

### Poor Performance
- Reduce video resolution
- Compress video file
- Use video CDN
- Implement lazy loading

### Loop Gaps
- Ensure video has smooth start/end
- Use dedicated loop-friendly videos
- Consider using MP4 with proper encoding

---

## 📞 Support Resources

- **Pexels Help**: help@pexels.com
- **Cloudflare Video**: docs.cloudflare.com/stream
- **Web Video Guide**: web.dev/video

---

Last Updated: January 2026
