const fs = require('fs');
const path = require('path');

// Define HTML content with the table and script
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        #dataTable {
            display: none;
            margin-top: 20px;
        }
        button {
            padding: 10px 15px;
            margin: 5px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056b3;
        }
        input {
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Data Entry Form</h1>
    <form id="dataForm">
        <table>
            <tr>
                <td>Amount:</td>
                <td><input type="text" id="amount"></td>
            </tr>
            <tr>
                <td>Category:</td>
                <td><input type="text" id="category"></td>
            </tr>
            <tr>
                <td>Description:</td>
                <td><input type="text" id="description"></td>
            </tr>
        </table>
        <button type="button" onclick="addRow()">Add Row</button>
    </form>
    <button onclick="toggleTable()">Show/Hide Table</button>
    <button onclick="saveAsCSV()">Save as CSV</button>
    <button onclick="sendMail()">Send Email</button>

    <table id="dataTable">
        <thead>
            <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>

    <script>
        // Function to add a row to the table
        function addRow() {
            const amount = document.getElementById('amount').value;
            const category = document.getElementById('category').value;
            const description = document.getElementById('description').value;

            if (!amount || !category || !description) {
                alert('Please fill in all fields');
                return;
            }

            const tableBody = document.getElementById('tableBody');
            const newRow = tableBody.insertRow();

            const amountCell = newRow.insertCell(0);
            const categoryCell = newRow.insertCell(1);
            const descriptionCell = newRow.insertCell(2);

            amountCell.textContent = amount;
            categoryCell.textContent = category;
            descriptionCell.textContent = description;

            // Clear the input fields
            document.getElementById('amount').value = '';
            document.getElementById('category').value = '';
            document.getElementById('description').value = '';
        }

        // Function to show or hide the table
        function toggleTable() {
            const dataTable = document.getElementById('dataTable');
            if (dataTable.style.display === 'none') {
                dataTable.style.display = 'table';
            } else {
                dataTable.style.display = 'none';
            }
        }

        // Function to save the table data as a CSV file
        function saveAsCSV() {
            const table = document.getElementById('dataTable');
            let csvContent = 'data:text/csv;charset=utf-8,';
            
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td, th');
                const rowArray = Array.from(cells).map(cell => \`"\${cell.textContent.replace(/"/g, '""')}"\`);
                csvContent += rowArray.join(',') + '\\n';
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'data.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Function to simulate sending an email
        function sendMail() {
            const subject = encodeURIComponent('Table Data');
            const body = encodeURIComponent(getTableDataAsString());
            const mailtoLink = \`mailto:?subject=\${subject}&body=\${body}\`;

            window.location.href = mailtoLink;
        }

        // Function to get table data as a string for the email body
        function getTableDataAsString() {
            const table = document.getElementById('dataTable');
            let tableData = '';

            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td, th');
                const rowArray = Array.from(cells).map(cell => cell.textContent);
                tableData += rowArray.join(' | ') + '\\n';
            });

            return tableData;
        }
    </script>
</body>
</html>
`;

// Function to create the HTML file
function createHtmlFile() {
    const filePath = path.join(__dirname, 'index.html');

    fs.writeFile(filePath, htmlContent, (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
        } else {
            console.log('HTML file created successfully:', filePath);
        }
    });
}

// Simulate table data for CSV generation
const csvData = [
    ['Amount', 'Category', 'Description'],
    ['100', 'Groceries', 'Weekly grocery shopping'],
    ['50', 'Utilities', 'Electricity bill'],
    ['200', 'Rent', 'Monthly rent']
];

// Function to create the CSV file with table data
function createCsvFile() {
    const filePath = path.join(__dirname, 'data.csv');
    
    // Convert array to CSV string
    const csvContent = csvData.map(row => row.join(',')).join('\\n');

    fs.writeFile(filePath, csvContent, (err) => {
        if (err) {
            console.error('Error writing CSV file:', err);
        } else {
            console.log('CSV file created successfully:', filePath);
        }
    });
}

// Execute functions
createHtmlFile();
createCsvFile();
