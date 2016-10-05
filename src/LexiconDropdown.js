import Component from 'metal-component';
import core from 'metal';
import MetalDropdown from 'metal-dropdown';
import Soy from 'metal-soy';

import templates from './LexiconDropdown.soy';

/**
 * Implementation of the Lexicon Dropdown Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/dropdowns/|Lexicon Definition}
 */
class LexiconDropdown extends MetalDropdown {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconDropdown.STATE = {
	/**
	 * CSS class (or list of classes) for styling the icon's main container
	 * @type {array}
	 */
	items: {
		validator: core.isArray
	}
};

// Register component
Soy.register(LexiconDropdown, templates);

export default LexiconDropdown;