/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic/dist/index.js';
import { Essentials } from '@ckeditor/ckeditor5-essentials/dist/index.js';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat/dist/index.js';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote/dist/index.js';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles/dist/index.js';
import { Heading } from '@ckeditor/ckeditor5-heading/dist/index.js';
import { Image, ImageCaption, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image/dist/index.js';
import { Indent } from '@ckeditor/ckeditor5-indent/dist/index.js';
import { Link } from '@ckeditor/ckeditor5-link/dist/index.js';
import { List } from '@ckeditor/ckeditor5-list/dist/index.js';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed/dist/index.js';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/dist/index.js';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table/dist/index.js';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Essentials,
			Autoformat,
			BlockQuote,
			Bold,
			Heading,
			Image,
			ImageCaption,
			ImageStyle,
			ImageToolbar,
			Indent,
			Italic,
			Link,
			List,
			MediaEmbed,
			Paragraph,
			Table,
			TableToolbar
		],
		toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		],
		image: {
			toolbar: [ 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'imageTextAlternative' ]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
