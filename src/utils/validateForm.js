const rule = {
  day: {
    min: 0,
  },
  percentage: {
    min: 0.0,
    max: 100.0,
  },
  decimal: {
    min: 0.0,
  },
  hour: {
    min: 1,
    max: 24,
  },
  efficiencyFactor: {
    min: 0,
    max: 1,
  },
};

export const validateNumber = (value) => {
  if (value && value > rule.day.min) {
    return "";
  } else {
    return `This field value must be greater than ${rule.day.min}.`;
  }
};

export const validatePercentage = (value) => {
  if (value && value >= rule.percentage.min && value <= rule.percentage.max) {
    return "";
  } else {
    return `This field value must be between ${rule.percentage.min}% and ${rule.percentage.max}%.`;
  }
};

export const validateDecimal = (value) => {
  if (value && value >= rule.decimal.min) {
    return "";
  } else {
    return `This field value must be between greater than or equal to ${rule.decimal.min}.`;
  }
};

export const validateHour = (value) => {
  if (value && value >= rule.hour.min && value <= rule.hour.max) {
    return "";
  } else {
    return `This field value must be between ${rule.hour.min} hour and ${rule.hour.max} hours.`;
  }
};

export const validateEfficiencyFactor = (value) => {
  if (
    value &&
    value >= rule.efficiencyFactor.min &&
    value <= rule.efficiencyFactor.max
  ) {
    return "";
  } else {
    return `This field value must be between ${rule.efficiencyFactor.min} and ${rule.efficiencyFactor.max}.`;
  }
};
