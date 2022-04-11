'use strict';

import * as Meta from '../api/metas/meta.dao';
import config from '../config/environment';
import { defaults, OG_FB_ID } from '../constants/metaTags';
import { imageSize } from 'image-size';
import path from 'path';

const pathModels: { [key: string]: string } = {
  '': 'home',
  'home': 'home',
  'faq': 'faqs',
};

const BASE_URL = `${config.url.scheme}://${config.url.host}/`;

export async function getMetaTags(url: string) {
  try {
    let metaData: any = {};
    const urlPart = url.split('/')[1] || '';
    const firstUrlPart = urlPart.split('?')[0] || '';

    if (pathModels.hasOwnProperty(firstUrlPart)) {
      const metas: any = await Meta.getOne();
      metaData = metas[pathModels[firstUrlPart]];
    }
  return getPageMetaTagsObject(url, metaData);
  } catch (e) {
    return getPageMetaTagsObject(url, {});
  }
}


function getPageMetaTagsObject(url: string, { title, description, keywords, image }: any) {
  if (url === '/') url = '';

  const imageUrl = (image && image.url);

  let originalFilePath = '';
  if (imageUrl && imageUrl.length > 0) {
    originalFilePath = getLocalFilePath(imageUrl);
  } else {
    originalFilePath = getAssetsFilePath(defaults.IMAGE);
  }

  const { width: imgWidth, height: imgHeight } = imageSize(originalFilePath);

  return {
    title: (title && (title.en || title.ge)) || defaults.TITLE,
    description: (description && (description.en || description.ge)) || defaults.DESCRIPTION,
    keywords: (keywords && keywords.length) ? keywords.join(', ') : defaults.KEYWORDS,
    ogFbId: OG_FB_ID,
    ogImage: `${BASE_URL}${(image && image.url) || defaults.IMAGE}`,
    ogImageWidth: imgWidth,
    ogImageHeight: imgHeight,
    ogUrl: `${config.url.host}${url}`,
    ogType: 'website',
  };
}

export function getLocalFilePath(fileName: any) {
  return path.join(config.paths.uploads, fileName);
}

export function getAssetsFilePath(fileName: any) {
  return path.join(config.root, `../client/dist/${fileName}`);
}