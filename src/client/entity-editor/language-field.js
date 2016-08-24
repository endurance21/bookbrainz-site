/*
 * Copyright (C) 2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import {Input} from 'react-bootstrap';

import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import {connect} from 'react-redux';
import {updateLanguageField} from './actions';

function LanguageField({
	selectValue,
	languageOptions,
	onChange
}) {
	return (
		<Input
			label="Language"
		>
			<VirtualizedSelect
				options={languageOptions}
				value={selectValue}
				onChange={onChange}
			/>
		</Input>
	);
}
LanguageField.displayName = 'LanguageField';
LanguageField.propTypes = {
	languageOptions: React.PropTypes.array,
	selectValue: React.PropTypes.number,
	onChange: React.PropTypes.func
};

export default connect(
	(state) => ({
		selectValue: state.get('languageValue')
	}),
	(dispatch) => ({
		onChange: (value) => dispatch(updateLanguageField(value.value))
	})
)(LanguageField);
