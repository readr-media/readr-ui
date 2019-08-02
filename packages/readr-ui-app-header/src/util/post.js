import { OLD_PROJECTS_SLUGS, MM_SITE_DOMAIN, SITE_DOMAIN } from '../constants'

const postType = {
  0: 'review',
  1: 'news',
  4: 'report',
  5: 'memo'
}

const ogImageBaseUrl = 'https://www.readr.tw/public/2.0/og-images'
const ogImgPathDefault = {
  normal: `${ogImageBaseUrl}/og-image-post.jpg`,
  news: `${ogImageBaseUrl}/og-image.jpg`,
  report: `${ogImageBaseUrl}/og-image.jpg`,
  memo: `${ogImageBaseUrl}/og-image-memo.jpg`
}

export const getPostType = post => {
  return postType[post.type] || 'normal'
}

const getReportLink = report => {
  const getReportLinkBySlug = slug => {
    return OLD_PROJECTS_SLUGS.includes(slug)
      ? `https://www.${MM_SITE_DOMAIN}/projects/${slug}`
      : `https://www.${SITE_DOMAIN}/project/${slug}`
  }

  return getReportLinkBySlug(report.slug)
}

export function getOgImageUrl(post) {
  const ogImage = post.og_image || ''
  const postTypeCurrent = getPostType(post)
  return ogImage !== '' ? ogImage : ogImgPathDefault[postTypeCurrent]
}

export function getPostUrl(post) {
  const postTypeCurrent = getPostType(post)
  const urlStrategies = {
    default: `https://www.readr.tw/post/${post.id}`,
    report: getReportLink(post)
  }

  return urlStrategies[postTypeCurrent] || urlStrategies.default
}
