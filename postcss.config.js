import autoprefixer from 'autoprefixer';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    autoprefixer,
    purgeCSSPlugin({
      // Specify paths to all template files used by Eleventy
      content: [
        './src/**/*.html',
        './src/**/*.njk',
        './src/**/*.js',
        './src/**/*.md'
      ],
      // This extractor works for most HTML-based projects
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      // Optionally, safelist any classes that are generated dynamically
      safelist: []
    })
  ]
};