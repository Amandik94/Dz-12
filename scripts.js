let currentShape = null;

        function selectShape(shape) {
            const container = document.getElementById("shapeContainer");
            container.innerHTML = "";

            const newShape = document.createElement("div");
            newShape.classList.add("shape");

            if (shape === "circle") {
                newShape.style.width = "150px";
                newShape.style.height = "150px";
                newShape.style.borderRadius = "50%";
            } else if (shape === "square") {
                newShape.style.width = "150px";
                newShape.style.height = "150px";
            }

            newShape.style.backgroundColor = "#ccc";
            container.appendChild(newShape);
            currentShape = newShape;
        }

        function changeColor(color) {
            if (currentShape) {
                currentShape.style.backgroundColor = color;
            } else {
                alert("Сначала выберите фигуру!");
            }
        }

        function addText() {
            const text = document.getElementById("textInput").value;
            if (currentShape) {
                if (text.trim() !== "") {
                    currentShape.textContent = text;
                } else {
                    alert("Введите текст!");
                }
            } else {
                alert("Сначала выберите фигуру!");
            }
        }

        function clearShape() {
            const container = document.getElementById("shapeContainer");
            container.innerHTML = "";
        }