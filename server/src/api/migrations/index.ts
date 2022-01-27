import { Router, Request, Response, NextFunction } from 'express';
import * as migrationDao from './migration.dao';
import * as migrationParser  from './migration.parser';
import * as auth from '../../auth';
import * as mysql from 'mysql';

import * as blogCategoriesDao from '../blog-categories/blog-categories.dao';
import * as blogDao from '../blogs/blog.dao';


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pide_db'
});


const migrationRouter = Router();

migrationRouter.get('/', migrationParser.parseGetByQuery, getByQuery);
migrationRouter.post('/', auth.isAdmin, migrationParser.parseCreate, create);
migrationRouter.put('/:id', auth.isAdmin, migrationParser.parseUpdate, update);
migrationRouter.delete('/:id', auth.isAdmin, destroy);
migrationRouter.patch('/positions', migrationParser.parseUpdatePositions, updatePositions);

export default migrationRouter;

// =============== GET ===============

async function getByQuery(req: Request, res: Response, next: NextFunction) {
  try {

    connection.connect();

    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results[0].solution);
    // });
    // connection.query('SELECT * FROM `blog_category`', async (error, results, fields) => {
    //   if (error) throw error;
    //   // console.log('The solution is: ', results[0].Name_ge);
    //   // await insertBlogCategories(results);
    // });


    await insertBlog();
    // await insertBlogCategories();
    connection.end();
    // const query = req.query;
    // const migrationData = await migrationDao.getByQuery(query);
    res.json('migrationData');
  } catch (e) {
    next(e);
  }
}

// =============== helpers ===============
async function insertBlog() {
  await blogDao.destroyAll();
  connection.query('SELECT * FROM `blog`', async (error, results, fields) => {
    if (error) throw error;
    for (let index = 0; index < results.length; index++) {

      const blog = results[index];
      const { items: blogCategory }: any = await blogCategoriesDao.getByQuery({ find: { id: 2 }});

      await blogDao.create({
        id: blog.ID,
        category: blogCategory[0]._id,
        name: {
          en: blog.Name_en,
          ge: blog.Name_ge,
          ru: '',
        },
        description: {
          en: blog.Description_en,
          ge: blog.Description_ge,
          ru: blog.Description_ru,
        },
        readTime: blog.Read_Time,
        liked: blog.Liked,
        views: blog.View,
        updateDate: new Date(blog.Update_Date),
        createDate: new Date(blog.Create_Date),
        status: blog.Status,
        fbImage:  {
          url: `https://pide.ge${blog.FB_Image}`,
        },
        thumbnail: {
          url: `https://pide.ge${blog.Images}`,
        } ,
      });
    }
  });
}

async function insertBlogCategories() {
  await blogCategoriesDao.destroyAll();
  connection.query('SELECT * FROM `blog_category`', async (error, results, fields) => {
    if (error) throw error;
    for (let index = 0; index < results.length; index++) {
      const category = results[index];
        await blogCategoriesDao.create({
          id: category.ID,
          name: {
            en: category.Name_en,
            ge: category.Name_ge,
            ru: '',
          },
          views: category.Views,
          sort: category.Sort,
          updateDate: new Date(category.Update_Date),
          createDate: new Date(category.Create_Date),
          status: category.Status,
        });
    }
  });
}
// =============== POST ===============

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await migrationDao.create({ ...payload, position: 0 });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await migrationDao.update(payload._id, payload);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function updatePositions(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    await payload.items.map((item: any) => {
      migrationDao.update(item._id, { position: item.position });
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}

async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await migrationDao.destroy(id);
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
}