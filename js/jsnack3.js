

const nameList = ['antonio', 'pietro', 'francesco', 'roberto', 'vincenzo'];
const surnameList = ['renda', 'spinazzola','chiellini','bonucci', 'spinazzola']

for (i = 0; i < 3; i++){
    const nameNumber = Math.floor(Math.random() * 5);
    const surnameNumber = Math.floor(Math.random() * 5)
    const fullName = nameList[nameNumber] + '' + surnameList[surnameNumber];
    console.log(fullName);
}