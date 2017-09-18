var students = ["Алексей Петров", 0, "Ирина Овчинникова", 60, "Глеб Стукалов", 30, "Антон Павлович", 30, "Виктория Заровская", 30, "Алексей Левенец", 70, "Тимур Вамуш", 30, "Евгений Прочан", 60, "Александр Малов", 0 ];

var maxBall;
var maxIndex = -1;
var studentMaxBall;
var nullindex = 0;
var studentNull = [];
var studentsWithoutNull = [];

/*for (var i = 1, studentsLength = students.length; i < studentsLength; i += 2) {
	if (maxIndex < 0 || students[i] > maxBall) {
		maxIndex = i;
		maxBall = students[i];
		studentMaxBall = students[maxIndex-1];
	}
}*/

for (var i = 0, studentsLength = students.length; i < studentsLength; i++) {
	if ((maxIndex < 0 && typeof students[i]==="number")|| students[i] > maxBall ) {
		maxIndex = i;
		maxBall = students[i];
		studentMaxBall = students[maxIndex-1];
	}
}
console.log("Студент набравший максимальный балл:" + '\n'+ "Студент " + studentMaxBall + " имеет максимальный балл " + maxBall);

students.push("Николай Фролов", 0, "Олег Боровой", 0);

for (var i = 1, studentsLength = students.length; i < studentsLength; i += 2) {
	if (students[i] === 0) {
		nullindex = i;
		studentNull.push(nullindex-1);
	}
}

console.log("Студенты не набравшие баллов:" + "\n");
for (var i = 0; i < studentNull.length; i ++) {
	console.log(students[studentNull[i]]);
}

studentsWithoutNull = students.slice();

for (var i = 0; i < studentsWithoutNull.length; i++) {
		if (studentsWithoutNull[i]===0) {
			studentsWithoutNull.splice(i-1, 2);
			i -= 2;
		}

	}

for (var i = 0; i < studentsWithoutNull.length; i ++) {
	console.log(studentsWithoutNull[i]);
}