import i18n from "../../../i18n";

const getProgressTitle = index => {
  switch (index) {
    case 0:
      return i18n('mind', 'progressRemove');
    case 1:
      return i18n('mind', 'progressStart');
    case 9:
      return i18n('mind', 'progressDone');
    default:
      return i18n('mind', 'progress') + (index - 1) + "/8";
  }
};

export const PROGRESSES = Array.from({ length: 10 }, (_, i) => {
  return {
    text: getProgressTitle(i),
    value: i
  };
});

export const PRIORITIES = [
  {
    text: i18n('mind', 'removePriority'),
    value: 0
  },
  ...Array.from({ length: 9 }, (_, i) => {
    return {
      text: `P${i + 1}`,
      value: i + 1
    };
  })
];

export const TEMPLATES = [
  {
    label: i18n('mind', 'template', 'default'),
    value: "default"
  },
  {
    label: i18n('mind', 'template', 'fileTree'),
    value: "filetree"
  },
  {
    label: i18n('mind', 'template', 'fishBone'),
    value: "fish-bone"
  },
  {
    label: i18n('mind', 'template', 'right'),
    value: "right"
  },
  {
    label: i18n('mind', 'template', 'structure'),
    value: "structure"
  },
  {
    label: i18n('mind', 'template', 'tianpan'),
    value: "tianpan"
  }
];

export const THEMES = [
  {
    label: i18n('mind', 'theme', 'default'),
    value: "classic",
    style: {
      color: "rgb(68, 51, 0)",
      background: " rgb(233, 223, 152)"
    }
  },
  {
    label: i18n('mind', 'theme', 'classicCompact'),
    value: "classic-compact",
    style: {
      color: "rgb(68, 51, 0)",
      background: " rgb(233, 223, 152)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshRed'),
    value: "fresh-red",
    style: {
      color: "white",
      background: " rgb(191, 115, 115)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshSoil'),
    value: "fresh-soil",
    style: {
      color: "white",
      background: "rgb(191, 147, 115)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshGreen'),
    value: "fresh-green",
    style: {
      color: "white",
      background: "rgb(115, 191, 118)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshBlue'),
    value: "fresh-blue",
    style: {
      color: "white",
      background: "rgb(115, 161, 191)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshPurple'),
    value: "fresh-purple",
    style: {
      color: "white",
      background: "rgb(123, 115, 191)"
    }
  },
  {
    label: i18n('mind', 'theme', 'freshPink'),
    value: "fresh-pink",
    style: {
      color: "white",
      background: "rgb(191, 115, 148)"
    }
  },
  {
    label: i18n('mind', 'theme', 'snow'),
    value: "snow",
    style: {
      color: "#fff",
      background: "rgb(164, 197, 192)"
    }
  },
  {
    label: i18n('mind', 'theme', 'fish'),
    value: "fish",
    style: {
      color: "#fff",
      background: "rgb(58, 65, 68)"
    }
  }
];

export const MIN_ZOOM = 10;
export const MAX_ZOOM = 200;
export const ZOOM_STEP = 15;
