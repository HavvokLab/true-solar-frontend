import AppLayout from "../layout/AppLayout";
import Paper from "../components/Paper";
import ConfigAlarmForm from "../components/ConfigAlarmForm";

const ConfigPerformanceAlarm = (props) => {
  return (
    <AppLayout>
      <Paper title="Performance Alarm Configuration">
        <ConfigAlarmForm {...props} />
      </Paper>
    </AppLayout>
  );
};

export default ConfigPerformanceAlarm;
