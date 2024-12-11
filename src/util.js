// ----------------------------------------------------------------------------
// Utility helper functions
// ----------------------------------------------------------------------------


class Util
{
	/**
	 * Is a value undefined?
	 *
	 * @static
	 *
	 * @param {*} value - A generic value to be checked.
	 *
	 * @return boolean - true if undefined, false otherwise.
	 */
	static isUndefined(value)
	{
		return typeof(value) == 'undefined' ? true : false;
	}

	/**
	 * Is a value defined? Simply calls Util.isUndefined and negates it.
	 *
	 * @static
	 *
	 * @param {*} value - A generic value to be checked.
	 *
	 * @return boolean - true if defined, false otherwise.
	 */
	static isDefined(value)
	{
		return !Util.isUndefined(value);
	}
}


export { Util };
