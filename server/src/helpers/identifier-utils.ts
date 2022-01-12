import * as randomstring from 'randomstring';
import logger from './logger';


export async function getFormattedIdentifier(target: string, modelDao: any) {
  try {
    if (!target) target = randomstring.generate({ length: 8, capitalization: 'lowercase' });

    const dashedTarget = target.replace(/[|&;$%@"<>()+,]/g, '').replace(/ {1,}/g, '-').toLowerCase();
    let encodedTarget = encodeURIComponent(dashedTarget);

    let isUniqueForModel = false;
    let suffix = '';
    do {
      try {
        await modelDao.getByIdentifier(`${encodedTarget}${suffix ? `-${suffix}` : ''}`);
        suffix = randomstring.generate({ length: 4, capitalization: 'lowercase' });
      } catch (e) {
        isUniqueForModel = true;
        encodedTarget = `${encodedTarget}${suffix ? `-${suffix}` : ''}`;
      }
    } while (!isUniqueForModel);

    return encodedTarget;
  } catch (error) {
    logger.error('IdentifierUtils: getFormattedIdentifier error', error);
  }
}

export function getRandomIdentifier() {
  return randomstring.generate({ length: 8, capitalization: 'lowercase' });
}