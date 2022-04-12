import { Router, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import sharp from 'sharp';
import { imageSize } from 'image-size';
import config from '../../config/environment';
import * as fileParser  from './file.parser';
import * as multerConfig from '../../config/multer';
import { imageConfig } from '../../constants/common';

const upload = multer(multerConfig);

const fileRouter = Router();

fileRouter.post('/', upload.array('filesToAdd', 20), fileParser.parseCreateAndDestroy, destroy, resizeAndCompressImage);

fileRouter.post('/editor', upload.single('upload'), returnEditorFile);

export default fileRouter;

function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const {fileNamesToDestroy} = req.body;
    for (const filename of fileNamesToDestroy) {
      const filepath = path.join(config.paths.uploads, filename || '');
      fs.unlink(filepath, () => {});
    }

    next();
  } catch (e) {
    next(e);
  }
}

function returnEditorFile(req: Request, res: Response, next: NextFunction) {
  try {
    res.json({
      'uploaded': 1,
      'fileName': req.file.filename,
      'url': config.resourceUrl + '/' + req.file.filename,
    });
  } catch (e) {
    next(e);
  }
}


async function resizeAndCompressImage(req: Request, res: Response, next: NextFunction) {
  try {
    const files: any = req.files;
    let {
      mobileWidth,
      mobileHeight,
      desktopWidth,
      desktopHeight,
     } = req.body;

     mobileWidth = parseInt(mobileWidth) + ((mobileWidth * 10) / 100);
     mobileHeight = parseInt(mobileHeight) + ((mobileWidth * 10) / 100);
     desktopWidth = parseInt(desktopWidth) + ((desktopWidth * 10) / 100);
     desktopHeight = parseInt(desktopHeight) + ((mobileWidth * 10) / 100);

    const fileNames = [];
    for (const file of files) {
      const splitFilename = file.originalname.split('.');
      const extension = splitFilename[splitFilename.length - 1];
      const fileName = file.originalname.split(`.${extension}`);
      const filePath = getLocalFilePath(file.originalname);
      const {width, height} = imageSize(filePath);

      // old
      // const factor = Math.max(Math.min(width / (Number(desktopWidth) || imageConfig.desiredPrintWidth), height / (Number(desktopHeight) || imageConfig.desiredPrintHeight)), 1);
      // const finalWidth = Math.round(width / factor);
      // const finalHeight = Math.round(height / factor);
      // const resizedFilePath = getLocalFilePath(fileName[0] + '-resized.' + extension);
      // // await sharp(filePath).resize(finalWidth, finalHeight).toFile(resizedFilePath);
      // await sharp(filePath).toFile(resizedFilePath);
      // fileNames.push(fileName[0] + '-resized.' + extension);

      // new
      await resizeMobile({width, height, mobileWidth, mobileHeight, fileName, filePath});
      await resizeDesktop({width, height, desktopWidth, desktopHeight, fileName, filePath});
      const Fname = await convertToWEBP({fileName, filePath});
      fileNames.push(Fname);

      fs.unlink(filePath, () => {});
    }
    res.json(fileNames);
  } catch (e) {
    next(e);
  }
}

async function convertToWEBP({fileName, filePath}: any ) {
    const Fname = fileName[0] + '.webp';
    const localFilePath = getLocalFilePath(Fname);
    await sharp(filePath).webp().toFile(localFilePath);
    return Fname;
}

async function resizeMobile({width, height, mobileWidth, mobileHeight, fileName, filePath}: any ) {
    const factor = Math.max(Math.min(width / (Number(mobileWidth) || imageConfig.desiredPrintWidth), height / (Number(mobileHeight) || imageConfig.desiredPrintHeight)), 1);
    const finalWidth = Math.round(width / factor);
    const finalHeight = Math.round(height / factor);
    const resizedFilePath = getLocalFilePath(fileName[0] + '-mobile.webp');
    await sharp(filePath).webp().resize(finalWidth, finalHeight).toFile(resizedFilePath);
    return fileName[0] + '-mobile.webp';
}

async function resizeDesktop({width, height, desktopWidth, desktopHeight, fileName, filePath}: any ) {
    const factor = Math.max(Math.min(width / (Number(desktopWidth) || imageConfig.desiredPrintWidth), height / (Number(desktopHeight) || imageConfig.desiredPrintHeight)), 1);
    const finalWidth = Math.round(width / factor);
    const finalHeight = Math.round(height / factor);
    const resizedFilePath = getLocalFilePath(fileName[0] + '-desktop.webp');
    await sharp(filePath).webp().resize(finalWidth, finalHeight).toFile(resizedFilePath);
    return fileName[0] + '-desktop.webp';
}

function getLocalFilePath(fileName: any) {
  return path.join(config.paths.uploads, fileName);
}