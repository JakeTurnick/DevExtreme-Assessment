(() => {
	"use strict";
	var contactStorage = localStorage.getItem("contacts")
		? JSON.parse(localStorage.getItem("contacts"))
		: [];
	console.log({ contactStorage });
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
				// event.preventDefault();

				const data = event.target;
				console.log({ data });

				let newContact = {};
				for (let i = 0; i <= 6; i++) {
					// console.log(data[i].id, data[i].value);
					newContact[data[i].id] = data[i].value;
				}
				contactStorage.push(newContact);
				localStorage.setItem("contacts", JSON.stringify(contactStorage));
				// console.log({ newContact });
				// console.log({ contactStorage });

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
			columnMinWidth: 75,
			columns: [
				{
					dataField: "name",
					minWidth: 100,
				},
				{
					dataField: "phone",
					minWidth: 100,
				},
				{
					dataField: "email",
					minWidth: 150,
				},
				{
					dataField: "address",
					minWidth: 150,
				},
				{
					dataField: "state",
					width: 75,
				},
				// {
				// 	dataField: "zip",
				// 	width: 75,
				// },
				{
					dataField: "notes",
					minWidth: 200,
				},
			],
			summary: {
				totalItems: [
					{
						column: "name",
						summaryType: "count",
						displayFormat: `Contacts: {0}`,
					},
				],
			},
		});
		var dataGrid = $("#dataGrid")
			.dxDataGrid({
				editing: {
					mode: "row",
					allowDeleting: true,
					confirmDelete: false,
				},
			})
			.dxDataGrid("instance");

		$("#deleteRowButton").dxButton({
			text: "Delete Row",
			onClick: function () {
				// Deletes the second row
				dataGrid.deleteRow(1);
			},
		});
	});
})();
