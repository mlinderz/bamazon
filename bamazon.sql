CREATE DATABASE bamazon;

/* this is how i connect to a database*/
USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price DECIMAL(10,2),
    stock_quantity INT(10),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('headband','accessories', 3.99, 20),
('baseball hat','accessories', 7.50, 15),
('notebook','stationary', 5.99, 50),
('sweatshirt','apparel', 20.00, 10),
('sweater','apparel', 19.99, 17),
('picture frame','stationary', 4.99, 40),
('cat bed','pet', 35.00, 7),
('cat tower','pet', 75.00, 40),
('dog bowl','pet', 3.99, 10),
('blanket','home furnishings', 15.50, 15);