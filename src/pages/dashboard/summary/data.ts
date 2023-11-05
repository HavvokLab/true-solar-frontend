export const summarySource = "https://truesolar.truecorp.co.th/k/s/solarcell/app/dashboards#/view/2870f870-03bc-11ec-85b4-0528c8bff145?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now%2Fd,to:now%2Fd))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!t,savedVis:(data:(aggs:!(),searchSource:(filter:!(),query:(language:kuery,query:''))),description:'',params:(controls:!((fieldName:area.keyword,id:'1629687046815',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Region,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:20,type:terms),parent:'',type:list)),pinFilters:!f,updateFiltersOnChange:!t,useTimeFilter:!t),title:'',type:input_control_vis,uiState:())),gridData:(h:4,i:'75c8ec72-7b13-4f75-84a2-cf025a36ec83',w:16,x:0,y:0),panelIndex:'75c8ec72-7b13-4f75-84a2-cf025a36ec83',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'4',params:(customBucket:(enabled:!t,id:'4-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Total,customMetric:(enabled:!t,id:'4-metric',params:(field:total_mwh),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'5',params:(customBucket:(enabled:!t,id:'5-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Year,customMetric:(enabled:!t,id:'5-metric',params:(field:year_mwh),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'6',params:(customBucket:(enabled:!t,id:'6-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Month,customMetric:(enabled:!t,id:'6-metric',params:(customLabel:'',field:month_mwh),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'7',params:(customBucket:(enabled:!t,id:'7-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Daily,customMetric:(enabled:!t,id:'7-metric',params:(field:daily_mwh),type:max)),schema:metric,type:sum_bucket)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,key:data_type.keyword,negate:!f,params:(query:PLANT),type:phrase),query:(match_phrase:(data_type.keyword:PLANT)))),index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!f,style:(),title:(),type:category)),detailedTooltip:!f,grid:(categoryLines:!f),labels:(show:!t),legendPosition:right,orderBucketsBySum:!f,palette:(name:kibana_palette,type:palette),radiusRatio:0,seriesParams:!((data:(id:'4',label:Total),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'5',label:Year),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'6',label:Month),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'7',label:Daily),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!f,truncate:100),name:RightAxis-1,position:right,scale:(mode:normal,type:log),show:!f,style:(),title:(text:'Ton%20CO2e'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:6,i:c820bc1f-a1d9-4d33-aade-31bfcc5889b6,w:24,x:16,y:0),panelIndex:c820bc1f-a1d9-4d33-aade-31bfcc5889b6,title:'Performance(MWh)',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total%20Site'),schema:metric,type:count)),searchSource:(filter:!(),index:'5129d2b0-0ece-11ec-85b4-0528c8bff145',query:(language:kuery,query:''))),description:'',params:(addLegend:!f,addTooltip:!t,gauge:(autoExtend:!f,backStyle:Full,colorSchema:'Green%20to%20Red',colorsRange:!((from:0,to:3557)),gaugeColorMode:None,gaugeStyle:Full,gaugeType:Circle,invertColors:!f,labels:(color:black,show:!f),orientation:vertical,percentageMode:!f,scale:(color:'rgba(105,112,125,0.2)',labels:!f,show:!f,width:2),style:(bgColor:!f,bgFill:'rgba(105,112,125,0.2)',fontSize:60,labelColor:!f,subText:''),type:meter,useRanges:!f,verticalSplit:!f),isDisplayWarning:!f,type:gauge),title:'',type:goal,uiState:(vis:(defaultColors:('0%20-%203557':'rgb(0,104,55)'))))),gridData:(h:8,i:'499b4620-dcda-45a6-ad22-4d9812be736d',w:8,x:40,y:0),panelIndex:'499b4620-dcda-45a6-ad22-4d9812be736d',type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(description:'',layerListJSON:'%5B%7B%22sourceDescriptor%22:%7B%22type%22:%22EMS_TMS%22,%22id%22:null,%22isAutoSelect%22:true%7D,%22id%22:%223b4e6313-9dad-43a7-9dcf-6cf47c65d013%22,%22label%22:null,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:1,%22visible%22:true,%22style%22:%7B%22type%22:%22TILE%22%7D,%22type%22:%22VECTOR_TILE%22,%22areLabelsOnTop%22:false%7D,%7B%22sourceDescriptor%22:%7B%22indexPatternId%22:%22a94ff440-eabd-11eb-8a9a-9f0d6dfa553e%22,%22geoField%22:%22location%22,%22filterByMapBounds%22:true,%22scalingType%22:%22LIMIT%22,%22id%22:%2241eb0171-2819-470e-b562-e98b9c57d047%22,%22type%22:%22ES_SEARCH%22,%22applyGlobalQuery%22:true,%22applyGlobalTime%22:true,%22tooltipProperties%22:%5B%22site_id%22,%22message%22,%22vendor_type%22%5D,%22sortField%22:%22%22,%22sortOrder%22:%22desc%22,%22topHitsSplitField%22:%22%22,%22topHitsSize%22:1%7D,%22id%22:%2243988c9e-d1c7-4aef-bcf8-c1b03d64dd7f%22,%22label%22:%22Alarm%22,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:0.5,%22visible%22:true,%22style%22:%7B%22type%22:%22VECTOR%22,%22properties%22:%7B%22icon%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22value%22:%22marker%22%7D%7D,%22fillColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23E7664C%22%7D%7D,%22lineColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23000%22%7D%7D,%22lineWidth%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22size%22:1%7D%7D,%22iconSize%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22size%22:6%7D%7D,%22iconOrientation%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22orientation%22:0%7D%7D,%22labelText%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22value%22:%22%22%7D%7D,%22labelColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23000000%22%7D%7D,%22labelSize%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22size%22:14%7D%7D,%22labelBorderColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23FFFFFF%22%7D%7D,%22symbolizeAs%22:%7B%22options%22:%7B%22value%22:%22icon%22%7D%7D,%22labelBorderSize%22:%7B%22options%22:%7B%22size%22:%22SMALL%22%7D%7D%7D,%22isTimeAware%22:true%7D,%22type%22:%22VECTOR%22,%22joins%22:%5B%5D,%22query%22:%7B%22query%22:%22data_type.keyword%20:%20%5C%22ALARM%5C%22%20%22,%22language%22:%22kuery%22%7D%7D,%7B%22sourceDescriptor%22:%7B%22indexPatternId%22:%22a94ff440-eabd-11eb-8a9a-9f0d6dfa553e%22,%22geoField%22:%22location%22,%22requestType%22:%22point%22,%22id%22:%22c015372a-fe5e-4509-81ac-c895d341f994%22,%22type%22:%22ES_GEO_GRID%22,%22applyGlobalQuery%22:true,%22applyGlobalTime%22:true,%22metrics%22:%5B%7B%22label%22:%22Name%22,%22type%22:%22terms%22,%22field%22:%22name.keyword%22%7D,%7B%22label%22:%22Current%20Power%22,%22type%22:%22max%22,%22field%22:%22current_power%22%7D,%7B%22label%22:%22Daily%20Production%22,%22type%22:%22max%22,%22field%22:%22daily_production%22%7D,%7B%22label%22:%22Number%20of%20Plant%22,%22type%22:%22cardinality%22,%22field%22:%22name.keyword%22%7D,%7B%22label%22:%22Capacity%22,%22type%22:%22max%22,%22field%22:%22installed_capacity%22%7D,%7B%22label%22:%22Vendor%20Name%22,%22type%22:%22terms%22,%22field%22:%22vendor_type.keyword%22%7D%5D,%22resolution%22:%22COARSE%22%7D,%22style%22:%7B%22type%22:%22VECTOR%22,%22properties%22:%7B%22icon%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22value%22:%22marker%22%7D%7D,%22fillColor%22:%7B%22type%22:%22DYNAMIC%22,%22options%22:%7B%22color%22:%22Blues%22,%22colorCategory%22:%22palette_0%22,%22field%22:%7B%22name%22:%22max_of_current_power%22,%22origin%22:%22source%22%7D,%22fieldMetaOptions%22:%7B%22isEnabled%22:true,%22sigma%22:3%7D,%22type%22:%22ORDINAL%22,%22useCustomColorRamp%22:true,%22customColorRamp%22:%5B%7B%22stop%22:0,%22color%22:%22%23FF0000%22%7D,%7B%22stop%22:0.25,%22color%22:%22%23DA8B45%22%7D,%7B%22stop%22:0.5,%22color%22:%22%23D6BF57%22%7D,%7B%22stop%22:1,%22color%22:%22%2354B399%22%7D%5D%7D%7D,%22lineColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23FFF%22%7D%7D,%22lineWidth%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22size%22:0%7D%7D,%22iconSize%22:%7B%22type%22:%22DYNAMIC%22,%22options%22:%7B%22minSize%22:7,%22maxSize%22:32,%22fieldMetaOptions%22:%7B%22isEnabled%22:true,%22sigma%22:3%7D,%22field%22:%7B%22label%22:%22Plant%20Count%22,%22name%22:%22cardinality_of_name.keyword%22,%22origin%22:%22source%22,%22type%22:%22number%22,%22supportsAutoDomain%22:true%7D%7D%7D,%22iconOrientation%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22orientation%22:0%7D%7D,%22labelText%22:%7B%22type%22:%22DYNAMIC%22,%22options%22:%7B%22field%22:%7B%22label%22:%22Plant%20Count%22,%22name%22:%22cardinality_of_name.keyword%22,%22origin%22:%22source%22,%22type%22:%22number%22,%22supportsAutoDomain%22:true%7D%7D%7D,%22labelColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23000000%22%7D%7D,%22labelSize%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22size%22:14%7D%7D,%22labelBorderColor%22:%7B%22type%22:%22STATIC%22,%22options%22:%7B%22color%22:%22%23FFFFFF%22%7D%7D,%22symbolizeAs%22:%7B%22options%22:%7B%22value%22:%22circle%22%7D%7D,%22labelBorderSize%22:%7B%22options%22:%7B%22size%22:%22SMALL%22%7D%7D%7D,%22isTimeAware%22:true%7D,%22id%22:%22b12c9f8b-bbcd-4612-99ed-ebd4a71afddb%22,%22label%22:%22Plant%22,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:0.75,%22visible%22:true,%22type%22:%22VECTOR%22,%22joins%22:%5B%5D,%22query%22:%7B%22query%22:%22data_type.keyword%20:%20%5C%22PLANT%5C%22%20%22,%22language%22:%22kuery%22%7D%7D%5D',mapStateJSON:'%7B%22zoom%22:5.55,%22center%22:%7B%22lon%22:101.80877,%22lat%22:13.90683%7D,%22timeFilters%22:%7B%22from%22:%222021-08-04T17:00:00.000Z%22,%22to%22:%22now%22%7D,%22refreshConfig%22:%7B%22isPaused%22:true,%22interval%22:0%7D,%22query%22:%7B%22query%22:%22%22,%22language%22:%22kuery%22%7D,%22filters%22:%5B%5D,%22settings%22:%7B%22autoFitToDataBounds%22:false,%22backgroundColor%22:%22%23ffffff%22,%22disableInteractive%22:false,%22disableTooltipControl%22:false,%22hideToolbarOverlay%22:false,%22hideLayerControl%22:false,%22hideViewControl%22:false,%22initialLocation%22:%22LAST_SAVED_LOCATION%22,%22fixedLocation%22:%7B%22lat%22:0,%22lon%22:0,%22zoom%22:2%7D,%22browserLocation%22:%7B%22zoom%22:2%7D,%22maxZoom%22:24,%22minZoom%22:0,%22showScaleControl%22:false,%22showSpatialFilters%22:true,%22spatialFiltersAlpa%22:0.3,%22spatialFiltersFillColor%22:%22%23DA8B45%22,%22spatialFiltersLineColor%22:%22%23DA8B45%22%7D%7D',title:'',uiStateJSON:'%7B%22isLayerTOCOpen%22:true,%22openTOCDetails%22:%5B%5D%7D'),enhancements:(),hiddenLayers:!(),hidePanelTitles:!f,isLayerTOCOpen:!f,mapBuffer:(maxLat:24.864185,maxLon:109.67282999999999,minLat:2.2018050000000002,minLon:93.94471),mapCenter:(lat:13.6007,lon:101.80877,zoom:5.55),openTOCDetails:!(),timeRange:(from:now-30m,to:now)),gridData:(h:29,i:'38a660c6-ed97-4b24-a27b-96a1de17967e',w:16,x:0,y:4),panelIndex:'38a660c6-ed97-4b24-a27b-96a1de17967e',title:'Map%20Location',type:map,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'4',params:(customBucket:(enabled:!t,id:'4-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Total,customMetric:(enabled:!t,id:'4-metric',params:(field:co2_save_ton),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'5',params:(customBucket:(enabled:!t,id:'5-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Year,customMetric:(enabled:!t,id:'5-metric',params:(field:co2_save_year_ton),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'6',params:(customBucket:(enabled:!t,id:'6-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Month,customMetric:(enabled:!t,id:'6-metric',params:(customLabel:'',field:co2_save_month_ton),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'7',params:(customBucket:(enabled:!t,id:'7-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Daily,customMetric:(enabled:!t,id:'7-metric',params:(field:co2_save_daily_ton),type:max)),schema:metric,type:sum_bucket)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,key:data_type.keyword,negate:!f,params:(query:PLANT),type:phrase),query:(match_phrase:(data_type.keyword:PLANT)))),index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!f,style:(),title:(),type:category)),detailedTooltip:!f,grid:(categoryLines:!f),labels:(show:!t),legendPosition:right,orderBucketsBySum:!f,palette:(name:kibana_palette,type:palette),radiusRatio:0,seriesParams:!((data:(id:'4',label:Total),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'5',label:Year),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'6',label:Month),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'7',label:Daily),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!f,truncate:100),name:RightAxis-1,position:right,scale:(mode:normal,type:log),show:!f,style:(),title:(text:'Ton%20CO2e'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:6,i:'156f2dd6-3e9c-40e1-b329-ff03d2d81e1f',w:24,x:16,y:6),panelIndex:'156f2dd6-3e9c-40e1-b329-ff03d2d81e1f',title:'Ton%20CO2e',type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:'5129d2b0-0ece-11ec-85b4-0528c8bff145',name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:'5129d2b0-0ece-11ec-85b4-0528c8bff145',name:indexpattern-datasource-layer-25534ba0-f053-424a-94b1-e58d088b3ad6,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('25534ba0-f053-424a-94b1-e58d088b3ad6':(columnOrder:!(f3e73c1b-3db7-4c4d-9e46-91ae908df087,a9425d40-c297-446b-a7d5-d35771ac629c),columns:(a9425d40-c297-446b-a7d5-d35771ac629c:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:Records),f3e73c1b-3db7-4c4d-9e46-91ae908df087:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20plant_status.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:a9425d40-c297-446b-a7d5-d35771ac629c,type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:plant_status.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!(f3e73c1b-3db7-4c4d-9e46-91ae908df087),layerId:'25534ba0-f053-424a-94b1-e58d088b3ad6',legendDisplay:default,legendPosition:top,metric:a9425d40-c297-446b-a7d5-d35771ac629c,nestedLegend:!f,numberDisplay:value,percentDecimals:0)),palette:(name:status,type:palette),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:10,i:'8472e051-83f1-4b0c-8990-b44c3782c3f2',w:8,x:40,y:8),panelIndex:'8472e051-83f1-4b0c-8990-b44c3782c3f2',title:'Site%20Status',type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'4',params:(customBucket:(enabled:!t,id:'4-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:9998),type:terms),customLabel:Total,customMetric:(enabled:!t,id:'4-metric',params:(field:cost_saving),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'5',params:(customBucket:(enabled:!t,id:'5-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Year,customMetric:(enabled:!t,id:'5-metric',params:(field:cost_save_year),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'6',params:(customBucket:(enabled:!t,id:'6-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10002),type:terms),customLabel:Month,customMetric:(enabled:!t,id:'6-metric',params:(customLabel:'',field:cost_save_month),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'7',params:(customBucket:(enabled:!t,id:'7-bucket',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:Daily,customMetric:(enabled:!t,id:'7-metric',params:(field:cost_save_daily),type:max)),schema:metric,type:sum_bucket)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,key:data_type.keyword,negate:!f,params:(query:PLANT),type:phrase),query:(match_phrase:(data_type.keyword:PLANT)))),index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!f,style:(),title:(),type:category)),detailedTooltip:!f,grid:(categoryLines:!f),labels:(show:!t),legendPosition:right,orderBucketsBySum:!f,palette:(name:kibana_palette,type:palette),radiusRatio:0,seriesParams:!((data:(id:'4',label:Total),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'5',label:Year),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'6',label:Month),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1),(data:(id:'7',label:Daily),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!f,truncate:100),name:RightAxis-1,position:right,scale:(mode:normal,type:log),show:!f,style:(),title:(text:'Ton%20CO2e'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:6,i:'9378dc2e-438d-4b18-addc-f9f86d318f1a',w:24,x:16,y:12),panelIndex:'9378dc2e-438d-4b18-addc-f9f86d318f1a',title:'THB%20Saving',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customBucket:(enabled:!t,id:'1-bucket',params:(field:site_id.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:9999),type:terms),customLabel:'CO2e(Kg)',customMetric:(enabled:!t,id:'1-metric',params:(field:co2_save_daily),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'2',params:(customLabel:Time,drop_partials:!t,extended_bounds:(),field:'@timestamp',interval:'1h',min_doc_count:1,scaleMetricValues:!f,timeRange:(from:now%2Fd,to:now%2Fd),useNormalizedEsInterval:!t,used_interval:'1h'),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(customBucket:(enabled:!t,id:'3-bucket',params:(field:site_id.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:10000),type:terms),customLabel:'Saving(THB)',customMetric:(enabled:!t,id:'3-metric',params:(field:cost_save_daily),type:max)),schema:metric,type:sum_bucket),(enabled:!t,id:'4',params:(customBucket:(enabled:!t,id:'4-bucket',params:(field:site_id.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:9999),type:terms),customLabel:'Production(KWH)',customMetric:(enabled:!t,id:'4-metric',params:(field:daily_production),type:max)),schema:metric,type:sum_bucket)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,key:data_type.keyword,negate:!f,params:(query:PLANT),type:phrase),query:(match_phrase:(data_type.keyword:PLANT)))),index:a94ff440-eabd-11eb-8a9a-9f0d6dfa553e,query:(language:kuery,query:'data_type.keyword%20:%20%22PLANT%22%20'))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!f,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),detailedTooltip:!f,fittingFunction:linear,grid:(categoryLines:!f),labels:(),legendPosition:top,palette:(name:default,type:palette),radiusRatio:9,seriesParams:!((data:(id:'1',label:'CO2e(Kg)'),drawLinesBetweenPoints:!t,interpolate:cardinal,lineWidth:5,mode:normal,show:!t,showCircles:!f,type:line,valueAxis:ValueAxis-1),(data:(id:'3',label:'Saving(THB)'),drawLinesBetweenPoints:!t,interpolate:cardinal,lineWidth:5,mode:normal,show:!t,showCircles:!f,type:line,valueAxis:ValueAxis-1),(data:(id:'4',label:'Production(KWH)'),drawLinesBetweenPoints:!t,interpolate:cardinal,lineWidth:5,mode:normal,show:!t,showCircles:!f,type:line,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:RightAxis-1,position:right,scale:(boundsMargin:10000,defaultYExtents:!t,mode:normal,setYExtents:!f,type:linear),show:!f,style:(),title:(text:''),type:value))),title:'',type:line,uiState:())),gridData:(h:15,i:'78bedb21-5780-472a-a2ca-e86c5c3c7209',w:32,x:16,y:18),panelIndex:'78bedb21-5780-472a-a2ca-e86c5c3c7209',type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:Summary,viewMode:view)&show-time-filter=true"