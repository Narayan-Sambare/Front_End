        function loadBtn() {
            let btns = [
                ['1', '2', '3', '+'],
                ['4', '5', '6', '-'],
                ['7', '8', '9', '*'],
                ['0', '.', '=', '/']
            ];
            let firstValue, secondValue, result;
            let choice = 0;
            let btnPanel = document.getElementById("btnPanel");
            let table = document.getElementById("tbl");
            for (let i = 0; i < btns.length; i++) //row
            {
                let row = document.createElement("tr");
                for (let j = 0; j < btns[i].length; j++) //col
                {
                    let col = document.createElement("td");
                    let btn = document.createElement("input"); //<input  />
                    btn.setAttribute("type", "button"); //<input type="button"  />
                    btn.setAttribute("value", "" + btns[i][j]); //<input type="button" value="btn[i][j]"  />
                    btn.style.width = "100px";
                    btn.style.height = "60px";

                    btn.addEventListener("click", function () {
                        let textBox = document.getElementById("txt");
                        let prevValue = textBox.value;
                        if (btn.value == '+') {
                            let prevValue = textBox.value;
                            firstValue = prevValue;
                            textBox.value = "";
                            choice = 1;
                        }
                        else if (btn.value == '-') {
                            let prevValue = textBox.value;
                            firstValue = prevValue;
                            textBox.value = "";
                            choice = 2;
                        }
                        else if (btn.value == '*') {
                            let prevValue = textBox.value;
                            firstValue = prevValue;
                            textBox.value = "";
                            choice = 3;
                        }
                        else if (btn.value == "=") {
                            secondValue = textBox.value;
                            switch (choice) {
                                case 1:
                                    result = parseInt(firstValue) + parseInt(secondValue);
                                    textBox.value = "" + result;
                                    break;
                                case 2:
                                    result = parseInt(firstValue) - parseInt(secondValue);
                                    textBox.value = "" + result;
                                    break;
                                case 3:
                                    result = parseInt(firstValue) * parseInt(secondValue);
                                    textBox.value = "" + result;
                                    break;
                                default:
                                    alert("Wrong choice");
                            }
                        }
                        else {
                            textBox.value = prevValue + "" + btns[i][j];
                        }


                    });
                    col.appendChild(btn);
                    row.append(col);
                }
                table.appendChild(row);
            }
            btnPanel.appendChild(table);
        }
