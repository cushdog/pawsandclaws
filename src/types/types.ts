export interface BusinessHours {
    day: string;        // e.g. "Monday", "Tuesday"
    open: string;       // e.g. "08:00"
    close: string;      // e.g. "17:00"
  }
  
  export interface NavbarProps {
    businessName: string;
    phoneNumber: string;
    address: string;
    hours: BusinessHours[];
  }
  