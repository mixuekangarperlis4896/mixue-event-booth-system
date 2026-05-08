const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzVXhh1jizUE_t-EmmAKG7UHYi6cAIi2-pmpawmnaHJKGjatutYsIl5L5RN7xjKHTCw/exec";

const MPOC = {
  products: [
    "Lemonade","Lemon Jasmine Tea","Lemon Black Tea","Kiwi Jasmine Tea","Fresh Orange",
    "Strawberry Bobo","Strawberry Peach","Peach Jasmine Tea","Milk Tea L","Milk Tea M",
    "Taro Grape","Toffee Hazelnut Latte","Ice Cream Toffee Hazelnut Latte","Kiwi Creamy Drink",
    "Brown Sugar Latte","Strawberry Creamy Drink","Mango Brulee","Toffee Lava Brulee",
    "Original Sundae","Taro Sundae","Taro Ice Cream Cone"
  ],

  outlets: [
    "Mixue Kangar Perlis",
    "Mixue Kuala Perlis",
    "Mixue Taman Putra Utama"
  ],

  booths: [
    "UniMAP Unicity Padang Besar",
    "UniMAP Wang Ulu",
    "UniMAP PF 1",
    "Politeknik Pauh",
    "UiTM Arau",
    "Other Location"
  ],

  boxTypes: [
    "L Cup Box",
    "M Cup Box",
    "U Cup Sundae Box",
    "Mixed Box",
    "Accessories Box"
  ],

  staffMaster: [
    {StaffID:"STF001",Name:"AINAA NABIHAH",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF002",Name:"ALISSA TARMIZI",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF003",Name:"AMIRAH ATHIRAH",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF004",Name:"IZZATI AINUN",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF005",Name:"MAS AZWEEN",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF006",Name:"MR. LOH",Outlet:"Mixue Kangar Perlis",FixedRole:"Boss",TodayRole:"Boss",PIN:"1234",Status:"Active"},
    {StaffID:"STF007",Name:"MR. YAP",Outlet:"Mixue Taman Putra Utama",FixedRole:"SystemController",TodayRole:"SystemController",PIN:"970902",Status:"Active"},
    {StaffID:"STF008",Name:"MS. YAN",Outlet:"Mixue Kuala Perlis",FixedRole:"Admin",TodayRole:"Admin",PIN:"888888",Status:"Active"},
    {StaffID:"STF009",Name:"MS. YI XUAN",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF010",Name:"NUR AYUNI IRWANNI",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF011",Name:"NUR NAFISHAH",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF012",Name:"NUR SYABILA",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF013",Name:"NUR SYAMSINA",Outlet:"Mixue Kangar Perlis",FixedRole:"PartimerStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF014",Name:"NURSYAFINAS",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF015",Name:"NURUL AIN",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF016",Name:"NURUL ANIS",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF017",Name:"PUTERI SYAFIQAH",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF018",Name:"UMAIRAH",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF019",Name:"ZULAIQA",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF020",Name:"ANISYA ALIA",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF021",Name:"FATIN HUSNA",Outlet:"Mixue Kuala Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF022",Name:"AFIQAH BATRISHA",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF023",Name:"AFRINA",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF024",Name:"FAIZATUL",Outlet:"Mixue Taman Putra Utama",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF025",Name:"MIMI",Outlet:"Mixue Kuala Perlis",FixedRole:"PartimerStaff",TodayRole:"",PIN:"1234",Status:"Active"},
    {StaffID:"STF026",Name:"NUR FARISYA",Outlet:"Mixue Kangar Perlis",FixedRole:"OutletStaff",TodayRole:"",PIN:"1234",Status:"Active"}
  ]
};
