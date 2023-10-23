import { makeStyles } from "@material-ui/core/styles";

import AppLayout from "../layout/AppLayout";
import Paper from "../components/Paper";

const useStyles = makeStyles((theme) => ({
  iframe: {
    width: "100%",
    height: "100vh",
    border: "none",
  },
}));

const AlarmDashboard = () => {
  const classes = useStyles();

  return (
    <AppLayout>
      <Paper title="Report Dashboard">
        <iframe
          // height="1080"
          // width="1920"
          className={classes.iframe}
          title="Report Dashboard"
          src="https://truesolar.truecorp.co.th/k/s/solarcell/app/dashboards#/view/016d91c0-0560-11ec-85b4-0528c8bff145?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now%2Fd,to:now%2Fd))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:21,i:'6da85a2b-1ef2-422a-8524-c50a32d046b1',w:48,x:0,y:0),id:a8dd3330-2d82-11ec-85b4-0528c8bff145,panelIndex:'6da85a2b-1ef2-422a-8524-c50a32d046b1',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:31,i:a9fe1f1f-a267-4b4a-99aa-820300101a0a,w:48,x:0,y:21),id:'645795b0-2d83-11ec-85b4-0528c8bff145',panelIndex:a9fe1f1f-a267-4b4a-99aa-820300101a0a,type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:25,i:'75e41c1e-4d24-4285-bf8f-24120c2dc62f',w:24,x:0,y:52),id:'6a8ca290-2d83-11ec-85b4-0528c8bff145',panelIndex:'75e41c1e-4d24-4285-bf8f-24120c2dc62f',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:25,i:'8d5ec633-cff2-4338-bdac-22dbab70f50c',w:24,x:24,y:52),id:'711c79a0-2d83-11ec-85b4-0528c8bff145',panelIndex:'8d5ec633-cff2-4338-bdac-22dbab70f50c',type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:Report,viewMode:view)&show-time-filter=true"
        />
      </Paper>
    </AppLayout>
  );
};

export default AlarmDashboard;
