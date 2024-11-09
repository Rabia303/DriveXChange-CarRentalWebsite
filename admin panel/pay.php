<!DOCTYPE html>
<html>
<head>
    <title>Admin Payment Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container mt-5">
    <h2>Payments</h2>

    <!-- Search and Filter Section -->
    <div class="row mb-4">
        <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Search by User">
        </div>
        <div class="col-md-4">
            <input type="date" class="form-control" placeholder="From Date">
        </div>
        <div class="col-md-4">
            <input type="date" class="form-control" placeholder="To Date">
        </div>
    </div>

    <!-- Payments Table -->
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Payment ID</th>
            <th>User Name</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <!-- Example row, in real scenario, rows will be generated dynamically from the backend -->
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>$100</td>
            <td>Credit Card</td>
            <td>2024-06-07</td>
            <td>Completed</td>
            <td>
                <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#paymentDetailModal">View</button>
                <button class="btn btn-warning btn-sm">Refund</button>
            </td>
        </tr>
        <!-- Repeat for more rows -->
        </tbody>
    </table>

    <!-- Export Payments Button -->
    <button class="btn btn-primary mb-4">Export Payments</button>

    <!-- Payment Detail Modal -->
    <div class="modal fade" id="paymentDetailModal" tabindex="-1" role="dialog" aria-labelledby="paymentDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="paymentDetailModalLabel">Payment Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Payment details go here, fetched dynamically from the backend -->
                    <p><strong>Payment ID:</strong> 1</p>
                    <p><strong>User Name:</strong> John Doe</p>
                    <p><strong>Amount:</strong> $100</p>
                    <p><strong>Payment Method:</strong> Credit Card</p>
                    <p><strong>Date:</strong> 2024-06-07</p>
                    <p><strong>Status:</strong> Completed</p>
                    <p><strong>Car Rented:</strong> Toyota Camry</p>
                    <p><strong>Rental Period:</strong> 2024-06-01 to 2024-06-07</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

</div>
</body>
</html>
