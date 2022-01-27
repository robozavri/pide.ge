const smsOfficeUrl = 'http://smsoffice.ge/api/send.aspx';
// const smsOfficeKey = 'f4c4bf839efb49a3b3f46e41b8fe96c9';
// const smsOfficeSender = 'INFO';
const smsOfficeKey = 'f4c4bf839efb49a3b3f46e41b8fe96c9';
const smsOfficeSender = 'pide.ge';


const request = require('request-promise');
import logger from './logger';


export function sendSms(destination: string, text: string) {
  const destinationNumber = `995${destination}`;

    return request({
      method: 'POST',
      url: smsOfficeUrl,
      formData: {
        key: smsOfficeKey,
        destination: destinationNumber,
        sender: smsOfficeSender,
        content: text,
      }
    }).catch((e: any) => handleError('SMS_OFFICE', e));
}

function handleError(provider: string, error: any) {
  logger.error(`SMS Helper: failed to send sms ${provider}`, { error, module: 'SMS' });
}