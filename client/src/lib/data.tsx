export const depositHeadings = ['Sl.No', 'Amount', 'Date/Time', 'Transaction Ref'];

export const loanBorrowedHeadings = [
  'Sl.No',
  'Loan Amount',
  'Date/Time',
  'Interest %',
  'Amount Dues',
  'Status'
];

export const loanRepayedHeadings = [
  'Sl.No',
  'Loan Amount',
  'Paid Amount',
  'Date/Time',
  'Transaction Ref'
];

export const depositData = [
  {
    amount: 10000,
    date: '2024-01-01',
    time: '09:30:00',
    transaction_ref_id: 'TRID001234567'
  },
  {
    amount: 15000,
    date: '2024-01-02',
    time: '10:30:00',
    transaction_ref_id: 'TRID002345678'
  },
  {
    amount: 20000,
    date: '2024-01-03',
    time: '11:30:00',
    transaction_ref_id: 'TRID003456789'
  },
  {
    amount: 25000,
    date: '2024-01-04',
    time: '12:30:00',
    transaction_ref_id: 'TRID004567890'
  }
];
export const loanBorrowedData = [
  {
    loan_id: 'LID003',
    loan_amount: 10000,
    loan_start_date: '2024-01-10',
    interest_rate: 1.5, // Adjusted interest rate
    start_date: '2024-02-10',
    status: 'Paid',
    amount_dues: [
      {
        date: '2024-03-10',
        amount_due: 10150
      },
      {
        date: '2024-04-10',
        amount_due: 10300
      },
      {
        date: '2024-05-10',
        amount_due: 10450
      }
    ]
  },
  {
    loan_id: 'LID004',
    loan_amount: 12000,
    loan_start_date: '2024-01-20',
    interest_rate: 1.2, // Adjusted interest rate
    start_date: '2024-01-20',
    status: 'Due for payment',
    amount_dues: [
      {
        date: '2024-02-20',
        amount_due: 12160
      },
      {
        date: '2024-03-20',
        amount_due: 12320
      },
      {
        date: '2024-04-20',
        amount_due: 12480
      }
    ]
  },
];

export const loanRepayedData = [
  {
    loan_id: "LID001",
    loan_amount: 10000,
    paid_amount: 10450,
    transaction_ref: "TRID001234567",
    date: "2024-05-11",
    time: "09:30:00"
  },
  {
    loan_id: "LID002",
    loan_amount: 15000,
    paid_amount: 16050,
    transaction_ref: "TRID002345678",
    date: "2024-05-10",
    time: "14:15:00"
  },
  {
    loan_id: "LID003",
    loan_amount: 20000,
    paid_amount: 21200,
    transaction_ref: "TRID003456789",
    date: "2024-05-09",
    time: "11:00:00"
  }
]


export const committeesData = [
  {
      "committeeName": "Committee One",
      "startDate": "2024-05-12",
      "membersLimit": 8,
      "totalFund": "₹8000",
      "SIPAmount": "₹1000",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  },
  {
      "committeeName": "Committee Two",
      "startDate": "2024-05-12",
      "membersLimit": 15,
      "totalFund": "₹15000",
      "SIPAmount": "₹1000",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  },
  {
      "committeeName": "Committee Three",
      "startDate": "2024-05-12",
      "membersLimit": 10,
      "totalFund": "₹5000",
      "SIPAmount": "₹500",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  },
  {
      "committeeName": "Committee Four",
      "startDate": "2024-05-12",
      "membersLimit": 12,
      "totalFund": "₹12000",
      "SIPAmount": "₹1000",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  },
  {
      "committeeName": "Committee Five",
      "startDate": "2024-05-12",
      "membersLimit": 7,
      "totalFund": "₹3500",
      "SIPAmount": "₹500",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  },
  {
      "committeeName": "Committee Six",
      "startDate": "2024-05-12",
      "membersLimit": 20,
      "totalFund": "₹20000",
      "SIPAmount": "₹1000",
      "tenure": "12 months",
      "SIPPeriod": "Monthly"
  }
]
