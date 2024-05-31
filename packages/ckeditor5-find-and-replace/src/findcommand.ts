/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module find-and-replace/findcommand
*/

import { Command, type Editor } from 'ckeditor5/src/core.js';
import type { Collection } from 'ckeditor5/src/utils.js';

import type { default as FindAndReplaceState, FindCallback } from './findandreplacestate.js';
import type { ResultType } from './findandreplace.js';
import type FindAndReplaceUtils from './findandreplaceutils.js';

/**
 * The find command. It is used by the {@link module:find-and-replace/findandreplace~FindAndReplace find and replace feature}.
 */
export default class FindCommand extends Command {
	/**
	 * The find and replace state object used for command operations.
	 */
	private _state: FindAndReplaceState;

	/**
	 * Creates a new `FindCommand` instance.
	 *
	 * @param editor The editor on which this command will be used.
	 * @param state An object to hold plugin state.
	 */
	constructor( editor: Editor, state: FindAndReplaceState ) {
		super( editor );

		// The find command is always enabled.
		this.isEnabled = true;

		// It does not affect data so should be enabled in read-only mode.
		this.affectsData = false;

		this._state = state;
	}

	/**
	 * Executes the command.
	 *
	 * @param callbackOrText
	 * @param options Options object.
	 * @param options.matchCase If set to `true`, the letter case will be matched.
	 * @param options.wholeWords If set to `true`, only whole words that match `callbackOrText` will be matched.
	 *
	 * @fires execute
	 */
	public override execute(
		callbackOrText: string | FindCallback,
		{ matchCase, wholeWords }: FindAttributes = {}
	): { results: Collection<ResultType>; findCallback: FindCallback } {
		const { editor } = this;
		const { model } = editor;
		const findAndReplaceUtils: FindAndReplaceUtils = editor.plugins.get( 'FindAndReplaceUtils' );

		let findCallback: FindCallback | undefined;
		let callbackSearchText: string = '';

		// Allow to execute `find()` on a plugin with a keyword only.
		if ( typeof callbackOrText === 'string' ) {
			findCallback = ( ...args ) => ( {
				results: findAndReplaceUtils.findByTextCallback( callbackOrText, { matchCase, wholeWords } )( ...args ),
				searchText: callbackOrText
			} );
		} else {
			findCallback = callbackOrText;
		}

		// Set the search text to the last search text if it was not provided.
		findCallback = tapFunctionResult( findCallback, findCallbackResult => {
			if ( findCallbackResult && !Array.isArray( findCallbackResult ) ) {
				callbackSearchText = findCallbackResult.searchText;
			}
		} );

		// Initial search is done on all nodes in all roots inside the content.
		const results = model.document.getRootNames()
			.reduce( ( ( currentResults: Collection<ResultType> | null, rootName ) => findAndReplaceUtils.updateFindResultFromRange(
				model.createRangeIn( model.document.getRoot( rootName )! ),
				model,
				findCallback!,
				currentResults
			) ), null )!;

		this._state.clear( model );
		this._state.results.addMany( results );
		this._state.highlightedResult = results.get( 0 );
		this._state.searchText = callbackSearchText;

		if ( findCallback ) {
			this._state.lastSearchCallback = findCallback;
		}

		this._state.matchCase = !!matchCase;
		this._state.matchWholeWords = !!wholeWords;

		return {
			results,
			findCallback
		};
	}
}

/**
 * The options object for the find command.
 */
export type FindAttributes = { matchCase?: boolean; wholeWords?: boolean };

/**
 * Wraps a function and executes a tap function with the result of the wrapped function.
 *
 * @param wrappedFn The function to be wrapped.
 * @param tapFn The function to be executed with the result of the wrapped function.
 * @returns A function that executes the wrapped function, taps the result, and returns the result.
 */
function tapFunctionResult<R, A extends Array<any>>(
	wrappedFn: ( ...args: A ) => R,
	tapFn: ( result: R ) => void
) {
	return ( ...args: A ) => {
		const resultValue = wrappedFn( ...args );

		tapFn( resultValue );

		return resultValue;
	};
}
