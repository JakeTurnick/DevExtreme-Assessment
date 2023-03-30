(() => {
	"use strict";
	var contacts = [];
	var contactStorage = localStorage.getItem("contacts")
		? localStorage.getItem("contacts")
		: [];
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				event.preventDefault();

				const data = event.target;
				console.log({ data });

				let newContact = {};
				for (let i = 0; i <= 6; i++) {
					console.log(data[i].id, data[i].value);
					newContact[data[i].id] = data[i].value;
				}
				contactStorage.push(newContact);
				localStorage.setItem("contacts", contactStorage);
				contacts.push(newContact);
				// console.log({ newContact });
				console.log({ contacts });

				form.classList.add("was-validated");
			},
			false
		);
	});

	// const contacts = [
	// 	{ name: "jake", phone: "123" },
	// 	{ name: "jim", phone: "456" },
	// 	{ name: "bob" },
	// 	{ name: "matt", phone: "789" },
	// ];

	$(function () {
		$("#dataGrid").dxDataGrid({
			dataSource: contactStorage,
			// keyExpr: "name",
			columns: [
				{
					dataField: "name",
				},
				{
					dataField: "phone",
				},
				{
					dataField: "email",
				},
				{
					dataField: "address",
				},
			],
		});
	});
})();
