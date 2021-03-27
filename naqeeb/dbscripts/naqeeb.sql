use naqeeb;

create database naqeeb

Create Table Roles(Role_ID int Not Null AUTO_INCREMENT primary key,Role_Name Varchar(100) Not Null);

Create Table Users(User_ID int not null auto_increment primary key,
First_Name varchar(100) not null,
Last_Name varchar(100),
Address varchar(300) not null,
Approved varchar(5) not null Default 'No',
IsActive varchar(5) not null,
DOB varchar(50),
Pswrd varchar(1000) not Null,
salt varchar(300),
Email Varchar(50) ,
Contact_No varchar(10) unique,
verified varchar(50),
Gender varchar(10) not null,
Role_ID int not null ,foreign key (Role_ID) references Roles(Role_ID));


alter table users modify Contact_No varchar(50)


INSERT INTO `naqeeb`.`users` (`First_Name`, `Last_Name`, `Address`, `Approved`, `IsActive`, `DOB`, `Pswrd`, `salt`, `Email`, `Contact_No`, `verified`, `Gender`, `Role_ID`) VALUES ('Syed', 'Nauman Uddin', 'Hyderabad', 'no', 'yes', '29/12/1992', '$2a$10$PQKN7r8FKueuTkJb.FNyeuzRDiefzNkGRMvdxp.rLqWCNHjiZ8/mu', '$2a$10$PQKN7r8FKueuTkJb.FNyeu', 'syednaumanuddin@gmail.com', '+919700379894', 'no', 'Male', '1');




