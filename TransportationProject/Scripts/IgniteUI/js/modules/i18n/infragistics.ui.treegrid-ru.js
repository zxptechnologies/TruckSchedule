﻿/*!@license
* Infragistics.Web.ClientUI Tree Grid localization resources 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.TreeGrid) {
        $.ig.TreeGrid = {};

        $.extend($.ig.TreeGrid, {
            locale: {
                fixedVirtualizationNotSupported: 'Для RowVirtualization требуется другая установка virtualizationMode. Для virtualizationMode следует задать значение "continuous ".'
            }
        });
    }
})(jQuery);