/**
 * @file mofron-comp-epoch/index.js
 * @brief chart component for mofron
 *        it is base module of chart, user don't use this module directly
 * @license MIT
 */

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (key-value) component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("Chart");
	    /* init config */
	    this.confmng().add("data", { type: "object", list: true });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * chart data setter/getter
     * 
     * @param (array) chart data [{ label: string, values: mixed  }, ..]
     *                 undefined: call as getter
     * @return (mixed) object: chart data
     *                 null: not set
     * @type parameter
     */
    data (prm) {
        try {
            return this.confmng("data", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
