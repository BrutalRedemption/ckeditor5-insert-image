/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

 import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

 export default class InsertImageEditing extends Plugin {
     init() {
         this._defineSchema();
         this._defineConverters();
     }
     _defineSchema() {
         const schema = this.editor.model.schema;
 
         // Extend the text node's schema to accept the imageUrl attribute.
         schema.extend( '$text', {
             allowAttributes: [ 'imageUrl' ]
         } );
     }
     _defineConverters() {
         const conversion = this.editor.conversion;
         
         // Conversion from a model attribute to a view element
         conversion.for( 'downcast' ).attributeToElement( {
             model: 'imageUrl',
 
             // Callback function provides access to the model attribute value
             // and the DowncastWriter
             view: ( modelAttributeValue, conversionApi ) => {
                 const { writer } = conversionApi;
                 const imageUtils = editor.plugins.get( 'ImageUtils' );
                return imageUtils.insertImage( { src: modelAttributeValue } );
             }
         } );
 
         // Conversion from a view element to a model attribute
         conversion.for( 'upcast' ).elementToAttribute( {
             view: {
                 name: 'url',
                 attributes: [ 'title' ]
             },
             model: {
                 key: 'imageUrl',
 
                 // Callback function provides access to the view element
                 value: viewElement => {
                     const title = viewElement.getAttribute( 'title' );
                     return title;
                 }
             }
         } );
     }
 }