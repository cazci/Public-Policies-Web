interface KeyElementValues {
  date: string
  value: number
}

interface LineElement {
  key: string
  values: Array<KeyElementValues>
}

interface DataSource extends Array<LineElement> {}

const basicData = [
  {
    date: '2020-03-09',
    value: 0
  },
  {
    date: '2020-03-10',
    value: 13
  },
  {
    date: '2020-03-11',
    value: 21
  },
  {
    date: '2020-03-12',
    value: 27
  },
  {
    date: '2020-03-13',
    value: 43
  },
  {
    date: '2020-03-14',
    value: 57
  },
  {
    date: '2020-03-15',
    value: 72
  },
  {
    date: '2020-03-16',
    value: 85
  },
  {
    date: '2020-03-17',
    value: 110
  },
  {
    date: '2020-03-18',
    value: 173
  },
  {
    date: '2020-03-19',
    value: 260
  },
  {
    date: '2020-03-20',
    value: 394
  },
  {
    date: '2020-03-21',
    value: 581
  },
  {
    date: '2020-03-22',
    value: 627
  },
  {
    date: '2020-03-23',
    value: 627
  }
]

export const dataSource: Array<{ key: string; values: Array<{ date: string; value: number }> }> = [
  {
    key: 'Upperbound',
    values: [
      ...basicData.map(d => {
        return { date: d.date, value: d.value += 40 }
      })
    ]
  },
  {
    key: 'Prediction',
    values: [
      ...basicData.map(d => {
        return { date: d.date, value: d.value -= 15 }
      })
    ]
  },
  {
    key: 'Lowerbound',
    values: [
      ...basicData.map(d => {
        return { date: d.date, value: d.value -= 30 }
      })
    ]
  }
]

