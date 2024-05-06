/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document */

import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor.js';
import { filterDropdownMenuTree } from '../../../../src/dropdown/menu/search/filterdropdownmenutree.js';
import {
	getTotalDropdownMenuTreeFlatItemsCount
} from '../../../../src/dropdown/menu/search/gettotaldropdownmenutreeflatitemscount.js';

import { createMockDropdownMenuDefinition } from '../_utils/dropdowntreemock.js';
import {
	createRootTree,
	mapButtonViewToFlatMenuTreeItem,
	mapMenuViewToMenuTreeItemByLabel,
	markAsFound
} from '../_utils/dropdowntreeutils.js';

describe( 'filterDropdownMenuTree', () => {
	let editor, element;

	beforeEach( async () => {
		element = document.body.appendChild(
			document.createElement( 'div' )
		);

		editor = await ClassicTestEditor.create( element );
	} );

	afterEach( async () => {
		await editor.destroy();
		element.remove();
	} );

	it( 'should return 0 found items on empty tree', () => {
		const result = filterDropdownMenuTree( () => true, createRootTree() );

		expect( result ).to.deep.equal( {
			resultsCount: 0,
			totalItemsCount: 0,
			filteredTree: createRootTree()
		} );
	} );

	it( 'should return all menu children if menu label matches', () => {
		const { menuRootList, menusDefinitions } = createMockDropdownMenuDefinition( editor );
		const { tree } = menuRootList;

		const { resultsCount, filteredTree, totalItemsCount } = filterDropdownMenuTree(
			node => node.search.raw === 'Menu 1',
			tree
		);

		expect( resultsCount ).to.be.equal( 3 );
		expect( totalItemsCount ).to.be.equal( 5 );
		expect( filteredTree ).to.deep.equal(
			createRootTree( [
				markAsFound(
					mapMenuViewToMenuTreeItemByLabel(
						'Menu 1',
						tree,
						menusDefinitions[ 0 ].children.map( mapButtonViewToFlatMenuTreeItem )
					)
				)
			] )
		);
	} );

	it( 'should return child if label matches', () => {
		const { menuRootList, menusDefinitions } = createMockDropdownMenuDefinition( editor );
		const { tree } = menuRootList;

		const { resultsCount, filteredTree, totalItemsCount } = filterDropdownMenuTree(
			node => node.search.raw === 'Foo',
			tree
		);

		expect( resultsCount ).to.be.equal( 1 );
		expect( totalItemsCount ).to.be.equal( 5 );
		expect( filteredTree ).to.deep.equal(
			createRootTree( [
				mapMenuViewToMenuTreeItemByLabel(
					'Menu 1',
					tree,
					[
						mapButtonViewToFlatMenuTreeItem( menusDefinitions[ 0 ].children[ 0 ] )
					].map( markAsFound )
				)
			] )
		);
	} );

	it( 'should not modify passed tree object', () => {
		const { menuRootList } = createMockDropdownMenuDefinition( editor );

		const tree = Object.freeze( menuRootList.tree );
		const { filteredTree } = filterDropdownMenuTree(
			node => node.search.raw === 'Foo',
			tree
		);

		expect( filteredTree ).not.to.be.equal( tree );
		expect( getTotalDropdownMenuTreeFlatItemsCount( filteredTree ) ).not.to.be.equal(
			getTotalDropdownMenuTreeFlatItemsCount( tree )
		);
	} );
} );
