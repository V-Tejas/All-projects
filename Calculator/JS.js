let Displayscreen = document.getElementById("Output-screen");

        function display(num) {
            Displayscreen.value += num;
        }

        function Calculate() {
            try {
                Displayscreen.value = eval(Displayscreen.value);
            }
            catch (err) {
                alert(" Invalid ")
            }
        }

        function Clear() {
            Displayscreen.value = "";
        }

        function del() {
            Displayscreen.value = Displayscreen.value.slice(0, -1);
        }

