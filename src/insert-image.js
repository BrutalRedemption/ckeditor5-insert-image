/**
 * @license Copyright (c) 2003-2023, BrutalRedemption
 * 
 * 
 * @title Insert Image Plugin
 * 
 * @description This plugin is responsible for inserting Images in the CKEditor v5 through URL.
 * By default this is not enabled , this way we only have 1 button that enables the user
 * to insert an image through URL.
 * 
 * 
 * @createDate 30-01-2023
 * 
 * @module insert-image/insert-image
 * @extends module:core/plugin~Plugin
 */

 import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
 import InsertImageEditing from './insert-image-editing';
 import InsertImageUI from './insert-image-ui';
 
 export default class InsertImage extends Plugin {

    /**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'InsertImage';
	}

    /**
     * @inheritdoc
     */
     static get requires() {
         return [ InsertImageEditing, InsertImageUI ];
     }
 }