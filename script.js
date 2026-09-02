const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("patientName").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const department =
        document.getElementById("department").value;

    const doctor =
        document.getElementById("doctor").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const message =
        document.getElementById("message");


    if (
        name === "" ||
        mobile === "" ||
        department === "" ||
        doctor === ""
        date === "" ||
        time === ""
    ) {

        message.className =
            "alert alert-danger mt-3";

        message.innerHTML =
            "Please fill all required fields.";

   return;
    }


    if (mobile.length < 10) {

        message.className =
            "alert alert-danger mt-3";

        message.innerHTML =
            "Please enter a valid mobile number.";

        return;
    }


    message.className =
        "alert alert-success mt-3";

    message.innerHTML =
        "Appointment request submitted successfully!";


    appointmentForm.reset();

});