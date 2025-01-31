﻿/*!@license
* Infragistics.Web.ClientUI ListView localization resources 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
$.ig = $.ig || {};

if (!$.ig.mobileListView) {
	$.ig.mobileListView = {};
	$.ig.mobileListViewFiltering = {};
	$.ig.mobileListViewLoadOnDemand = {};
	$.ig.mobileListViewSorting = {};

	$.ig.mobileListView.locale = {
		noSuchWidget: "Kein solches Widget geladen: ",
		optionChangeNotSupported: "Die Änderung der folgenden Option nach der Erstellung von igListView wird nicht unterstützt:",
		emptyListText: "Es gibt keine Listenelemente!",
		goBackLabel: "Zurück",
		detailsLabel: "Details",
		searchTrayExpandLabel: "Sortieren/Filtern",
		searchTrayCollapseLabel: "Reduzieren"
	};
	$.ig.mobileListViewFiltering.locale = {
		keywordSearchLabel: "",
		keywordAllStateText: "Alle Felder",
		filterPresetsLabel: "Filtervoreinstellungen:",
		searchBarPlaceHolder: "Filterelemente...",
		filterAllStateText: "Alle",
		showLabel: "Anzeigen ",
		cancelButtonLabel: "Abbrechen",
		clearSearchButtonText: "Text löschen"
	};
	$.ig.mobileListViewLoadOnDemand.locale = {
		loadMoreItemsLabel: "Mehr Elemente laden",
		noMoreItemsLabel: "Es gibt keine zu ladenden Elemente mehr"
	};
	$.ig.mobileListViewSorting.locale = {
		sortPresetsLabel: "Voreinstellungen sortieren:",
		sortDefaultStateText: "Standard",
		sortByLabel: "Sortieren nach ",
		expandedCueText: "Klicken, um {0} zu reduzieren",
		collapsedCueText: "Klicken, um {0} zu erweitern"
	};

}

/*!@license
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
			    invalidDataSource: "Die angegebene Datenquelle ist ungültig. Es kann ein Skalar sein.",
			    unknownDataSource: "Der Datenquellentyp kann nicht bestimmt werden. Bitte angeben, ob es sich um JSON- oder XML-Daten handelt.",
			    errorParsingArrays: "Bei der Analyse der Arraydaten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingJson: "Bei der Analyse der JSON-Daten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingXml: "Bei der Analyse der XML-Daten und der Anwendung des definierten Datenschemas ist ein Fehler aufgetreten: ",
			    errorParsingHtmlTable: "Beim Extrahieren der Daten aus der HTML-Tabelle und der Anwendung des Schemas ist ein Fehler aufgetreten: ",
			    errorExpectedTbodyParameter: "tbody oder table wurde als Parameter erwartet.",
			    errorTableWithIdNotFound: "Die HTML-Tabelle mit der folgenden ID wurde nicht gefunden: ",
			    errorParsingHtmlTableNoSchema: "Bei der Analyse der Tabelle DOM ist ein Fehler aufgetreten: ",
			    errorParsingJsonNoSchema: "Bei der Analyse/Auswertung der JSON-Zeichenfolge ist ein Fehler aufgetreten: ",
			    errorParsingXmlNoSchema: "Bei der Analyse der XML-Zeichenfolge ist ein Fehler aufgetreten: ",
			    errorXmlSourceWithoutSchema: "Die angegebene Datenquelle ist ein XML-Dokument, aber es gibt kein definiertes Datenschema ($.IgDataSchema). ",
			    errorUnrecognizedFilterCondition: " Die angegebene Filterbedingung wurde nicht erkannt: ",
			    errorRemoteRequest: "Die Remoteanforderung zum Abrufen von Daten ist fehlgeschlagen: ",
			    errorSchemaMismatch: "Die Eingabedaten stimmen nicht mit dem Schema überein, das folgende Feld konnte nicht zugeordnet werden: ",
			    errorSchemaFieldCountMismatch: "Die Eingabedaten stimmen in Bezug auf die Anzahl Felder nicht mit dem Schema überein. ",
			    errorUnrecognizedResponseType: "Der Antworttyp wurde entweder nicht korrekt eingestellt oder konnte nicht automatisch erkannt werden. Bitte settings.responseDataType und/oder settings.responseContentType einstellen.",
			    hierarchicalTablesNotSupported: "Tabellen werden nicht für HierarchicalSchema unterstützt.",
			    cannotBuildTemplate: "Die jQuery-Vorlage konnte nicht erstellt werden. Es gibt keine Datensätze in der Datenquelle und keine definierten Spalten.",
			    unrecognizedCondition: "Nicht erkannte Filterbedingung im folgenden Ausdruck: ",
			    fieldMismatch: "Der folgende Ausdruck enthält ein ungültiges Feld oder eine ungültige Filterbedingung: ",
			    noSortingFields: "Es wurden keine Felder angegeben. Beim Aufrufen von sort() muss mindestens ein Feld zum Sortieren angegeben werden.",
			    filteringNoSchema: "Es wurden kein Schema / Felder angegeben. Es muss ein Schema mit Felddefinitionen und Feldtypen angegeben werden, um die Datenquelle filtern zu können.",
			    noSaveChanges: "Saving changes was not successful. Server did not return Success object or returned Success:false."
		    }
	    });

    }
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "muss beim Einstellen von Optionen die Option Datenreihenname angeben.",
			    axisName: "muss beim Einstellen von Optionen die Option Achsenname angeben.",
			    invalidLabelBinding: "Es gibt keinen solchen Wert für die zu bindenden Bezeichnungen.",
			    close: "Schließen",
			    overview: "Übersicht",
			    zoomOut: "Verkleinern",
			    zoomIn: "Vergrößern",
			    resetZoom: "Zoom zurücksetzen",
			    seriesUnsupportedOption: "the current series type does not support the option: ",
			    seriesTypeNotLoaded: "the JavaScript file containing the requested series type has not been loaded or the series type is invalid: ",
			    axisTypeNotLoaded: "the JavaScript file containing the requested axis type has not been loaded or the axis type is invalid: ",
			    axisUnsupportedOption: "the current axis type does not support the option: "
		    }
	    });

    }
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI templating localization resources 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Templating) {
	    $.ig.Templating = {};

	    $.extend($.ig.Templating, {
		    locale: {
			    undefinedArgument: 'Beim Abrufen der Datenquellen-Eigenschaft ist ein Fehler aufgetreten: '
		    }
	    });
    }
})(jQuery);

