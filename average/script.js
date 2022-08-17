function getS() {
            var score = document.getElementById("score").elements, arr = [];
            for(var i = 0; i < score.length; i++) {
                arr.push(score[i].value);
                var arrInt = arr.map(function(x) {
                    return parseInt(x, 10);
                });
            }
            
            return arrInt;
        }
        class students {
                constructor(name, grades = [], price = []) {
                    this.name = name;
                    this.grades = grades;
                    this.price = price;
                }

                average() {
                    if (this.grades.length !== 0) { 
                        var aver = this.grades.reduce((previous, current) => previous + current, 0) / this.grades.length
                        return aver;
                       
                    } else {
                        return "no grades";
                    }
                }

                income() {
                    var ine = this.price.sort();
                    if (this.average() >= 4.5) {
                        return ine[0];
                    }
                    else if (this.average() >= 4) {
                        return ine[1];
                    }
                    else if (this.average() >= 3.5) {
                        return ine[2];
                    }
                    else {
                        return ine[3];
                    }
                }
        }

        function inC(){
            var name = document.getElementById("name").value;
            var student = new students("John", getS(), [5000, 4000, 3000, 2000]);
            document.getElementById("printBlock").innerHTML = name + " Income: " + student.income() + "-" + getS();
        }