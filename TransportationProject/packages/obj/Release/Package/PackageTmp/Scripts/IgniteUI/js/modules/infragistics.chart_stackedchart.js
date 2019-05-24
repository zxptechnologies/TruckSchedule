﻿/*!@license
* Infragistics.Web.ClientUI infragistics.chart_stackedchart.js 15.1.20151.2352
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*/
$.ig=$.ig||{};(function($){var $$t={};$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["AbstractEnumerable:a","Object:b","Type:c","Boolean:d","ValueType:e","Void:f","IConvertible:g","IFormatProvider:h","Number:i","String:j","IComparable:k","Number:l","Number:m","Number:n","Number:o","NumberStyles:p","Enum:q","Array:r","IList:s","ICollection:t","IEnumerable:u","IEnumerator:v","NotSupportedException:w","Error:x","Number:y","String:z","StringComparison:aa","RegExp:ab","CultureInfo:ac","DateTimeFormatInfo:ad","Calendar:ae","Date:af","Number:ag","DayOfWeek:ah","DateTimeKind:ai","CalendarWeekRule:aj","NumberFormatInfo:ak","CompareInfo:al","CompareOptions:am","IEnumerable$1:an","IEnumerator$1:ao","IDisposable:ap","StringSplitOptions:aq","Number:ar","Number:as","Number:at","Number:au","Number:av","Number:aw","Assembly:ax","Stream:ay","SeekOrigin:az","RuntimeTypeHandle:a0","MethodInfo:a1","MethodBase:a2","MemberInfo:a3","ParameterInfo:a4","TypeCode:a5","ConstructorInfo:a6","PropertyInfo:a7","Func$1:a8","MulticastDelegate:a9","IntPtr:ba","AbstractEnumerator:bb","Array:bm","GenericEnumerable$1:ci","GenericEnumerator$1:cj"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compare,$w=$.ig.util.replace,$x=$.ig.util.stringFormat,$y=$.ig.util.stringFormat1,$z=$.ig.util.stringFormat2,$0=$.ig.util.stringCompare1,$1=$.ig.util.stringCompare2,$2=$.ig.util.stringCompare3,$3=$.ig.util.compareSimple,$4=$.ig.util.numberToString,$5=$.ig.util.tryParseInt32_1,$6=$.ig.util.tryParseInt32_2,$7=$.ig.util.intToString1,$8=$.ig.util.parseInt32_1,$9=$.ig.util.parseInt32_2,$aa=$.ig.util.isDigit,$ab=$.ig.util.isDigit1,$ac=$.ig.util.isLetter,$ad=$.ig.util.isNumber,$ae=$.ig.util.isLetterOrDigit,$af=$.ig.util.isLower,$ag=$.ig.util.toLowerCase,$ah=$.ig.util.toUpperCase,$ai=$.ig.util.tryParseNumber,$aj=$.ig.util.tryParseNumber1,$ak=$.ig.util.numberToString1,$al=$.ig.util.parseNumber})(jQuery);$.ig=$.ig||{};(function($){var $$t={};$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["Object:d","Type:e","Boolean:f","ValueType:g","Void:h","IConvertible:i","IFormatProvider:j","Number:k","String:l","IComparable:m","Number:n","Number:o","Number:p","Number:q","NumberStyles:r","Enum:s","Array:t","IList:u","ICollection:v","IEnumerable:w","IEnumerator:x","NotSupportedException:y","Error:z","Number:aa","String:ab","StringComparison:ac","RegExp:ad","CultureInfo:ae","DateTimeFormatInfo:af","Calendar:ag","Date:ah","Number:ai","DayOfWeek:aj","DateTimeKind:ak","CalendarWeekRule:al","NumberFormatInfo:am","CompareInfo:an","CompareOptions:ao","IEnumerable$1:ap","IEnumerator$1:aq","IDisposable:ar","StringSplitOptions:as","Number:at","Number:au","Number:av","Number:aw","Number:ax","Number:ay","Assembly:az","Stream:a0","SeekOrigin:a1","RuntimeTypeHandle:a2","MethodInfo:a3","MethodBase:a4","MemberInfo:a5","ParameterInfo:a6","TypeCode:a7","ConstructorInfo:a8","PropertyInfo:a9","Array:bf","MulticastDelegate:bh","IntPtr:bi","Func$1:hf","AbstractEnumerable:jr","AbstractEnumerator:js","GenericEnumerable$1:jt","GenericEnumerator$1:ju"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compareSimple,$w=$.ig.util.tryParseNumber,$x=$.ig.util.tryParseNumber1,$y=$.ig.util.numberToString,$z=$.ig.util.numberToString1,$0=$.ig.util.parseNumber,$1=$.ig.util.compare,$2=$.ig.util.replace,$3=$.ig.util.stringFormat,$4=$.ig.util.stringFormat1,$5=$.ig.util.stringFormat2,$6=$.ig.util.stringCompare1,$7=$.ig.util.stringCompare2,$8=$.ig.util.stringCompare3,$9=$.ig.util.tryParseInt32_1,$aa=$.ig.util.tryParseInt32_2,$ab=$.ig.util.intToString1,$ac=$.ig.util.parseInt32_1,$ad=$.ig.util.parseInt32_2})(jQuery);$.ig=$.ig||{};(function($){var $$t={};$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["IProvidesViewport:a","Void:b","ValueType:c","Object:d","Type:e","Boolean:f","IConvertible:g","IFormatProvider:h","Number:i","String:j","IComparable:k","Number:l","Number:m","Number:n","Number:o","NumberStyles:p","Enum:q","Array:r","IList:s","ICollection:t","IEnumerable:u","IEnumerator:v","NotSupportedException:w","Error:x","Number:y","String:z","StringComparison:aa","RegExp:ab","CultureInfo:ac","DateTimeFormatInfo:ad","Calendar:ae","Date:af","Number:ag","DayOfWeek:ah","DateTimeKind:ai","CalendarWeekRule:aj","NumberFormatInfo:ak","CompareInfo:al","CompareOptions:am","IEnumerable$1:an","IEnumerator$1:ao","IDisposable:ap","StringSplitOptions:aq","Number:ar","Number:as","Number:at","Number:au","Number:av","Number:aw","Assembly:ax","Stream:ay","SeekOrigin:az","RuntimeTypeHandle:a0","MethodInfo:a1","MethodBase:a2","MemberInfo:a3","ParameterInfo:a4","TypeCode:a5","ConstructorInfo:a6","PropertyInfo:a7","Rect:a8","Size:a9","Point:ba","Math:bb","Series:bc","Control:bd","FrameworkElement:be","UIElement:bf","DependencyObject:bg","Dictionary:bh","DependencyProperty:bi","PropertyMetadata:bj","PropertyChangedCallback:bk","MulticastDelegate:bl","IntPtr:bm","DependencyPropertyChangedEventArgs:bn","DependencyPropertiesCollection:bo","UnsetValue:bp","Script:bq","Binding:br","PropertyPath:bs","Transform:bt","Visibility:bu","Style:bv","Thickness:bw","HorizontalAlignment:bx","VerticalAlignment:by","INotifyPropertyChanged:bz","PropertyChangedEventHandler:b0","PropertyChangedEventArgs:b1","SeriesView:b2","ISchedulableRender:b3","SeriesViewer:b4","SeriesViewerView:b5","CanvasRenderScheduler:b6","List$1:b7","IList$1:b8","ICollection$1:b9","IArray:ca","IArrayList:cb","Array:cc","CompareCallback:cd","Func$3:ce","Action$1:cf","Comparer$1:cg","IComparer:ch","IComparer$1:ci","DefaultComparer$1:cj","IComparable$1:ck","Comparison$1:cl","ReadOnlyCollection$1:cm","Predicate$1:cn","NotImplementedException:co","Callback:cp","window:cq","RenderingContext:cr","IRenderer:cs","Rectangle:ct","Shape:cu","Brush:cv","Color:cw","ArgumentException:cx","DoubleCollection:cy","Path:cz","Geometry:c0","GeometryType:c1","TextBlock:c2","Polygon:c3","PointCollection:c4","Polyline:c5","DataTemplateRenderInfo:c6","DataTemplatePassInfo:c7","ContentControl:c8","DataTemplate:c9","DataTemplateRenderHandler:da","DataTemplateMeasureHandler:db","DataTemplateMeasureInfo:dc","DataTemplatePassHandler:dd","Line:de","FontInfo:df","XamOverviewPlusDetailPane:dg","XamOverviewPlusDetailPaneView:dh","XamOverviewPlusDetailPaneViewManager:di","JQueryObject:dj","Element:dk","ElementAttributeCollection:dl","ElementCollection:dm","WebStyle:dn","ElementNodeType:dp","Document:dq","EventListener:dr","IElementEventHandler:ds","ElementEventHandler:dt","ElementAttribute:du","JQueryPosition:dv","JQueryCallback:dw","JQueryEvent:dx","JQueryUICallback:dy","EventProxy:dz","ModifierKeys:d0","Func$2:d1","MouseWheelHandler:d2","Delegate:d3","Interlocked:d4","GestureHandler:d5","ContactHandler:d6","TouchHandler:d7","MouseOverHandler:d8","MouseHandler:d9","KeyHandler:ea","Key:eb","JQuery:ec","JQueryDeferred:ed","JQueryPromise:ee","Action:ef","CanvasViewRenderer:eg","CanvasContext2D:eh","CanvasContext:ei","TextMetrics:ej","ImageData:ek","CanvasElement:el","Gradient:em","LinearGradientBrush:en","GradientStop:eo","GeometryGroup:ep","GeometryCollection:eq","FillRule:er","PathGeometry:es","PathFigureCollection:et","LineGeometry:eu","RectangleGeometry:ev","EllipseGeometry:ew","ArcSegment:ex","PathSegment:ey","PathSegmentType:ez","SweepDirection:e0","PathFigure:e1","PathSegmentCollection:e2","LineSegment:e3","PolyLineSegment:e4","BezierSegment:e5","PolyBezierSegment:e6","GeometryUtil:e7","Tuple$2:e8","TransformGroup:e9","TransformCollection:fa","TranslateTransform:fb","RotateTransform:fc","ScaleTransform:fd","DivElement:fe","DOMEventProxy:ff","MSGesture:fg","MouseEventArgs:fh","EventArgs:fi","DoubleAnimator:fj","EasingFunctionHandler:fk","ImageElement:fl","RectUtil:fm","MathUtil:fn","RuntimeHelpers:fo","RuntimeFieldHandle:fp","PropertyChangedEventArgs$1:fq","InteractionState:fr","OverviewPlusDetailPaneMode:fs","IOverviewPlusDetailControl:ft","EventHandler$1:fu","ArgumentNullException:fv","OverviewPlusDetailViewportHost:fw","SeriesCollection:fx","ObservableCollection$1:fy","INotifyCollectionChanged:fz","NotifyCollectionChangedEventHandler:f0","NotifyCollectionChangedEventArgs:f1","NotifyCollectionChangedAction:f2","AxisCollection:f3","SeriesViewerViewManager:f4","AxisTitlePosition:f5","PointerTooltipStyle:f6","Dictionary$2:f7","IDictionary$2:f8","IDictionary:f9","KeyValuePair$2:ga","Enumerable:gb","Thread:gc","ThreadStart:gd","IOrderedEnumerable$1:ge","SortedList$1:gf","IEqualityComparer$1:gg","EqualityComparer$1:gh","IEqualityComparer:gi","DefaultEqualityComparer$1:gj","InvalidOperationException:gk","BrushCollection:gl","InterpolationMode:gm","Random:gn","ColorUtil:go","CssHelper:gp","CssGradientUtil:gq","FontUtil:gr","TileZoomTile:gs","TileZoomTileInfo:gt","TileZoomTileCache:gu","TileZoomManager:gv","RectChangedEventHandler:gw","RectChangedEventArgs:gx","TileZoomInfo:gy","LinkedList$1:gz","LinkedListNode$1:g0","RenderSurface:g1","DataContext:g2","SeriesViewerComponentsFromView:g3","SeriesViewerSurfaceViewer:g4","Canvas:g5","Panel:g6","UIElementCollection:g7","StackedSeriesBase:g8","CategorySeries:g9","MarkerSeries:ha","MarkerSeriesView:hb","Marker:hc","MarkerTemplates:hd","HashPool$2:he","IHashPool$2:hf","IPool$1:hg","Func$1:hh","Pool$1:hi","IIndexedPool$1:hj","MarkerType:hk","SeriesVisualData:hl","PrimitiveVisualDataList:hm","IVisualData:hn","PrimitiveVisualData:ho","PrimitiveAppearanceData:hp","BrushAppearanceData:hq","StringBuilder:hr","Environment:hs","AppearanceHelper:ht","LinearGradientBrushAppearanceData:hu","GradientStopAppearanceData:hv","SolidBrushAppearanceData:hw","GeometryData:hx","GetPointsSettings:hy","EllipseGeometryData:hz","RectangleGeometryData:h0","LineGeometryData:h1","PathGeometryData:h2","PathFigureData:h3","SegmentData:h4","LineSegmentData:h5","PolylineSegmentData:h6","ArcSegmentData:h7","PolyBezierSegmentData:h8","BezierSegmentData:h9","LabelAppearanceData:ia","ShapeTags:ib","PointerTooltipVisualDataList:ic","MarkerVisualDataList:id","MarkerVisualData:ie","PointerTooltipVisualData:ig","RectangleVisualData:ih","PolygonVisualData:ii","PolyLineVisualData:ij","IFastItemsSource:ik","IFastItemColumn$1:il","IFastItemColumnPropertyName:im","FastItemsSourceEventArgs:io","FastItemsSourceEventAction:ip","IHasCategoryModePreference:iq","IHasCategoryAxis:ir","CategoryAxisBase:is","Axis:it","AxisView:iu","XamDataChart:iv","GridMode:iw","XamDataChartView:ix","FragmentBase:iy","HorizontalAnchoredCategorySeries:iz","AnchoredCategorySeries:i0","IIsCategoryBased:i1","CategoryMode:i2","ICategoryScaler:i3","IScaler:i4","ScalerParams:i5","IBucketizer:i6","IDetectsCollisions:i7","IHasSingleValueCategory:i8","IHasCategoryTrendline:i9","IHasTrendline:ja","TrendLineType:jb","IPreparesCategoryTrendline:jc","TrendResolutionParams:jd","AnchoredCategorySeriesView:je","CategorySeriesView:jf","ISupportsMarkers:jg","CategoryBucketCalculator:jh","ISortingAxis:ji","CategoryFrame:jj","Frame:jk","BrushUtil:jl","CategoryTrendLineManagerBase:jm","TrendLineManagerBase$1:jn","Clipper:jo","EdgeClipper:jp","LeftClipper:jq","BottomClipper:jr","RightClipper:js","TopClipper:jt","Flattener:ju","Stack$1:jv","ReverseArrayEnumerator$1:jw","SpiralTodo:jx","FlattenerSettings:jy","Func$4:jz","SortingTrendLineManager:j0","TrendFitCalculator:j1","LeastSquaresFit:j2","Numeric:j3","TrendAverageCalculator:j4","CategoryTrendLineManager:j5","AnchoredCategoryBucketCalculator:j6","CategoryDateTimeXAxis:j7","CategoryDateTimeXAxisView:j8","CategoryAxisBaseView:j9","TimeAxisDisplayType:ka","FastItemDateTimeColumn:kb","IFastItemColumnInternal:kc","FastItemColumn:kd","FastReflectionHelper:ke","AxisOrientation:kf","AxisLabelPanelBase:kg","AxisLabelPanelBaseView:kh","AxisLabelSettings:ki","AxisLabelsLocation:kj","PropertyUpdatedEventHandler:kk","PropertyUpdatedEventArgs:kl","PathRenderingInfo:km","LabelPosition:kn","NumericAxisBase:ko","NumericAxisBaseView:kp","NumericAxisRenderer:kq","AxisRendererBase:kr","ShouldRenderHandler:ks","ScaleValueHandler:kt","AxisRenderingParametersBase:ku","RangeInfo:kv","TickmarkValues:kw","TickmarkValuesInitializationParameters:kx","GetGroupCenterHandler:ky","GetUnscaledGroupCenterHandler:kz","RenderStripHandler:k0","RenderLineHandler:k1","ShouldRenderLinesHandler:k2","ShouldRenderContentHandler:k3","RenderAxisLineHandler:k4","DetermineCrossingValueHandler:k5","ShouldRenderLabelHandler:k6","GetLabelLocationHandler:k7","TransformToLabelValueHandler:k8","AxisLabelManager:k9","GetLabelForItemHandler:la","CreateRenderingParamsHandler:lb","SnapMajorValueHandler:lc","AdjustMajorValueHandler:ld","CategoryAxisRenderingParameters:le","LogarithmicTickmarkValues:lf","LogarithmicNumericSnapper:lg","Snapper:lh","LinearTickmarkValues:li","LinearNumericSnapper:lj","AxisRangeChangedEventArgs:lk","AxisRange:ll","IEquatable$1:lm","AutoRangeCalculator:ln","NumericYAxis:lo","StraightNumericAxisBase:lp","StraightNumericAxisBaseView:lq","NumericScaler:lr","NumericScaleMode:ls","LogarithmicScaler:lt","NumericYAxisView:lu","VerticalAxisLabelPanel:lv","VerticalAxisLabelPanelView:lw","TitleSettings:lx","NumericAxisRenderingParameters:ly","VerticalLogarithmicScaler:lz","VerticalLinearScaler:l0","LinearScaler:l1","NumericRadiusAxis:l2","NumericRadiusAxisView:l3","NumericAngleAxis:l4","IAngleScaler:l5","NumericAngleAxisView:l6","PolarAxisRenderingManager:l7","ViewportUtils:l8","PolarAxisRenderingParameters:l9","IPolarRadialRenderingParameters:ma","RadialAxisRenderingParameters:mb","AngleAxisLabelPanel:mc","AngleAxisLabelPanelView:md","Extensions:me","CategoryAngleAxis:mf","CategoryAngleAxisView:mg","CategoryAxisRenderer:mh","LinearCategorySnapper:mi","CategoryTickmarkValues:mj","RadialAxisLabelPanel:mk","HorizontalAxisLabelPanelBase:ml","HorizontalAxisLabelPanelBaseView:mm","RadialAxisLabelPanelView:mn","SmartAxisLabelPanel:mo","AxisExtentType:mp","SmartAxisLabelPanelView:mq","HorizontalAxisLabelPanel:mr","CoercionInfo:ms","SortedListView$1:mt","ArrayUtil:mu","CategoryLineRasterizer:mv","UnknownValuePlotting:mw","Action$5:mx","PenLineCap:my","CategorySeriesMarkerCollisionAvoidance:mz","CategoryFramePreparer:m0","CategoryFramePreparerBase:m1","FramePreparer:m2","ISupportsErrorBars:m3","DefaultSupportsMarkers:m4","DefaultProvidesViewport:m5","DefaultSupportsErrorBars:m6","PreparationParams:m7","CategoryYAxis:m8","CategoryYAxisView:m9","SyncSettings:na","NumericXAxis:nb","NumericXAxisView:nc","HorizontalLogarithmicScaler:nd","HorizontalLinearScaler:ne","ValuesHolder:nf","LineSeries:ng","LineSeriesView:nh","PathVisualData:ni","CategorySeriesRenderManager:nj","AssigningCategoryStyleEventArgs:nk","AssigningCategoryStyleEventArgsBase:nl","GetCategoryItemsHandler:nm","HighlightingInfo:nn","HighlightingState:no","AssigningCategoryMarkerStyleEventArgs:np","HighlightingManager:nq","SplineSeriesBase:nr","SplineSeriesBaseView:ns","SplineType:nt","CollisionAvoider:nu","SafeSortedReadOnlyDoubleCollection:nv","SafeReadOnlyDoubleCollection:nw","SafeEnumerable:nx","AreaSeries:ny","AreaSeriesView:nz","LegendTemplates:n0","PieChartBase:n1","PieChartBaseView:n2","PieChartViewManager:n3","PieChartVisualData:n4","PieSliceVisualDataList:n5","PieSliceVisualData:n6","PieSliceDataContext:n7","Slice:n8","SliceView:n9","PieLabel:oa","MouseButtonEventArgs:ob","FastItemsSource:oc","ColumnReference:od","FastItemObjectColumn:oe","FastItemIntColumn:of","LabelsPosition:og","LeaderLineType:oh","OthersCategoryType:oi","IndexCollection:oj","LegendBase:ok","LegendBaseView:ol","LegendBaseViewManager:om","GradientData:on","GradientStopData:oo","DataChartLegendMouseButtonEventArgs:op","DataChartMouseButtonEventArgs:oq","ChartLegendMouseEventArgs:or","ChartMouseEventArgs:os","DataChartLegendMouseButtonEventHandler:ot","DataChartLegendMouseEventHandler:ou","LegendVisualData:ov","LegendVisualDataList:ow","LegendItemVisualData:ox","FunnelSliceDataContext:oy","PieChartFormatLabelHandler:oz","SliceClickEventHandler:o0","SliceClickEventArgs:o1","ItemLegend:o2","ItemLegendView:o3","LegendItemInfo:o4","BubbleSeries:o5","ScatterBase:o6","ScatterBaseView:o7","MarkerManagerBase:o8","OwnedPoint:o9","MarkerManagerBucket:pa","ScatterTrendLineManager:pb","NumericMarkerManager:pc","CollisionAvoidanceType:pd","SmartPlacer:pe","ISmartPlaceable:pf","SmartPosition:pg","SmartPlaceableWrapper$1:ph","ScatterAxisInfoCache:pi","ScatterErrorBarSettings:pj","ErrorBarSettingsBase:pk","EnableErrorBars:pl","ErrorBarCalculatorReference:pm","IErrorBarCalculator:pn","ErrorBarCalculatorType:po","ScatterFrame:pp","ScatterFrameBase$1:pq","DictInterpolator$3:pr","Action$6:ps","SyncLink:pt","IFastItemsSourceProvider:pu","ChartCollection:pv","FastItemsSourceReference:pw","SyncManager:px","SyncLinkManager:py","ErrorBarsHelper:pz","BubbleSeriesView:p0","BubbleMarkerManager:p1","SizeScale:p2","BrushScale:p3","ScaleLegend:p4","ScaleLegendView:p5","CustomPaletteBrushScale:p6","BrushSelectionMode:p7","ValueBrushScale:p8","RingSeriesBase:p9","XamDoughnutChart:qa","RingCollection:qb","Ring:qc","RingControl:qd","RingControlView:qe","Arc:qf","ArcView:qg","ArcItem:qh","SliceItem:qi","Legend:qj","LegendView:qk","SplineFragmentBase:ql","StackedFragmentSeries:qm","StackedAreaSeries:qn","HorizontalStackedSeriesBase:qo","StackedSplineAreaSeries:qp","AreaFragment:qq","AreaFragmentView:qr","AreaFragmentBucketCalculator:qs","IStacked100Series:qt","SplineAreaFragment:qu","SplineAreaFragmentView:qv","StackedSeriesManager:qw","StackedSeriesCollection:qx","StackedSeriesView:qy","StackedBucketCalculator:qz","StackedLineSeries:q0","StackedSplineSeries:q1","StackedColumnSeries:q2","StackedColumnSeriesView:q3","StackedColumnBucketCalculator:q4","ColumnFragment:q5","ColumnFragmentView:q6","CategoryMarkerManager:q7","LineFragment:q8","LineFragmentView:q9","LineFragmentBucketCalculator:ra","StackedBarSeries:rb","VerticalStackedSeriesBase:rc","IBarSeries:rd","StackedBarSeriesView:re","StackedBarBucketCalculator:rf","BarFragment:rg","SplineFragment:rh","SplineFragmentView:ri","SplineFragmentBucketCalculator:rj","BarSeries:rk","VerticalAnchoredCategorySeries:rl","BarSeriesView:rm","BarTrendLineManager:rn","BarTrendFitCalculator:ro","BarBucketCalculator:rp","CategoryTransitionInMode:rq","BarFramePreparer:rr","DefaultCategoryTrendlineHost:rs","DefaultCategoryTrendlinePreparer:rt","DefaultSingleValueProvider:ru","SingleValuesHolder:rv","RingSeriesBaseView:rw","Nullable$1:rx","RingSeriesCollection:ry","SliceCollection:rz","XamDoughnutChartView:r0","Action$2:r1","DoughnutChartVisualData:r2","RingSeriesVisualDataList:r3","RingSeriesVisualData:r4","RingVisualDataList:r5","RingVisualData:r6","ArcVisualDataList:r7","ArcVisualData:r8","SliceVisualDataList:r9","SliceVisualData:sa","DoughnutChartLabelVisualData:sb","HoleDimensionsChangedEventHandler:sc","HoleDimensionsChangedEventArgs:sd","XamFunnelChart:se","IItemProvider:sf","MessageHandler:sg","MessageHandlerEventHandler:sh","Message:si","ServiceProvider:sj","MessageChannel:sk","MessageEventHandler:sl","Queue$1:sm","XamFunnelConnector:sn","XamFunnelController:so","SliceInfoList:sp","SliceInfo:sq","SliceAppearance:sr","PointList:ss","FunnelSliceVisualData:st","SliceInfoUnaryComparison:su","Bezier:sv","BezierPoint:sw","BezierOp:sx","BezierPointComparison:sy","DoubleColumn:sz","ObjectColumn:s0","XamFunnelView:s1","IOuterLabelWidthDecider:s2","IFunnelLabelSizeDecider:s3","MouseLeaveMessage:s4","InteractionMessage:s5","MouseMoveMessage:s6","MouseButtonMessage:s7","MouseButtonAction:s8","MouseButtonType:s9","SetAreaSizeMessage:ta","RenderingMessage:tb","RenderSliceMessage:tc","RenderOuterLabelMessage:td","TooltipValueChangedMessage:te","TooltipUpdateMessage:tf","FunnelDataContext:tg","PropertyChangedMessage:th","ConfigurationMessage:ti","ClearMessage:tj","ClearTooltipMessage:tk","ContainerSizeChangedMessage:tl","ViewportChangedMessage:tm","ViewPropertyChangedMessage:tn","OuterLabelAlignment:to","FunnelSliceDisplay:tp","SliceSelectionManager:tq","DataUpdatedMessage:tr","ItemsSourceAction:ts","FunnelFrame:tt","UserSelectedItemsChangedMessage:tu","LabelSizeChangedMessage:tv","FrameRenderCompleteMessage:tw","IntColumn:tx","IntColumnComparison:ty","Convert:tz","SelectedItemsChangedMessage:t0","ModelUpdateMessage:t1","SliceClickedMessage:t2","FunnelSliceClickedEventHandler:t3","FunnelSliceClickedEventArgs:t4","FunnelChartVisualData:t5","FunnelSliceVisualDataList:t6","RingSeries:t7","WaterfallSeries:t8","WaterfallSeriesView:t9","FinancialSeries:ua","FinancialSeriesView:ub","FinancialBucketCalculator:uc","CategoryTransitionSourceFramePreparer:ud","TransitionInSpeedType:ue","FinancialCalculationDataSource:uf","CalculatedColumn:ug","FinancialEventArgs:uh","FinancialCalculationSupportingCalculations:ui","ColumnSupportingCalculation:uj","SupportingCalculation$1:uk","SupportingCalculationStrategy:ul","DataSourceSupportingCalculation:um","ProvideColumnValuesStrategy:un","AssigningCategoryStyleEventHandler:uo","FinancialValueList:up","FinancialEventHandler:uq","StepLineSeries:ur","StepLineSeriesView:us","StepAreaSeries:ut","StepAreaSeriesView:uu","RangeAreaSeries:uv","HorizontalRangeCategorySeries:uw","RangeCategorySeries:ux","IHasHighLowValueCategory:uy","RangeCategorySeriesView:uz","RangeCategoryBucketCalculator:u0","RangeCategoryFramePreparer:u1","DefaultHighLowValueProvider:u2","HighLowValuesHolder:u3","RangeValueList:u4","RangeAreaSeriesView:u5","NonCollisionAvoider:u6","AxisRangeChangedEventHandler:u7","DataChartAxisRangeChangedEventHandler:u8","ChartAxisRangeChangedEventArgs:u9","ChartVisualData:va","AxisVisualDataList:vb","SeriesVisualDataList:vc","ChartTitleVisualData:vd","VisualDataSerializer:ve","AxisVisualData:vf","AxisLabelVisualDataList:vg","AxisLabelVisualData:vh","RadialBase:vi","RadialBaseView:vj","RadialBucketCalculator:vk","SeriesRenderer$2:vl","SeriesRenderingArguments:vm","RadialFrame:vn","RadialAxes:vo","PolarBase:vp","PolarBaseView:vq","PolarTrendLineManager:vr","PolarLinePlanner:vs","AngleRadiusPair:vt","PolarAxisInfoCache:vu","PolarFrame:vv","PolarAxes:vw","AxisComponentsForView:vx","AxisComponentsFromView:vy","AxisFormatLabelHandler:vz","VisualExportHelper:v0","ContentInfo:v1","ChartContentManager:v2","ChartContentType:v3","RenderRequestedEventArgs:v4","AssigningCategoryMarkerStyleEventHandler:v5","SeriesComponentsForView:v6","StackedSeriesFramePreparer:v7","StackedSeriesCreatedEventHandler:v8","StackedSeriesCreatedEventArgs:v9","StackedSeriesVisualData:wa","LabelPanelArranger:wb","LabelPanelsArrangeState:wc","WindowResponse:wd","ViewerSurfaceUsage:we","SeriesViewerComponentsForView:wf","DataChartCursorEventHandler:wg","ChartCursorEventArgs:wh","DataChartMouseButtonEventHandler:wi","DataChartMouseEventHandler:wj","AnnotationLayer:wk","AnnotationLayerView:wl","RefreshCompletedEventHandler:wm","SeriesComponentsFromView:wn","EasingFunctions:wo","TrendCalculators:wp","CategoryXAxis:xi","CategoryXAxisView:xj","Stacked100BarBucketCalculator:ab8","Stacked100ColumnBucketCalculator:ab9","Stacked100AreaSeries:aca","Stacked100BarSeries:acb","Stacked100BarSeriesView:acc","Stacked100ColumnSeries:acd","Stacked100ColumnSeriesView:ace","Stacked100LineSeries:acf","Stacked100SplineAreaSeries:acg","Stacked100SplineSeries:ach","AbstractEnumerable:acl","AbstractEnumerator:acm","GenericEnumerable$1:acn","GenericEnumerator$1:aco"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compareSimple,$w=$.ig.util.tryParseNumber,$x=$.ig.util.tryParseNumber1,$y=$.ig.util.numberToString,$z=$.ig.util.numberToString1,$0=$.ig.util.parseNumber,$1=$.ig.util.compare,$2=$.ig.util.replace,$3=$.ig.util.stringFormat,$4=$.ig.util.stringFormat1,$5=$.ig.util.stringFormat2,$6=$.ig.util.stringCompare1,$7=$.ig.util.stringCompare2,$8=$.ig.util.stringCompare3,$9=$.ig.util.tryParseInt32_1,$aa=$.ig.util.tryParseInt32_2,$ab=$.ig.util.intToString1,$ac=$.ig.util.parseInt32_1,$ad=$.ig.util.parseInt32_2;$c("CategoryXAxis:xi","CategoryAxisBase",{ar:function(){return new $$t.xj(this)},et:function(a){$$t.$is.et.call(this,a);this.ib(a)},_ib:null,ib:function(a){if(arguments.length===1){this._ib=a;return a}else{return this._ib}},init:function(){this.ie=1;this.id=1;$$t.$is.init.call(this);this.g4(new $$t.b7(Number,0));this.y($$t.$xi.$type)},ie:0,ih:function(a){if(arguments.length===1){this.ie=a;return a}else{return this.ie}},id:0,ig:function(a){if(arguments.length===1){this.id=a;return a}else{return this.id}},ak:function(){if(this.useSmartAxis()){return new $$t.mo}else{return new $$t.mr}},getCategorySize:function(a,b){return b.width()/(this.he*a.width())},g9:function(a,b){var c=!$.ig.util.isNaN(this.gap())?$$t.$fn.c(this.gap(),0,1):0;var d=0;if(!$.ig.util.isNaN(this.overlap())){d=Math.min(this.overlap(),1)}else{d=0}var e=1-.5*c;var f=this.hh()==0?1:this.hh();var g=this.getCategorySize(a,b)*e/(f-(f-1)*d);return g},getGroupCenter:function(a,b,c){var d=.5;if(this.hh()>1){var e=!$.ig.util.isNaN(this.gap())?$$t.$fn.c(this.gap(),0,1):0;var f=0;if(!$.ig.util.isNaN(this.overlap())){f=Math.min(this.overlap(),1)}var g=1-.5*e;var h=g/(this.hh()-(this.hh()-1)*f);var i=(g-h)/(this.hh()-1);d=.25*e+.5*h+a*i}return this.getCategorySize(b,c)*d},scrollIntoView:function(a){var b=this.seriesViewer()!=null?this.seriesViewer().actualWindowRect():$$t.$a8.empty();var c=this.gk();var d=new $$t.a8(0,0,0,1,1);var e=new $$t.i5(d,d,this.isInverted());var f=!b.isEmpty()&&!c.isEmpty()&&this.gx()!=null?this.gx().indexOf(a):-1;var g=f>-1?this.getScaledValue(f,e):NaN;if(!$.ig.util.isNaN(g)&&this.seriesViewer().ce()){if(!$.ig.util.isNaN(g)){if(g<b.left()+.1*b.width()){g=g+.4*b.width();b.x(g-.5*b.width())}if(g>b.right()-.1*b.width()){g=g-.4*b.width();b.x(g-.5*b.width())}}this.seriesViewer().j3(b,false)}},getScaledValue:function(a,b){var c=this.categoryMode()==0?this.he-1:this.he;if(c<0){c=0}var d=c>=1?a/c:c==0?.5:NaN;if(this.bk()){d=1-d}return b.c.left()+b.c.width()*(d-b.d.left())/b.d.width()},getUnscaledValue:function(a,b){return this.getUnscaledValue2(a,b.d,b.c,this.categoryMode())},getUnscaledValue2:function(a,b,c,d){var e=b.left()+(a-c.left())*b.width()/c.width();if(this.bk()){e=1-e}var f=d==0?this.he-1:this.he;if(f<0){f=0}return e*f},e4:function(a){$$t.$is.e4.call(this,a);var b=this.seriesViewer()!=null?this.seriesViewer().actualWindowRect():$$t.$a8.empty();var c=this.gk();var d=new $$t.i5(b,c,this.isInverted());var e=this.as().ar();var f=this.as().au();var g=this.as().as();var h=this.as().at();var i=this.as().e();var j=this.as().f();var k=this.as().g();var l=this.gx();this.e8();this.ek(e);this.ek(f);this.ek(g);this.ek(h);this.b1().clear();this.b2().clear();this.g4().clear();this.as().am(this,b,c);if(b.isEmpty()||c.isEmpty()){this.a6().c(0)}if(this.a6().c()==0){this.as().s()}if(this.labelSettings()!=null){this.labelSettings().registerAxis(this)}if(this.itemsSource()==null||l==null||l.count()==0){this.a6().c(0);this.as().s();return}if(!b.isEmpty()&&!c.isEmpty()){var m=this.getUnscaledValue(c.left(),d);var n=this.getUnscaledValue(c.right(),d);if(this.isInverted()){m=Math.ceil(m);n=Math.floor(n)}else{m=Math.floor(m);n=Math.ceil(n)}var o=c.bottom();var p=o-c.top();if(this.crossingAxis()!=null){var q=$b($$t.$lo.$type,this.crossingAxis());if(q!=null){var r=new $$t.i5(b,c,q.isInverted());o=this.crossingValue();o=q.getScaledValue(o,r);p=o-c.top();if(o<c.top()){o=c.top()}else if(o>c.bottom()){o=c.bottom()}if(p<0){p=0}else if(p>c.height()){p=c.height()}}}this.er(e,o,c,i);this.as().ah(p);var s=Math.min(m,n);var t=Math.max(m,n);var u=new $$t.mi(1,s,t,c.width(),this.interval(),this.categoryMode());var v=Math.floor((s-0)/u.e());var w=Math.ceil((t-0)/u.e());if(!$.ig.util.isNaN(v)&&!$.ig.util.isNaN(w)){var x=$.ig.truncate(v);var y=$.ig.truncate(w);var z=this.getScaledValue(0+x*u.e(),d);this.as().ai(this.getScaledValue(u.e(),d));var aa=$.ig.truncate(Math.ceil(c.right()));var ab=$.ig.truncate(Math.floor(c.left()));for(var ac=x;ac<=y;++ac){var ad=this.getScaledValue(0+(ac+1)*u.e(),d);if(z<=c.right()){if(ac%2==0){this.fa(f,z,ad,c)}this.e9(g,z,c,j);this.g4().add(z);if(this.categoryMode()!=0&&this.hh()!=0&&this.bt()){for(var ae=0;ae<$.ig.truncate(u.e());ae++){for(var af=0;af<this.hh();af++){var ag=this.getGroupCenter(af,b,c);if(this.isInverted()){ag=-ag}var ah=this.getScaledValue(ae+ac*u.e(),d)+ag;this.e9(h,ah,c,k)}}}}var ai=z;if(this.categoryMode()!=0){var aj=this.getScaledValue(ac*u.e()+1,d);ai=(z+aj)/2}var ak=$.ig.truncate(Math.round(ai));if(ak>=ab&&ak<=aa){var al=0;if(u.e()>=1){al=ac*$.ig.truncate(Math.floor(u.e()))}else{if(ac*u.e()*2%2==0){al=$.ig.truncate(Math.floor(ac*u.e()))}else{al=-1}}if(l!=null&&al<l.count()&&al>=0){var am=l.item(al);var an=this.di(am);if(!$.ig.util.isNaN(ai)&&!Number.isInfinity(ai)&&an!=null){if(typeof an==="string"&&an.equals("")){}else{this.b1().add1(an);this.b2().add(new $$t.kn(ai))}}}}z=ad}}if((this.labelSettings()==null||this.labelSettings().visibility()==0)&&this.crossingAxis()!=null){if(this.labelSettings()!=null&&(this.labelSettings().location()==4||this.labelSettings().location()==5)){this.seriesViewer().hj()}}this.as().an(this.b1(),this.b2());this.h1()}},bw:function(){if(this.gx()==null){return false}var a=this.gx().count();if(a!=this.ig()){var b=new $$t.lk(1,1,this.ig(),a);this.ig(a);this.ey(b);return true}return false},interval:function(a){if(arguments.length===1){this.g($$t.$xi.intervalProperty,a);return a}else{return this.c($$t.$xi.intervalProperty)}},g0:function(a){if(a==null){return false}var b=this.av();if(b==null){return false}return b.synchronizeHorizontally()},ap:function(){return 0},$type:new $.ig.Type("CategoryXAxis",$$t.$is.$type)},true);$c("CategoryXAxisView:xj","CategoryAxisBaseView",{_a9:null,a9:function(a){if(arguments.length===1){this._a9=a;return a}else{return this._a9}},init:function(a){$$t.$j9.init.call(this,a);this.a9(a)},$type:new $.ig.Type("CategoryXAxisView",$$t.$j9.$type)},true);$c("Stacked100BarBucketCalculator:ab8","StackedBarBucketCalculator",{init:function(a){$$t.$rf.init.call(this,a)},getBucket:function(a){return $$t.$rf.getBucket.call(this,a)},getBucket1:function(a,b,c,d,e,f){var g=$b($$t.$rb.$type,this.b().cx());var h=[NaN,NaN,NaN];var i=$b($$t.$rg.$type,a);if(i==null||i.logicalSeriesLink()==null){return h}var j=a.valueColumn().item(c);var k=0;var l=0;var m=NaN;var n=NaN;var o=Number.NEGATIVE_INFINITY;var p=Number.POSITIVE_INFINITY;var q=Math.min(g.m4()!=null?g.m4().length:0,g.m3()!=null?g.m3().length:0);var r=c*this.c;var s=Math.min(r+this.c-1,q-1);for(var t=r;t<=s;++t){j=a.valueColumn().item(t);k=Math.abs(g.m4()[t])+g.m3()[t];if(j<l){p=Math.min(p,(i.logicalSeriesLink().ab().__inner[t]+j)/k*100);o=Math.max(o,i.logicalSeriesLink().ab().__inner[t]/k*100)}else{p=Math.min(p,i.logicalSeriesLink().aa().__inner[t]/k*100);o=Math.max(o,(i.logicalSeriesLink().aa().__inner[t]+j)/k*100)}if(!$.ig.util.isNaN(m)){if(!$.ig.util.isNaN(p)){m=Math.min(m,p);n=Math.max(n,p)}if(!$.ig.util.isNaN(o)){m=Math.min(m,o);n=Math.max(n,o)}}else{m=p;
n=o}}var u=new $$t.i5(d,e,g.xAxis().isInverted());h=[f.h.__inner[b-this.d][0],g.xAxis().getScaledValue(n,u),g.xAxis().getScaledValue(m,u)];return h},$type:new $.ig.Type("Stacked100BarBucketCalculator",$$t.$rf.$type)},true);$c("Stacked100ColumnBucketCalculator:ab9","StackedColumnBucketCalculator",{init:function(a){$$t.$q4.init.call(this,a)},getBucket:function(a){return $$t.$q4.getBucket.call(this,a)},getBucket1:function(a,b,c,d,e,f){var g=$b($$t.$g8.$type,this.b().cx());var h=[NaN,NaN,NaN];var i=$b($$t.$q5.$type,a);if(i==null||i.logicalSeriesLink()==null){return h}var j=a.valueColumn().item(c);var k=0;var l=NaN;var m=NaN;var n=Number.NEGATIVE_INFINITY;var o=Number.POSITIVE_INFINITY;var p=0;var q=Math.min(g.m4()!=null?g.m4().length:0,g.m3()!=null?g.m3().length:0);var r=c*this.c;var s=Math.min(r+this.c-1,q-1);for(var t=r;t<=s;++t){j=a.valueColumn().item(t);p=Math.abs(g.m4()[t])+g.m3()[t];if(j<k){o=Math.min(o,(i.logicalSeriesLink().ab().__inner[t]+j)/p*100);n=Math.max(n,i.logicalSeriesLink().ab().__inner[t]/p*100)}else{o=Math.min(o,i.logicalSeriesLink().aa().__inner[t]/p*100);n=Math.max(n,(i.logicalSeriesLink().aa().__inner[t]+j)/p*100)}if(!$.ig.util.isNaN(l)){if(!$.ig.util.isNaN(o)){l=Math.min(l,o);m=Math.max(m,o)}if(!$.ig.util.isNaN(n)){l=Math.min(l,n);m=Math.max(m,n)}}else{l=o;m=n}}var u=new $$t.i5(d,e,i.yAxis().isInverted());h=[f.h.__inner[b-this.d][0],i.yAxis().getScaledValue(m,u),i.yAxis().getScaledValue(l,u)];return h},$type:new $.ig.Type("Stacked100ColumnBucketCalculator",$$t.$q4.$type)},true);$c("Stacked100AreaSeries:aca","StackedAreaSeries",{init:function(){$$t.$qn.init.call(this);this.y($$t.$aca.$type)},z:function(){$$t.$qn.z.call(this);this.renderSeries(false)},nu:function(){$$t.$qn.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100AreaSeries",$$t.$qn.$type,[$$t.$qt.$type])},true);$c("Stacked100BarSeries:acb","StackedBarSeries",{init:function(){$$t.$rb.init.call(this);this.y($$t.$acb.$type)},z:function(){$$t.$rb.z.call(this);this.renderSeries(false)},av:function(){return new $$t.acc(this)},_og:null,og:function(a){if(arguments.length===1){this._og=a;return a}else{return this._og}},hd:function(a){$$t.$rb.hd.call(this,a);this.og(a)},m6:function(){return this.og()},nu:function(){$$t.$rb.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100BarSeries",$$t.$rb.$type,[$$t.$qt.$type])},true);$c("Stacked100BarSeriesView:acc","StackedBarSeriesView",{_da:null,da:function(a){if(arguments.length===1){this._da=a;return a}else{return this._da}},init:function(a){$$t.$re.init.call(this,a);this.da(a)},cw:function(){return new $$t.ab8(this)},$type:new $.ig.Type("Stacked100BarSeriesView",$$t.$re.$type)},true);$c("Stacked100ColumnSeries:acd","StackedColumnSeries",{init:function(){$$t.$q2.init.call(this);this.y($$t.$acd.$type)},z:function(){$$t.$q2.z.call(this);this.renderSeries(false)},av:function(){return new $$t.ace(this)},_og:null,og:function(a){if(arguments.length===1){this._og=a;return a}else{return this._og}},hd:function(a){$$t.$q2.hd.call(this,a);this.og(a)},m6:function(){return this.og()},nu:function(){$$t.$q2.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100ColumnSeries",$$t.$q2.$type,[$$t.$qt.$type])},true);$c("Stacked100ColumnSeriesView:ace","StackedColumnSeriesView",{_c9:null,c9:function(a){if(arguments.length===1){this._c9=a;return a}else{return this._c9}},init:function(a){$$t.$q3.init.call(this,a);this.c9(a)},cw:function(){return new $$t.ab9(this)},$type:new $.ig.Type("Stacked100ColumnSeriesView",$$t.$q3.$type)},true);$c("Stacked100LineSeries:acf","StackedLineSeries",{init:function(){$$t.$q0.init.call(this);this.y($$t.$acf.$type)},z:function(){$$t.$q0.z.call(this);this.renderSeries(false)},nu:function(){$$t.$q0.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100LineSeries",$$t.$q0.$type,[$$t.$qt.$type])},true);$c("Stacked100SplineAreaSeries:acg","StackedSplineAreaSeries",{init:function(){$$t.$qp.init.call(this);this.y($$t.$acg.$type)},z:function(){$$t.$qp.z.call(this);this.renderSeries(false)},nu:function(){$$t.$qp.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100SplineAreaSeries",$$t.$qp.$type,[$$t.$qt.$type])},true);$c("Stacked100SplineSeries:ach","StackedSplineSeries",{init:function(){$$t.$q1.init.call(this);this.y($$t.$ach.$type)},z:function(){$$t.$q1.z.call(this);this.renderSeries(false)},nu:function(){$$t.$q1.nu.call(this);if(this.bc()==null){return}var a=Number.POSITIVE_INFINITY;var b=Number.NEGATIVE_INFINITY;for(var c=0;c<this.bc().count();c++){var d=Math.abs(this.m4()[c])+this.m3()[c];if(d==0){a=Math.min(a,0);b=Math.max(b,0);continue}a=Math.min(a,this.m4()[c]/d*100);b=Math.max(b,this.m3()[c]/d*100)}this.nl(a);this.nk(b)},$type:new $.ig.Type("Stacked100SplineSeries",$$t.$q1.$type,[$$t.$qt.$type])},true);$$t.$xi.ii="Interval";$$t.$xi.intervalProperty=$$t.$bi.i("Interval",Number,$$t.$xi.$type,new $$t.bj(2,NaN,function(a,b){a.ex("Interval",b.d(),b.c());a.e3(false)}))})(jQuery);