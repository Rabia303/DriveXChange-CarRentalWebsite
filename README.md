
# 🚗 DriveXChange - Car Rental Website

DriveXChange is a dynamic car rental platform, crafted with PHP and MySQL, offering users a streamlined experience to browse, book, and manage car rentals. It also features a powerful admin panel for managing users, vehicles, and bookings.

## 🌟 Features

### For Users
- **Browse Cars**: Explore a range of available cars with details on models, pricing, and availability.
- **Book Rentals**: Easily select and book cars, with a personal booking history for quick reference.
- **Profile Settings**: Users can personalize their experience by updating profile information.

### For Admins
- **Dashboard**: Quick stats on bookings, user activity, and car availability.
- **Manage Cars**: Add, update, or remove vehicles in the rental fleet.
- **Booking Management**: Oversee and modify active bookings.
- **User Management**: View and control user accounts with ease.

## 🛠 Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: PHP
- **Database**: MySQL

## 🚀 Getting Started

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Rabia303/DriveXChange-CarRentalWebsite.git
   ```

2. **Database Setup**:
   - Create a new MySQL database called `car_rental`.
   - Import `car_rental.sql` from the project folder to initialize the tables.

3. **Database Configuration**:
   - Open `config.php` and set your database credentials:
     ```php
     define('DB_SERVER', 'localhost');
     define('DB_USERNAME', 'your_username');
     define('DB_PASSWORD', 'your_password');
     define('DB_DATABASE', 'car_rental');
     ```

4. **Run the Website Locally**:
   - Move the project folder into your server’s `htdocs` (if using XAMPP).


## 📂 Project Structure

```plaintext
DriveXChange-CarRentalWebsite/
├── admin panel/         # Admin functionalities
├── user panel/          # User functionalities (booking, browsing)
├── assets/              # CSS, JS, images
├── car_rental.sql       # Database file
└── config.php           # Database connection file
```

## 📸 Screenshots

**User Panel Dashboard**
![car1](https://github.com/user-attachments/assets/2033c1e1-3fcb-4d44-a98c-e4e56919b03a)
![car2](https://github.com/user-attachments/assets/8befdc77-e983-4254-ab83-12bb8df70827)

## 🚧 Future Improvements
- **Search & Filter**: Allow users to search cars by model, type, and availability.
- **Reviews**: Users can rate and review vehicles.
- **Enhanced UI**: Consider modernizing the design for a fresher look.
