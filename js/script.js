function append(form) {
            if (form.letter.value) {
                var newItem = document.createElement("p");
                newItem.innerHTML = form.letter.value;
                newItem.classList.add("messages_personal-message_text");
                document.getElementById("messages").appendChild(newItem);
                form.letter.value="";
            }
        };