//
const tempData = [
  {
    '': 0,
    p_infected: 0.1,
    p_infected_and_recovered: 0.1,
    p_infected_and_recovered_comm1: 0.03,
    p_infected_and_recovered_comm2: 0.11,
    p_infected_and_recovered_comm3: 0.16,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.16,
    time: 0
  },
  {
    '': 1,
    p_infected: 0.10666666666666667,
    p_infected_and_recovered: 0.10666666666666667,
    p_infected_and_recovered_comm1: 0.03,
    p_infected_and_recovered_comm2: 0.11,
    p_infected_and_recovered_comm3: 0.18,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.18,
    time: 1
  },
  {
    '': 2,
    p_infected: 0.13,
    p_infected_and_recovered: 0.13,
    p_infected_and_recovered_comm1: 0.09,
    p_infected_and_recovered_comm2: 0.12,
    p_infected_and_recovered_comm3: 0.18,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.12,
    p_infected_comm3: 0.18,
    time: 2
  },
  {
    '': 3,
    p_infected: 0.14,
    p_infected_and_recovered: 0.14,
    p_infected_and_recovered_comm1: 0.09,
    p_infected_and_recovered_comm2: 0.14,
    p_infected_and_recovered_comm3: 0.19,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.14,
    p_infected_comm3: 0.19,
    time: 3
  },
  {
    '': 4,
    p_infected: 0.16,
    p_infected_and_recovered: 0.16,
    p_infected_and_recovered_comm1: 0.11,
    p_infected_and_recovered_comm2: 0.17,
    p_infected_and_recovered_comm3: 0.2,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0.17,
    p_infected_comm3: 0.2,
    time: 4
  },
  {
    '': 5,
    p_infected: 0.17,
    p_infected_and_recovered: 0.17,
    p_infected_and_recovered_comm1: 0.13,
    p_infected_and_recovered_comm2: 0.18,
    p_infected_and_recovered_comm3: 0.2,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.18,
    p_infected_comm3: 0.2,
    time: 5
  },
  {
    '': 6,
    p_infected: 0.18333333333333332,
    p_infected_and_recovered: 0.18333333333333332,
    p_infected_and_recovered_comm1: 0.15,
    p_infected_and_recovered_comm2: 0.18,
    p_infected_and_recovered_comm3: 0.22,
    p_infected_comm1: 0.15,
    p_infected_comm2: 0.18,
    p_infected_comm3: 0.22,
    time: 6
  },
  {
    '': 7,
    p_infected: 0.19,
    p_infected_and_recovered: 0.19,
    p_infected_and_recovered_comm1: 0.15,
    p_infected_and_recovered_comm2: 0.2,
    p_infected_and_recovered_comm3: 0.22,
    p_infected_comm1: 0.15,
    p_infected_comm2: 0.2,
    p_infected_comm3: 0.22,
    time: 7
  },
  {
    '': 8,
    p_infected: 0.11,
    p_infected_and_recovered: 0.21000000000000002,
    p_infected_and_recovered_comm1: 0.2,
    p_infected_and_recovered_comm2: 0.2,
    p_infected_and_recovered_comm3: 0.23,
    p_infected_comm1: 0.17,
    p_infected_comm2: 0.09,
    p_infected_comm3: 0.07,
    time: 8
  },
  {
    '': 9,
    p_infected: 0.11666666666666667,
    p_infected_and_recovered: 0.22333333333333333,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22,
    p_infected_and_recovered_comm3: 0.22999999999999998,
    p_infected_comm1: 0.19,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.05,
    time: 9
  },
  {
    '': 10,
    p_infected: 0.09666666666666666,
    p_infected_and_recovered: 0.22666666666666668,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22,
    p_infected_and_recovered_comm3: 0.24,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.1,
    p_infected_comm3: 0.06,
    time: 10
  },
  {
    '': 11,
    p_infected: 0.08666666666666667,
    p_infected_and_recovered: 0.22666666666666668,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22000000000000003,
    p_infected_and_recovered_comm3: 0.24,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.08,
    p_infected_comm3: 0.05,
    time: 11
  },
  {
    '': 12,
    p_infected: 0.08333333333333333,
    p_infected_and_recovered: 0.24333333333333335,
    p_infected_and_recovered_comm1: 0.24,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.06,
    p_infected_comm3: 0.06,
    time: 12
  },
  {
    '': 13,
    p_infected: 0.07666666666666666,
    p_infected_and_recovered: 0.24666666666666667,
    p_infected_and_recovered_comm1: 0.25,
    p_infected_and_recovered_comm2: 0.22999999999999998,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.05,
    p_infected_comm3: 0.06,
    time: 13
  },
  {
    '': 14,
    p_infected: 0.07,
    p_infected_and_recovered: 0.2533333333333333,
    p_infected_and_recovered_comm1: 0.27,
    p_infected_and_recovered_comm2: 0.22999999999999998,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.05,
    p_infected_comm3: 0.04,
    time: 14
  },
  {
    '': 15,
    p_infected: 0.07,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.14,
    p_infected_comm2: 0.03,
    p_infected_comm3: 0.04,
    time: 15
  },
  {
    '': 16,
    p_infected: 0.05,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.03,
    p_infected_comm3: 0.03,
    time: 16
  },
  {
    '': 17,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.07,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.03,
    time: 17
  },
  {
    '': 18,
    p_infected: 0.04,
    p_infected_and_recovered: 0.26666666666666666,
    p_infected_and_recovered_comm1: 0.31,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.02,
    time: 18
  },
  {
    '': 19,
    p_infected: 0.05,
    p_infected_and_recovered: 0.27666666666666667,
    p_infected_and_recovered_comm1: 0.33999999999999997,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.02,
    time: 19
  },
  {
    '': 20,
    p_infected: 0.04,
    p_infected_and_recovered: 0.2833333333333333,
    p_infected_and_recovered_comm1: 0.35,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 20
  },
  {
    '': 21,
    p_infected: 0.04,
    p_infected_and_recovered: 0.2866666666666667,
    p_infected_and_recovered_comm1: 0.36,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 21
  },
  {
    '': 22,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.29000000000000004,
    p_infected_and_recovered_comm1: 0.37,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.1,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 22
  },
  {
    '': 23,
    p_infected: 0.03333333333333333,
    p_infected_and_recovered: 0.29333333333333333,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 23
  },
  {
    '': 24,
    p_infected: 0.03333333333333333,
    p_infected_and_recovered: 0.29333333333333333,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 24
  },
  {
    '': 25,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 25
  },
  {
    '': 26,
    p_infected: 0.03,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.07,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 26
  },
  {
    '': 27,
    p_infected: 0.02,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.04,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 27
  },
  {
    '': 28,
    p_infected: 0.013333333333333334,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 28
  },
  {
    '': 29,
    p_infected: 0.01,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.02,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 29
  },
  {
    '': 30,
    p_infected: 0.006666666666666667,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.01,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 30
  },
  {
    '': 31,
    p_infected: 0.0033333333333333335,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 31
  },
  {
    '': 32,
    p_infected: 0.0033333333333333335,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 32
  },
  {
    '': 33,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 33
  },
  {
    '': 34,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 34
  },
  {
    '': 35,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 35
  },
  {
    '': 36,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 36
  },
  {
    '': 37,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 37
  },
  {
    '': 38,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 38
  },
  {
    '': 39,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 39
  },
  {
    '': 40,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 40
  },
  {
    '': 41,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 41
  },
  {
    '': 42,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 42
  },
  {
    '': 43,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 43
  },
  {
    '': 44,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 44
  },
  {
    '': 45,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 45
  },
  {
    '': 46,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 46
  },
  {
    '': 47,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 47
  },
  {
    '': 48,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 48
  },
  {
    '': 49,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 49
  },
  {
    '': 50,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 50
  },
  {
    '': 51,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 51
  },
  {
    '': 52,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 52
  },
  {
    '': 53,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 53
  },
  {
    '': 54,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 54
  },
  {
    '': 55,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 55
  },
  {
    '': 56,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 56
  },
  {
    '': 57,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 57
  },
  {
    '': 58,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 58
  },
  {
    '': 59,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 59
  },
  {
    '': 60,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 60
  },
  {
    '': 61,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 61
  },
  {
    '': 62,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 62
  },
  {
    '': 63,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 63
  },
  {
    '': 64,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 64
  },
  {
    '': 65,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 65
  },
  {
    '': 66,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 66
  },
  {
    '': 67,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 67
  },
  {
    '': 68,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 68
  },
  {
    '': 69,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 69
  },
  {
    '': 70,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 70
  },
  {
    '': 71,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 71
  },
  {
    '': 72,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 72
  },
  {
    '': 73,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 73
  },
  {
    '': 74,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 74
  },
  {
    '': 75,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 75
  },
  {
    '': 76,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 76
  },
  {
    '': 77,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 77
  },
  {
    '': 78,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 78
  },
  {
    '': 79,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 79
  },
  {
    '': 80,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 80
  },
  {
    '': 81,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 81
  },
  {
    '': 82,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 82
  },
  {
    '': 83,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 83
  },
  {
    '': 84,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 84
  },
  {
    '': 85,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 85
  },
  {
    '': 86,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 86
  },
  {
    '': 87,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 87
  },
  {
    '': 88,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 88
  },
  {
    '': 89,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 89
  },
  {
    '': 90,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 90
  },
  {
    '': 91,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 91
  },
  {
    '': 92,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 92
  },
  {
    '': 93,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 93
  },
  {
    '': 94,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 94
  },
  {
    '': 95,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 95
  },
  {
    '': 96,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 96
  },
  {
    '': 97,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 97
  },
  {
    '': 98,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 98
  },
  {
    '': 99,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 9
  }
]
//

// export const dataSource: Array<{ key: string; values: Array<{ date: number; value: number }> }> = [
//   {
//     key: 'p_infected',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm1',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm1'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm2',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm2'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm3',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm3'] }
//     })
//   },
//   {
//     key: 'p_infected_comm1',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm1'] }
//     })
//   },
//   {
//     key: 'p_infected_comm2',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm2'] }
//     })
//   },
//   {
//     key: 'p_infected_comm3',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm3'] }
//     })
//   }
// ]
