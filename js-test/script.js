// Given these data

const x = {
  10112021: "1.72",
  11112021: "3.18",
  12112021: "3.15",
  13112021: "4.88",
  14112021: "3.00",
  15112021: "3.43",
  16112021: "1.38",
  17112021: "1.44",
  18112021: "4.22",
  19112021: "2.50",
  20112021: "2.91",
  21112021: "3.83",
  22112021: "4.30",
  23112021: "2.14",
  24112021: "4.19",
  25112021: "2.03",
  26112021: "4.98",
  27112021: "0.06",
  28112021: "0.92",
  29112021: "3.38",
  30112021: "2.54",
  31112021: "0.88",
  "01112021": "4.19",
  "02112021": "2.98",
  "03112021": "4.70",
  "04112021": "3.86",
  "05112021": "2.72",
  "06112021": "0.49",
  "07112021": "0.85",
  "08112021": "1.44",
  "09112021": "1.73",
};

const y = {
  10112021: "2.80",
  11112021: "4.51",
  12112021: "4.12",
  13112021: "1.59",
  14112021: "3.19",
  15112021: "4.70",
  16112021: "4.57",
  17112021: "4.33",
  18112021: "1.94",
  19112021: "4.32",
  20112021: "2.52",
  21112021: "1.49",
  22112021: "4.89",
  23112021: "4.69",
  24112021: "4.74",
  25112021: "1.49",
  26112021: "1.64",
  27112021: "2.70",
  28112021: "3.36",
  29112021: "4.73",
  30112021: "3.15",
  31112021: "4.97",
  "01112021": "0.68",
  "02112021": "1.80",
  "03112021": "4.58",
  "04112021": "1.43",
  "05112021": "4.96",
  "06112021": "2.55",
  "07112021": "2.40",
  "08112021": "1.35",
  "09112021": "4.54",
};

const dates = [
  {
    date: "15-11-2021",
    label: "Monday, 15 November",
  },
  {
    date: "16-11-2021",
    label: "Tuesday, 16 November",
  },
  {
    date: "17-11-2021",
    label: "Wednesday, 17 November",
  },
  {
    date: "18-11-2021",
    label: "Thursday, 18 November",
  },
  {
    date: "19-11-2021",
    label: "Friday, 19 November",
  },
  {
    date: "20-11-2021",
    label: "Saturday, 20 November",
  },
  {
    date: "21-11-2021",
    label: "Sunday, 21 November",
  },
];

// Objective
/* Makes the data looks like this */

/*
  [
   {
     date: '15-11-2021',
     data: {
       x: '3.43',
       y: '4.70',
     },
   },
   {
     date: '16-11-2021',
     data: {
       x: '1.38',
       y: '4.57',
     },
   },
   {
     date: '17-11-2021',
     data: {
       x: '1.44',
       y: '4.33',
     },
   },
   {
     date: '18-11-2021',
     data: {
       x: '4.22',
       y: '1.94',
     },
   },
   {
     date: '19-11-2021',
     data: {
       x: '2.50',
       y: '4.32',
     },
   },
   {
     date: '20-11-2021',
     data: {
       x: '2.91',
       y: '2.52',
     },
   },
   {
     date: '21-11-2021',
     data: {
       x: '3.83',
       y: '1.49',
     },
   },
  ]
  */

const newDates = dates.map((element) => {
  delete element.label;
  return {
    ...element,
    data: {
      x: x[element.date.replace(/-/g, "")],
      y: y[element.date.replace(/-/g, "")],
    },
  };
});

console.log(newDates);