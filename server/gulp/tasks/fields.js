/* valid types */
/*
  String 
  Number
  Date
  multilingualSchema
  imageSchema
  [imageSchema]
  Socials
  multilingualSchema-Textarea
  multilingualSchema-quill-editor
  quill-editor
  Textarea
  Slide-toggle
  Meta

  Reference
  Select
*/
// note: object key titles must be camelCase

// available langs
export const availableLangs = ['en', 'ge', 'ru' ];

// list display fields
// only String or multilingualSchema
export const listFields = {
  name: 'String',
  // title: 'multilingualSchema', 
};

export const refFields = {
  category: {
    //  reference must be camelCase
    reference: 'BlogCategories',
    //  single/multiple
    referenceType: 'single',
    value: '_id',
    displayFieldName: 'name?.ge',
  }
}

export const selectFields = {
  testSelect: {
    //  single/multiple
    selectType: 'single',
    values: ['metal', 'rock', 'classic', 'black']
  }
}

export const fields = {
  question: 'multilingualSchema',
  answer: 'multilingualSchema',
}


/*
// requested walkers
  name: 'multilingualSchema',
  description: 'multilingualSchema',
  Image: 'imageSchema',
  tags: ['String']
*/

/*
// stories

  title: 'multilingualSchema',
  description: 'multilingualSchema',
  Image: 'imageSchema',

*/


/* blog 

# Reference
  category: {
    //  reference must be camelCase
    reference: 'BlogCategories',
    //  single/multiple
    referenceType: 'single',
    value: '_id',
    displayFieldName: 'name?.ge',
  }
# end recerence

  id: 'Number',
  category: 'Reference',
  name: 'multilingualSchema',
  description: 'multilingualSchema',
  fbImage: 'imageSchema',
  thumbnail: 'imageSchema',
  images: '[imageSchema]',
  views: 'Number',
  liked: 'Number',
  readTime: 'Number',
  updateDate: 'Date',
  createDate: 'Date',
  status: 'String',
  meta: 'Meta',
*/

/**
 * block gategories
  id: 'Number',
  name: 'multilingualSchema',
  views: 'Number',
  sort: 'Number',
  updateDate: 'Number',
  createDate: 'Number',
  status: 'String',
 * 
*/