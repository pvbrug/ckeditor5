/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { readFile } from 'fs/promises';

import typescript from 'typescript';
import del from 'rollup-plugin-delete';
import styles from 'rollup-plugin-styles';
import commonjs from '@rollup/plugin-commonjs';
import svgPlugin from 'rollup-plugin-svg-import';
import typescriptPlugin from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import postcssNesting from 'postcss-nesting';
import postcssMixins from 'postcss-mixins';
import postcssImport from 'postcss-import';

import path from 'path';

// Indicates whether to emit source maps
const sourceMap = process.env.DEVELOPMENT || false;

// Current working directory
const cwd = path.resolve();

// Content of the `package.json`
const pkg = JSON.parse( await readFile( path.join( cwd, 'package.json') ) );

// List of external dependencies
const externals = [
	...Object.keys( pkg.dependencies || {} ),
	...Object.keys( pkg.peerDependencies || {} )
];

const inputPath = path.join( cwd, 'src', 'index.ts');
const tsConfigPath = path.join( cwd, 'tsconfig.json');

// Banner added to the top of the output files
const banner =
`/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */`;

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input: inputPath,
	output: {
		format: 'esm',
		file: path.join( cwd, 'dist', 'index.js'),
		assetFileNames: '[name][extname]',
		sourcemap: sourceMap,
		banner
	},
	external: id => externals.some( name => id.startsWith( name ) ),
	plugins: [
		del( {
			targets: path.join( cwd, 'dist' )
		} ),
		commonjs(),
		nodeResolve(),
		svgPlugin( {
			stringify: true
		} ),
		styles( {
			mode: [ 'extract', 'styles.css' ],
			plugins: [
				postcssNesting,
				postcssMixins,
				postcssImport
			],
			minimize: false,
			sourceMap
		} ),
		typescriptPlugin( {
			tsconfig: tsConfigPath,
			typescript,
			compilerOptions: {
				declaration: true,
				declarationDir: path.join( cwd, 'dist', 'types' ),
				declarationMap: false, // TODO
			},
			sourceMap
		} )
	]
};
