export const dailyProductionSource = "https://truesolar.truecorp.co.th/k/s/solarcell/app/dashboards#/view/6fd1afe0-7cb2-11ee-9dd6-03f1b24ba996?embed=true&_g=(filters:!())&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!(),searchSource:(filter:!(),query:(language:kuery,query:''))),description:'',params:(controls:!((fieldName:owner,id:'1701130653161',indexPattern:c2208b70-6517-11ee-9dd6-03f1b24ba996,label:Owner,options:(dynamicOptions:!f,multiselect:!t,order:desc,size:5,type:terms),parent:'',type:list),(fieldName:vendor_type.keyword,id:'1699368234202',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Vendor,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5000,type:terms),parent:'',type:list),(fieldName:area.keyword,id:'1699368297791',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Region,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:4998,type:terms),parent:'1699368234202',type:list),(fieldName:name.keyword,id:'1699368322672',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Site,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:4998,type:terms),parent:'1699368297791',type:list),(fieldName:criteria.keyword,id:'1699368429094',indexPattern:c2208b70-6517-11ee-9dd6-03f1b24ba996,label:Criteria,options:(dynamicOptions:!f,multiselect:!t,order:desc,size:5000,type:terms),parent:'',type:list),(fieldName:production_to_target,id:'1701595080661',indexPattern:c2208b70-6517-11ee-9dd6-03f1b24ba996,label:'Production%20to%20Target',options:(decimalPlaces:0,step:1),parent:'',type:range)),pinFilters:!f,updateFiltersOnChange:!f,useTimeFilter:!f),title:'',type:input_control_vis,uiState:())),gridData:(h:10,i:'5991e4b2-3fae-47dc-bcfa-da3b54c1709a',w:48,x:0,y:0),panelIndex:'5991e4b2-3fae-47dc-bcfa-da3b54c1709a',title:Filter,type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:c2208b70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:c2208b70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-layer-8d69ca3b-f6e9-40da-8f52-c12467e813c3,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('8d69ca3b-f6e9-40da-8f52-c12467e813c3':(columnOrder:!(afef5ae1-121e-4df5-a35a-587a82a62e4d),columns:(afef5ae1-121e-4df5-a35a-587a82a62e4d:(customLabel:!t,dataType:number,isBucketed:!f,label:'%20',operationType:unique_count,scale:ratio,sourceField:site_name.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(accessor:afef5ae1-121e-4df5-a35a-587a82a62e4d,layerId:'8d69ca3b-f6e9-40da-8f52-c12467e813c3')),title:'',type:lens,visualizationType:lnsMetric),enhancements:(),hidePanelTitles:!f),gridData:(h:8,i:c582384b-9f36-409d-90a3-a55f13b619b0,w:12,x:0,y:10),panelIndex:c582384b-9f36-409d-90a3-a55f13b619b0,title:'Total%20Site',type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(field:site_name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:segment,type:terms),(enabled:!t,id:'3',params:(filters:!((input:(language:kuery,query:'criteria.keyword%20:%20%22%3E%3D100%25%22%20'),label:%3E%3D100),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3E%3D80%25%22%20'),label:%3E%3D80%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3E%3D60%25%22%20'),label:%3E%3D60%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3E%3D50%25%22%20'),label:%3E%3D50%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3E%3D30%25%22%20'),label:%3E%3D30%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3C30%25%22%20'),label:%3C30%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3D0%25%22%20'),label:%3D0%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22-%22%20'),label:'-'))),schema:group,type:filters),(enabled:!t,id:'4',params:(field:day,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:split,type:terms)),searchSource:(filter:!(),index:c2208b70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),detailedTooltip:!t,grid:(categoryLines:!f,valueAxis:ValueAxis-1),labels:(show:!f),legendPosition:right,palette:(name:status,type:palette),radiusRatio:0,row:!t,seriesParams:!((data:(id:'1',label:'Max%20production_to_target'),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2354B399,show:!t,style:full,value:80,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(defaultYExtents:!f,max:200,mode:normal,setYExtents:!t,type:linear),show:!t,style:(),title:(text:'Max%20production_to_target'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:19,i:d458da28-3bb3-4292-a98b-36d5309efbec,w:36,x:12,y:10),panelIndex:d458da28-3bb3-4292-a98b-36d5309efbec,title:'Daily%20Production',type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:c2208b70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:c2208b70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-layer-e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1:(columnOrder:!(b618d3bb-dec4-4c3b-9799-b4a016b387ec,'1edd2d09-f1d0-4521-9340-0b98bd7e00a6'),columns:('1edd2d09-f1d0-4521-9340-0b98bd7e00a6':(dataType:number,isBucketed:!f,label:'Unique%20count%20of%20site_name.keyword',operationType:unique_count,scale:ratio,sourceField:site_name.keyword),b618d3bb-dec4-4c3b-9799-b4a016b387ec:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20criteria.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'1edd2d09-f1d0-4521-9340-0b98bd7e00a6',type:column),orderDirection:desc,otherBucket:!t,size:50),scale:ordinal,sourceField:criteria.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!(b618d3bb-dec4-4c3b-9799-b4a016b387ec,b618d3bb-dec4-4c3b-9799-b4a016b387ec),layerId:e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1,legendDisplay:show,metric:'1edd2d09-f1d0-4521-9340-0b98bd7e00a6',nestedLegend:!f,numberDisplay:value,percentDecimals:1)),palette:(name:status,type:palette),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:11,i:e5531752-65a5-4089-af12-3ffd58b2e1c8,w:12,x:0,y:18),panelIndex:e5531752-65a5-4089-af12-3ffd58b2e1c8,title:Criteria,type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(field:site_name.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:date,interval:d,min_doc_count:1,scaleMetricValues:!f,timeRange:(from:now-4d%2Fd,to:now),useNormalizedEsInterval:!t,used_interval:'1d'),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:group,type:terms)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:'-'),type:phrase),query:(match_phrase:(criteria.keyword:'-')))),index:c2208b70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),detailedTooltip:!t,grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,palette:(name:default,type:palette),radiusRatio:0,seriesParams:!((data:(id:'1',label:'Unique%20count%20of%20site_name.keyword'),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Unique%20count%20of%20site_name.keyword'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:15,i:'120069f5-3ddd-4fc4-9f31-2f9617c740e4',w:48,x:0,y:29),panelIndex:'120069f5-3ddd-4fc4-9f31-2f9617c740e4',title:'Criteria%20per%20Day',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(customLabel:Date,field:day,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'12',params:(customLabel:Owner,field:owner2,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Site,field:site_name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'10',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'13',params:(customLabel:'Daily%20Production',field:daily_production,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!f,id:'6',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D60%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D60%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D50%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D50%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3C50%25),type:phrase),query:(match_phrase:(criteria.keyword:%3C50%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D30%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D30%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3C30%25),type:phrase),query:(match_phrase:(criteria.keyword:%3C30%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3D0%25),type:phrase),query:(match_phrase:(criteria.keyword:%3D0%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:'-'),type:phrase),query:(match_phrase:(criteria.keyword:'-')))),index:c2208b70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(sort:(columnIndex:11,direction:desc))))),vis:(params:(colWidth:!((colIndex:7,width:90))))),gridData:(h:15,i:'7cdf203e-32df-45bd-ab37-bfe4d877e149',w:24,x:0,y:44),panelIndex:'7cdf203e-32df-45bd-ab37-bfe4d877e149',title:'Criteria%20%3E%3D80%25',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(customLabel:Date,field:day,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'12',params:(customLabel:Owner,field:owner2,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Site,field:site_name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'10',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!f,id:'6',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D100%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D100%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c2208b70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D80%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D80%25)))),index:c2208b70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(sort:(columnIndex:10,direction:desc)))))),gridData:(h:15,i:a600dd21-0efc-4b4f-9eac-be3742006976,w:24,x:24,y:44),panelIndex:a600dd21-0efc-4b4f-9eac-be3742006976,title:'Criteria%20%3C80%25',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(customLabel:Date,field:day,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'12',params:(customLabel:Owner,field:owner2,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Site,field:site_name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'10',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!f,id:'6',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms)),searchSource:(filter:!(),index:c2208b70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(sort:(columnIndex:10,direction:desc)))))),gridData:(h:15,i:'3acfb96e-13c8-42d8-859a-f1b09be66de9',w:48,x:0,y:59),panelIndex:'3acfb96e-13c8-42d8-859a-f1b09be66de9',title:Data,type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'Daily%20Production%20Performance',viewMode:view)&show-top-menu=true&show-query-input=true&show-time-filter=true"