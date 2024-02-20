export const monthlyProductionSource = "https://truesolar.truecorp.co.th/k/s/solarcell/app/dashboards#/view/06517410-4a4e-11ee-9dd6-03f1b24ba996?embed=true&_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:0),time:(from:'2024-01-31T17:00:00.000Z',to:'2024-02-29T16:59:59.999Z'))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!(),searchSource:(filter:!(),query:(language:kuery,query:''))),description:'',params:(controls:!((fieldName:owner.keyword,id:'1701090166887',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Owner,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5,type:terms),parent:'',type:list),(fieldName:vendor_type.keyword,id:'1698561356851',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Vendor,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5000,type:terms),parent:'',type:list),(fieldName:area.keyword,id:'1698561398331',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Region,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5002,type:terms),parent:'1698561356851',type:list),(fieldName:name.keyword,id:'1698561437267',indexPattern:'5129d2b0-0ece-11ec-85b4-0528c8bff145',label:Site,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5000,type:terms),parent:'1698561398331',type:list),(fieldName:criteria.keyword,id:'1698561534154',indexPattern:f38e5a70-6517-11ee-9dd6-03f1b24ba996,label:Criteria,options:(dynamicOptions:!f,multiselect:!t,order:desc,size:5002,type:terms),parent:'',type:list),(fieldName:production_to_target,id:'1701177414314',indexPattern:f38e5a70-6517-11ee-9dd6-03f1b24ba996,label:'Production%20to%20Target',options:(decimalPlaces:0,step:1),parent:'',type:range)),pinFilters:!f,updateFiltersOnChange:!f,useTimeFilter:!f),title:'',type:input_control_vis,uiState:())),gridData:(h:10,i:d88885d4-a9b2-4e19-8ac1-bb69f5927a06,w:48,x:0,y:0),panelIndex:d88885d4-a9b2-4e19-8ac1-bb69f5927a06,title:Filter,type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-layer-8d69ca3b-f6e9-40da-8f52-c12467e813c3,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('8d69ca3b-f6e9-40da-8f52-c12467e813c3':(columnOrder:!('5f508d4a-e9bc-4f59-b055-9463591b4e5d'),columns:('5f508d4a-e9bc-4f59-b055-9463591b4e5d':(customLabel:!t,dataType:number,isBucketed:!f,label:'%20',operationType:unique_count,scale:ratio,sourceField:name.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(accessor:'5f508d4a-e9bc-4f59-b055-9463591b4e5d',layerId:'8d69ca3b-f6e9-40da-8f52-c12467e813c3')),title:'',type:lens,visualizationType:lnsMetric),enhancements:(),hidePanelTitles:!f),gridData:(h:8,i:c582384b-9f36-409d-90a3-a55f13b619b0,w:12,x:0,y:10),panelIndex:c582384b-9f36-409d-90a3-a55f13b619b0,title:'Total%20Site',type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:segment,type:terms),(enabled:!t,id:'3',params:(filters:!((input:(language:kuery,query:'criteria.keyword%20:%22%3E%3D100%25%22%20'),label:%3E%3D100%25),(input:(language:kuery,query:'criteria.keyword%20:%22%3E%3D80%25%22%20'),label:%3E%3D80%25),(input:(language:kuery,query:'criteria.keyword%20:%22%3E%3D60%25%22%20'),label:%3E%3D60%25),(input:(language:kuery,query:'criteria.keyword%20:%22%3E%3D50%25%22%20'),label:%3E%3D50%25),(input:(language:kuery,query:'criteria.keyword%20:%22%3E%3D30%25%22%20'),label:%3E%3D30%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3C30%25%22%20'),label:%3C30%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22%3D0%25%22%20'),label:%3D0%25),(input:(language:kuery,query:'criteria.keyword%20:%20%22-%22%20'),label:'-'))),schema:group,type:filters)),searchSource:(filter:!(),index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),detailedTooltip:!t,grid:(categoryLines:!t,valueAxis:ValueAxis-1),labels:(show:!f),legendPosition:right,palette:(name:status,type:palette),radiusRatio:0,row:!t,seriesParams:!((data:(id:'1',label:'Max%20production_to_target'),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2354B399,show:!t,style:full,value:80,width:2),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(defaultYExtents:!f,max:200,min:0,mode:normal,setYExtents:!t,type:linear),show:!t,style:(),title:(text:'Max%20production_to_target'),type:value))),title:'',type:histogram,uiState:())),gridData:(h:19,i:'7cfe9ffe-b46e-43ef-bb73-294aca43f6e8',w:36,x:12,y:10),panelIndex:'7cfe9ffe-b46e-43ef-bb73-294aca43f6e8',title:'Monthly%20Production',type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-layer-e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1:(columnOrder:!('1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','659d9a4c-170e-4834-8236-fdf55e3c806c'),columns:('1bc0f37d-ed3e-49c9-8f95-0b45de80fe40':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20criteria.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'659d9a4c-170e-4834-8236-fdf55e3c806c',type:column),orderDirection:desc,otherBucket:!t,size:500),scale:ordinal,sourceField:criteria.keyword),'659d9a4c-170e-4834-8236-fdf55e3c806c':(dataType:number,filter:(language:kuery,query:''),isBucketed:!f,label:'Unique%20count%20of%20name.keyword',operationType:unique_count,scale:ratio,sourceField:name.keyword)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!('1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40','1bc0f37d-ed3e-49c9-8f95-0b45de80fe40'),layerId:e8f5bf4f-e84a-41d2-b92a-00847cf7a5c1,legendDisplay:show,metric:'659d9a4c-170e-4834-8236-fdf55e3c806c',nestedLegend:!f,numberDisplay:value,percentDecimals:1)),palette:(name:status,type:palette),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:(),hidePanelTitles:!f),gridData:(h:11,i:e5531752-65a5-4089-af12-3ffd58b2e1c8,w:12,x:0,y:18),panelIndex:e5531752-65a5-4089-af12-3ffd58b2e1c8,title:Criteria,type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(field:production_to_target),schema:metric,type:max),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:date,interval:M,min_doc_count:1,scaleMetricValues:!f,timeRange:(from:'2023-06-30T17:00:00.000Z',to:'2024-02-29T16:59:59.999Z'),useNormalizedEsInterval:!t,used_interval:'1M'),schema:segment,type:date_histogram)),searchSource:(filter:!(),index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),detailedTooltip:!t,grid:(categoryLines:!t,valueAxis:ValueAxis-1),labels:(show:!f),legendPosition:right,palette:(name:status,type:palette),radiusRatio:0,row:!t,seriesParams:!((data:(id:'1',label:'Max%20production_to_target'),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2354B399,show:!t,style:full,value:80,width:2),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(defaultYExtents:!f,max:400,min:0,mode:normal,setYExtents:!t,type:linear),show:!t,style:(),title:(text:'Max%20production_to_target'),type:value))),title:'',type:histogram,uiState:()),timeRange:(from:'2023-07-31T17:00:00.000Z',to:'2024-02-29T16:59:59.999Z')),gridData:(h:19,i:'13698f9e-b8c7-49d1-9853-dc5b6e1acc77',w:48,x:0,y:29),panelIndex:'13698f9e-b8c7-49d1-9853-dc5b6e1acc77',title:'Monthly%20Production',type:visualization,version:'7.13.4'),(embeddableConfig:(attributes:(references:!((id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f38e5a70-6517-11ee-9dd6-03f1b24ba996,name:indexpattern-datasource-layer-c8e13967-5cfd-4fae-8a75-7afb58d7622f,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(c8e13967-5cfd-4fae-8a75-7afb58d7622f:(columnOrder:!('72cfdf49-56fe-48d3-882b-c232b4d3790c','787c38ca-4ea1-4bab-a209-0b7a8865d45d','98d19840-ffbb-4ede-aebd-73236ff588a8'),columns:('72cfdf49-56fe-48d3-882b-c232b4d3790c':(customLabel:!t,dataType:date,isBucketed:!t,label:Month,operationType:date_histogram,params:(interval:'1M'),scale:interval,sourceField:date),'787c38ca-4ea1-4bab-a209-0b7a8865d45d':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20name.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'98d19840-ffbb-4ede-aebd-73236ff588a8',type:column),orderDirection:desc,otherBucket:!t,size:1000),scale:ordinal,sourceField:name.keyword),'98d19840-ffbb-4ede-aebd-73236ff588a8':(customLabel:!t,dataType:number,isBucketed:!f,label:production_to_target,operationType:max,scale:ratio,sourceField:production_to_target)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(columns:!((columnId:'72cfdf49-56fe-48d3-882b-c232b4d3790c',isTransposed:!t),(columnId:'787c38ca-4ea1-4bab-a209-0b7a8865d45d',isTransposed:!f),(columnId:'98d19840-ffbb-4ede-aebd-73236ff588a8',isTransposed:!f)),layerId:c8e13967-5cfd-4fae-8a75-7afb58d7622f)),title:'',type:lens,visualizationType:lnsDatatable),enhancements:(),timeRange:(from:'2023-07-31T17:00:00.000Z',to:'2024-02-29T16:59:59.999Z')),gridData:(h:15,i:'20edd459-8f6a-4e74-99b5-2ea6655e7b6b',w:48,x:0,y:48),panelIndex:'20edd459-8f6a-4e74-99b5-2ea6655e7b6b',type:lens,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'12',params:(customLabel:Month,field:month,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'13',params:(customLabel:Owner,field:owner.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'2',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Name,field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'6',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:'Monthly%20Production',field:monthly_production,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!f,id:'10',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D100%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D100%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D80%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D80%25)))),index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(sort:(columnIndex:11,direction:desc)))))),gridData:(h:15,i:'9ab3fd47-5023-431c-9350-3ac4d395f28b',w:24,x:24,y:63),panelIndex:'9ab3fd47-5023-431c-9350-3ac4d395f28b',title:'Criteria%20%3C80%25',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'12',params:(customLabel:Month,field:month,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'13',params:(customLabel:Owner,field:owner.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'2',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Name,field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'6',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:'Monthly%20Production',field:monthly_production,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!f,id:'10',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms)),searchSource:(filter:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:'-'),type:phrase),query:(match_phrase:(criteria.keyword:'-'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3C50%25),type:phrase),query:(match_phrase:(criteria.keyword:%3C50%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D50%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D50%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D60%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D60%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3E%3D30%25),type:phrase),query:(match_phrase:(criteria.keyword:%3E%3D30%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3C30%25),type:phrase),query:(match_phrase:(criteria.keyword:%3C30%25))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,key:criteria.keyword,negate:!t,params:(query:%3D0%25),type:phrase),query:(match_phrase:(criteria.keyword:%3D0%25)))),index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(colWidth:!((colIndex:11,width:109.41666666666667)),sort:(columnIndex:11,direction:desc)))))),gridData:(h:15,i:'89798448-61c5-455e-a6a7-95d018e82d9e',w:24,x:0,y:63),panelIndex:'89798448-61c5-455e-a6a7-95d018e82d9e',title:'Criteria%20%3E%3D80%25',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,savedVis:(data:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Production%20To%20Target',field:production_to_target),schema:metric,type:max),(enabled:!t,id:'12',params:(customLabel:Month,field:month,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'13',params:(customLabel:Owner,field:owner.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'2',params:(customLabel:Vendor,field:vendor_type.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:Area,field:area.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Name,field:name.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'5',params:(customLabel:Lat,field:lat,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'6',params:(customLabel:Lon,field:lng,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'7',params:(customLabel:'Installed%20Capacity',field:installed_capacity,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:bucket,type:terms),(enabled:!t,id:'9',params:(customLabel:Target,field:target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'8',params:(customLabel:'Monthly%20Production',field:monthly_production,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!f,id:'10',params:(customLabel:'Production%20To%20Target',field:production_to_target,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms),(enabled:!t,id:'11',params:(customLabel:Criteria,field:criteria.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5000),schema:bucket,type:terms)),searchSource:(filter:!(),index:f38e5a70-6517-11ee-9dd6-03f1b24ba996,query:(language:kuery,query:''))),description:'',params:(perPage:10,percentageCol:'',showMetricsAtAllLevels:!f,showPartialRows:!f,showToolbar:!t,showTotal:!f,totalFunc:sum),title:'',type:table,uiState:(vis:(params:(sort:(columnIndex:11,direction:desc)))))),gridData:(h:15,i:'9ea47232-b33a-43a4-990e-189ef78ce770',w:48,x:0,y:78),panelIndex:'9ea47232-b33a-43a4-990e-189ef78ce770',title:Data,type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'Monthly%20Production%20Performance',viewMode:edit)&show-top-menu=true&show-query-input=true&show-time-filter=true"