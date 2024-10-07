export const data: Device[] = [
    {
      id: "1",
      name: "Asus Rogstrix",
      serial_no: "123456789",
      brand: "Asus",
      issued_to: "Joseph Igbaji",
      issued_date: "June, 2023",
      date_purchased: "April 12, 2023",
    },
    {
      id: "2",
      name: "Asus Rogstrix",
      serial_no: "1x2x7893",
      brand: "Asus",
      issued_to: "Tomide Komolafe",
      issued_date: "June, 2023",
      date_purchased: "April 12, 2023",
    },
    {
      id: "3",
      name: "Asus Rogstrix",
      serial_no: "1xG456789",
      brand: "Asus",
      issued_to: "Stephen Makinde",
      issued_date: "June, 2023",
      date_purchased: "April 12, 2023",
    },
    {
      id: "4",
      name: "Asus Rogstrix",
      serial_no: "F36XI6789",
      brand: "Asus",
      issued_to: "Shola Mohiro",
      issued_date: "June, 2023",
      date_purchased: "April 12, 2023",
    },
    {
      id: "5",
      name: "Asus Rogstrix",
      serial_no: "X#6790789",
      brand: "Asus",
      issued_to: "Melvin Blinks",
      issued_date: "August, 2024",
      date_purchased: "April 12, 2023",
    },
    {
      id: "6",
      name: "Lenovo ThinkPad",
      serial_no: "1234XXFE",
      brand: "Lenovo",
      issued_to: "Adamu Abuama",
      issued_date: "August, 2024",
      date_purchased: "July 17, 2024",
    },
  ];
  
  export type Device = {
    id: string;
    name: string;
    serial_no: string;
    brand: string;
    issued_to: string;
    issued_date: string;
    date_purchased: string;
  };