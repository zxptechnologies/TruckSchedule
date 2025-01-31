﻿/*!@license
* Infragistics.Web.ClientUI data source localization resources 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.DataSourceLocale) {
	    $.ig.DataSourceLocale = {};

	    $.extend($.ig.DataSourceLocale, {

		    locale: {
			    invalidDataSource: "Источник данных неизвестен. Скалярные данные не поддерживаются.",
			    unknownDataSource: "Невозможно определить тип источника данных. Установите тип данных: JSON или XML.",
			    errorParsingArrays: "Произошла ошибка при обработке массива данных. Схема не соответствует: ",
			    errorParsingJson: "Произошла ошибка при обработке данных формата JSON. Схема не соответствует: ",
			    errorParsingXml: "Произошла ошибка при обработке данных формата XML. Схема не соответствует: ",
			    errorParsingHtmlTable: "Произошла ошибка при извлечении данных из HTML таблицы. Схема не соответствует: ",
			    errorExpectedTbodyParameter: "Ожидаемый параметр: tbody или table элемент.",
			    errorTableWithIdNotFound: "Не найдена HTML таблица соответствующая идентификатору: ",
			    errorParsingHtmlTableNoSchema: "Произошла ошибка при извлечении данных из DOM таблицы: ",
			    errorParsingJsonNoSchema: "Произошла ошибка при извлечении данных из JSON текста: ",
			    errorParsingXmlNoSchema: "Произошла ошибка при извлечении данных из XML текста: ",
			    errorXmlSourceWithoutSchema: "Источник данных является XML документом, но схема для документа не определена ($.IgDataSchema) ",
			    errorUnrecognizedFilterCondition: " Предоставленное условие фильтра нераспознаваемо: ",
			    errorRemoteRequest: "Удаленный запрос на извлечение данных не удался: ",
			    errorSchemaMismatch: "Входные данные не соответствуют схеме, это поле не может быть сопоставлено: ",
			    errorSchemaFieldCountMismatch: "Входные данные не соответствуют схеме по числу полей. ",
			    errorUnrecognizedResponseType: "Тип ответа указан некорректно или невозможно определить автоматически. Пожалуйста установите settings.responseDataType и/или settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Таблицы в HierarchicalSchema не поддерживаются.",
			    cannotBuildTemplate: "Шаблон jQuery не может быть сконструирован. В источнике данных отсутствуют записи и колонки неопределены.",
			    unrecognizedCondition: "Нераспозноваемое условие фильтровки в следующем выражении: ",
			    fieldMismatch: "Следующее выражение содержит ошибочное поле или условие фильтровки: ",
			    noSortingFields: "Поля не установлены. Необходимо установить хотя бы одно поле для сортировки перед использованием функции sort().",
			    filteringNoSchema: "Схема/поля не установлены. Необходимо установить схему с определением полей и типов перед фильтровкой источника данных.",
			    noSaveChanges: "Saving changes was not successful. Server did not return Success object or returned Success:false."
		    }
	    });

    }
})(jQuery);